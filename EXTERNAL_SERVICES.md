# KCCF External Services Guide

This document provides a comprehensive overview of all external third-party services integrated with the KCCF website. Configuration for these services is managed in their respective external platforms, not in this repository.

---

## Table of Contents

1. [Service Overview](#service-overview)
2. [Forms & Data Collection](#forms--data-collection)
   - [Monday.com](#mondaycom)
   - [Mailchimp](#mailchimp)
3. [Donations & Fundraising](#donations--fundraising)
   - [Zeffy](#zeffy)
   - [GiveLively](#givelively)
4. [Analytics & Tracking](#analytics--tracking)
   - [Google Tag Manager](#google-tag-manager)
   - [Google Analytics](#google-analytics)
   - [Microsoft Clarity](#microsoft-clarity)
5. [Email Configuration](#email-configuration)
6. [Cookie Consent Integration](#cookie-consent-integration)
7. [Troubleshooting](#troubleshooting)

---

## Service Overview

### All External Services

| Service | Category | Purpose | URL |
|---------|----------|---------|-----|
| **Monday.com** | Forms | Data collection forms (camp, volunteer, contact, etc.) | forms.monday.com |
| **Mailchimp** | Forms | Newsletter subscriptions | list-manage.com |
| **Zeffy** | Donations | Primary donation platform & peer-to-peer (P2P) fundraising | zeffy.com |
| **GiveLively** | Donations | Alternative donation widget | givelively.org |
| **Google Tag Manager** | Analytics | Tag management & consent orchestration | googletagmanager.com |
| **Google Analytics** | Analytics | Website traffic & behavior analytics | analytics.google.com |
| **Microsoft Clarity** | Analytics | Heatmaps & session recordings | clarity.microsoft.com |

### Repository Files

| File | Services Referenced |
|------|---------------------|
| `src/contexts/FormModalContext.tsx` | Monday.com, Mailchimp form configurations |
| `src/components/FormModal.tsx` | Form display modal |
| `src/components/DonationModal.tsx` | Zeffy, GiveLively donation forms |
| `src/app/fundraisers/page.tsx` | Zeffy peer-to-peer fundraising |
| `src/components/GoogleTagManager.tsx` | GTM integration |
| `src/contexts/CookieConsentContext.tsx` | Consent management for analytics |

---

## Forms & Data Collection

### Monday.com

Monday.com powers 7 embedded forms for data collection across the site.

#### Service Details

- **Platform URL**: https://monday.com
- **Integration Type**: Embedded iframe forms
- **GTM ID**: `GTM-P2SBKM7K` (used for analytics tracking, not for loading forms)

#### Forms in Use

| Form Type | Purpose | Embed ID |
|-----------|---------|----------|
| `camp-camper` | Camp registration for children | `41086441b740b6e179cbde8b574bd794` |
| `camp-counselor` | Camp counselor applications | `87920448930e50b7a0554e414662d32b` |
| `crazy-socks-sponsor` | Corporate gift bag sponsorship | `78b71c024990383d274ad455e744923a` |
| `book-elana` | Elana speaking engagements | `0caf48b3cfeede4c889e59ac52ce5fb1` |
| `volunteer` | Volunteer applications | `650d6c93433108a85097471c822b4cbf` |
| `contact` | General contact form | `7d2a1baf81662443852a38886ac80dd4` |
| `aid-application` | Financial assistance applications | `972de98e599d383218e348dd923eec38` |

#### Configuration

1. **Access**: Log in at https://monday.com
2. **Forms Location**: Navigate to workspace containing KCCF forms
3. **Email Settings**: 
   - Go to **Admin** → **Account Settings** → **Email & Notifications**
   - Verify `info@thekccf.org` as sender email
   - Update automations for each form to use `info@thekccf.org`

#### Support
- Documentation: https://support.monday.com/hc/en-us/articles/360007186319
- Support: https://support.monday.com/

---

### Mailchimp

Mailchimp handles newsletter subscriptions.

#### Service Details

- **Platform URL**: https://mailchimp.com
- **Integration Type**: Embedded subscription form
- **Embed URL**: `https://thekccf.us17.list-manage.com/subscribe?u=041a777be61cc7e1bc20e3517&id=8696f27783`

#### Configuration

1. **Access**: Log in at https://mailchimp.com
2. **Audience Settings**: Navigate to your KCCF audience
3. **Sender Email**: 
   - Go to **Audience** → **Settings** → **Audience name and defaults**
   - Update **Default From email address** to `info@thekccf.org`
4. **Domain Authentication**:
   - Go to **Account** → **Settings** → **Domains**
   - Verify `thekccf.org` domain

#### Support
- Documentation: https://mailchimp.com/help/
- Email authentication: https://mailchimp.com/help/set-up-email-domain-authentication/

---

## Donations & Fundraising

### Zeffy

Zeffy is the primary donation platform, handling one-time donations, recurring donations, and peer-to-peer fundraising.

#### Service Details

- **Platform URL**: https://www.zeffy.com
- **Integration Type**: Embedded iframes and widgets
- **Fee Model**: 100% free for nonprofits (no transaction fees)

#### Integrations

| Component | Location | Embed URL |
|-----------|----------|-----------|
| Donation Modal (Primary) | `DonationModal.tsx` | `https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-18649` |
| Fundraisers Page | `/fundraisers` | `https://www.zeffy.com/en-US/peer-to-peer/peer-to-peer-fundraisers` |
| Leaderboard Widget | `/fundraisers` | `https://www.zeffy.com/embed/leaderboard/peer-to-peer-fundraisers` |

#### Configuration

1. **Access**: Log in at https://www.zeffy.com
2. **Organization Settings**: 
   - Go to **Settings** → **Organization Profile**
   - Update contact email to `info@thekccf.org`
3. **Email Notifications**:
   - Go to **Settings** → **Notifications**
   - Update sender email for donation receipts
   - Update peer-to-peer campaign notification emails
4. **Campaign Settings**:
   - Review each active donation form and campaign
   - Update any campaign-specific email settings

#### Support
- Documentation: https://support.zeffy.com/
- Contact: support@zeffy.com

---

### GiveLively

GiveLively provides an alternative donation option, supporting PayPal, Venmo, and Donor-Advised Funds (DAFs).

#### Service Details

- **Platform URL**: https://www.givelively.org
- **Integration Type**: JavaScript widget
- **Widget URL**: `https://secure.givelively.org/widgets/simple_donation/koenig-childhood-cancer-foundation.js`

#### Configuration

1. **Access**: Log in at https://www.givelively.org
2. **Organization Profile**:
   - Go to **Settings** → **Organization Profile**
   - Update primary contact email to `info@thekccf.org`
3. **Notification Settings**:
   - Update donation confirmation sender email
   - Update tax receipt settings

#### Support
- Documentation: https://www.givelively.org/support
- Contact: support@givelively.org

---

## Analytics & Tracking

### Google Tag Manager

Google Tag Manager (GTM) serves as the central hub for managing all analytics tags and respecting user consent preferences.

#### Service Details

- **Platform URL**: https://tagmanager.google.com
- **Container ID**: `GTM-P2SBKM7K`
- **Integration File**: `src/components/GoogleTagManager.tsx`

#### How It Works

1. GTM loads automatically on page load (functional/necessary service)
2. GTM manages consent mode for analytics services
3. Tags fire based on user consent preferences:
   - **Analytics consent** → Google Analytics, Microsoft Clarity
   - **Marketing consent** → Marketing pixels, retargeting

#### Configuration

1. **Access**: Log in at https://tagmanager.google.com
2. **Select Container**: Choose the KCCF container (`GTM-P2SBKM7K`)
3. **Tags Management**:
   - Google Analytics 4 tag
   - Microsoft Clarity tag
   - Consent mode configuration
4. **Triggers**: Configure triggers based on consent state
5. **Variables**: Set up consent-related variables

#### Consent Integration

GTM is configured to work with the site's cookie consent system:
- Tags respect `analytics` consent category
- Consent mode signals are passed to GTM
- Analytics only fire after user accepts analytics cookies

#### Support
- Documentation: https://support.google.com/tagmanager/
- GTM Community: https://www.googletagmanagercommunity.com/

---

### Google Analytics

Google Analytics 4 (GA4) provides website traffic and user behavior analytics.

#### Service Details

- **Platform URL**: https://analytics.google.com
- **Integration**: Managed through Google Tag Manager
- **Consent Required**: Yes (analytics category)

#### Tracked Data

- Page views and navigation
- User sessions and engagement
- Traffic sources and campaigns
- Events (form submissions, button clicks, etc.)

#### Configuration

1. **Access**: Log in at https://analytics.google.com
2. **Property Settings**: Navigate to KCCF property
3. **Data Streams**: Verify web stream is configured
4. **GTM Integration**: GA4 tag is managed in GTM (not directly in code)

#### Privacy Compliance

- GA4 only activates after user consents to analytics cookies
- Consent state is managed via `CookieConsentContext.tsx`
- Users can revoke consent through cookie preferences modal

#### Support
- Documentation: https://support.google.com/analytics/
- GA4 Setup Guide: https://support.google.com/analytics/answer/9306384

---

### Microsoft Clarity

Microsoft Clarity provides heatmaps and session recordings to understand user behavior.

#### Service Details

- **Platform URL**: https://clarity.microsoft.com
- **Integration**: Managed through Google Tag Manager
- **Consent Required**: Yes (analytics category)
- **Cost**: Free

#### Features

- Heatmaps (click, scroll, area)
- Session recordings
- User insights and analytics
- Integration with Google Analytics

#### Configuration

1. **Access**: Log in at https://clarity.microsoft.com
2. **Project Settings**: Navigate to KCCF project
3. **Setup**:
   - Clarity is integrated via GTM
   - No direct code installation required
4. **Privacy Settings**:
   - Configure masking for sensitive content
   - Set up session recording filters

#### Privacy Compliance

- Clarity only activates after user consents to analytics cookies
- Session recordings respect consent preferences
- Sensitive data can be masked in recordings

#### Support
- Documentation: https://learn.microsoft.com/en-us/clarity/
- FAQ: https://clarity.microsoft.com/faq

---

## Email Configuration

All outbound emails from KCCF services should use `info@thekccf.org` for consistent branding.

### Platforms to Update

| Platform | Email Setting Location |
|----------|----------------------|
| Monday.com | Admin → Account Settings → Email & Notifications |
| Mailchimp | Audience → Settings → Audience name and defaults |
| Zeffy | Settings → Organization Profile / Notifications |
| GiveLively | Settings → Organization Profile / Notifications |

### DNS Authentication

For reliable email delivery, configure these DNS records for `thekccf.org`:

#### SPF Record
```
v=spf1 include:_spf.google.com include:servers.mcsv.net include:spf.monday.com ~all
```

#### DKIM
Configure DKIM through each platform's domain verification settings.

#### DMARC
```
_dmarc.thekccf.org TXT "v=DMARC1; p=none; rua=mailto:info@thekccf.org"
```

### Testing Email Configuration

After updating settings, test each platform:
- [ ] Monday.com form submissions send from `info@thekccf.org`
- [ ] Mailchimp newsletters send from `info@thekccf.org`
- [ ] Zeffy donation receipts send from `info@thekccf.org`
- [ ] GiveLively confirmations send correctly

---

## Cookie Consent Integration

The site uses a custom cookie consent system to manage user preferences for analytics services.

### Consent Categories

| Category | Description | Services Affected |
|----------|-------------|-------------------|
| **Necessary** | Always enabled, required for site function | Forms (Monday.com, Mailchimp), Donations |
| **Analytics** | User behavior tracking | Google Analytics, Microsoft Clarity |
| **Marketing** | Advertising and retargeting | Marketing pixels |
| **Functional** | Enhanced features | N/A |

### Implementation Files

- `src/contexts/CookieConsentContext.tsx` - Consent state management
- `src/components/CookieConsentBanner.tsx` - Initial consent prompt
- `src/components/ConsentPreferencesModal.tsx` - Detailed preferences

### How Consent Affects Services

1. **Forms & Donations**: Load immediately (necessary services)
2. **GTM**: Loads immediately but passes consent signals to tags
3. **Analytics Tags**: Only fire when analytics consent is granted
4. **Marketing Tags**: Only fire when marketing consent is granted

---

## Troubleshooting

### Forms Not Loading

1. **Check embed IDs**: Verify form IDs in `FormModalContext.tsx` match platform
2. **Check form status**: Ensure forms are published in Monday.com/Mailchimp
3. **Test iframe URL**: Load the embed URL directly in browser
4. **Cookie consent**: Some forms may require cookies to be accepted

### Donations Not Working

1. **Zeffy status**: Check https://status.zeffy.com/
2. **Widget loading**: Verify GiveLively script is loading
3. **Payment processor**: Check if payment methods are configured in platform

### Analytics Not Tracking

1. **Consent status**: User must accept analytics cookies
2. **GTM container**: Verify container ID `GTM-P2SBKM7K` is correct
3. **Tag configuration**: Check tags are properly configured in GTM
4. **Browser extensions**: Ad blockers may block analytics

### Emails Going to Spam

1. **Verify sender**: Ensure `info@thekccf.org` is verified in each platform
2. **Check DNS**: Verify SPF, DKIM, DMARC records
3. **Test delivery**: Use mail-tester.com to check email reputation
4. **Review content**: Avoid spam trigger words

### Platform-Specific Support

| Platform | Support URL |
|----------|-------------|
| Monday.com | https://support.monday.com/ |
| Mailchimp | https://mailchimp.com/help/ |
| Zeffy | https://support.zeffy.com/ |
| GiveLively | https://www.givelively.org/support |
| Google Tag Manager | https://support.google.com/tagmanager/ |
| Google Analytics | https://support.google.com/analytics/ |
| Microsoft Clarity | https://learn.microsoft.com/en-us/clarity/ |

---

## Quick Reference

### Service IDs

| Service | ID/Key |
|---------|--------|
| GTM Container | `GTM-P2SBKM7K` |
| Mailchimp User ID | `041a777be61cc7e1bc20e3517` |
| Mailchimp List ID | `8696f27783` |
| Zeffy Donation Form | `donate-to-make-a-difference-18649` |
| Zeffy P2P | `peer-to-peer-fundraisers` |

### Standard Email

All outbound emails should use:
```
info@thekccf.org
```

### Website Issues

For issues related to service integration in the website:
- Create an issue: https://github.com/koenig-childhood-cancer-foundation/KCCF-web/issues
- Contact: info@thekccf.org
