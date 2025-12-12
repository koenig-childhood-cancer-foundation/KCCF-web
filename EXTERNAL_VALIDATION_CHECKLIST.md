# External Validation Checklist

This document lists items that require external review or validation following the go-live transition from `https://staging.thekccf.org` to `https://thekccf.org`.

---

## Document Purpose

Following the production go-live, these items require manual verification by a team member with appropriate access to external services and accounts.

---

## Domain & DNS Configuration

### Items to Verify

- [ ] **Custom domain DNS records** - Verify `thekccf.org` DNS is correctly pointed to GitHub Pages
- [ ] **SSL certificate** - Confirm HTTPS is active and certificate is valid
- [ ] **Domain verification** - Ensure domain ownership is verified in GitHub Pages settings

### How to Verify

1. Visit `https://thekccf.org` and confirm the site loads properly
2. Check for valid SSL certificate (padlock icon in browser)
3. In GitHub repository Settings → Pages, verify custom domain configuration

---

## Email Configuration

### Email Addresses in Use

The codebase references two email addresses for different purposes:

| Email | Purpose | Location |
|-------|---------|----------|
| `join@thekccf.org` | Public contact email (for visitors) | Footer, Contact page, Privacy page |
| `info@thekccf.org` | Outbound service emails | EXTERNAL_SERVICES.md (recommended for platforms) |

### Items to Verify

- [ ] **Mailchimp sender email** - Verify sender email is configured correctly
- [ ] **Monday.com automations** - Verify form submission emails use correct sender
- [ ] **Zeffy notifications** - Verify donation receipt emails are sent from correct address
- [ ] **GiveLively confirmations** - Verify donation confirmation emails are configured
- [ ] **SPF record** - Verify DNS includes: `v=spf1 include:_spf.google.com include:servers.mcsv.net include:spf.monday.com ~all`
- [ ] **DKIM records** - Verify DKIM is configured for each email sending platform
- [ ] **DMARC record** - Verify `_dmarc.thekccf.org` TXT record is configured

### How to Verify

1. Send test form submissions from each Monday.com form
2. Subscribe to newsletter and verify email sender
3. Make a test donation on Zeffy and verify receipt email
4. Use mail-tester.com to check email deliverability

---

## Third-Party Service Integrations

### Monday.com Forms

Verify all form embed IDs are active and functional:

| Form | Embed ID | Status |
|------|----------|--------|
| Camp Camper Registration | `41086441b740b6e179cbde8b574bd794` | [ ] Verified |
| Camp Counselor Application | `87920448930e50b7a0554e414662d32b` | [ ] Verified |
| Crazy Socks Sponsor | `78b71c024990383d274ad455e744923a` | [ ] Verified |
| Book Elana | `0caf48b3cfeede4c889e59ac52ce5fb1` | [ ] Verified |
| Volunteer Application | `650d6c93433108a85097471c822b4cbf` | [ ] Verified |
| Contact Form | `7d2a1baf81662443852a38886ac80dd4` | [ ] Verified |
| Aid Application | `972de98e599d383218e348dd923eec38` | [ ] Verified |

### Mailchimp Newsletter

- [ ] **Embed URL active** - Verify `https://thekccf.us17.list-manage.com/subscribe?u=041a777be61cc7e1bc20e3517&id=8696f27783`
- [ ] **List ID valid** - `8696f27783`
- [ ] **User ID valid** - `041a777be61cc7e1bc20e3517`

### Zeffy Donation Platform

- [ ] **Donation form active** - `https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-18649`
- [ ] **P2P fundraising page active** - `https://www.zeffy.com/en-US/peer-to-peer/peer-to-peer-fundraisers`
- [ ] **Leaderboard widget active** - `https://www.zeffy.com/en-US/embed/leaderboard/peer-to-peer-fundraisers`
- [ ] **Organization profile updated** - Contact email set to `info@thekccf.org`

### GiveLively

