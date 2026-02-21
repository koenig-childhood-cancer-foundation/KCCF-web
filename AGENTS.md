# AI Agent Instructions: KCCF-web

**Project:** KCCF-web -- a Free For Charity nonprofit website

**Organization:** [Free For Charity](https://freeforcharity.org) provides free, professionally built websites for 501(c)(3) nonprofit organizations. Every repo in this organization serves that mission.

---

## Tech Stack

| Layer     | Technology                                                         |
| --------- | ------------------------------------------------------------------ |
| Framework | Next.js with App Router (see package.json for version)             |
| Language  | TypeScript (strict mode)                                           |
| Styling   | Tailwind CSS v4 (CSS-based config, no tailwind.config file)        |
| Export    | Static (`output: 'export'` in next.config.ts)                      |
| Hosting   | GitHub Pages (custom domain + subpath fallback)                    |
| CI/CD     | GitHub Actions                                                     |
| Testing   | Jest + Testing Library, Playwright (E2E), jest-axe (accessibility) |

---

## Core Commands

| Command            | What It Does                | Typical Duration |
| ------------------ | --------------------------- | ---------------- |
| `npm install`      | Install dependencies        | ~17s             |
| `npm run dev`      | Start dev server            | ~1s startup      |
| `npm run format`   | Run Prettier to format code | ~2s              |
| `npm run lint`     | Run ESLint                  | ~2s              |
| `npm test`         | Run Jest unit tests         | ~5s              |
| `npm run build`    | Production static build     | ~30s             |
| `npm run test:e2e` | Run Playwright E2E tests    | ~15s             |

**NEVER CANCEL long-running commands.** Builds and E2E tests take time. Set your timeout to 180+ seconds and let them finish.

---

## Development Workflow

All changes follow this process:

1. **Issue** -- Work starts from a GitHub Issue
2. **Branch** -- Create a feature branch from `main`
3. **Develop** -- Make changes, commit frequently
4. **Pre-commit checklist** (run in this order):
   1. `npm run format` -- Auto-fix formatting
   2. `npm run lint` -- Catch code quality issues
   3. `npm test` -- Run unit tests
   4. `npm run build` -- Verify the static export succeeds
   5. `npm run test:e2e` -- Run end-to-end tests
5. **PR** -- Open a Pull Request, link to the issue with `Fixes #NNN` or `Refs #NNN`
6. **Merge** -- Merge via merge queue (no direct commits to `main`)

---

## Project Architecture

```
src/
  app/                  # Next.js App Router -- pages and layouts
    page.tsx            # Home page
    layout.tsx          # Root layout
    [route]/page.tsx     # Additional routes (e.g., privacy-policy/)
  components/           # Reusable UI components
  data/                 # Content modules (.ts) and JSON data files
  lib/                  # Utility functions and helpers
    assetPath.ts        # GitHub Pages asset path helper
public/                 # Static assets (Images/, Svgs/, fonts, favicons)
next.config.ts          # Next.js configuration
tsconfig.json           # TypeScript configuration
```

---

## Naming Conventions

**ALL route folders MUST use kebab-case.** This is an SEO best practice per Google Search Central. URLs like `/about-us` are preferred over `/aboutUs` or `/about_us`.

Examples:

- `src/app/about-us/page.tsx` (correct)
- `src/app/aboutUs/page.tsx` (wrong)
- `src/app/contact-form/page.tsx` (correct)

Component files use PascalCase: `HeroSection.tsx`, `DonateButton.tsx`.

---

## GitHub Pages & Asset Paths

These sites deploy to `https://freeforcharity.github.io/KCCF-web/` and optionally to a custom domain if one is configured for this repo.

**Always use the `assetPath()` helper** from `src/lib/assetPath.ts` for image and asset references:

```tsx
import { assetPath } from '@/lib/assetPath';

// Correct -- works on both custom domain and GitHub Pages subpath
<img src={assetPath('/Images/hero.jpg')} alt="Hero" />

// Wrong -- breaks on GitHub Pages subpath
<img src="/Images/hero.jpg" alt="Hero" />
```

The `NEXT_PUBLIC_BASE_PATH` environment variable controls the `basePath` in `next.config.ts`. The build system handles this automatically; you should not hardcode paths.

---

## Security

- **NEVER** expose API tokens or secrets in code, comments, or documentation
- **NEVER** hardcode secrets in any file
- In GitHub Actions workflows, **ALWAYS** use `${{ secrets.SECRET_NAME }}` syntax
- **ALWAYS** validate that secrets exist before using them in workflows
- **NEVER** echo or print secrets to logs
- For local development, use `.env` files (excluded from git via `.gitignore`)
- If a user provides a secret, **DO NOT** write it in any file. Instruct them to add it to GitHub Secrets or a local `.env` file.

---

## Testing Strategy

| Type          | Tool                   | Purpose                                 |
| ------------- | ---------------------- | --------------------------------------- |
| Unit          | Jest + Testing Library | Component rendering, utility functions  |
| Accessibility | jest-axe               | WCAG compliance, ARIA validation        |
| E2E           | Playwright             | Full page navigation, visual regression |

**Accessibility target:** WCAG AA compliance. The jest-axe integration catches common ARIA issues, color contrast violations, and missing landmarks.

---

## Known Issues

- **ESLint `img` warnings:** Some ESLint rules flag `<img>` tags in favor of `next/image`. For static exports, `<img>` with `assetPath()` is the correct approach. These warnings are expected.
- **Google Fonts:** Font loading may fail on restricted networks or air-gapped environments. The site should degrade gracefully with system fonts.
- **Static export limitations:** Dynamic features like API routes, middleware, and ISR are not available. All pages must be statically renderable at build time.

---

## Commit Message Format

Use [Conventional Commits](https://www.conventionalcommits.org/) format: `<type>: <description>`

| Type        | When to Use                             |
| ----------- | --------------------------------------- |
| `feat:`     | New feature or page                     |
| `fix:`      | Bug fix                                 |
| `docs:`     | Documentation only                      |
| `style:`    | Formatting (no code change)             |
| `refactor:` | Code restructuring (no behavior change) |
| `test:`     | Adding or updating tests                |
| `chore:`    | Build config, dependencies, CI          |

Example: `feat: add volunteer signup form with validation`

---

## CI Pipeline

GitHub Actions enforces the following on every PR:

1. **Prettier** -- `npm run format:check` (formatting must pass)
2. **ESLint** -- `npm run lint` (no errors allowed)
3. **Jest** -- `npm test` (all unit tests must pass)
4. **Build** -- `npm run build` (static export must succeed)
5. **Playwright** -- `npm run test:e2e` (E2E tests must pass)
6. **CodeQL** -- Static analysis and security scanning (separate workflow)

PRs cannot merge until all checks pass.
