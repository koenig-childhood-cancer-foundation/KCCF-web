# AI Agent Instructions: KCCF-web

**Project:** KCCF-web -- a Free For Charity nonprofit website

**Organization:** [Free For Charity](https://freeforcharity.org) provides free, professionally built websites for 501(c)(3) nonprofit organizations. Every repo in this organization serves that mission.

> **⚠️ Current vs. desired state.** This file was originally generated from the shared FFC AI-config templates, which describe the FFC *target* toolchain (Prettier, Playwright E2E, jest-axe, a full test/format CI gate, an `assetPath()` helper). **KCCF-web has not adopted all of that yet.** The sections below describe the repository **as it actually is today**; items that are the intended target but not yet present are called out as **Planned**. When the repo adopts a planned item, update this file (and the upstream FFC-IN-AI-Management templates) to match.

---

## Tech Stack

| Layer     | Technology                                                        |
| --------- | ---------------------------------------------------------------- |
| Framework | Next.js 15 (App Router)                                          |
| UI        | React 19                                                         |
| Language  | TypeScript (strict mode)                                         |
| Styling   | Tailwind CSS v4 (CSS-based config, no `tailwind.config` file)    |
| Export    | Static (`output: 'export'` in `next.config.ts`; images `unoptimized`) |
| Hosting   | GitHub Pages, custom domain **thekccf.org** (see `public/CNAME`) |
| CI/CD     | GitHub Actions (`.github/workflows/nextjs.yml`, `codeql.yml`)    |
| Donations | Zeffy (embedded iframe)                                          |
| Forms     | Monday.com (most forms) and Mailchimp (newsletter), via a modal system |
| Testing   | Jest + React Testing Library (jsdom). **Planned:** jest-axe (a11y), Playwright (E2E) — see issue #412 |

---

## Core Commands

Only the commands below exist in `package.json`. Do **not** invoke `format` or `test:e2e` — they are planned, not present.

| Command               | What It Does                          | Notes |
| --------------------- | ------------------------------------- | ----- |
| `npm install`         | Install dependencies                  | ~20-35s first run |
| `npm run dev`         | Start dev server (Turbopack)          | fast startup |
| `npm run lint`        | Run ESLint (`next lint`)              | warnings allowed |
| `npm test`            | Run Jest unit/component tests         | ~2-4s |
| `npm run test:watch`  | Jest in watch mode                    | |
| `npm run test:coverage` | Jest with coverage                  | |
| `npm run build`       | Production static export to `out/`    | can take 30-60s |
| `npm run start`       | Serve a production build              | |
| `npm run preview`     | Serve the static `out/` via http-server | |

**Planned (not yet in `package.json`):** `format` / `format:check` (Prettier), `test:e2e` (Playwright). See `TECHNICAL_DEBT.md`.

**NEVER CANCEL long-running commands.** `npm run build` and `npm install` need time; set your timeout to 180+ seconds.

---

## Development Workflow

1. **Issue** -- Work starts from a GitHub Issue.
2. **Branch** -- Create a feature branch from `main` (never commit directly to `main`).
3. **Develop** -- Make changes, commit frequently.
4. **Pre-commit checklist** (run what exists today, in order):
   1. `npm run lint` -- catch code-quality issues
   2. `npm test` -- run unit/component tests
   3. `npm run build` -- verify the static export succeeds
   - *Planned additions once adopted:* `npm run format` (Prettier), `npm run test:e2e` (Playwright).
5. **PR** -- Open a Pull Request; link the issue with `Fixes #NNN` or `Refs #NNN`.
6. **Merge** -- Merge via PR (merge commit; squash is disabled on this repo). Conversation resolution is required before merge.

---

## Project Architecture

```
src/
  app/                  # Next.js App Router -- pages and layouts
    page.tsx            # Home page (renders HomeContent.tsx)
    layout.tsx          # Root layout with providers
    <route>/page.tsx    # Route pages (kebab-case), e.g. crazy-socks/, our-story/
    <route>/layout.tsx  # Per-route metadata/SEO
  components/           # Reusable UI components (Navigation, Footer, FormModal, ...)
  contexts/             # React contexts (Theme, CookieConsent, FormModal, SearchModal, Slideshow)
  data/                 # Data modules (.ts), e.g. searchData.ts
  constants/            # Constant values, e.g. impactStats.ts
__tests__/              # Jest + React Testing Library tests (added in #411)
public/                 # Static assets: images/, videos/, documents/, favicons, logos, CNAME
next.config.ts          # Static export + basePath config
jest.config.js          # Jest (next/jest) config
```

There is **no** `src/lib/` directory and **no `assetPath()` helper** in this repo (that is FFC-template boilerplate). See "Assets & paths" below for how assets actually work here.

---

## Naming Conventions

**ALL route folders MUST use kebab-case** (SEO best practice): `src/app/our-story/page.tsx` (correct), not `ourStory/` or `our_story/`.

Component files use PascalCase: `Navigation.tsx`, `DonationButton.tsx`. Contexts use PascalCase + `Context` (e.g. `ThemeContext.tsx`).

---

## Assets & paths

The site builds as a static export and deploys to GitHub Pages on the custom domain **thekccf.org**. Base path is driven by `NEXT_PUBLIC_BASE_PATH` in `next.config.ts` (empty for the custom domain).

- Reference images with **root-relative paths** and Next's `<Image>` component (images are `unoptimized`), e.g. `<Image src="/images/banner.webp" ... />`. Next applies `basePath`/`assetPrefix` automatically — do **not** hardcode a base path or a domain.
- Static files live under `public/` in lowercase folders: `public/images/`, `public/videos/`, `public/documents/` (plus favicons, logos, and `CNAME` at the root of `public/`).
- `next/image` **does** work here (with `unoptimized: true`) and is used throughout — do not replace it with `<img>` on the assumption that static export forbids it.

---

## Security

- **NEVER** expose or hardcode API tokens or secrets in code, comments, or docs.
- In GitHub Actions, **ALWAYS** use `${{ secrets.SECRET_NAME }}`; validate secrets exist; never echo them to logs.
- For local development use `.env.local` (git-ignored). If a user shares a secret, do not write it to a file — instruct them to add it to GitHub Secrets or a local `.env.local`.

---

## Testing Strategy

| Type          | Tool                        | Status | Purpose |
| ------------- | --------------------------- | ------ | ------- |
| Unit / component | Jest + React Testing Library | ✅ present (`__tests__/`) | Context logic, data integrity, component behavior |
| Accessibility | jest-axe                    | 🟡 planned (#412) | WCAG checks, ARIA/contrast/landmarks |
| E2E           | Playwright                  | 🟡 planned (#412) | Full-page navigation, donation & form-modal flows |

Current suite: 27 tests across 6 suites (cookie consent, form-config integrity, site search, theme, form modal). **Accessibility target (desired):** WCAG AA via jest-axe once adopted.

---

## Known Issues

- **ESLint `img` warnings:** some rules flag `<img>`; this repo generally uses `next/image` with `unoptimized`, which is correct for static export.
- **Google Fonts:** may fail on restricted/air-gapped networks; the site should degrade to system fonts.
- **Static export limitations:** no API routes, middleware, or ISR. All pages must be statically renderable at build time.

---

## Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org/): `<type>: <description>`

| Type | When to Use |
| ---- | ----------- |
| `feat:` | New feature or page |
| `fix:` | Bug fix |
| `docs:` | Documentation only |
| `style:` | Formatting (no code change) |
| `refactor:` | Code restructuring (no behavior change) |
| `test:` | Adding or updating tests |
| `chore:` | Build config, dependencies, CI |

Example: `feat: add volunteer signup form with validation`

---

## CI Pipeline (actual)

`.github/workflows/nextjs.yml` runs on every PR/push and has two jobs:

1. **`ci` job** — `npm ci` → `npm run lint` (ESLint) → `npx tsc --noEmit` (type-check) → `npm run build` (static export). Uploads the Pages artifact on `main`.
2. **`deploy` job** — GitHub Pages deploy, `needs: ci`, `main` only.

`codeql.yml` runs CodeQL security scanning separately.

**Not yet enforced in CI (Planned / desired):** Prettier `format:check`, `npm test` (unit), and Playwright `test:e2e`. These are the FFC target gate; adoption is tracked in `TECHNICAL_DEBT.md` and issue #412. Update this section when they land.
