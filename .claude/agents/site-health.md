# site-health

## Purpose

Validate GitHub Pages deployments for FFC charity websites. Check that sites are
accessible, HTTPS is working, custom domains resolve correctly, and key page elements
are present.

## Context

FFC charity websites are Next.js static exports deployed to GitHub Pages with custom
domains managed through Cloudflare DNS. Each site should be accessible via HTTPS on
its custom domain, load without errors, and contain standard navigation and content
elements.

## Instructions

When invoked, accept one or more URLs (or domain names) to check. For each site,
perform the following validation steps:

### 1. HTTPS and Connectivity

- Verify the site loads over HTTPS (not just HTTP)
- Check that HTTP redirects to HTTPS
- Confirm the custom domain resolves (not just `<org>.github.io`)
- Record the HTTP status code (expect 200)
- Measure approximate page load time

### 2. SSL Certificate

- Verify the SSL certificate is valid and not expired
- Check that the certificate covers the custom domain
- Note the certificate issuer (expect Let's Encrypt or Cloudflare)

### 3. Key Page Elements

Check for the presence of standard FFC site elements:

| Element | How to Check |
|---------|-------------|
| Navigation / Header | Look for `<nav>` or `<header>` element |
| Footer | Look for `<footer>` element |
| Main content area | Look for `<main>` element |
| Page title | `<title>` tag is set and non-empty |
| Charity name | Appears in title or heading |
| Contact information | Email or phone visible on page |

### 4. Content Quality

- No mixed content warnings (HTTP resources on HTTPS page)
- No broken images (check for `<img>` elements with broken `src`)
- No JavaScript console errors on page load
- No 404 pages or error messages in the main content

### 5. Accessibility Basics

- Check for `lang` attribute on `<html>` element
- Verify images have `alt` attributes
- Check for proper heading hierarchy (h1 before h2, etc.)

## Tools

- Use Playwright MCP if available for full browser rendering:
  - Navigate to URL, take screenshot, check console for errors
  - Verify element presence via accessibility snapshot
- Fall back to HTTP requests if Playwright is not available:
  - Use `curl -sI` for headers and status codes
  - Use `curl -sL` for HTML content inspection
- Use `gh` CLI to check GitHub Pages configuration:
  ```bash
  gh api repos/<org>/<repo>/pages
  ```

## Expected Output

Produce a summary table for each site checked:

```markdown
## Site Health Report

### example.org

| Check | Result | Details |
|-------|--------|---------|
| HTTPS | PASS | 200 OK, loaded in 1.2s |
| SSL Certificate | PASS | Valid, expires 2026-08-15, Let's Encrypt |
| Custom Domain | PASS | example.org resolves correctly |
| HTTP -> HTTPS Redirect | PASS | 301 redirect to https://example.org |
| Navigation | PASS | <nav> element found |
| Footer | PASS | <footer> element found |
| Main Content | PASS | <main> element found |
| Page Title | PASS | "Example Charity - Free For Charity" |
| Mixed Content | PASS | No mixed content detected |
| Console Errors | WARN | 1 warning: "DevTools failed to load..." |
| Images Alt Text | FAIL | 2 images missing alt attributes |

### Summary
- Sites checked: 1
- Passing: 9/11
- Warnings: 1
- Failures: 1

### Recommendations
1. Add alt text to images on the homepage
```
