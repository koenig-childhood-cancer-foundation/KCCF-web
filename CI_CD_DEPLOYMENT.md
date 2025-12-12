# CI/CD & Deployment Guide

This document provides comprehensive information about the continuous integration, deployment pipeline, and infrastructure configuration for the KCCF website.

---

## Table of Contents

1. [Overview](#overview)
2. [CI/CD Architecture](#cicd-architecture)
3. [GitHub Actions Workflows](#github-actions-workflows)
4. [Deployment Pipeline](#deployment-pipeline)
5. [Environment Configuration](#environment-configuration)
6. [Build Process](#build-process)
7. [GitHub Pages Setup](#github-pages-setup)
8. [Monitoring & Troubleshooting](#monitoring--troubleshooting)
9. [Security Considerations](#security-considerations)
10. [Best Practices](#best-practices)

---

## Overview

### Deployment Strategy

The KCCF website uses a **static site deployment** strategy with GitHub Pages as the hosting platform:

- **Framework**: Next.js 15 with static export (`output: 'export'`)
- **Hosting**: GitHub Pages (free, reliable, CDN-backed)
- **CI/CD**: GitHub Actions (automated testing and deployment)
- **Build Output**: Static HTML/CSS/JS files in the `out/` directory
- **Domain**: Custom domain `thekccf.org` with SSL/TLS

### Key Benefits

- ✅ **Zero server costs** - GitHub Pages is free for public repositories
- ✅ **Global CDN** - Fast content delivery worldwide via GitHub's infrastructure
- ✅ **Automatic SSL** - Free HTTPS certificate with custom domain
- ✅ **Version control** - Every deployment is tracked via Git commits
- ✅ **Rollback capability** - Easy to revert to previous versions
- ✅ **No server maintenance** - No servers to patch or manage

---

## CI/CD Architecture

### Pipeline Flow

```
┌─────────────────┐
│ Developer Push  │
│ or PR Creation  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Trigger CI/CD  │
│  GitHub Actions │
└────────┬────────┘
         │
         ├──────────────────┐
         │                  │
         ▼                  ▼
┌─────────────────┐  ┌──────────────┐
│   CI Checks     │  │   Security   │
│  - Lint         │  │  - CodeQL    │
│  - Type Check   │  │  - Scan JS   │
│  - Build        │  │  - Scan YML  │
└────────┬────────┘  └──────────────┘
         │
         ▼
    ┌────────┐
    │  PR?   │
    └───┬────┘
        │
   ┌────┴─────┐
   │          │
  Yes         No
   │          │
   │          ▼
   │    ┌────────────┐
   │    │ Main Push? │
   │    └─────┬──────┘
   │          │
   │         Yes
   │          │
   │          ▼
   │    ┌─────────────────┐
   │    │  Upload Artifact│
   │    │  (out/ folder)  │
   │    └────────┬────────┘
   │             │
   │             ▼
   │    ┌─────────────────┐
   │    │  Deploy to      │
   │    │  GitHub Pages   │
   │    └────────┬────────┘
   │             │
   │             ▼
   │    ┌─────────────────┐
   │    │  Live at        │
   │    │  thekccf.org    │
   │    └─────────────────┘
   │
   └──> (Stop - No Deploy)
```

### Workflow Triggers

| Trigger | Workflows Run | Deployment? |
|---------|---------------|-------------|
| Pull Request | CI (lint, type-check, build) + CodeQL | ❌ No |
| Push to Main | CI + CodeQL + Deploy | ✅ Yes |
| Manual Trigger | CI + Deploy (if main) | ✅ Conditional |
| Weekly Schedule | CodeQL only | ❌ No |

---

## GitHub Actions Workflows

### 1. CI/CD Workflow (`.github/workflows/nextjs.yml`)

**Purpose**: Main workflow for continuous integration and deployment.

#### Configuration Details

```yaml
name: CI/CD
on:
  pull_request:           # Runs on all PRs
  push:
    branches: ["main"]    # Runs on main branch pushes
  workflow_dispatch:      # Allows manual triggering
```

#### Permissions

```yaml
permissions:
  contents: read          # Read repository contents
  pages: write           # Deploy to GitHub Pages
  id-token: write        # OIDC token for Pages deployment
```

#### Concurrency Control

```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: ${{ github.ref != 'refs/heads/main' }}
```

- **PR branches**: New pushes cancel in-progress runs (saves minutes)
- **Main branch**: Deployments always complete (prevents broken state)

#### Jobs

##### CI Job (`ci`)

Runs on: `ubuntu-latest`

**Steps:**

1. **Checkout** - Uses `actions/checkout@v4`
2. **Setup Node** - Node.js 20 with npm cache
3. **Setup Pages** - Configures GitHub Pages (main branch only)
4. **Restore Cache** - Caches `.next/cache` for faster builds
5. **Install Dependencies** - `npm ci` (clean install from lockfile)
6. **Lint** - `npm run lint` (ESLint checks)
7. **Type Check** - `npx tsc --noEmit` (TypeScript validation)
8. **Build** - `npm run build` (static export to `out/`)
9. **Upload Artifact** - Uploads `out/` folder (main branch only)

**Cache Strategy:**

```yaml
key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}-${{ hashFiles('**/*.[jt]s', '**/*.[jt]sx') }}
```

- Cache invalidates when dependencies or source code changes
- Significantly reduces build time (30-60% faster)

##### Deploy Job (`deploy`)

Runs on: `ubuntu-latest`  
Depends on: `ci` job completion  
Condition: Only on main branch pushes

**Steps:**

1. **Deploy to GitHub Pages** - Uses `actions/deploy-pages@v4`
   - Deploys artifact from CI job
   - Updates Pages deployment
   - Returns deployment URL

**Environment:**

- Name: `github-pages`
- URL: Captured from deployment output
- Protected environment (requires approval settings in repo)

---

### 2. CodeQL Security Workflow (`.github/workflows/codeql.yml`)

**Purpose**: Automated security vulnerability scanning using GitHub Advanced Security.

#### Configuration Details

```yaml
name: "CodeQL Advanced"
on:
  push:
    branches: ["main"]
  pull_request:
    branches: ["main"]
  schedule:
    - cron: '28 1 * * 1'  # Weekly scans on Mondays at 1:28 AM UTC
```

#### Languages Analyzed

1. **JavaScript/TypeScript** - All `.js`, `.jsx`, `.ts`, `.tsx` files
2. **GitHub Actions** - All workflow YAML files

#### Job Configuration

- **Runner**: `ubuntu-latest` (or `macos-latest` for Swift)
- **Timeout**: 30 minutes per job
- **Permissions**: `security-events: write`, `packages: read`, `actions: read`, `contents: read`

#### Security Queries

- Default security queries for each language
- Can be extended with `security-extended` or `security-and-quality` packs

#### Build Mode

- **None** - No build required (JavaScript/TypeScript are interpreted)
- Scans source code directly for vulnerabilities

#### Results

- Uploaded to GitHub Security tab
- Visible in Pull Request checks
- Creates alerts for identified vulnerabilities

---

## Deployment Pipeline

### Deployment Stages

#### Stage 1: Code Quality Validation

**Purpose**: Ensure code meets quality standards before deployment.

**Checks:**

- **Linting** (`npm run lint`)
  - Enforces ESLint rules
  - Catches common code issues
  - Ensures consistent code style
  - **Note**: Build continues even with warnings (configured in `next.config.ts`)

- **Type Checking** (`npx tsc --noEmit`)
  - Validates TypeScript types
  - Catches type errors at build time
  - No output files generated (check only)

**Failure Behavior**: Pipeline stops if checks fail; no deployment occurs.

#### Stage 2: Build Process

**Purpose**: Generate production-ready static files.

**Process:**

1. Next.js builds the application
2. Static export generates HTML/CSS/JS files
3. Files output to `out/` directory
4. Build artifacts are optimized for production

**Build Configuration** (`next.config.ts`):

```typescript
{
  output: 'export',              // Static site generation
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,          // Required for static export
  },
  eslint: {
    ignoreDuringBuilds: true,   // Don't block build on lint warnings
  }
}
```

**Output Structure:**

```
out/
├── index.html              # Home page
├── 404.html                # Custom 404 page
├── donate/
│   └── index.html
├── _next/
│   ├── static/             # Static assets (JS, CSS)
│   └── ...
├── images/                 # Public images
└── ...                     # Other pages
```

#### Stage 3: Artifact Upload

**Purpose**: Package build output for deployment.

**Process:**

- Uses `actions/upload-pages-artifact@v3`
- Uploads entire `out/` directory
- Creates deployment artifact
- Artifact is stored temporarily for deploy job

**Size Considerations:**

- Typical artifact size: 5-15 MB
- Max artifact size: 10 GB (GitHub Pages limit)
- Includes all static assets, HTML, CSS, JS

#### Stage 4: GitHub Pages Deployment

**Purpose**: Deploy static site to GitHub Pages.

**Process:**

1. Download artifact from upload step
2. Deploy to GitHub Pages infrastructure
3. Update DNS routing (if custom domain)
4. Propagate changes across CDN
5. Return deployment URL

**Deployment Time:**

- Upload: ~10-30 seconds
- Propagation: ~1-2 minutes
- Total: ~2-3 minutes from push to live

**URL Patterns:**

- **Default**: `https://koenig-childhood-cancer-foundation.github.io/KCCF-web/`
- **Custom Domain**: `https://thekccf.org` (configured via CNAME)

---

## Environment Configuration

### Environment Variables

The application supports the following environment variables:

#### Local Development (`.env.local`)

```env
# Site environment (affects SEO indexing)
NEXT_PUBLIC_SITE_ENV=development

# Base path for deployment (optional)
NEXT_PUBLIC_BASE_PATH=

# Google Tag Manager ID (optional)
NEXT_PUBLIC_GTM_ID=GTM-P2SBKM7K
```

#### GitHub Actions Environment

**Available Variables:**

- `GITHUB_TOKEN` - Automatically provided, used for deployments
- `GITHUB_REF` - Git reference (branch/tag)
- `GITHUB_SHA` - Commit SHA
- `GITHUB_ACTOR` - User who triggered workflow

**Custom Variables:**

Currently none required for deployment. All configuration is in code or workflow files.

#### Production Environment

**Domain Configuration:**

- Custom domain: `thekccf.org`
- Configured via GitHub Pages settings
- CNAME record managed in repository (`public/CNAME` - auto-generated)

**SEO Configuration:**

- `robots.txt` - Generated from `src/app/robots.ts`
- `sitemap.xml` - Generated from `src/app/sitemap.ts`
- PWA manifest - Generated from `src/app/manifest.ts`

---

## Build Process

### Build Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `next dev --turbopack` | Local development with hot reload |
| `build` | `next build` | Production build (static export) |
| `export` | `next build` | Same as build (legacy alias) |
| `preview` | `npx http-server ./out -p 3000 -c-1` | Preview built site locally |
| `start` | `next start` | Not used (requires server mode) |
| `lint` | `next lint` | Run ESLint checks |

### Build Performance

**Typical Build Times:**

- Fresh build (no cache): ~60-90 seconds
- Cached build: ~20-40 seconds
- Lint + Type check + Build: ~90-120 seconds

**Optimization Techniques:**

1. **Caching**: `.next/cache` directory cached between builds
2. **Turbopack**: Development server uses Turbopack for faster HMR
3. **Static Export**: Pre-renders all pages at build time
4. **Image Optimization**: Disabled (not needed for static hosting)

### Build Artifacts

**Generated Files:**

- **HTML**: One file per route
- **CSS**: Bundled and minified
- **JavaScript**: Bundled, minified, and split into chunks
- **Assets**: Images, fonts, icons copied to output

**Asset Fingerprinting:**

- Files include content hash in filename (e.g., `chunk-abc123.js`)
- Enables long-term caching
- Cache busting on content changes

---

## GitHub Pages Setup

### Repository Configuration

**Location**: Repository Settings → Pages

**Configuration:**

- **Source**: GitHub Actions
- **Branch**: Not applicable (Actions-based deployment)
- **Custom Domain**: `thekccf.org`
- **Enforce HTTPS**: ✅ Enabled

### Custom Domain Configuration

#### DNS Records

**Required DNS Configuration:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | `www` | `koenig-childhood-cancer-foundation.github.io` | 3600 |
| A | `@` | `185.199.108.153` | 3600 |
| A | `@` | `185.199.109.153` | 3600 |
| A | `@` | `185.199.110.153` | 3600 |
| A | `@` | `185.199.111.153` | 3600 |

**Note**: These are GitHub Pages IP addresses. They may change; always verify current IPs in [GitHub's documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

#### HTTPS/SSL Certificate

- **Provider**: GitHub Pages (Let's Encrypt)
- **Renewal**: Automatic
- **Configuration**: Enforced HTTPS enabled in repository settings
- **Verification**: Domain ownership verified via DNS

#### Domain Verification

1. Add custom domain in GitHub Pages settings
2. GitHub verifies domain ownership via DNS
3. SSL certificate is automatically provisioned
4. HTTPS is enforced after verification

**Verification Status**: Check in repository Settings → Pages

---

## Monitoring & Troubleshooting

### Monitoring Deployment Status

#### GitHub Actions Interface

1. Navigate to repository → **Actions** tab
2. View workflow runs and their status
3. Click on a run to see detailed logs
4. Each step shows duration and output

#### Deployment History

1. Repository → **Settings** → **Pages**
2. View recent deployments
3. See deployment URLs and timestamps
4. Check deployment status

#### Viewing Logs

**CI Job Logs:**

- Checkout
- Node setup
- Dependency installation
- Lint output
- Type check output
- Build logs with warnings/errors
- Artifact upload status

**Deploy Job Logs:**

- Pages configuration
- Deployment status
- Deployment URL

### Common Issues & Solutions

#### Issue: Build Fails

**Symptoms:**
- CI job fails at build step
- Error messages in GitHub Actions logs

**Solutions:**

1. **Check Build Logs**:
   ```bash
   # Local reproduction
   npm ci
   npm run build
   ```

2. **Common Causes**:
   - TypeScript errors → Fix type issues
   - Missing dependencies → Run `npm ci`
   - Import errors → Check file paths
   - Environment issues → Verify Node version

3. **Verify Locally**:
   - Ensure build passes locally before pushing
   - Use Node 20 (same as CI)

#### Issue: Lint Warnings

**Symptoms:**
- Yellow warning in Actions
- Build continues but warnings shown

**Solutions:**

1. **Review Warnings**:
   ```bash
   npm run lint
   ```

2. **Fix Issues**:
   - Unused variables
   - Missing dependencies in useEffect
   - Console statements
   - ESLint rule violations

3. **Note**: Builds are configured to continue with warnings (see `next.config.ts`)

#### Issue: Deployment Not Updating

**Symptoms:**
- Build succeeds
- Deployment succeeds
- Website doesn't show changes

**Solutions:**

1. **Clear Browser Cache**:
   - Hard refresh: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)
   - Or use private/incognito window

2. **Check CDN Propagation**:
   - Wait 2-5 minutes for global CDN update
   - Test from different locations/networks

3. **Verify Deployment**:
   - Check GitHub Pages deployment URL
   - Confirm custom domain points to correct pages

4. **Check DNS**:
   ```bash
   dig thekccf.org
   nslookup thekccf.org
   ```

#### Issue: 404 Errors on Routes

**Symptoms:**
- Home page loads
- Other pages show 404

**Solutions:**

1. **Check Base Path Configuration**:
   - Verify `next.config.ts` basePath setting
   - Ensure trailing slashes are correct

2. **Verify Static Export**:
   - Check `out/` directory structure
   - Ensure all routes have `index.html` files

3. **GitHub Pages Fallback**:
   - Add `404.html` at root (already present)
   - GitHub Pages serves this for missing pages

#### Issue: Images Not Loading

**Symptoms:**
- Broken image icons
- 404 errors for image paths

**Solutions:**

1. **Check Image Paths**:
   - Use relative paths from `public/`
   - Example: `/images/logo.png` (not `./images/logo.png`)

2. **Verify Build Output**:
   - Check images are in `out/` directory
   - Verify file names match exactly (case-sensitive)

3. **Check Next.js Image Config**:
   - Confirm `unoptimized: true` in `next.config.ts`
   - Required for static export

#### Issue: SSL/HTTPS Errors

**Symptoms:**
- Certificate warnings
- Mixed content errors
- HTTPS not enforcing

**Solutions:**

1. **Verify Domain Configuration**:
   - Check GitHub Pages settings
   - Ensure HTTPS enforcement is enabled
   - Wait for certificate provisioning (up to 24 hours)

2. **Check DNS Records**:
   - Verify CNAME points to GitHub Pages
   - Ensure CAA records allow Let's Encrypt

3. **Mixed Content**:
   - All external resources must use HTTPS
   - Check iframe sources, scripts, stylesheets

### Debugging Workflow Issues

#### Enable Debug Logging

Add to workflow file:

```yaml
env:
  ACTIONS_RUNNER_DEBUG: true
  ACTIONS_STEP_DEBUG: true
```

This provides verbose output for troubleshooting.

#### Test Workflow Changes

1. **Use Pull Requests**:
   - Test workflow changes in PRs first
   - Verify they work before merging

2. **Manual Triggers**:
   - Use `workflow_dispatch` to test manually
   - Avoids affecting main branch

3. **Branch Protection**:
   - Require status checks before merging
   - Prevents broken workflows on main

---

## Security Considerations

### Secret Management

**Current Secrets:**

- None required for deployment
- `GITHUB_TOKEN` is automatically provided

**Best Practices:**

- Never commit `.env.local` files
- Use GitHub Secrets for any future API keys
- Rotate secrets regularly
- Limit secret access to necessary workflows

### HTTPS/TLS

**Configuration:**

- HTTPS enforced via GitHub Pages settings
- TLS 1.2+ only
- Automatic certificate renewal
- HSTS headers recommended

### Dependency Security

**Automated Scanning:**

- Dependabot enabled (GitHub default)
- Security advisories notifications
- Automated PR creation for updates

**Manual Auditing:**

```bash
npm audit
npm audit fix
```

**Update Schedule:**

- Review updates weekly
- Apply security patches immediately
- Test before deploying

### CodeQL Security Scanning

**Coverage:**

- All JavaScript/TypeScript code
- GitHub Actions workflow files
- Weekly scheduled scans

**Alert Management:**

1. View alerts in Security tab
2. Review each alert for validity
3. Fix or dismiss with justification
4. Re-run scan to verify fix

**Custom Queries:**

Can be added via workflow configuration:

```yaml
queries: security-extended,security-and-quality
```

### Content Security Policy

**Recommendation**: Add CSP headers via GitHub Pages configuration or reverse proxy.

**Example Headers** (future consideration):

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' *.googletagmanager.com; style-src 'self' 'unsafe-inline';
```

**Current Implementation**: None (GitHub Pages limitations)

---

## Best Practices

### Development Workflow

1. **Branch from Main**:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/your-feature
   ```

2. **Local Development**:
   ```bash
   npm install
   npm run dev
   ```

3. **Before Pushing**:
   ```bash
   npm run lint
   npm run build
   ```

4. **Create Pull Request**:
   - CI runs automatically
   - Wait for checks to pass
   - Request review

5. **After Approval**:
   - Merge to main
   - Automatic deployment occurs
   - Verify deployment

### Code Quality

**Pre-commit Checks:**

- Run lint locally: `npm run lint`
- Fix errors before committing
- Use TypeScript strict mode

**Pull Request Guidelines:**

- Keep changes focused
- Provide clear descriptions
- Reference related issues
- Include screenshots for UI changes

### Performance Optimization

**Image Optimization:**

- Use appropriate formats (WebP for photos, SVG for icons)
- Compress images before adding
- Use responsive images when possible

**Code Splitting:**

- Next.js handles automatically
- Use dynamic imports for large components
- Lazy load below-the-fold content

**Caching Strategy:**

- Static assets cached by CDN
- Use versioned filenames (automatic)
- Configure cache headers if using reverse proxy

### Monitoring Best Practices

**Regular Checks:**

- Review GitHub Actions history weekly
- Monitor deployment success rate
- Check for failed workflows

**Performance Monitoring:**

- Use Google Analytics (already integrated)
- Monitor page load times
- Track Core Web Vitals

**Security Monitoring:**

- Review CodeQL alerts weekly
- Check Dependabot updates
- Monitor security advisories

### Rollback Procedures

**Quick Rollback** (if deployment breaks production):

1. **Identify Last Working Commit**:
   ```bash
   git log --oneline
   ```

2. **Revert to Last Working State**:
   ```bash
   git revert <bad-commit-sha>
   git push origin main
   ```
   Or:
   ```bash
   git reset --hard <good-commit-sha>
   git push --force origin main  # Use with caution!
   ```

3. **Alternative - Redeploy Previous Version**:
   - Go to Actions → Successful workflow
   - Click "Re-run jobs"
   - Redeploys that version

**Note**: Force push is typically avoided. Prefer `git revert` for main branch.

### Documentation

**Keep Updated:**

- Document workflow changes in this file
- Update README for user-facing changes
- Note configuration changes in commit messages

**Architecture Decisions:**

- Document why choices were made
- Reference relevant issues/discussions
- Keep history for future reference

---

## Appendix

### Useful Commands

```bash
# Local development
npm install              # Install dependencies
npm run dev             # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build locally

# Testing
npm run lint            # Run linting
npx tsc --noEmit        # Type checking

# Git workflow
git status              # Check status
git log --oneline       # View commit history
git branch -a           # List all branches

# Debugging
npm audit               # Check for vulnerabilities
npm outdated            # Check for updates
```

### GitHub Pages Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [GitHub Actions for Pages](https://github.com/actions/deploy-pages)
- [Troubleshooting GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites)

### Next.js Resources

- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)
- [Next.js on GitHub Pages](https://nextjs.org/docs/app/building-your-application/deploying/static-exports#github-pages)

### GitHub Actions Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)
- [Actions Marketplace](https://github.com/marketplace?type=actions)

---

**Document Version**: 1.0  
**Last Updated**: December 2025  
**Maintained By**: KCCF Web Team
