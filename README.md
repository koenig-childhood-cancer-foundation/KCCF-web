## The Koenig Childhood Cancer Foundation (KCCF) Website

Production-ready Next.js site for the Koenig Childhood Cancer Foundation.

### Tech stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI**: React 19, Tailwind CSS 4
- **Linting**: ESLint (Next.js config)
- **Runtime**: Node.js 20
- **Container**: Docker (standalone Next.js output)

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
# Public key safe to expose to the browser
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_or_test_...

# Server-side secrets – do NOT expose publicly
STRIPE_SECRET_KEY=sk_live_or_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```
Notes:
- `NEXT_PUBLIC_` variables are embedded client-side. Keep only non-sensitive values there.
- If you are not using Stripe locally, you can omit these variables.

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
- Provide Stripe keys via environment/Compose overrides instead of committing secrets.

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
      donate/            # Donations page
      contact/           # Contact page
      media/             # Media page
      newsletter-signup/ # Newsletter page
      our-story/         # About/KCCF story
      volunteer/         # Volunteer page
      page.tsx           # Home
    components/          # Reusable UI components
    contexts/            # React contexts (theme, donation modal, etc.)
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

## Images and optimization
- Static files live in `public/`
- `next.config.js` allows images from the `thekccf.org` domain

## Stripe notes (if used)
- The UI includes donation-related components. If you connect Stripe:
  - Set `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` and `STRIPE_SECRET_KEY` in your environment.
  - If you add server-side webhooks, also set `STRIPE_WEBHOOK_SECRET` and wire your endpoint accordingly.

## Troubleshooting
- Port already in use: stop the other service or change the port mapping in `docker-compose.yml`.
- ESLint warnings during build: `next.config.js` is set to allow builds to complete; use `npm run lint` locally to fix issues.
- Node version mismatch: ensure Node 20.x locally to match Docker.

## Maintainers and handoff
- Primary owner: KCCF web team
- For deployment credentials/secrets, update your hosting provider’s environment settings (do not commit secrets).

## License
All rights reserved. Content and code are the property of Koenig Childhood Cancer Foundation unless otherwise noted.
