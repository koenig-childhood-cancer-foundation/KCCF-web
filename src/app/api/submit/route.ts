import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'

const GAS_ENDPOINT = process.env.GAS_ENDPOINT || ''

// File upload configuration
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
const ALLOWED_DOCUMENT_TYPES = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png']

async function uploadToCloudStorage(file: File, formType: string): Promise<string> {
  try {
    // Create a unique filename
    const timestamp = Date.now()
    const randomId = Math.random().toString(36).substring(2, 15)
    const extension = file.name.split('.').pop()
    const filename = `${formType}_${timestamp}_${randomId}.${extension}`
    
    // Convert file to buffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    
         // For development: Save to local uploads directory
     // Temporarily force R2 for testing - change this back to 'development' when done
     if (process.env.NODE_ENV === 'development' && !process.env.FORCE_R2) {
       // Create uploads directory if it doesn't exist
       const uploadsDir = join(process.cwd(), 'public', 'uploads')
       await mkdir(uploadsDir, { recursive: true })
       
       // Save file locally
       const filePath = join(uploadsDir, filename)
       await writeFile(filePath, buffer)
       
       // Return full local URL for development
       const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
       const fileUrl = `${baseUrl}/uploads/${filename}`
       console.log(`File saved locally: ${filePath}`)
       console.log(`File accessible at: ${fileUrl}`)
       return fileUrl
     } else {
      // PRODUCTION: Upload to Cloudflare R2 using AWS SDK
      if (!process.env.CLOUDFLARE_R2_ACCOUNT_ID || !process.env.CLOUDFLARE_R2_ACCESS_KEY_ID || !process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY || !process.env.CLOUDFLARE_R2_BUCKET_NAME) {
        throw new Error('Cloudflare R2 environment variables not configured')
      }

      // Dynamic import for AWS SDK (only in production)
      const { S3Client, PutObjectCommand } = await import('@aws-sdk/client-s3')
      
      // Configure S3 client for Cloudflare R2
      const s3Client = new S3Client({
        region: 'auto', // Cloudflare R2 uses 'auto' region
        endpoint: `https://${process.env.CLOUDFLARE_R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
        credentials: {
          accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY_ID,
          secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_ACCESS_KEY,
        },
      })

             // Upload file to R2
       console.log(`Uploading to R2 bucket: ${process.env.CLOUDFLARE_R2_BUCKET_NAME}`)
       console.log(`File key: aid-applications/${filename}`)
       
       await s3Client.send(new PutObjectCommand({
         Bucket: process.env.CLOUDFLARE_R2_BUCKET_NAME,
         Key: `aid-applications/${filename}`,
         Body: buffer,
         ContentType: file.type,
         // Note: R2 doesn't support ACL, so we omit it
       }))
       
       console.log(`Successfully uploaded to R2: aid-applications/${filename}`)

             // Return the public URL
       let publicUrl: string
       
       if (process.env.CLOUDFLARE_R2_PUBLIC_URL) {
         // Use custom domain if configured
         publicUrl = `${process.env.CLOUDFLARE_R2_PUBLIC_URL}/aid-applications/${filename}`
       } else {
         // Use the standard R2 public URL format
         publicUrl = `https://pub-${process.env.CLOUDFLARE_R2_ACCOUNT_ID}.r2.dev/${process.env.CLOUDFLARE_R2_BUCKET_NAME}/aid-applications/${filename}`
       }
       
       console.log(`File uploaded to Cloudflare R2: ${filename}`)
       console.log(`Public URL: ${publicUrl}`)
       return publicUrl
    }
  } catch (error) {
    console.error('File upload failed:', error)
    throw new Error('File upload failed')
  }
}

export async function POST(request: Request) {
  try {
    const referer = request.headers.get('referer') || ''
    const url = new URL(referer || 'https://thekccf.org')
    const pagePath = url.pathname || '/'
    const isDebug = url.searchParams.get('debug') === '1'

    const contentType = request.headers.get('content-type') || ''

    let payload: Record<string, unknown> = {}

    if (contentType.includes('application/json')) {
      const json = await request.json()
      payload = { ...json }
    } else {
      const formData = await request.formData()
      
      // Handle file uploads separately
      const uploadedFiles: Record<string, string[]> = {
        childPhotos: [],
        bills: []
      }
      
      for (const [key, value] of formData.entries()) {
        if (value instanceof File) {
          console.log(`Processing file: ${value.name}, type: ${value.type}, size: ${value.size}`)
          
          // Validate file size
          if (value.size > MAX_FILE_SIZE) {
            throw new Error(`File ${value.name} is too large. Maximum size is 10MB.`)
          }
          
          // Validate file type based on field name and file extension
          const fileName = value.name.toLowerCase()
          const fileExtension = fileName.split('.').pop() || ''
          const mimeType = value.type || ''
          
          if (key === 'childPhotos') {
            const isValidImageType = ALLOWED_IMAGE_TYPES.includes(mimeType) || 
                                   ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(fileExtension)
            if (!isValidImageType) {
              throw new Error(`Invalid file type for ${value.name}. Only images (JPG, PNG, GIF, WebP) are allowed.`)
            }
          } else if (key === 'bills') {
            const isValidDocumentType = ALLOWED_DOCUMENT_TYPES.includes(mimeType) || 
                                      ['pdf', 'jpg', 'jpeg', 'png'].includes(fileExtension)
            if (!isValidDocumentType) {
              throw new Error(`Invalid file type for ${value.name}. Only PDF and images are allowed.`)
            }
          }
          
          // Upload file to cloud storage
          try {
            const fileUrl = await uploadToCloudStorage(value, 'aid_application')
            uploadedFiles[key].push(fileUrl)
          } catch (uploadError) {
            console.error(`Failed to upload ${value.name}:`, uploadError)
            throw new Error(`Failed to upload ${value.name}`)
          }
        } else {
          payload[key] = value
        }
      }
      
             // Add uploaded file URLs to payload as comma-separated strings
       if (uploadedFiles.childPhotos.length > 0) {
         payload.childPhotoUrls = uploadedFiles.childPhotos.join(', ')
         console.log('Child photo URLs being sent to Google Sheets:', uploadedFiles.childPhotos.join(', '))
       }
       if (uploadedFiles.bills.length > 0) {
         payload.billUrls = uploadedFiles.bills.join(', ')
         console.log('Bill URLs being sent to Google Sheets:', uploadedFiles.bills.join(', '))
       }
    }

    // Ensure we always include pagePath and formType
    if (!('pagePath' in payload)) {
      payload.pagePath = pagePath
    }
    if (!('formType' in payload)) {
      payload.formType = 'unknown'
    }

    const forward = await fetch(GAS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      // Avoid Next.js edge caching issues
      cache: 'no-store'
    })

    const responseText = await forward.text()
    let ok = forward.ok
    try {
      const parsed = JSON.parse(responseText)
      if (parsed && parsed.status) {
        ok = ok && parsed.status === 'success'
      }
    } catch (_) {
      // non-JSON body, keep ok as status-based
    }

    if (!ok) {
      console.error('GAS submit failed', { status: forward.status, body: responseText, payload })
    }

    if (isDebug) {
      return new Response(responseText || JSON.stringify({ ok }), {
        status: ok ? 200 : 502,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Determine base URL by environment
    const envBase = process.env.NEXT_PUBLIC_SITE_URL
      || (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : '')
      || 'http://localhost:3000'

    // Prefer provided pagePath in payload, then referer path, else root
    const targetPath = (typeof payload.pagePath === 'string' && payload.pagePath) || pagePath || '/'

    // Build redirect URL
    const redirectUrl = referer ? new URL(referer) : new URL(targetPath, envBase)
    redirectUrl.searchParams.set('submitted', ok ? '1' : '0')
    return NextResponse.redirect(redirectUrl.toString(), { status: 303 })
  } catch (error) {
    console.error('Form submission error:', error)
    
    const referer = request.headers.get('referer') || ''
    const envBase = process.env.NEXT_PUBLIC_SITE_URL
      || (process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : '')
      || 'http://localhost:3000'
    const redirectUrl = referer ? new URL(referer) : new URL('/', envBase)
    redirectUrl.searchParams.set('submitted', '0')
    redirectUrl.searchParams.set('error', error instanceof Error ? error.message : 'Unknown error')
    return NextResponse.redirect(redirectUrl.toString(), { status: 303 })
  }
}


