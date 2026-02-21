# Gemini Instructions: KCCF-web

Hey Gemini! Welcome to KCCF-web.

**Project:** KCCF-web -- a Free For Charity nonprofit website

Free For Charity provides free, professionally built websites for 501(c)(3) nonprofit organizations. This repo is one of ~25 charity sites in the FFC family.

See **AGENTS.md** for the complete project reference. This file gives you the practical shortcuts you need to be productive fast.

---

## Quick Context

| What      | Detail                                                    |
| --------- | --------------------------------------------------------- |
| Framework | Next.js with App Router (see package.json)                |
| Language  | TypeScript (strict)                                       |
| Styling   | Tailwind CSS v4 (CSS-based config, no config file)        |
| Output    | Static export (`output: 'export'`)                        |
| Hosting   | GitHub Pages (custom domain + subpath)                    |
| Tests     | Jest + Testing Library, Playwright (E2E), jest-axe (a11y) |

The site is **fully static**. No server-side rendering, no API routes, no middleware. Every page must be renderable at build time.

---

## Commands You Will Use

```bash
npm install          # Install dependencies (~17s)
npm run dev          # Start local dev server (~1s startup)
npm run format       # Auto-fix formatting with Prettier
npm run lint         # Run ESLint checks
npm test             # Run Jest unit tests
npm run build        # Build static export (~30s)
npm run test:e2e     # Run Playwright E2E tests
```

**Important:** `npm run build` can take 30+ seconds. Do not interrupt it.

---

## Project Layout

```
src/
  app/            --> Pages and routes (App Router)
  components/     --> Reusable UI components
  data/           --> Content modules (.ts) and JSON data files
  lib/            --> Utilities (including assetPath helper)
public/           --> Static assets (Images/, Svgs/, fonts)
```

**Route folders use kebab-case.** This is required for SEO. Use `about-us/`, not `aboutUs/`.

---

## Common Tasks: Step by Step

### Adding a New Page

1. Create a new folder in `src/app/` using kebab-case:
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
3. Add any images to `public/Images/` and reference them with `assetPath()`:
   ```tsx
   import { assetPath } from '@/lib/assetPath'
   ;<img src={assetPath('/Images/volunteers.jpg')} alt="Volunteers" />
   ```
4. Run the pre-commit checklist: `npm run format && npm run lint && npm test && npm run build`

### Updating Site Content

Most text content lives in `src/data/` as `.ts` modules or `.json` files in subdirectories. To update:

1. Find the relevant file in `src/data/`
2. Edit the text values (keep the data structure intact)
3. Run `npm run build` to verify nothing breaks

### Fixing Lint Errors

1. Run `npm run lint` to see the errors
2. Most common fixes:
   - Missing `alt` attributes on images
   - Unused imports (remove them)
   - `any` types (add proper TypeScript types)
3. Run `npm run format` after fixing to clean up formatting
4. Re-run `npm run lint` to confirm all errors are resolved

### Creating a Pull Request

1. Create a branch: `git checkout -b fix/descriptive-name`
2. Make your changes and commit using Conventional Commits: `git commit -m "fix: resolve broken link on about page"`
3. Push and open a PR that references the issue: `Fixes #42`
4. All CI checks must pass before merging

---

## Asset Path Helper

The site deploys to `https://freeforcharity.github.io/KCCF-web/` (and your custom domain if configured). The `assetPath()` function from `src/lib/assetPath.ts` handles this automatically.

```tsx
// Always use assetPath() for images and static assets
import { assetPath } from '@/lib/assetPath'
;<img src={assetPath('/Images/logo.png')} alt="Logo" />
```

Never hardcode absolute paths to assets. They will break on one of the two deployment targets.

---

## Troubleshooting

### Build fails with "Page ... is missing a component export"

Every `page.tsx` file must have a `default` export. Check that you are using `export default function` (not just `export function`).

### Build fails with "Dynamic server usage"

You are using a server-only feature (cookies, headers, searchParams on server components) in a static export. Static sites cannot use these. Refactor to use client components with `'use client'` if you need browser APIs, or remove the server-only code.

### ESLint warns about `<img>` tags

This is expected. For static exports, `<img>` with `assetPath()` is the correct approach. The `next/image` component does not work with `output: 'export'` in all cases.

### Google Fonts not loading

Google Fonts require network access. On restricted networks, the site falls back to system fonts. This is by design and not a bug.

### Tests fail after content changes

If you changed text in `src/data/`, some snapshot tests or text-matching tests may need updating. Check the test failure output and update expected values to match your changes.

### `npm run build` hangs or times out

The build genuinely takes 30+ seconds. Do not kill it. If it exceeds 2 minutes, check for infinite loops in your code or recursive component rendering.

---

## Security Reminders

- Never put API tokens or secrets in code or comments
- Use `${{ secrets.SECRET_NAME }}` in GitHub Actions workflows
- Use `.env` files for local secrets (excluded from git)
- See AGENTS.md for the full security policy
