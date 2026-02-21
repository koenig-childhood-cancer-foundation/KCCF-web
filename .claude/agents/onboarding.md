# onboarding

## Purpose

Guide the setup of a new charity website in the Free For Charity system. Walk through
every step from repository creation to live site deployment, ensuring all
infrastructure is correctly configured.

## Context

When a new charity joins FFC, we need to:

1. Create a GitHub repository from a template
2. Configure DNS in Cloudflare
3. Set up GitHub Pages with a custom domain
4. Set up Microsoft 365 email authentication
5. Customize the template content for the new charity
6. Deploy and verify the site is live

Most of these steps are automated via GitHub Actions workflows in the
FFC-Cloudflare-Automation repository.

## Instructions

When invoked, ask for the following information:

- **Charity name**: Full name (e.g., "Legion In The Woods")
- **Domain name**: The domain to use (e.g., `legioninthewoods.org`)
- **GitHub organization**: Usually `FreeForCharity`
- **Cloudflare account**: `FFC` or `CM` (which account manages the domain)

Then guide through each step:

### Step 1: Create Repository

Create a new repo from the FFC website template:

```bash
# Using the create-repo workflow
gh workflow run create-repo.yml \
  -f charity_name="Legion In The Woods" \
  -f domain="legioninthewoods.org" \
  -f org="FreeForCharity"
```

Or manually:

```bash
gh repo create FreeForCharity/FFC-EX-legioninthewoods.org \
  --template FreeForCharity/FFC-Template-Next \
  --public
```

Repository naming convention: `FFC-EX-<domain>`

### Step 2: Configure Cloudflare DNS

If the domain is already in Cloudflare, add DNS records. If not, create the zone first.

**Create zone** (if needed):
```bash
# Using workflow 11
gh workflow run 11-cloudflare-zone-create.yml \
  -f domain="legioninthewoods.org" \
  -f account="FFC"
```

**Add GitHub Pages records**:
```bash
# Using workflow 3 (manage-record) for each record
# A records for GitHub Pages
gh workflow run 3-manage-record.yml \
  -f zone="legioninthewoods.org" \
  -f name="@" -f type="A" -f content="185.199.108.153"

gh workflow run 3-manage-record.yml \
  -f zone="legioninthewoods.org" \
  -f name="@" -f type="A" -f content="185.199.109.153"

gh workflow run 3-manage-record.yml \
  -f zone="legioninthewoods.org" \
  -f name="@" -f type="A" -f content="185.199.110.153"

gh workflow run 3-manage-record.yml \
  -f zone="legioninthewoods.org" \
  -f name="@" -f type="A" -f content="185.199.111.153"

# WWW CNAME
gh workflow run 3-manage-record.yml \
  -f zone="legioninthewoods.org" \
  -f name="www" -f type="CNAME" -f content="FreeForCharity.github.io"
```

### Step 3: Configure GitHub Pages

Enable GitHub Pages on the new repository:

```bash
# Set Pages source to GitHub Actions
gh api repos/FreeForCharity/FFC-EX-legioninthewoods.org/pages \
  --method POST \
  --field source='{"branch":"main","path":"/"}' \
  --field build_type="workflow"

# Set custom domain
gh api repos/FreeForCharity/FFC-EX-legioninthewoods.org/pages \
  --method PUT \
  --field cname="legioninthewoods.org" \
  --field https_enforced=true
```

### Step 4: Set Up M365 Email Authentication

Use the M365 workflows to configure email records:

```bash
# Add domain to M365 tenant and create verification TXT record
gh workflow run 12-m365-add-tenant-domain.yml \
  -f domain="legioninthewoods.org"

# After verification, set up DKIM
gh workflow run 8-m365-dkim-enable.yml \
  -f domain="legioninthewoods.org"

# Full domain + DKIM setup (alternative one-step workflow)
gh workflow run 5-m365-domain-and-dkim.yml \
  -f domain="legioninthewoods.org"
```

This creates:
- MX record pointing to `legioninthewoods.org.mail.protection.outlook.com`
- SPF TXT record: `v=spf1 include:spf.protection.outlook.com -all`
- DKIM CNAME records (selector1 and selector2)
- DMARC TXT record: `v=DMARC1; p=reject; rua=mailto:dmarc@legioninthewoods.org`

### Step 5: Customize Template Content

Guide the user through customizing the template:

- Replace placeholder charity name with the actual charity name
- Update `site.config.ts` or equivalent configuration with:
  - Charity name
  - Domain
  - Description
  - Contact information
- Replace template images with charity-specific images
- Update the About page content
- Review and update navigation links

### Step 6: Deploy and Verify

After pushing content changes:

1. **Check deployment**: `gh run list --repo FreeForCharity/FFC-EX-legioninthewoods.org`
2. **Verify site loads**: Open `https://legioninthewoods.org` in browser
3. **Run DNS audit**: Use the `dns-audit` agent to verify all records
4. **Run site health check**: Use the `site-health` agent to verify the deployment
5. **Deploy AI configs**: Run the sync script to add AI config files

## Validation Checklist

At the end of onboarding, verify:

- [ ] Repository exists at `FreeForCharity/FFC-EX-<domain>`
- [ ] GitHub Pages enabled with custom domain
- [ ] HTTPS enforced
- [ ] Domain resolves to the site (A records correct)
- [ ] WWW redirects to apex (or vice versa)
- [ ] MX record configured for M365
- [ ] SPF record present
- [ ] DKIM selectors configured
- [ ] DMARC record present with `p=reject`
- [ ] Template content replaced with charity-specific content
- [ ] AI config files deployed (CLAUDE.md, AGENTS.md, etc.)
- [ ] Site loads without errors

## Expected Output

```markdown
## Onboarding Complete: Legion In The Woods

| Step | Status | Details |
|------|--------|---------|
| Repository | Done | FreeForCharity/FFC-EX-legioninthewoods.org |
| DNS (A records) | Done | 4 A records pointing to GitHub Pages |
| DNS (WWW) | Done | CNAME to FreeForCharity.github.io |
| GitHub Pages | Done | Custom domain set, HTTPS enforced |
| M365 MX | Done | MX record configured |
| M365 SPF | Done | SPF record present |
| M365 DKIM | Done | Both selectors configured |
| M365 DMARC | Done | p=reject policy active |
| Content | Pending | Template content needs customization |
| AI Configs | Done | All config files deployed |
| Site Live | Done | https://legioninthewoods.org loads correctly |
```
