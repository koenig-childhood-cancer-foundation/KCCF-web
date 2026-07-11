# Gemini Instructions: KCCF-web

Hey Gemini! Welcome to KCCF-web.

**Project:** KCCF-web -- a Free For Charity nonprofit website

Free For Charity provides free, professionally built websites for 501(c)(3) nonprofit organizations. This repo is one of the charity sites in the FFC family.

See **AGENTS.md** for the complete project reference (including the "Current vs. desired state" note). This file gives you the practical shortcuts. Describe and use the repo **as it is today**.

---

## Quick Context

| What      | Detail                                                           |
| --------- | ---------------------------------------------------------------- |
| Framework | Next.js 15 (App Router), React 19                                |
| Language  | TypeScript (strict)                                              |
| Styling   | Tailwind CSS v4 (CSS-based config, no config file)               |
| Output    | Static export (`output: 'export'`, images `unoptimized`)        |
| Hosting   | GitHub Pages, custom domain **thekccf.org**                     |
| Tests     | Jest + React Testing Library. **Planned:** Playwright (E2E), jest-axe (a11y) — issue #412 |

The site is **fully static**. No server-side rendering, no API routes, no middleware. Every page must be renderable at build time.

---

## Commands You Will Use

Only these exist in `package.json` today. `format` and `test:e2e` are **planned**, not present — do not run them.

```bash
npm install          # Install dependencies (~20-35s)
npm run dev          # Start local dev server (Turbopack)
npm run lint         # Run ESLint checks
npm test             # Run Jest unit/component tests
npm run build        # Build static export to out/ (~30-60s)
npm run preview      # Serve the built out/ locally
```

**Important:** `npm run build` can take 30+ seconds. Do not interrupt it.

---

## Project Layout

```
src/
  app/            --> Pages and routes (App Router), kebab-case folders
  components/     --> Reusable UI components
  contexts/       --> React contexts (Theme, CookieConsent, FormModal, SearchModal, Slideshow)
  data/           --> Data modules (.ts), e.g. searchData.ts
  constants/      --> Constant values, e.g. impactStats.ts
__tests__/        --> Jest + React Testing Library tests
public/           --> Static assets: images/, videos/, documents/, favicons, logos, CNAME
```

There is **no** `src/lib/` and **no `assetPath()` helper** here. **Route folders use kebab-case** (SEO): use `our-story/`, not `ourStory/`.

---

## Common Tasks: Step by Step

### Adding a New Page

1. Create a kebab-case folder in `src/app/`:
   ```
   src/app/volunteer-signup/page.tsx
   ```
2. Export a default React component:
   ```tsx
   export default function VolunteerSignupPage() {
     return (
       <main>
         <h1>Volunteer Signup</h1>
       </main>
     )
   }
   ```
3. Put images in `public/images/` and reference them root-relative via `next/image`:
   ```tsx
   import Image from 'next/image'
   ;<Image src="/images/volunteers.jpg" alt="Volunteers" width={800} height={600} />
   ```
   `next.config.ts` handles `basePath`/`assetPrefix` automatically — never hardcode a base path or domain.
4. Run the pre-commit checklist: `npm run lint && npm test && npm run build`

### Updating Site Content

Page copy lives in the route's `page.tsx` (and `src/app/HomeContent.tsx` for the home page); shared data lives in `src/data/`. Edit the values, keep the structure intact, then run `npm run build` to verify.

### Fixing Lint Errors

1. Run `npm run lint` to see errors.
2. Common fixes: missing `alt` attributes, unused imports, `any` types.
3. Re-run `npm run lint` to confirm.

### Creating a Pull Request

1. Create a branch: `git checkout -b fix/descriptive-name`
2. Commit with Conventional Commits: `git commit -m "fix: resolve broken link on about page"`
3. Push and open a PR referencing the issue: `Fixes #42`
4. CI (lint → type-check → build) must pass; resolve review conversations before merge.

---

## Assets & Paths

The site deploys to GitHub Pages on the custom domain **thekccf.org**. `basePath` comes from `NEXT_PUBLIC_BASE_PATH` in `next.config.ts` (empty for the custom domain).

- Reference assets with **root-relative paths** (e.g. `/images/logo.png`) via `next/image`. Next applies the base path automatically.
- `next/image` **works here** with `unoptimized: true` and is used throughout — do not assume static export forbids it.
- Never hardcode absolute domain paths to assets.

---

## Troubleshooting

### Build fails with "Page ... is missing a component export"

Every `page.tsx` must have a `default` export. Use `export default function`.

### Build fails with "Dynamic server usage"

You are using a server-only feature (cookies, headers, dynamic `searchParams`) in a static export. Refactor to a client component with `'use client'` for browser APIs, or remove the server-only code.

### Google Fonts not loading

Google Fonts require network access; on restricted networks the site falls back to system fonts. By design.

### `npm run build` hangs or times out

The build genuinely takes 30+ seconds. Do not kill it. If it exceeds ~2 minutes, check for infinite loops or recursive rendering.

---

## Security Reminders

- Never put API tokens or secrets in code or comments.
- Use `${{ secrets.SECRET_NAME }}` in GitHub Actions workflows.
- Use `.env.local` for local secrets (git-ignored).
- See AGENTS.md for the full security policy.
