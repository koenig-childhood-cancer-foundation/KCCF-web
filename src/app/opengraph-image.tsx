import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Koenig Childhood Cancer Foundation - Life-saving support for children battling cancer'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  // Load the KCCF logo
  const logoData = await fetch(new URL('/android-chrome-512x512.png', 'http://localhost:3000')).then(
    (res) => res.arrayBuffer(),
  )
  
  // Array of all background images
  const backgroundImages = [
    "https://thekccf.org/wp-content/uploads/2025/04/MetaLeadershipMakingfitBags-scaled.jpg",
    "https://thekccf.org/wp-content/uploads/2025/04/bankofamerica-scaled.jpeg",
    "https://thekccf.org/wp-content/uploads/2025/04/AlfacGiftMakingEvent-scaled.jpeg",
    "https://thekccf.org/wp-content/uploads/2025/04/ElanaOliviaGiftBags-scaled.jpg",
    "https://thekccf.org/wp-content/uploads/2025/04/MetaCSGiftBagEvent-scaled.jpg",
    "https://thekccf.org/wp-content/uploads/2025/04/giftbagevent2-scaled.jpeg",
    "https://thekccf.org/wp-content/uploads/2025/05/IMG_6861-scaled.jpeg",
    "https://thekccf.org/wp-content/uploads/2025/05/IMG_6703-scaled.jpeg",
    "https://thekccf.org/wp-content/uploads/2025/05/IMG_5046-scaled.jpg",
    "https://thekccf.org/wp-content/uploads/2025/05/IMG_2841-scaled.jpg",
    "https://thekccf.org/wp-content/uploads/2025/05/IMG_1850-scaled.jpg",
    "https://thekccf.org/wp-content/uploads/2025/05/IMG_0875-scaled.jpeg"
  ]
  
    // Select a random background image
  const randomIndex = Math.floor(Math.random() * backgroundImages.length)
  const randomImageUrl = backgroundImages[randomIndex]
  
  // Randomly decide whether to show text (50% chance)
  const showText = Math.random() > 0.5
  
  // Load the random background image
  const backgroundImageData = await fetch(new URL(randomImageUrl)).then(
    (res) => res.arrayBuffer(),
  )

    return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Background image */}
        <img
          src={`data:image/jpeg;base64,${Buffer.from(backgroundImageData).toString('base64')}`}
          alt="Background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: showText ? 'blur(1px) brightness(0.4)' : 'blur(0) brightness(1.2)',
          }}
        />
        
        {/* Black overlay only on background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
          }}
        />
        
        {/* Content - only show if showText is true */}
        {showText && (
          <div style={{ 
            zIndex: 1, 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <img
              src={logoData as any}
              alt="KCCF Logo"
              style={{
                width: '120px',
                height: '120px',
                marginBottom: '30px',
              }}
            />
            
            <h1 style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              margin: '0 0 20px 0',
              lineHeight: 1.2,
            }}>
              Koenig Childhood Cancer Foundation
            </h1>
            
            <p style={{
              fontSize: '32px',
              color: 'white',
              margin: '0 0 30px 0',
              maxWidth: '900px',
              lineHeight: 1.3,
            }}>
              Life-saving support for children battling cancer
            </p>
            
            <p style={{
              fontSize: '24px',
              color: 'rgba(255,255,255,0.9)',
              margin: 0,
              maxWidth: '800px',
              lineHeight: 1.4,
            }}>
              Founded by 11-year-old cancer survivor Elana Koenig in 2020
            </p>
          </div>
        )}
        
        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #ff6900, #732154, #732154)',
          }}
        />
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
