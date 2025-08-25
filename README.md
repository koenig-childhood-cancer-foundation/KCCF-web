## The Koenig Childhood Cancer Foundation (KCCF) Website

Production-ready Next.js site for the Koenig Childhood Cancer Foundation with modern features including dark mode, cookie consent management, and embedded donation forms.

### Tech stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI**: React 19, Tailwind CSS 4
- **Linting**: ESLint (Next.js config)
- **Runtime**: Node.js 20
- **Container**: Docker (standalone Next.js output)
- **Donations**: Zeffy integration (replaces Stripe)
- **Features**: Dark mode, cookie consent, responsive design

---

## Prerequisites
- Node.js 20.x and npm 10+ (Docker image also uses Node 20)
- Optional: Docker and Docker Compose for containerized runs
- Optional: Stripe account and keys if enabling donation flows

## Quick start (local)
```bash
npm install
npm run dev
```
Visit `http://localhost:3000`.

## Environment variables
Create a `.env.local` file in `thekccf.org/` for local development (do not commit this file):
```env
# Currently no environment variables required for basic functionality
# The site uses Zeffy for donations (no API keys needed)
# Cookie consent and theme preferences are stored locally
```
Notes:
- The site currently uses Zeffy for donations which doesn't require API keys
- Cookie consent and theme preferences are managed client-side
- If you add additional integrations later, add their environment variables here

## Project scripts
- `npm run dev`: Start the dev server with Turbopack
- `npm run build`: Production build
- `npm run start`: Start the production server (after build)
- `npm run lint`: Run ESLint

## Running with Docker
Build and run with Compose from the repo root:
```bash
docker-compose up -d --build
```
The app will be available at `http://localhost:3000`.

### Docker Environment Variables
Create a `.env` file in the root directory with your configuration:
```env
# Cloudflare R2 (required for file uploads)
CLOUDFLARE_R2_ACCOUNT_ID=your_account_id
CLOUDFLARE_R2_ACCESS_KEY_ID=your_access_key_id
CLOUDFLARE_R2_SECRET_ACCESS_KEY=your_secret_access_key
CLOUDFLARE_R2_BUCKET_NAME=kccf-file-uploads
CLOUDFLARE_R2_PUBLIC_URL=https://your-custom-domain.com

# Stripe (if using)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

Details:
- `thekccf.org/Dockerfile` produces a minimal runtime using Next.js standalone output.
- `docker-compose.yml` maps port 3000 and includes a healthcheck on `/api/health`.
- Environment variables are passed through Docker build args and runtime environment.
- Cloudflare R2 is required for file uploads in production.

## Deployment
You can deploy in two common ways:

1) Vercel (recommended)
- This is a standard Next.js app; import the repo into Vercel and set environment variables in the Vercel project settings.

2) Docker container
- Build the image from `thekccf.org/Dockerfile` and run it behind your reverse proxy (e.g., Nginx/Traefik). Set required env vars at runtime.

## Health check
There is a simple health endpoint at:
```
/api/health
```
Used by Docker Compose to verify app readiness.

## Project structure (high level)
```
thekccf.org/
  src/
    app/                 # App Router pages and API routes
      api/health/        # GET health check
      aid/               # Aid/Support page
      contact/           # Contact page
      crazy-socks/       # Crazy Socks campaign page
      donate/            # Donations page
      kccf-family/       # KCCF family page
      media/             # Media page
      newsletter-signup/ # Newsletter page
      our-story/         # About/KCCF story
      volunteer/         # Volunteer page
      page.tsx           # Home
      HomeContent.tsx    # Home page content
      layout.tsx         # Root layout with providers
      globals.css        # Global styles
      manifest.ts        # PWA manifest
      robots.ts          # SEO robots
      sitemap.ts         # SEO sitemap
      opengraph-image.tsx # Social media images
      not-found.tsx      # 404 page
    components/          # Reusable UI components
      DonationModal.tsx  # Embedded donation form modal
      ConsentPreferencesModal.tsx # Cookie preferences
      CookieConsentBanner.tsx # Cookie consent banner
      ThemeToggle.tsx    # Dark/light mode toggle
      Navigation.tsx     # Site navigation
      Footer.tsx         # Site footer
      PageHeader.tsx     # Page headers
      DonationButton.tsx # Donation CTA buttons
      SubmissionModal.tsx # Form submission modal
      LoadingSpinner.tsx # Loading indicators
    contexts/            # React contexts
      ThemeContext.tsx   # Dark/light theme management
      CookieConsentContext.tsx # Cookie consent state
      DonationModalContext.tsx # Donation modal state
      SlideshowContext.tsx # Image slideshow state
  public/                # Static assets (logos, images)
  next.config.js         # Next.js configuration (standalone output)
  Dockerfile             # Production container build (standalone)
  package.json           # Scripts and dependencies
