# Technical Debt and Backlog

**Document Purpose:** This document tracks technical debt items and improvement opportunities for the KCCF-web project, identified through comparison with the Free For Charity (FFC) Single Page Template repository.

**Scope:** This document covers internal technical improvements, code quality enhancements, CI/CD optimizations, testing infrastructure, and security controls that will improve maintainability and development velocity.

**Last Updated:** December 2025  
**Status:** Active Tracking  
**Repository:** koenig-childhood-cancer-foundation/KCCF-web  
**Reference Repository:** [FreeForCharity/FFC_Single_Page_Template](https://github.com/FreeForCharity/FFC_Single_Page_Template)

---

## Table of Contents

1. [Overview](#overview)
2. [Phase 1: Testing Infrastructure](#phase-1-testing-infrastructure)
3. [Phase 2: Code Quality & Developer Experience](#phase-2-code-quality--developer-experience)
4. [Phase 3: CI/CD Pipeline Enhancements](#phase-3-cicd-pipeline-enhancements)
5. [Phase 4: Documentation Improvements](#phase-4-documentation-improvements)
6. [Phase 5: Security & Branch Protection](#phase-5-security--branch-protection)
7. [Phase 6: Performance & Monitoring](#phase-6-performance--monitoring)
8. [Tracking and Prioritization](#tracking-and-prioritization)
9. [Related Documentation](#related-documentation)

---

## Overview

This document identifies technical improvements by comparing KCCF-web with the FFC Single Page Template. Items are organized into **phases** for structured implementation, allowing the team to tackle improvements incrementally without overwhelming the development process.

**Total Identified Items:** 35+ improvement opportunities across 6 phases

**Current Repository Status:**
- ✅ Next.js 15 with App Router
- ✅ TypeScript with type checking
- ✅ ESLint for code quality
- ✅ CodeQL security scanning
- ✅ Basic CI/CD with GitHub Actions
- ✅ GitHub Pages deployment
- ⚠️ No automated tests
- ⚠️ No code formatting enforcement
- ⚠️ No pre-commit hooks
- ⚠️ Limited documentation for development processes

---

## Phase 1: Testing Infrastructure

**Priority:** 🔴 High  
**Estimated Effort:** 2-3 weeks  
**Impact:** Catches bugs early, prevents regressions, improves code confidence

### 1.1 Unit Testing Framework

**Current State:** No unit tests exist  
**Target State:** Jest + React Testing Library with baseline coverage

**Implementation Steps:**

1. **Install Testing Dependencies**
   ```bash
   npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
   ```

2. **Create Configuration Files**
   - `jest.config.js` - Jest configuration (see FFC template)
   - `jest.setup.js` - Test environment setup
   - Add test scripts to `package.json`:
     ```json
     "test": "jest",
     "test:watch": "jest --watch",
     "test:coverage": "jest --coverage"
     ```

3. **Create Test Directory Structure**
   ```
   __tests__/
   ├── components/
   │   ├── Navigation.test.tsx
   │   ├── Footer.test.tsx
   │   └── CookieConsentBanner.test.tsx
   └── lib/
       └── (utility tests as needed)
   ```

4. **Initial Test Coverage Target:** 5-10% (baseline)
   - Focus on critical components: Navigation, Footer, Cookie Consent
   - Test user interactions and accessibility

**Reference:** FFC template files:
- `.github/workflows/ci.yml` (unit test execution)
- `jest.config.js`
- `jest.setup.js`
- `__tests__/` directory

---

### 1.2 End-to-End Testing (Playwright)

**Current State:** No E2E tests  
**Target State:** Playwright tests for critical user flows

**Implementation Steps:**

1. **Install Playwright**
   ```bash
   npm install --save-dev @playwright/test
   npx playwright install chromium
   ```

2. **Create Configuration**
   - `playwright.config.ts` - Playwright configuration (see FFC template)
   - Add test scripts to `package.json`:
     ```json
     "test:e2e": "playwright test",
     "test:e2e:ui": "playwright test --ui",
     "test:e2e:headed": "playwright test --headed"
     ```

3. **Create Test Suite**
   ```
   tests/
   ├── navigation.spec.ts
   ├── forms.spec.ts
   ├── donation-flow.spec.ts
   └── github-pages.spec.ts
   ```

4. **Critical Test Scenarios:**
   - Navigation menu functionality (mobile and desktop)
   - Form modal opening and display
   - Donation modal functionality
   - Cookie consent flow
   - Dark mode toggle
   - GitHub Pages deployment compatibility (image loading)

**Reference:** FFC template files:
- `playwright.config.ts`
- `tests/` directory
- `.github/workflows/ci.yml` (E2E test execution)

---

### 1.3 Accessibility Testing

**Current State:** No automated accessibility testing  
**Target State:** jest-axe integration for WCAG 2.1 compliance

**Implementation Steps:**

1. **Install jest-axe**
   ```bash
   npm install --save-dev jest-axe
   ```

2. **Update jest.setup.js**
   ```typescript
   import 'jest-axe/extend-expect'
   ```

3. **Add Accessibility Tests**
   - Include axe checks in all component tests
   - Test for: button/link labels, color contrast, ARIA attributes, keyboard navigation

**Benefits:**
- Ensures site is accessible to all users
- Catches accessibility issues in development
- Helps meet legal compliance requirements

**Reference:** FFC template `jest.setup.js` and component test files

---

### 1.4 CI Integration for Tests

**Current State:** Tests not run in CI (no tests exist)  
**Target State:** All tests run automatically on PRs and pushes

**Implementation Steps:**

1. **Update `.github/workflows/nextjs.yml`** to include:
   - Unit test execution (`npm test`)
   - E2E test execution (`npm run test:e2e`)
   - Test failure blocks merge

2. **Add Test Coverage Reporting** (optional Phase 1.5)
   - Upload coverage reports to artifacts
   - Display coverage in PR comments (future enhancement)

**Reference:** FFC template `.github/workflows/ci.yml`

---

## Phase 2: Code Quality & Developer Experience

**Priority:** 🟡 Medium-High  
**Estimated Effort:** 1-2 weeks  
**Impact:** Consistent code style, faster development, fewer code review nitpicks

### 2.1 Prettier Code Formatting

**Current State:** No automated code formatting  
**Target State:** Prettier enforces consistent code style

**Implementation Steps:**

1. **Install Prettier**
   ```bash
   npm install --save-dev prettier
   ```

2. **Create Configuration Files**
   - `.prettierrc.json`:
     ```json
     {
       "semi": false,
       "singleQuote": true,
       "trailingComma": "es5",
       "tabWidth": 2,
       "printWidth": 100,
       "arrowParens": "always",
       "endOfLine": "lf"
     }
     ```
   - `.prettierignore`:
     ```
     .next
     out
     node_modules
     package-lock.json
     ```

3. **Add Scripts to package.json**
   ```json
   "format": "prettier --write .",
   "format:check": "prettier --check ."
   ```

4. **Format Entire Codebase**
   ```bash
   npm run format
   ```

**Benefits:**
- Eliminates style debates in code reviews
- Consistent code style across all files
- Automatic fixing reduces manual work

**Reference:** FFC template `.prettierrc.json`, `.prettierignore`

---

### 2.2 Husky Pre-commit Hooks

**Current State:** No pre-commit validation  
**Target State:** Automated checks before every commit

**Implementation Steps:**

1. **Install Husky**
   ```bash
   npm install --save-dev husky
   ```

2. **Initialize Husky**
   ```bash
   npx husky init
   ```

3. **Create Pre-commit Hook** (`.husky/pre-commit`):
   ```bash
   #!/bin/sh
   # Run formatting check first
   npm run format:check || {
     echo "❌ Code formatting issues detected. Please run 'npm run format' to fix."
     exit 1
   }
   
   # Run linting
   npm run lint || {
     echo "❌ Linting errors detected. Please fix the errors and try again."
     exit 1
   }
   
   echo "✅ Pre-commit checks passed!"
   ```

4. **Add prepare script to package.json**
   ```json
   "prepare": "husky"
   ```

**Benefits:**
- Catches issues before they're committed
- Ensures all commits meet quality standards
- Reduces CI failures

**Reference:** FFC template `.husky/` directory

---

### 2.3 Commitlint (Conventional Commits)

**Current State:** Inconsistent commit message formats  
**Target State:** Enforced conventional commit format

**Implementation Steps:**

1. **Install Commitlint**
   ```bash
   npm install --save-dev @commitlint/config-conventional @commitlint/cli
   ```

2. **Create Configuration** (`commitlint.config.js`):
   ```javascript
   module.exports = {
     extends: ['@commitlint/config-conventional'],
     rules: {
       'type-enum': [
         2,
         'always',
         [
           'feat', 'fix', 'docs', 'style', 'refactor',
           'test', 'chore', 'perf', 'ci', 'revert'
         ],
       ],
     },
   }
   ```

3. **Create Commit-msg Hook** (`.husky/commit-msg`):
   ```bash
   #!/bin/sh
   npx --no -- commitlint --edit $1
   ```

**Benefits:**
- Consistent commit history
- Easier to generate changelogs
- Clear communication of change types

**Reference:** FFC template `commitlint.config.js`, `.husky/commit-msg`

---

### 2.4 Enhanced Code Quality Documentation

**Current State:** Basic CONTRIBUTING.md  
**Target State:** Comprehensive CODE_QUALITY.md guide

**Implementation Steps:**

1. **Create CODE_QUALITY.md** covering:
   - Code quality tools and how to use them
   - TypeScript standards and best practices
   - Testing standards and requirements
   - Code review guidelines
   - Performance standards
   - Security standards

**Reference:** FFC template `CODE_QUALITY.md`

---

## Phase 3: CI/CD Pipeline Enhancements

**Priority:** 🟡 Medium  
**Estimated Effort:** 1 week  
**Impact:** Faster feedback, better separation of concerns, improved reliability

### 3.1 Separate CI and Deploy Workflows

**Current State:** Single workflow handles both CI and deployment  
**Target State:** Separate workflows for CI checks and deployment

**Implementation Steps:**

1. **Create `ci.yml` Workflow**
   - Runs on all PRs and pushes to main
   - Includes: format check, lint, unit tests, E2E tests, build
   - No deployment step
   - Fast feedback (CI-only)

2. **Create `deploy.yml` Workflow**
   - Triggered by successful CI workflow completion
   - Only runs on main branch
   - Builds with GitHub Pages basePath
   - Deploys to GitHub Pages

3. **Benefits of Separation:**
   - Faster PR feedback (no deployment overhead)
   - Clearer workflow purposes
   - Can run CI multiple times without deploying
   - Deployment only happens after all checks pass

**Reference:** FFC template `.github/workflows/ci.yml` and `.github/workflows/deploy.yml`

**Current File to Refactor:** `.github/workflows/nextjs.yml`

---

### 3.2 Dependabot Configuration

**Current State:** No automated dependency management  
**Target State:** Weekly automated dependency update PRs

**Implementation Steps:**

1. **Create `.github/dependabot.yml`**:
   ```yaml
   version: 2
   updates:
     # npm dependencies
     - package-ecosystem: 'npm'
       directory: '/'
       schedule:
         interval: 'weekly'
         day: 'monday'
         time: '09:00'
       open-pull-requests-limit: 10
       commit-message:
         prefix: 'npm'
         include: 'scope'
       labels:
         - 'dependencies'
         - 'npm'
       groups:
         production-dependencies:
           dependency-type: 'production'
           update-types: ['minor', 'patch']
         development-dependencies:
           dependency-type: 'development'
           update-types: ['minor', 'patch']
     
     # GitHub Actions
     - package-ecosystem: 'github-actions'
       directory: '/'
       schedule:
         interval: 'weekly'
         day: 'monday'
         time: '09:00'
       open-pull-requests-limit: 5
       commit-message:
         prefix: 'ci'
       labels:
         - 'dependencies'
         - 'github-actions'
   ```

2. **Enable in Repository Settings**
   - Settings → Security & Analysis → Dependabot alerts (enable)
   - Settings → Security & Analysis → Dependabot security updates (enable)

**Benefits:**
- Automated dependency updates
- Security vulnerability notifications
- Grouped updates for easier review
- Reduced technical debt from outdated dependencies

**Reference:** FFC template `.github/dependabot.yml`

---

### 3.3 Improved Cache Strategy

**Current State:** Basic Next.js cache  
**Target State:** Optimized caching for faster builds

**Implementation Steps:**

1. **Update Cache Configuration** in workflows:
   ```yaml
   - name: Restore Next.js cache
     uses: actions/cache@v4
     with:
       path: |
         .next/cache
       key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}-${{ hashFiles('**/*.[jt]s', '**/*.[jt]sx') }}
       restore-keys: |
         ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}-
   ```

2. **Cache Playwright Browsers** (if applicable)

**Reference:** FFC template `.github/workflows/deploy.yml`

---

## Phase 4: Documentation Improvements

**Priority:** 🟢 Low-Medium  
**Estimated Effort:** 1-2 weeks  
**Impact:** Better onboarding, clearer processes, reduced questions

### 4.1 Comprehensive Testing Guide

**Current State:** No testing documentation  
**Target State:** Complete TESTING.md guide

**Implementation Steps:**

1. **Create TESTING.md** covering:
   - Quick test checklist
   - Automated test suite overview
   - Unit testing guide (Jest)
   - E2E testing guide (Playwright)
   - Accessibility testing guide
   - Running tests locally and in CI
   - Writing new tests
   - Security testing (CodeQL, npm audit)
   - Test coverage requirements

**Reference:** FFC template `TESTING.md`

---

### 4.2 Dependabot Usage Guide

**Current State:** No Dependabot documentation  
**Target State:** DEPENDABOT.md guide

**Implementation Steps:**

1. **Create DEPENDABOT.md** covering:
   - Overview of Dependabot components
   - Features enabled
   - Configuration file explanation
   - Working with Dependabot PRs
   - Best practices
   - Troubleshooting

**Reference:** FFC template `DEPENDABOT.md`

---

### 4.3 Enhanced Contributing Guide

**Current State:** Good CONTRIBUTING.md exists  
**Target State:** Enhanced with code quality sections

**Implementation Steps:**

1. **Add to CONTRIBUTING.md:**
   - Pre-commit hook setup instructions
   - Commit message format requirements
   - Code formatting guidelines
   - Testing requirements before PR
   - Local testing workflow

**Reference:** FFC template `CONTRIBUTING.md` sections on code quality

---

### 4.4 Community Health Files

**Current State:** Basic CODE_OF_CONDUCT, SECURITY, SUPPORT missing  
**Target State:** Complete community health files

**Implementation Steps:**

1. **Create/Enhance Files:**
   - `CODE_OF_CONDUCT.md` - Community standards
   - Update `SECURITY.md` - Expand with threat model, vulnerability response
   - `SUPPORT.md` - Where to get help
   - `.github/CODEOWNERS` - Code ownership
   - `.github/FUNDING.yml` - Donation links

**Reference:** FFC template community health files

---

## Phase 5: Security & Branch Protection

**Priority:** 🔴 High (Security), 🟡 Medium (Branch Protection)  
**Estimated Effort:** 1 week (setup), ongoing (maintenance)  
**Impact:** Improved security posture, protected main branch

### 5.1 Enhanced Security Documentation

**Current State:** Basic SECURITY.md  
**Target State:** Comprehensive security documentation

**Implementation Steps:**

1. **Expand SECURITY.md** to include:
   - Branch protection rules explanation
   - Required status checks
   - Security best practices for developers
   - Working with protected branches
   - Common issues and solutions
   - Known vulnerabilities tracking
   - Security monitoring process

**Reference:** FFC template `SECURITY.md`

---

### 5.2 Branch Protection Rules

**Current State:** Unknown protection status  
**Target State:** Protected main branch with required checks

**Implementation Steps:**

1. **Enable Branch Protection** (Settings → Branches → Add rule for `main`):
   - ✅ Require a pull request before merging
   - ✅ Require status checks to pass:
     - CI workflow
     - CodeQL scanning
   - ✅ Require signed commits (recommended)
   - ✅ Block force pushes
   - ✅ Restrict deletions

2. **Document Rules** in SECURITY.md

**Benefits:**
- Prevents direct pushes to main
- Ensures all code is reviewed
- Blocks merges until tests pass
- Maintains clean commit history

**Reference:** FFC template `SECURITY.md` branch protection section

---

### 5.3 GitHub Security Features

**Current State:** CodeQL enabled  
**Target State:** All relevant security features enabled

**Implementation Steps:**

1. **Verify Enabled** (Settings → Security & Analysis):
   - ✅ Dependency graph
   - ✅ Dependabot alerts
   - ✅ Dependabot security updates
   - ✅ Code scanning (CodeQL)

2. **Configure Secret Scanning** (if available for public repos)

---

### 5.4 npm Audit in CI

**Current State:** No npm audit checks in CI  
**Target State:** Automated security checks for dependencies

**Implementation Steps:**

1. **Add to CI Workflow**:
   ```yaml
   - name: Security audit
     run: npm audit --audit-level=moderate
   ```

2. **Set Failure Threshold:** Fail on moderate or higher severity

**Benefits:**
- Early detection of vulnerable dependencies
- Blocks merges with known vulnerabilities

---

## Phase 6: Performance & Monitoring

**Priority:** 🟢 Low  
**Estimated Effort:** 1-2 weeks  
**Impact:** Performance tracking, regression prevention

### 6.1 Lighthouse CI Integration

**Current State:** No automated performance testing  
**Target State:** Lighthouse CI runs on PRs and deployments

**Implementation Steps:**

1. **Install Lighthouse CI**
   ```bash
   npm install --save-dev @lhci/cli
   ```

2. **Create Configuration** (`lighthouserc.json`):
   ```json
   {
     "ci": {
       "collect": {
         "staticDistDir": "./out",
         "numberOfRuns": 3,
         "url": [
           "http://localhost/index.html",
           "http://localhost/donate/index.html"
         ]
       },
       "assert": {
         "preset": "lighthouse:recommended",
         "assertions": {
           "categories:performance": ["warn", {"minScore": 0.6}],
           "categories:accessibility": ["warn", {"minScore": 0.8}],
           "categories:best-practices": ["warn", {"minScore": 0.8}],
           "categories:seo": ["warn", {"minScore": 0.9}]
         }
       },
       "upload": {
         "target": "temporary-public-storage"
       }
     }
   }
   ```

3. **Create Workflow** (`.github/workflows/lighthouse.yml`):
   - Runs after deployment
   - Runs on PRs
   - Posts results to PR comments
   - Uploads HTML reports

**Benefits:**
- Tracks performance over time
- Catches performance regressions
- Ensures accessibility standards
- SEO optimization monitoring

**Reference:** FFC template `.github/workflows/lighthouse.yml`, `lighthouserc.json`

---

### 6.2 Bundle Size Monitoring

**Current State:** No bundle size tracking  
**Target State:** Monitor and alert on bundle size growth

**Implementation Steps:**

1. **Add Bundle Analysis** (optional):
   ```bash
   npm install --save-dev @next/bundle-analyzer
   ```

2. **Track First Load JS** in build output

3. **Measure Current Bundle Size:**
   - Run the build process and record the size of the main bundle(s) (e.g., using `@next/bundle-analyzer` or similar tools).

4. **Set Budget Thresholds Based on Baseline:**
   - Target: Set an initial target slightly below the current measured size to encourage optimization.
   - Maximum: Set a hard limit (e.g., 20% above current size) to prevent uncontrolled growth.
   - Example (to be updated after measurement):  
     - Target: < 500KB  
     - Maximum: < 1MB

**Reference:** FFC template performance documentation

---

### 6.3 Link Validation

**Current State:** No automated link checking  
**Target State:** Validate internal and external links

**Implementation Steps:**

1. **Install Linkinator**
   ```bash
   npm install --save-dev linkinator
   ```

2. **Create Configuration** (`.linkinatorrc.json`):
   ```json
   {
     "skip": "^(?!http://localhost)",
     "recurse": true,
     "timeout": 5000,
     "retry": true
   }
   ```

3. **Add Script to package.json**
   ```json
   "check-links": "linkinator ./out --recurse --config .linkinatorrc.json"
   ```

**Benefits:**
- Prevents broken links
- Validates external resources
- Improves user experience

**Reference:** FFC template `.linkinatorrc.json`, link checking workflow

---

## Tracking and Prioritization

### Priority Levels

**🔴 High Priority (Phase 1 & 5 - Address within 3 months):**
- Testing infrastructure (critical for quality)
- Security features and branch protection
- CI/CD reliability

**🟡 Medium Priority (Phase 2 & 3 - Address within 6 months):**
- Code quality tools (developer experience)
- CI/CD enhancements
- Dependency management

**🟢 Low Priority (Phase 4 & 6 - Address within 12 months):**
- Documentation improvements
- Performance monitoring
- Nice-to-have enhancements

---

### Implementation Roadmap

**Quarter 1 (Months 1-3):**
- [ ] Complete Phase 1: Testing Infrastructure
- [ ] Start Phase 2: Code Quality Tools
- [ ] Implement critical Phase 5 items (security)

**Quarter 2 (Months 4-6):**
- [ ] Complete Phase 2: Code Quality
- [ ] Complete Phase 3: CI/CD Enhancements
- [ ] Complete Phase 5: Branch Protection

**Quarter 3 (Months 7-9):**
- [ ] Complete Phase 4: Documentation
- [ ] Start Phase 6: Performance Monitoring

**Quarter 4 (Months 10-12):**
- [ ] Complete Phase 6: Performance
- [ ] Review and refine all improvements
- [ ] Update documentation

---

### Current Action Items

**Immediate (Next Sprint):**
- [ ] Set up Jest and write first 3 component tests
- [ ] Install Prettier and format codebase
- [ ] Create Dependabot configuration
- [ ] Enable branch protection rules

**Short Term (Next Quarter):**
- [ ] Implement Playwright E2E tests
- [ ] Set up Husky pre-commit hooks
- [ ] Split CI and Deploy workflows
- [ ] Add npm audit to CI
- [ ] Create CODE_QUALITY.md

**Long Term (Next 6-12 Months):**
- [ ] Implement Lighthouse CI
- [ ] Add bundle size monitoring
- [ ] Create comprehensive TESTING.md
- [ ] Create DEPENDABOT.md guide
- [ ] Add link validation

---

### Review Schedule

**Monthly Review:**
- Review progress on current phase
- Assess priority changes
- Update action items
- Address blockers

**Quarterly Review:**
- Re-evaluate phase priorities
- Plan next quarter's work
- Update this document
- Celebrate wins

**Annual Review:**
- Comprehensive review of all improvements
- Major refactoring planning
- Technology stack updates
- Long-term roadmap

---

## Differences from FFC Template (Intentional)

The following items exist in the FFC template but are **not recommended** for KCCF-web:

### 1. EditorConfig
**FFC Has:** `.editorconfig` file  
**KCCF Status:** Not needed if Prettier is adopted  
**Reason:** Prettier handles all formatting; EditorConfig adds redundancy

### 2. Multiple E2E Test Files
**FFC Has:** Many specific test files  
**KCCF Status:** Start smaller  
**Reason:** KCCF-web has fewer pages; can start with fewer tests and expand

### 3. Extensive Documentation Files
**FFC Has:** 30+ markdown documentation files  
**KCCF Status:** Adopt selectively  
**Reason:** Some FFC docs are specific to their use case (Facebook Events, Cloudflare setup, etc.)

### 4. Admin Page Features
**FFC Has:** JSON-based CMS admin page  
**KCCF Status:** Not applicable  
**Reason:** KCCF uses different content management approach (direct code edits)

---

## Related Documentation

- [README.md](./README.md) - Main project documentation
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contribution guidelines
- [SECURITY.md](./SECURITY.md) - Security policies
- [EXTERNAL_SERVICES.md](./EXTERNAL_SERVICES.md) - Third-party services guide
- [FFC Template Repository](https://github.com/FreeForCharity/FFC_Single_Page_Template) - Reference repository

---

## Questions or Concerns?

If you have questions about technical debt items or want to propose changes:

- Open a GitHub Discussion
- Create an issue with label `technical-debt`
- Contact repository maintainers via [thekccf.org/contact](https://thekccf.org/contact)

---

**Document Maintenance:**
- Update this document when technical debt items are added or resolved
- Review and update priorities quarterly
- Keep the action items section current
- Reference specific commits or PRs that address items
