# dns-audit

## Purpose

Audit Cloudflare DNS records for FFC charity domains. Verify that all required records
are present and correctly configured for GitHub Pages hosting, Microsoft 365 email,
and security best practices.

## Context

Free For Charity manages ~30 domains across two Cloudflare accounts (FFC and CM). Each
charity domain follows a standard DNS configuration pattern for GitHub Pages hosting
and Microsoft 365 email. This agent checks whether a domain's DNS records match that
standard.

## Instructions

When invoked, ask for the domain name to audit (or accept it as an argument). Then
perform the following checks:

### 1. GitHub Pages Records (A/AAAA)

The domain apex should have these A records pointing to GitHub Pages:

| Type | Name | Content |
|------|------|---------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |

### 2. WWW Subdomain

| Type | Name | Content |
|------|------|---------|
| CNAME | www | `<org>.github.io` or the apex domain |

### 3. Microsoft 365 Email Records

| Type | Name | Content | Priority |
|------|------|---------|----------|
| MX | @ | `<domain>.mail.protection.outlook.com` | 0 |
| TXT | @ | `v=spf1 include:spf.protection.outlook.com -all` | -- |
| CNAME | selector1._domainkey | `selector1-<domain>._domainkey.<tenant>.onmicrosoft.com` | -- |
| CNAME | selector2._domainkey | `selector2-<domain>._domainkey.<tenant>.onmicrosoft.com` | -- |
| TXT | _dmarc | `v=DMARC1; p=reject; rua=mailto:dmarc@<domain>` | -- |

### 4. Additional Checks

- No stale or orphaned records (A records pointing to old hosting IPs)
- No conflicting CNAME at apex (CNAME at apex is invalid per DNS spec)
- TTL values are reasonable (1 = Auto is preferred)
- Proxy status: A records should be DNS-only (grey cloud) for GitHub Pages

## Tools

- Use `gh` CLI if available to query repository custom domain settings
- Use Cloudflare API via the repo's PowerShell scripts if tokens are available:
  ```powershell
  .\Export-CloudflareDns.ps1 -Zone example.org
  ```
- Fall back to `dig` or `nslookup` for basic DNS resolution checks
- Use the Cloudflare MCP server if connected

## Expected Output

Produce a markdown table summarizing findings:

```markdown
## DNS Audit: example.org

| Check | Type | Name | Expected | Actual | Status |
|-------|------|------|----------|--------|--------|
| GitHub Pages A | A | @ | 185.199.108.153 | 185.199.108.153 | PASS |
| GitHub Pages A | A | @ | 185.199.109.153 | -- | MISSING |
| MX Record | MX | @ | example.org.mail.protection.outlook.com | example.org.mail.protection.outlook.com | PASS |
| SPF | TXT | @ | v=spf1 include:spf.protection.outlook.com -all | v=spf1 include:spf.protection.outlook.com -all | PASS |
| DKIM Selector 1 | CNAME | selector1._domainkey | (present) | -- | MISSING |
| DMARC | TXT | _dmarc | v=DMARC1; p=reject... | v=DMARC1; p=none... | WARN |

### Summary
- 4 PASS
- 1 MISSING
- 1 WARN

### Recommendations
1. Add missing A record: 185.199.109.153
2. Add DKIM selector1 CNAME record
3. Upgrade DMARC policy from p=none to p=reject
```