```

## Editing content
- Home content: `src/app/HomeContent.tsx`
- Page content: edit respective `src/app/<route>/page.tsx` files
- Global styles: `src/app/globals.css`
- Navigation/Footer: `src/components/Navigation.tsx`, `src/components/Footer.tsx`
- Theme customization: `src/contexts/ThemeContext.tsx`
- Cookie consent: `src/contexts/CookieConsentContext.tsx`
- Donation modal: `src/components/DonationModal.tsx`

## Images and optimization
- Static files live in `public/`
- `next.config.js` allows images from the `thekccf.org` domain

## Donation integration
- The site uses Zeffy for donations via embedded iframe
- No API keys or server-side processing required
- Donation modal is controlled by `src/components/DonationModal.tsx`
- Cookie consent is required for donation form display
- Campaign-specific donation forms can be configured in the modal

## File upload configuration
The aid application form includes file uploads for child photos and medical bills. The current implementation uses Cloudflare R2 for production storage.

### Development
- Files are saved locally to `public/uploads/` directory
- Files are accessible via `/uploads/filename` URLs
- No additional configuration required

### Production deployment (Cloudflare R2)
The application is configured to use Cloudflare R2 for file storage in production:

1. **Install AWS SDK** (already included):
   ```bash
   npm install @aws-sdk/client-s3
   ```

2. **Set up Cloudflare R2**:
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to R2 Object Storage
   - Create a new bucket for file uploads
   - Create API tokens with R2 permissions

3. **Set environment variables**:
   ```env
   CLOUDFLARE_R2_ACCOUNT_ID=your_account_id
   CLOUDFLARE_R2_ACCESS_KEY_ID=your_access_key_id
   CLOUDFLARE_R2_SECRET_ACCESS_KEY=your_secret_access_key
   CLOUDFLARE_R2_BUCKET_NAME=your_bucket_name
   CLOUDFLARE_R2_PUBLIC_URL=https://your-custom-domain.com (optional)
   FORCE_R2=true/false
   GAS_ENDPOINT='https://googlescript'
   ```

4. **Optional: Set up custom domain** for public file access

### Alternative cloud storage options
- **AWS S3**: Modify the code to use AWS S3 instead of R2
- **Google Cloud Storage**: Use `@google-cloud/storage`
- **Azure Blob Storage**: Use `@azure/storage-blob`
- **Cloudinary**: Use `cloudinary` package
- **Vercel Blob**: Use `@vercel/blob` (if deploying on Vercel)

### File upload limits
- Maximum file size: 10MB per file
- Allowed image types: JPEG, JPG, PNG, GIF, WebP
- Allowed document types: PDF, JPEG, JPG, PNG
- Child photos: Minimum 6 photos required
- Bills: Up to 3 files allowed

## Troubleshooting
- Port already in use: stop the other service or change the port mapping in `docker-compose.yml`.
- ESLint warnings during build: `next.config.js` is set to allow builds to complete; use `npm run lint` locally to fix issues.
- Node version mismatch: ensure Node 20.x locally to match Docker.
- Dark mode not working: check `src/contexts/ThemeContext.tsx` and ensure theme toggle is properly connected.
- Cookie consent issues: verify `src/contexts/CookieConsentContext.tsx` is properly initialized in layout.
- Donation modal not loading: ensure marketing cookies are enabled in cookie preferences.

## Maintainers and handoff
- Primary owner: KCCF web team
- For deployment credentials/secrets, update your hosting provider’s environment settings (do not commit secrets).

## License
All rights reserved. Content and code are the property of Koenig Childhood Cancer Foundation unless otherwise noted.
