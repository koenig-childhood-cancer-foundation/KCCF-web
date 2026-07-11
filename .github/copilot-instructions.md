# Copilot Instructions: KCCF-web

Free For Charity nonprofit website. Next.js 15 (App Router) + React 19 static site on GitHub Pages (custom domain **thekccf.org**).

> These instructions describe the repo **as it is today**. Some FFC-template items (Prettier, Playwright E2E, jest-axe, a full test/format CI gate) are the intended target but **not yet adopted here** — they are marked *Planned*. See `AGENTS.md` and `TECHNICAL_DEBT.md` / issue #412.

## Workflow

Issue -> branch -> PR -> merge. No direct commits to `main`. Squash merges are disabled (merge commit only); resolve review conversations before merge.

## Pre-Push Checks (commands that exist today, in order)

1. `npm run lint`
2. `npm test`
3. `npm run build`

*Planned (not yet in `package.json`):* `npm run format` (Prettier), `npm run test:e2e` (Playwright).

## Architecture

- **Framework:** Next.js 15 App Router, React 19, TypeScript (strict), Tailwind CSS v4
- **Output:** Static export (`output: 'export'` in `next.config.ts`, images `unoptimized`)
- **Pages:** `src/app/` (App Router; per-route `layout.tsx` for metadata)
- **Components:** `src/components/`
- **State:** `src/contexts/` (Theme, CookieConsent, FormModal, SearchModal, Slideshow)
- **Content/data:** `src/data/` (.ts modules), `src/constants/`
- **Tests:** `__tests__/` (Jest + React Testing Library)
- No `src/lib/` directory exists.

## Conventions

- Route folders: **kebab-case only** (`our-story/`, not `ourStory/`)
- Assets: reference images root-relative (e.g. `/images/foo.webp`) via `next/image`; there is **no** `assetPath()` helper. `next.config.ts` handles `basePath`/`assetPrefix`.
- `NEXT_PUBLIC_BASE_PATH` controls `basePath` (empty for the custom domain)
- Conventional Commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`

## CI Enforcement (actual)

`.github/workflows/nextjs.yml` — `ci` job: ESLint (`npm run lint`) -> type-check (`npx tsc --noEmit`) -> `npm run build`; `deploy` job on `main`. `codeql.yml` runs CodeQL separately.

*Planned / desired (not yet enforced):* Prettier `format:check`, `npm test` (unit), Playwright E2E.

## Known Constraints

- Static export: no API routes, no middleware, no ISR
- `next/image` **works here** with `unoptimized: true` and is used throughout (do not assume static export forbids it)
- Google Fonts may fail on restricted networks (graceful fallback to system fonts)
- Never expose secrets in code; use `${{ secrets.* }}` in workflows
