## The Koenig Childhood Cancer Foundation (KCCF) Website

Production-ready Next.js site for the Koenig Childhood Cancer Foundation with modern features including dark mode, cookie consent management, donation modals, and comprehensive form modal system.

### Tech stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI**: React 19, Tailwind CSS 4
- **Linting**: ESLint (Next.js config)
- **Runtime**: Node.js 20
- **Container**: Docker (standalone Next.js output)
- **Donations**: Zeffy integration (replaces Stripe)
- **Forms**: Monday.com integration via modal system
- **Features**: Dark mode, cookie consent, responsive design, form modals, SEO optimization

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
      aid/               # Aid/Support page with layout
        layout.tsx       # Aid page metadata and layout
        page.tsx         # Aid application (simplified with modal button)
      camp/              # Camp page with layout
        layout.tsx       # Camp metadata (corporate team-building SEO)
        page.tsx         # Camp registration (modal buttons)
      contact/           # Contact page with layout
        layout.tsx       # Contact metadata (corporate partnerships SEO)
        page.tsx         # Contact form (modal button)
      crazy-socks/       # Crazy Socks campaign with layout
        layout.tsx       # Corporate CSR SEO optimization
        page.tsx         # Page wrapper
        CrazySocksContent.tsx # Main content with modal button
      donate/            # Donations page with layout
        layout.tsx       # Donate metadata (workplace giving SEO)
        page.tsx         # Donation page
      kccf-family/       # KCCF family page
      media/             # Media page with layout
        layout.tsx       # Media metadata
        page.tsx         # Media coverage
      newsletter-signup/ # Newsletter page with layout
        layout.tsx       # Newsletter metadata
        page.tsx         # Newsletter signup (modal button)
      our-story/         # About/KCCF story with layout
        layout.tsx       # Our story metadata
        page.tsx         # Story content (modal button)
      volunteer/         # Volunteer page with layout
        layout.tsx       # Volunteer metadata (corporate volunteering SEO)
        page.tsx         # Volunteer opportunities (modal button)
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
      FormModal.tsx      # Monday.com form modal system
      FormButton.tsx     # Form modal trigger buttons
      ConsentPreferencesModal.tsx # Cookie preferences
      CookieConsentBanner.tsx # Cookie consent banner
      ThemeToggle.tsx    # Dark/light mode toggle
      Navigation.tsx     # Site navigation
      Footer.tsx         # Site footer (with newsletter modal button)
      PageHeader.tsx     # Page headers
      DonationButton.tsx # Donation CTA buttons
      SubmissionModal.tsx # Form submission modal
      LoadingSpinner.tsx # Loading indicators
    contexts/            # React contexts
      ThemeContext.tsx   # Dark/light theme management
      CookieConsentContext.tsx # Cookie consent state
      DonationModalContext.tsx # Donation modal state
      FormModalContext.tsx # Form modal state and configurations
      SlideshowContext.tsx # Image slideshow state
  public/                # Static assets (logos, images)
  next.config.js         # Next.js configuration (standalone output)
  Dockerfile             # Production container build (standalone)
  package.json           # Scripts and dependencies
```

## Editing content
- Home content: `src/app/HomeContent.tsx`
- Page content: edit respective `src/app/<route>/page.tsx` files
- Page metadata/SEO: edit respective `src/app/<route>/layout.tsx` files
- Global styles: `src/app/globals.css`
- Navigation/Footer: `src/components/Navigation.tsx`, `src/components/Footer.tsx`
- Theme customization: `src/contexts/ThemeContext.tsx`
- Cookie consent: `src/contexts/CookieConsentContext.tsx`
- Donation modal: `src/components/DonationModal.tsx`
- Form modals: `src/components/FormModal.tsx` and `src/contexts/FormModalContext.tsx`

## Images and optimization
- Static files live in `public/`
- `next.config.js` allows images from the `thekccf.org` domain

## Form integration

### Donation system
- The site uses Zeffy for donations via embedded iframe
- No API keys or server-side processing required
- Donation modal is controlled by `src/components/DonationModal.tsx`
- Cookie consent is required for donation form display
- Campaign-specific donation forms can be configured in the modal

### Form modal system
- All Monday.com forms are integrated via a unified modal system
- Form configurations are managed in `src/contexts/FormModalContext.tsx`
- Forms include: camp registration, volunteer applications, contact forms, newsletter signup, aid applications, and corporate sponsorship
- Modal system provides consistent UX across all forms
- Cookie consent is required for form display
- Forms open in responsive modals (85% screen height) with proper scrolling

### Adding new forms
To add a new Monday.com form to the modal system:

1. **Add form type** to `FormType` union in `src/contexts/FormModalContext.tsx`
2. **Add form configuration** to `FORM_CONFIGS` object with:
   - `title`: Modal header title
   - `subtitle`: Optional description
   - `src`: Monday.com embed URL
   - `height`: Recommended iframe height
3. **Use FormButton** component on any page:
   ```tsx
   <FormButton formType="your-new-form" variant="violet" size="lg">
     Button Text
   </FormButton>
   ```

### Form types available
- `camp-camper`: Camp registration for children
- `camp-counselor`: Camp counselor applications
- `crazy-socks-sponsor`: Corporate gift bag sponsorship
- `newsletter-signup`: Newsletter subscription
- `book-elana`: Elana speaking engagements
- `volunteer`: Volunteer applications
- `contact`: General contact form
- `aid-application`: Financial assistance applications

## SEO optimization
The site is optimized for corporate partnerships and CSR programs:

### Corporate volunteering SEO
- **Target keywords**: Corporate Social Responsibility (CSR), employee volunteering, volunteer days, VTO, workplace giving programs, team-building volunteer events
- **Primary pages**: Crazy Socks (gift bag volunteering), Volunteer (corporate programs), Contact (partnerships)
- **Content strategy**: SEO-optimized paragraphs with keyword integration on key pages
- **Metadata structure**: Each page has dedicated layout.tsx files with targeted meta descriptions and keywords

### File upload configuration (Legacy - Now Modal-Based)
The aid application previously included a complex multi-step form. It's now simplified to use Monday.com forms via modal system.

### Development
- Forms are now handled via Monday.com embedded iframes in modals
- No local file handling required for most forms
- Aid applications use Monday.com form with built-in file upload capabilities

## Troubleshooting
- Port already in use: stop the other service or change the port mapping in `docker-compose.yml`.
- ESLint warnings during build: `next.config.js` is set to allow builds to complete; use `npm run lint` locally to fix issues.
- Node version mismatch: ensure Node 20.x locally to match Docker.
- Dark mode not working: check `src/contexts/ThemeContext.tsx` and ensure theme toggle is properly connected.
- Cookie consent issues: verify `src/contexts/CookieConsentContext.tsx` is properly initialized in layout.
- Donation modal not loading: ensure marketing cookies are enabled in cookie preferences.
- Form modals not opening: verify `FormModalProvider` is properly wrapped in layout and `FormModal` component is included.
- Form modal scrolling issues: check modal height settings in `FormModal.tsx` (currently set to 85vh).
- Monday.com forms not loading: ensure marketing cookies are enabled and form URLs are correct in `FormModalContext.tsx`.

## Maintainers and handoff
- Primary owner: KCCF web team
- For deployment credentials/secrets, update your hosting provider’s environment settings (do not commit secrets).

## License
All rights reserved. Content and code are the property of Koenig Childhood Cancer Foundation unless otherwise noted.