- [ ] **Widget script active** - `https://secure.givelively.org/widgets/simple_donation/koenig-childhood-cancer-foundation.js`
- [ ] **Organization profile updated** - Contact information current

---

## Analytics & Tracking

### Google Tag Manager

- [ ] **Container ID valid** - `GTM-P2SBKM7K`
- [ ] **Tags firing correctly** - Test with GTM Preview mode
- [ ] **Consent mode working** - Verify analytics only fire after consent

### Google Analytics

- [ ] **Property configured** - Verify GA4 property exists
- [ ] **Data stream active** - Confirm data is being received
- [ ] **Hostname filter** - Verify `thekccf.org` is tracked (not staging)

### Microsoft Clarity

- [ ] **Project active** - Verify Clarity project is receiving data
- [ ] **Domain configured** - Confirm `thekccf.org` is the tracked domain

---

## SEO & Search Engines

### Items to Verify

- [ ] **Google Search Console** - Add and verify `https://thekccf.org` property
- [ ] **Submit sitemap** - Submit `https://thekccf.org/sitemap.xml` to Google
- [ ] **robots.txt accessible** - Verify `https://thekccf.org/robots.txt` is accessible
- [ ] **Request indexing** - Request Google to index key pages

### Staging URL Cleanup (if applicable)

- [ ] **Remove staging from Search Console** - If `staging.thekccf.org` was indexed
- [ ] **Check for staging backlinks** - Ensure external links point to production domain
- [ ] **Redirect staging** - Consider 301 redirect from staging to production (if DNS allows)

---

## Social Media & External Links

### Profile Links to Verify

| Platform | Profile URL | Status |
|----------|-------------|--------|
| Facebook | `https://www.facebook.com/theKCCF` | [ ] Verified |
| X (Twitter) | `https://x.com/TheKccf` | [ ] Verified |
| LinkedIn | `https://www.linkedin.com/company/thekccf/` | [ ] Verified |
| Instagram | `https://www.instagram.com/elanalailakoenig/` | [ ] Verified |

### Website Links in Profiles

- [ ] **Update Facebook website link** - Point to `https://thekccf.org`
- [ ] **Update Twitter/X website link** - Point to `https://thekccf.org`
- [ ] **Update LinkedIn website link** - Point to `https://thekccf.org`
- [ ] **Update Instagram website link** - Point to `https://thekccf.org`

---

## Charity/Nonprofit Registrations

### Profiles to Update

- [ ] **GuideStar/Candid** - Update website URL to `https://thekccf.org`
- [ ] **Charity Navigator** - Update website URL
- [ ] **GreatNonprofits** - Update website URL

---

## Legal & Compliance

### Items to Verify

- [ ] **Privacy Policy** - Review and confirm all references are accurate
- [ ] **Cookie consent** - Test banner and preferences modal functionality
- [ ] **Terms (if applicable)** - Review any terms of service

---

## Testing Checklist

### Functional Testing

- [ ] **Navigation** - All menu links work correctly
- [ ] **Donation modal** - Opens and processes donations
- [ ] **Form modals** - All forms load and submit correctly
- [ ] **Newsletter signup** - Subscription works
- [ ] **Dark mode** - Theme toggle works
- [ ] **Mobile responsiveness** - Site displays correctly on mobile
- [ ] **Cookie consent** - Banner appears and preferences save correctly

### Cross-Browser Testing

- [ ] **Chrome** - Site works correctly
- [ ] **Firefox** - Site works correctly
- [ ] **Safari** - Site works correctly
- [ ] **Edge** - Site works correctly
- [ ] **Mobile Safari** - Site works correctly
- [ ] **Mobile Chrome** - Site works correctly

---

## Notes

- Document created: November 2025
- Last updated: November 2025
- Created as part of production go-live documentation review

---

## Questions for Team

1. Should `join@thekccf.org` and `info@thekccf.org` both remain active, or should one be standardized across all touchpoints?
2. Are there any staging-specific analytics properties that need to be deactivated?
3. Are there any external partners or vendors who need to update their links to KCCF?
