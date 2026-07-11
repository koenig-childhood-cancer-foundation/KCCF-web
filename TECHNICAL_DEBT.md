# Technical Debt and Backlog — Infrastructure & Engineering Maturity

**Document Purpose:** Tracks the infrastructure / engineering-maturity gap between KCCF-web and the Free For Charity (FFC) Single Page Template, and records KCCF-web's current status against each item.

**Scope:** Infrastructure only — testing, code formatting, git hooks, CI/CD structure, security & supply-chain controls, and performance/monitoring. Content, copy, and design work is tracked separately and is **not** part of this document.

**Last Updated:** July 2026 (refreshed against the current FFC template)
**Status:** Active Tracking
**Repository:** koenig-childhood-cancer-foundation/KCCF-web
**Reference Repository:** [FreeForCharity/FFC_Single_Page_Template](https://github.com/FreeForCharity/FFC_Single_Page_Template)

> **Verification note (July 2026):** KCCF-web status below was verified directly against the working tree, not assumed. Checks run: file/directory search for `*.test.*`/`*.spec.*` and `__tests__`/`tests`/`e2e`/`cypress` dirs; test-framework config search (jest/vitest/playwright/cypress); `package.json` scripts + devDependencies; `package-lock.json` framework presence; and a grep for test steps across `.github/workflows/`. **Result: zero automated tests of any kind exist in this repository.** The only trace of `@playwright/test` in the lockfile is an *optional peer dependency declared by Next.js itself* (`node_modules/next`) — it is not installed as a direct dependency, has no config, no test files, and is never invoked.

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Status Dashboard](#status-dashboard)
3. [Verified Current State — KCCF-web](#verified-current-state--kccf-web)
4. [Current FFC Template Reference](#current-ffc-template-reference)
5. [Phase 1: Testing Infrastructure](#phase-1-testing-infrastructure)
6. [Phase 2: Code Formatting & Style](#phase-2-code-formatting--style)
7. [Phase 3: Git Hooks & Commit Standards](#phase-3-git-hooks--commit-standards)
8. [Phase 4: CI/CD Pipeline Restructure](#phase-4-cicd-pipeline-restructure)
9. [Phase 5: Security & Supply Chain](#phase-5-security--supply-chain)
10. [Phase 6: Performance & Monitoring](#phase-6-performance--monitoring)
11. [Recommended Sequencing](#recommended-sequencing)
12. [Intentional Differences from FFC](#intentional-differences-from-ffc)
13. [Related Documentation](#related-documentation)

---

## Executive Summary

KCCF-web is **actively maintained on content and product**, but its **infrastructure/engineering-maturity is essentially at the pre-audit baseline**. Since the original December 2025 comparison, **none** of the identified infrastructure items have been adopted, while the FFC template itself has advanced further — adding a security & governance layer (OpenSSF Scorecard, security-audit, security.txt lifecycle, drift/uptime/revert-guard workflows) and accessibility testing (jest-axe, axe-core) that the original document did not track.

**Net effect: the gap has widened, not narrowed.**

- **Infrastructure adoption vs. plan:** ~0%
- **Automated tests in KCCF-web:** 0 (verified)
- **CI jobs in KCCF-web:** build/deploy + CodeQL only (no format, lint-as-gate is present, no tests, no audit, no perf)
- **Config/quality files adopted:** 0 of ~10

---

## Status Dashboard

Legend: ✅ done · 🟡 partial · ❌ not started

| # | Capability | FFC Template (current) | KCCF-web (verified) | Status |
|---|---|---|---|---|
| **Testing** |
| 1.1 | Unit / component tests (Jest + Testing Library) | ✅ `jest.config.js`, `jest.setup.js`, `__tests__/` | ❌ none | ❌ |
| 1.2 | Accessibility tests (jest-axe / axe-core) | ✅ `jest-axe`, `@axe-core/react`, `@axe-core/playwright` | ❌ none | ❌ |
| 1.3 | E2E tests (Playwright) | ✅ `playwright.config.ts`, `tests/` | ❌ none (`@playwright/test` is only a Next.js peer dep) | ❌ |
| **Formatting & Style** |
| 2.1 | Prettier | ✅ `.prettierrc.json`, `.prettierignore`, `format` + `format:check` | ❌ none | ❌ |
| 2.2 | EditorConfig | ✅ `.editorconfig` | ❌ | ❌ |
| 2.3 | Node version pin | ✅ `.nvmrc` | ❌ | ❌ |
| **Hooks & Commits** |
| 3.1 | Husky pre-commit hooks | ✅ `.husky/`, `prepare` script | ❌ | ❌ |
| 3.2 | Commitlint | ✅ `commitlint.config.js` | ❌ | ❌ |
| **CI/CD** |
| 4.1 | Split CI vs. deploy workflows | ✅ `ci.yml` + `deploy.yml` | 🟡 single `nextjs.yml` (build+deploy combined) | ❌ |
| 4.2 | Format check in CI | ✅ `npm run format:check` step | ❌ | ❌ |
| 4.3 | Lint gate in CI | ✅ | ✅ (lint runs in `nextjs.yml`) | ✅ |
| 4.4 | Unit tests in CI | ✅ `npm test` (CI=true) | ❌ | ❌ |
| 4.5 | E2E tests in CI | ✅ Playwright install + `test:e2e` | ❌ | ❌ |
| 4.6 | Bundle-size check | ✅ `check:bundle` | ❌ | ❌ |
| 4.7 | Build artifact upload on failure | ✅ | ❌ | ❌ |
| **Security & Supply Chain** |
| 5.1 | CodeQL scanning | ✅ | ✅ `codeql.yml` | ✅ |
| 5.2 | Dependabot | ✅ `dependabot.yml` | ❌ | ❌ |
| 5.3 | npm audit in CI | ✅ `security-audit.yml` / `audit:high` | ❌ | ❌ |
| 5.4 | OpenSSF Scorecard | ✅ `scorecard.yml` | ❌ | ❌ |
| 5.5 | security.txt + expiry monitor | ✅ `security-txt-expiry.yml` | ❌ | ❌ |
| 5.6 | Vulnerability disclosure policy page | ✅ `/vulnerability-disclosure-policy` | ❌ | ❌ |
| **Performance & Monitoring** |
| 6.1 | Lighthouse CI | ✅ `lighthouse.yml`, `lighthouserc.json` | ❌ | ❌ |
| 6.2 | Bundle analyzer | ✅ `analyze` script + `@next/bundle-analyzer` | ❌ | ❌ |
| 6.3 | Link checking (linkinator) | ✅ `.linkinatorrc.json`, `check-links` | ❌ | ❌ |
| 6.4 | Uptime monitoring workflow | ✅ `uptime.yml` | ❌ | ❌ |
| 6.5 | Config-drift check | ✅ `drift-check.yml`, `check:drift` | ❌ | ❌ |
| 6.6 | Phantom-revert guard | ✅ `phantom-revert-guard.yml` | ❌ | ❌ |

**Score:** KCCF-web meets **2 of 25** tracked infrastructure capabilities (CodeQL, lint-in-CI).

---

## Verified Current State — KCCF-web

**`package.json` scripts (6):** `dev`, `build`, `export`, `preview`, `start`, `lint` — no `test`, no `format`.

**`package.json` devDependencies:** `@eslint/eslintrc`, `@tailwindcss/postcss`, `@types/*`, `eslint`, `eslint-config-next`, `tailwindcss`, `typescript`. No test, formatting, hook, or commit-lint tooling.

**`.github/workflows/` (2 files):**
- `nextjs.yml` — lint → type-check (via build) → build → deploy to GitHub Pages (single combined workflow)
- `codeql.yml` — CodeQL security scanning

**Quality/config files present:** none of `.prettierrc*`, `.editorconfig`, `.nvmrc`, `jest.config.js`, `playwright.config.ts`, `commitlint.config.js`, `.husky/`, `dependabot.yml`, `lighthouserc.json`, `.linkinatorrc.json`.

**Tests:** none (verified across files, dirs, configs, deps, scripts, and CI).

---

## Current FFC Template Reference

Snapshot of the reference template as of July 2026 — this is the moving target KCCF-web is measured against.

**Scripts (~20):** `dev`, `build`, `preview`, `analyze`, `lint`, `format`, `format:check`, `test`, `test:watch`, `test:coverage`, `test:e2e`, `test:e2e:ui`, `test:e2e:headed`, `check-links`, `check:drift`, `check:rebrand`, `check:bundle`, `smoke`, `audit:high`, `prepare`.

**Key devDependencies (~29):** Playwright ~1.61, Jest ~30, `@testing-library/*`, `jest-axe`, `@axe-core/react`, `@axe-core/playwright`, Prettier ~3.9, Husky ~9.1, Commitlint ~20.5, `@lhci/cli` ~0.15, `@next/bundle-analyzer`, `linkinator` ~7.6.

**Workflows (9):** `ci.yml`, `deploy.yml`, `drift-check.yml`, `lighthouse.yml`, `phantom-revert-guard.yml`, `scorecard.yml`, `security-audit.yml`, `security-txt-expiry.yml`, `uptime.yml`.

**`ci.yml` job shape:** checkout → Node 20 → `npm ci` → `format:check` → `lint` → `npm test` (CI=true) → install Playwright chromium → `build` → `check:bundle` → `test:e2e` → upload artifacts on failure. Plus a soft-fail link-check job (`check-links`).

---

## Phase 1: Testing Infrastructure

**Priority:** 🔴 High · **Impact:** Catches regressions before deploy; this is the single largest gap.

### 1.1 Unit / Component Testing (Jest + React Testing Library)
- **Current:** No unit tests exist (verified).
- **Target:** Jest + `@testing-library/react` with a baseline suite on `Navigation`, `Footer`, `CookieConsentBanner`, `FormModal`.
- **Steps:** add `jest`, `jest-environment-jsdom`, `@testing-library/{react,jest-dom,user-event}`; add `jest.config.js` + `jest.setup.js`; add `test`, `test:watch`, `test:coverage` scripts; create `__tests__/`.
- **Reference:** FFC `jest.config.js`, `jest.setup.js`, `__tests__/`.

### 1.2 Accessibility Testing (NEW vs. Dec-2025 doc)
- **Current:** None.
- **Target:** `jest-axe` assertions in component tests and `@axe-core/playwright` in E2E — enforces WCAG basics automatically.
- **Reference:** FFC `jest-axe`, `@axe-core/react`, `@axe-core/playwright`.

### 1.3 E2E Testing (Playwright)
- **Current:** None. (`@playwright/test` in the lockfile is a Next.js optional peer dep, not a configured suite.)
- **Target:** `playwright.config.ts` + `tests/` covering nav, donation modal, form modals, dark-mode toggle, and GitHub Pages base-path image loading; scripts `test:e2e`, `test:e2e:ui`, `test:e2e:headed`.
- **Reference:** FFC `playwright.config.ts`, `tests/`.

---

## Phase 2: Code Formatting & Style

**Priority:** 🟠 Medium · **Impact:** Consistent style, smaller diffs, less review friction.

### 2.1 Prettier
- **Current:** None.
- **Target:** `.prettierrc.json` + `.prettierignore`; `format` and `format:check` scripts; `format:check` wired into CI (Phase 4.2).
- **Reference:** FFC `.prettierrc.json`, `.prettierignore`.

### 2.2 EditorConfig
- **Current:** None. **Target:** `.editorconfig` for cross-editor consistency. *(Optional if Prettier is adopted — see intentional differences.)*

### 2.3 Node Version Pin
- **Current:** None. **Target:** `.nvmrc` pinned to Node 20 to match CI. **Reference:** FFC `.nvmrc`.

---

## Phase 3: Git Hooks & Commit Standards

**Priority:** 🟠 Medium · **Impact:** Catches issues before they reach CI.

### 3.1 Husky Pre-commit Hooks
- **Current:** None. **Target:** `.husky/` running lint + format (+ optionally related tests) on commit; `prepare` script. **Reference:** FFC `.husky/`.

### 3.2 Commitlint
- **Current:** None. **Target:** `commitlint.config.js` enforcing Conventional Commits via a `commit-msg` hook. **Reference:** FFC `commitlint.config.js`.

---

## Phase 4: CI/CD Pipeline Restructure

**Priority:** 🔴 High · **Impact:** Real quality gate before deploy; today only lint + build gate deploys.

### 4.1 Split CI and Deploy Workflows
- **Current:** Single `nextjs.yml` combines build + deploy.
- **Target:** `ci.yml` (checks, runs on all PRs, no deploy) + `deploy.yml` (deploy on `main` after CI passes).
- **Reference:** FFC `ci.yml`, `deploy.yml`.

### 4.2 Add Format Check to CI
- **Target:** `npm run format:check` step (depends on Phase 2.1).

### 4.4 Add Unit Tests to CI
- **Target:** `npm test` with `CI=true` (depends on Phase 1.1).

### 4.5 Add E2E Tests to CI
- **Target:** `npx playwright install --with-deps chromium` → `npm run test:e2e` (depends on Phase 1.3).

### 4.6 Bundle-size Check
- **Target:** `check:bundle` step to catch bundle bloat. **Reference:** FFC `check:bundle`.

### 4.7 Upload Build Artifacts on Failure
- **Target:** Upload `.next/` / `out/` on failed runs for debugging.

---

## Phase 5: Security & Supply Chain

**Priority:** 🔴 High · **Impact:** Vulnerability detection and supply-chain hardening.

### 5.1 CodeQL — ✅ **Already done** (`codeql.yml`).

### 5.2 Dependabot
- **Current:** None. **Target:** `.github/dependabot.yml` for npm + GitHub Actions, grouped updates. **Reference:** FFC `dependabot.yml`.

### 5.3 npm Audit in CI
- **Current:** None. **Target:** `security-audit.yml` / `audit:high` failing on high-severity advisories. **Reference:** FFC `security-audit.yml`.

### 5.4 OpenSSF Scorecard (NEW)
- **Current:** None. **Target:** `scorecard.yml` publishing a supply-chain security score. **Reference:** FFC `scorecard.yml`.

### 5.5 security.txt + Expiry Monitor (NEW)
- **Current:** None. **Target:** `/.well-known/security.txt` plus `security-txt-expiry.yml` to alert before it expires. **Reference:** FFC `security-txt-expiry.yml`.

### 5.6 Vulnerability Disclosure Policy Page (NEW)
- **Current:** None (KCCF has `SECURITY.md` but no public policy page). **Target:** a `/vulnerability-disclosure-policy` route mirroring the template.

---

## Phase 6: Performance & Monitoring

**Priority:** 🟢 Low–Medium · **Impact:** Regression tracking and availability.

### 6.1 Lighthouse CI
- **Target:** `@lhci/cli` + `lighthouserc.json` asserting perf/a11y/best-practices/SEO thresholds; `lighthouse.yml` on PRs. **Reference:** FFC `lighthouse.yml`, `lighthouserc.json`.

### 6.2 Bundle Analyzer
- **Target:** `@next/bundle-analyzer` + `analyze` script.

### 6.3 Link Checking
- **Target:** `linkinator` + `.linkinatorrc.json` + `check-links` (soft-fail CI job). **Reference:** FFC `.linkinatorrc.json`.

### 6.4 Uptime Monitoring (NEW)
- **Target:** `uptime.yml` pinging production on a schedule. **Reference:** FFC `uptime.yml`.

### 6.5 Config-Drift Check (NEW)
- **Target:** `drift-check.yml` / `check:drift` detecting divergence from template-managed config. **Reference:** FFC `drift-check.yml`.

### 6.6 Phantom-Revert Guard (NEW)
- **Target:** `phantom-revert-guard.yml` guarding against accidental reversions of key files. **Reference:** FFC `phantom-revert-guard.yml`.

---

## Recommended Sequencing

Highest value per unit of effort, low-risk first:

1. **Quick wins (hours):** `.nvmrc`, `.prettierrc.json` + `format`/`format:check`, `dependabot.yml`. Zero behavioral risk.
2. **CI gate (½–1 day):** split `nextjs.yml` → `ci.yml` + `deploy.yml`; add `format:check` + `npm audit` steps.
3. **Testing baseline (2–3 days):** Jest + Testing Library + jest-axe; 3–4 component tests; wire `npm test` into CI.
4. **E2E + perf (2–3 days):** Playwright smoke suite; Lighthouse CI; linkinator.
5. **Security/governance layer (1–2 days):** Scorecard, security.txt + expiry monitor, vulnerability-disclosure page, Husky + commitlint.
6. **Monitoring niceties:** uptime, drift-check, phantom-revert-guard.

---

## Intentional Differences from FFC

These template items are **not** recommended for KCCF-web:

1. **EditorConfig** — redundant once Prettier is adopted (2.2 optional).
2. **Full E2E parity** — KCCF has fewer pages; start with a smoke suite, expand as needed.
3. **30+ template docs** — adopt selectively; some are FFC-org-specific (Cloudflare, Facebook Events, rebrand tooling like `check:rebrand`).
4. **`check:rebrand` / JSON CMS admin** — KCCF manages content via direct code edits; not applicable.

---

## Related Documentation

- [README.md](./README.md)
- [CI_CD_DEPLOYMENT.md](./CI_CD_DEPLOYMENT.md)
- [CONTRIBUTING.md](./CONTRIBUTING.md)
- [SECURITY.md](./SECURITY.md)
- [FFC Template Repository](https://github.com/FreeForCharity/FFC_Single_Page_Template) — reference repository

---
