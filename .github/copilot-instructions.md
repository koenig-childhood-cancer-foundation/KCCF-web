# Copilot Instructions: KCCF-web

Free For Charity nonprofit website. Next.js static site on GitHub Pages.

## Workflow

Issue -> branch -> PR -> merge queue. No direct commits to main.

## Pre-Push Checks (in order)

1. `npm run format`
2. `npm run lint`
3. `npm test`
4. `npm run build`
5. `npm run test:e2e`

## Architecture

- **Framework:** Next.js App Router, TypeScript, Tailwind CSS v4
- **Output:** Static export (`output: 'export'` in next.config.ts)
- **Pages:** `src/app/` (App Router conventions)
- **Components:** `src/components/`
- **Content:** `src/data/` (.ts modules and JSON data files)
- **Utilities:** `src/lib/`

## Conventions

- Route folders: **kebab-case only** (`about-us/`, not `aboutUs/`)
- Asset paths: use `assetPath()` from `src/lib/assetPath.ts` for all images
- `NEXT_PUBLIC_BASE_PATH` controls basePath for GitHub Pages subpath
- Conventional Commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`

## CI Enforcement

- Prettier `format:check`
- ESLint (no errors)
- Jest (all tests pass)
- `npm run build` (static export succeeds)
- Playwright E2E
- CodeQL (static analysis, separate workflow)

## Known Constraints

- Static export: no API routes, no middleware, no ISR
- `<img>` with `assetPath()` is correct; `next/image` has static export limitations
- Google Fonts may fail on restricted networks (graceful fallback to system fonts)
- Never expose secrets in code; use `${{ secrets.* }}` in workflows
