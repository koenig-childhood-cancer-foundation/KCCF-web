## The Koenig Childhood Cancer Foundation (KCCF) Website

Production-ready Next.js site for the Koenig Childhood Cancer Foundation with modern features including dark mode, cookie consent management, donation modals, and comprehensive form modal system.

### Tech stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **UI**: React 19, Tailwind CSS 4
- **Linting**: ESLint (Next.js config)
- **Runtime**: Node.js 20
- **Container**: Docker (standalone Next.js output)
- **Donations**: Zeffy integration (replaces Stripe)
- **Forms**: Monday.com integration via modal system
- **Features**: Dark mode, cookie consent, responsive design, form modals, SEO optimization

---

## Prerequisites
- Node.js 20.x and npm 10+ (Docker image also uses Node 20)
- Optional: Docker and Docker Compose for containerized runs
- Optional: Stripe account and keys if enabling donation flows

## Quick start (local)
```bash
npm install
npm run dev
```
Visit `http://localhost:3000`.

## Environment variables
Create a `.env.local` file in `thekccf.org/` for local development (do not commit this file):
```env
# Currently no environment variables required for basic functionality
# The site uses Zeffy for donations (no API keys needed)
# Cookie consent and theme preferences are stored locally
```
Notes:
- The site currently uses Zeffy for donations which doesn't require API keys
- Cookie consent and theme preferences are managed client-side
- If you add additional integrations later, add their environment variables here

## Project scripts
- `npm run dev`: Start the dev server with Turbopack
- `npm run build`: Production build
- `npm run start`: Start the production server (after build)
- `npm run lint`: Run ESLint

## Running with Docker
Build and run with Compose from the repo root:
```bash
docker-compose up -d --build
```
The app will be available at `http://localhost:3000`.

Details:
- `thekccf.org/Dockerfile` produces a minimal runtime using Next.js standalone output.
- `docker-compose.yml` maps port 3000 and includes a healthcheck on `/api/health`.
- Environment variables are passed through Docker build args and runtime environment.
- Cloudflare R2 is required for file uploads in production.

## Deployment
You can deploy in two common ways:

1) Vercel (recommended)
- This is a standard Next.js app; import the repo into Vercel and set environment variables in the Vercel project settings.

2) Docker container
- Build the image from `thekccf.org/Dockerfile` and run it behind your reverse proxy (e.g., Nginx/Traefik). Set required env vars at runtime.

## Health check
There is a simple health endpoint at:
```
/api/health
```
Used by Docker Compose to verify app readiness.

## Project structure (high level)
```
thekccf.org/
  src/
    app/                 # App Router pages and API routes
      aid/               # Aid/Support page with layout
        layout.tsx       # Aid page metadata and layout
        page.tsx         # Aid application (simplified with modal button)
      camp/              # Camp page with layout
        layout.tsx       # Camp metadata (corporate team-building SEO)
        page.tsx         # Camp registration (modal buttons)
      contact/           # Contact page with layout
        layout.tsx       # Contact metadata (corporate partnerships SEO)
        page.tsx         # Contact form (modal button)
      crazy-socks/       # Crazy Socks campaign with layout
        layout.tsx       # Corporate CSR SEO optimization
        page.tsx         # Page wrapper
        CrazySocksContent.tsx # Main content with modal button
      donate/            # Donations page with layout
        layout.tsx       # Donate metadata (workplace giving SEO)
        page.tsx         # Donation page
      kccf-family/       # KCCF family page
      media/             # Media page with layout
        layout.tsx       # Media metadata
        page.tsx         # Media coverage
      newsletter-signup/ # Newsletter page with layout
        layout.tsx       # Newsletter metadata
        page.tsx         # Newsletter signup (modal button)
      our-story/         # About/KCCF story with layout
        layout.tsx       # Our story metadata
        page.tsx         # Story content (modal button)
      volunteer/         # Volunteer page with layout
        layout.tsx       # Volunteer metadata (corporate volunteering SEO)
        page.tsx         # Volunteer opportunities (modal button)
      page.tsx           # Home
      HomeContent.tsx    # Home page content
      layout.tsx         # Root layout with providers
      globals.css        # Global styles
      manifest.ts        # PWA manifest
      robots.ts          # SEO robots
      sitemap.ts         # SEO sitemap
      opengraph-image.tsx # Social media images
      not-found.tsx      # 404 page
    components/          # Reusable UI components
      DonationModal.tsx  # Embedded donation form modal
      FormModal.tsx      # Monday.com form modal system
      FormButton.tsx     # Form modal trigger buttons
      ConsentPreferencesModal.tsx # Cookie preferences
      CookieConsentBanner.tsx # Cookie consent banner
      ThemeToggle.tsx    # Dark/light mode toggle
      Navigation.tsx     # Site navigation
      Footer.tsx         # Site footer (with newsletter modal button)
      PageHeader.tsx     # Page headers
      DonationButton.tsx # Donation CTA buttons
      SubmissionModal.tsx # Form submission modal
      LoadingSpinner.tsx # Loading indicators
    contexts/            # React contexts
      ThemeContext.tsx   # Dark/light theme management
      CookieConsentContext.tsx # Cookie consent state
      DonationModalContext.tsx # Donation modal state
      FormModalContext.tsx # Form modal state and configurations
      SlideshowContext.tsx # Image slideshow state
  public/                # Static assets (logos, images)
  next.config.js         # Next.js configuration (standalone output)
  Dockerfile             # Production container build (standalone)
  package.json           # Scripts and dependencies
```

## Editing content
- Home content: `src/app/HomeContent.tsx`
- Page content: edit respective `src/app/<route>/page.tsx` files
- Page metadata/SEO: edit respective `src/app/<route>/layout.tsx` files
- Global styles: `src/app/globals.css`
- Navigation/Footer: `src/components/Navigation.tsx`, `src/components/Footer.tsx`
- Theme customization: `src/contexts/ThemeContext.tsx`
- Cookie consent: `src/contexts/CookieConsentContext.tsx`
- Donation modal: `src/components/DonationModal.tsx`
- Form modals: `src/components/FormModal.tsx` and `src/contexts/FormModalContext.tsx`
- **Form documentation:** See "Form Integration" section below for complete inventory of all 10 forms

## Images and optimization
- Static files live in `public/`
- `next.config.js` allows images from the `thekccf.org` domain

## Form integration

### Overview of all forms on the website
The KCCF website uses two main form systems:
1. **Monday.com Forms** - Embedded via modal system for applications, registrations, and contact
2. **Donation Forms** - Zeffy and GiveLively for processing donations

All forms require Marketing cookies to be enabled via the cookie consent banner for display.

### Quick Reference Table

| # | Form Name | Type | Location(s) | Integration | Form ID |
|---|-----------|------|-------------|-------------|---------|
| 1 | Donation Form | Donation | Navigation bar, Home page, Donate page | Zeffy/GiveLively | N/A |
| 2 | Peer-to-Peer Fundraisers | Fundraising | `/fundraisers` | Zeffy | N/A |
| 3 | Camp Camper Registration | Application | `/camp` | Monday.com | `camp-camper` |
| 4 | Camp Counselor Application | Application | `/camp` | Monday.com | `camp-counselor` |
| 5 | Crazy Socks Sponsorship | Corporate Inquiry | `/crazy-socks` | Monday.com | `crazy-socks-sponsor` |
| 6 | Newsletter Signup | Email Subscription | Footer (all pages), `/newsletter-signup` | Mailchimp | `newsletter-signup` |
| 7 | Book Elana Speaking | Booking Request | `/our-story` | Monday.com | `book-elana` |
| 8 | Volunteer Application | Application | `/volunteer` | Monday.com | `volunteer` |
| 9 | Contact Form | General Inquiry | `/contact` | Monday.com | `contact` |
| 10 | Financial Aid Application | Application | `/aid` | Monday.com | `aid-application` |

---

## Complete Form Inventory

### 1. Donation Form (Zeffy/GiveLively)
**Type:** Donation processing  
**Purpose:** Accept monetary donations to support KCCF's mission  
**Location(s):**
- Navigation bar (all pages) - "Donate" button
- Home page (`/`) - Hero section "Donate Now" button
- Donate page (`/donate`) - Primary CTA and multiple donation buttons

**Technical Details:**
- **Component:** `src/components/DonationModal.tsx`
- **Context:** `src/contexts/DonationModalContext.tsx`
- **Integration:** Embedded iframes from Zeffy and GiveLively platforms
- **Providers Available:**
  - Zeffy: https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-18649
  - GiveLively: https://secure.givelively.org/donate/koenig-childhood-cancer-foundation (external redirect)
- **Features:** 
  - Campaign-specific tracking
  - Preset donation amounts
  - One-time and monthly donation options
  - Provider selection (Zeffy or GiveLively)

**How to Test:**
1. Click any "Donate" button on the website
2. Ensure cookie consent has enabled Marketing cookies (manage in footer or banner)
3. Modal should open showing donation options
4. Select donation provider (Zeffy embedded or GiveLively redirect)
5. For Zeffy: Complete embedded form with test payment details
6. For GiveLively: Verify redirect to external secure page
7. Confirm donation processing on respective platform dashboards

**External Verification:**
- Check Zeffy dashboard for donation records
- Check GiveLively dashboard for external donations
- No server-side processing on KCCF website

---

### 2. Peer-to-Peer Fundraisers (Zeffy)
**Type:** Fundraising platform  
**Purpose:** Enable supporters to create and manage peer-to-peer fundraising campaigns  
**Location(s):**
- Fundraisers page (`/fundraisers`) - Full-page embedded platform

**Technical Details:**
- **Component:** `src/app/fundraisers/page.tsx`
- **Integration:** Embedded iframe from Zeffy platform
- **URLs:**
  - Main Platform: https://www.zeffy.com/en-US/peer-to-peer/peer-to-peer-fundraisers
  - Leaderboard: https://www.zeffy.com/embed/leaderboard/peer-to-peer-fundraisers
- **Features:**
  - Create individual fundraising campaigns
  - Track fundraising progress
  - Leaderboard showing top fundraisers
  - Share campaigns on social media

**How to Test:**
1. Navigate to `/fundraisers`
2. Ensure Marketing cookies are enabled
3. Verify main fundraising platform loads in iframe
4. Scroll to see the leaderboard section
5. Test creating or viewing an existing fundraising campaign
6. Verify social sharing functionality

**External Verification:**
- Check Zeffy dashboard for fundraising campaigns
- Individual campaign contributions tracked in Zeffy
- No server-side processing on KCCF website

---

### 3. Camp Camper Registration Form
**Type:** Application/Registration  
**Purpose:** Register children with cancer for KCCF summer camp programs  
**Location(s):**
- Camp page (`/camp`) - "Join as a Camper" card

**Technical Details:**
- **Form ID:** `camp-camper`
- **Monday.com URL:** https://forms.monday.com/forms/embed/41086441b740b6e179cbde8b574bd794?r=use1
- **Modal Title:** "Join as a Camper"
- **Modal Subtitle:** "Register your child for our upcoming camp session. We'll contact you with more details and confirm your spot."
- **Component:** `src/components/FormButton.tsx` triggers modal
- **Iframe Height:** 1550px

**How to Test:**
1. Navigate to `/camp`
2. Ensure Marketing cookies are enabled
3. Click "Register Now" button on the "Join as a Camper" card
4. Modal opens with Monday.com form embedded
5. Fill out registration form with child's information
6. Submit form

**External Verification:**
- Check Monday.com board for new camp camper registrations
- Form submissions appear as new items in the configured Monday.com board
- KCCF staff receive notifications per Monday.com automation settings

---

### 4. Camp Counselor Application Form
**Type:** Application/Registration  
**Purpose:** Apply to be a volunteer camp counselor  
**Location(s):**
- Camp page (`/camp`) - "Join as a Counselor" card

**Technical Details:**
- **Form ID:** `camp-counselor`
- **Monday.com URL:** https://forms.monday.com/forms/embed/87920448930e50b7a0554e414662d32b?r=use1
- **Modal Title:** "Join as a Counselor"
- **Modal Subtitle:** "Join our team of dedicated counselors and help create an amazing camp experience for children with cancer."
- **Component:** `src/components/FormButton.tsx` triggers modal
- **Iframe Height:** 1900px

**How to Test:**
1. Navigate to `/camp`
2. Ensure Marketing cookies are enabled
3. Click "Apply Now" button on the "Join as a Counselor" card
4. Modal opens with Monday.com form embedded
5. Fill out counselor application with volunteer information
6. Submit form

**External Verification:**
- Check Monday.com board for new counselor applications
- Form submissions appear as new items in the configured Monday.com board
- KCCF staff receive notifications per Monday.com automation settings

---

### 5. Crazy Socks Gift Bag Sponsorship Form
**Type:** Corporate sponsorship inquiry  
**Purpose:** Allow companies to sponsor gift bag events for hospitalized children  
**Location(s):**
- Crazy Socks page (`/crazy-socks`) - Two buttons: one in hero section, one at bottom CTA

**Technical Details:**
- **Form ID:** `crazy-socks-sponsor`
- **Monday.com URL:** https://forms.monday.com/forms/embed/78b71c024990383d274ad455e744923a?r=use1
- **Modal Title:** "Sponsor Gift Bag Event"
- **Modal Subtitle:** "For hospitalized children battling cancer"
- **Component:** `src/components/FormButton.tsx` triggers modal
- **Iframe Height:** 2000px

**How to Test:**
1. Navigate to `/crazy-socks`
2. Ensure Marketing cookies are enabled
3. Click either "Sponsor Gift Bag Event" button (top or bottom of page)
4. Modal opens with Monday.com form embedded
5. Fill out corporate sponsorship inquiry
6. Submit form

**External Verification:**
- Check Monday.com board for new sponsorship inquiries
- Form submissions appear as new items in the configured Monday.com board
- KCCF staff receive notifications per Monday.com automation settings

---

### 6. Newsletter Signup Form
**Type:** Email list subscription  
**Purpose:** Subscribe to KCCF newsletter for updates and news  
**Location(s):**
- Footer (all pages) - "Subscribe to Newsletter" button
- Newsletter Signup page (`/newsletter-signup`) - "Sign Up for Newsletter" button

**Technical Details:**
- **Form ID:** `newsletter-signup`
- **External Service URL:** https://thekccf.us17.list-manage.com/subscribe?u=041a777be61cc7e1bc20e3517&id=8696f27783
- **Modal Title:** "Stay Connected"
- **Modal Subtitle:** "Join our newsletter to receive updates about our programs, events, and the families we help."
- **Component:** `src/components/FormButton.tsx` triggers modal
- **Iframe Height:** 650px
- **Note:** This uses Mailchimp instead of Monday.com

**How to Test:**
1. Navigate to any page footer OR `/newsletter-signup`
2. Ensure Marketing cookies are enabled
3. Click "Subscribe to Newsletter" button
4. Modal opens with Mailchimp form embedded
5. Enter email address
6. Submit form
7. Check for confirmation email from Mailchimp

**External Verification:**
- Check Mailchimp audience dashboard for new subscribers
- Subscriber receives welcome/confirmation email
- Email address appears in KCCF's Mailchimp list

---

### 7. Book Elana Speaking Engagement Form
**Type:** Booking/Contact request  
**Purpose:** Request Elana Koenig for speaking engagements at schools and events  
**Location(s):**
- Our Story page (`/our-story`) - "Book Elana for Event" button

**Technical Details:**
- **Form ID:** `book-elana`
- **Monday.com URL:** https://forms.monday.com/forms/embed/0caf48b3cfeede4c889e59ac52ce5fb1?r=use1
- **Modal Title:** "Book Elana Koenig"
- **Modal Subtitle:** "Elana shares her inspiring story at schools, organizations, and events to raise awareness about childhood cancer."
- **Component:** `src/components/FormButton.tsx` triggers modal
- **Iframe Height:** 1900px

**How to Test:**
1. Navigate to `/our-story`
2. Scroll to "Share Elana's Story" section
3. Ensure Marketing cookies are enabled
4. Click "Book Elana for Event" button
5. Modal opens with Monday.com form embedded
6. Fill out speaking engagement request details
7. Submit form

**External Verification:**
- Check Monday.com board for new booking requests
- Form submissions appear as new items in the configured Monday.com board
- KCCF staff receive notifications per Monday.com automation settings

---

### 8. Volunteer Application Form
**Type:** Application/Registration  
**Purpose:** Apply to volunteer with KCCF programs and events  
**Location(s):**
- Volunteer page (`/volunteer`) - "Volunteer Application" button

**Technical Details:**
- **Form ID:** `volunteer`
- **Monday.com URL:** https://forms.monday.com/forms/embed/650d6c93433108a85097471c822b4cbf?r=use1
- **Modal Title:** "Become a Volunteer"
- **Modal Subtitle:** "Ready to make a difference? Complete this form to start your volunteer journey with KCCF."
- **Component:** `src/components/FormButton.tsx` triggers modal
- **Iframe Height:** 3100px

**How to Test:**
1. Navigate to `/volunteer`
2. Scroll to "Become a Volunteer" section
3. Ensure Marketing cookies are enabled
4. Click "Volunteer Application" button
5. Modal opens with Monday.com form embedded
6. Fill out volunteer application with personal information and interests
7. Submit form

**External Verification:**
- Check Monday.com board for new volunteer applications
- Form submissions appear as new items in the configured Monday.com board
- KCCF staff receive notifications per Monday.com automation settings

---

### 9. Contact Form
**Type:** General inquiry  
**Purpose:** Send general messages, questions, or partnership inquiries to KCCF  
**Location(s):**
- Contact page (`/contact`) - "Contact Us" button

**Technical Details:**
- **Form ID:** `contact`
- **Monday.com URL:** https://forms.monday.com/forms/embed/7d2a1baf81662443852a38886ac80dd4?r=use1
- **Modal Title:** "Send Us a Message"
- **Modal Subtitle:** "Get in touch with us. We're here to help and answer any questions you may have."
- **Component:** `src/components/FormButton.tsx` triggers modal
- **Iframe Height:** 1100px

**How to Test:**
1. Navigate to `/contact`
2. Ensure Marketing cookies are enabled
3. Click "Contact Us" button
4. Modal opens with Monday.com form embedded
5. Fill out contact form with name, email, and message
6. Submit form

**External Verification:**
- Check Monday.com board for new contact submissions
- Form submissions appear as new items in the configured Monday.com board
- KCCF staff receive notifications per Monday.com automation settings

---

### 10. Financial Aid Application Form
**Type:** Application for assistance  
**Purpose:** Apply for financial assistance during a child's cancer treatment  
**Location(s):**
- Aid page (`/aid`) - "Apply for Aid" button

**Technical Details:**
- **Form ID:** `aid-application`
- **Monday.com URL:** https://forms.monday.com/forms/embed/972de98e599d383218e348dd923eec38?r=use1
- **Modal Title:** "Apply for Financial Assistance"
- **Modal Subtitle:** "Complete this form to apply for financial assistance during your child's cancer treatment."
- **Component:** `src/components/FormButton.tsx` triggers modal
- **Iframe Height:** 2500px

**How to Test:**
1. Navigate to `/aid`
2. Scroll to "Start Your Application" section
3. Ensure Marketing cookies are enabled
4. Click "Apply for Aid" button
5. Modal opens with Monday.com form embedded
6. Fill out comprehensive application including child information, treatment details, and financial needs
7. Submit form with any required documentation uploads (handled within Monday.com form)

**External Verification:**
- Check Monday.com board for new aid applications
- Form submissions appear as new items in the configured Monday.com board
- File uploads are attached to Monday.com items
- KCCF staff receive notifications per Monday.com automation settings

---

## Form Testing Prerequisites

### Cookie Consent Requirement
**All forms require Marketing cookies to be enabled.** If cookies are not enabled:
1. User sees a message: "Marketing cookies required"
2. User can click "Manage cookie preferences" to enable Marketing cookies
3. Once enabled, forms display properly

**To test cookie consent flow:**
1. Visit website in incognito/private mode
2. Cookie consent banner appears at bottom
3. Click "Customize" to see cookie preferences
4. Enable "Marketing" cookies
5. Forms should now work

### Modal System Architecture
All Monday.com forms use a unified modal system:
- **Context Provider:** `src/contexts/FormModalContext.tsx` - manages form state and configurations
- **Modal Component:** `src/components/FormModal.tsx` - renders the modal UI
- **Button Component:** `src/components/FormButton.tsx` - triggers modal opening
- **Modal Features:**
  - Responsive design (85vh height)
  - Escape key to close
  - Click outside to close
  - Scrollable iframe content
  - Consistent branding across all forms

### Adding New Forms
To add a new Monday.com form to the modal system:

1. **Add form type** to `FormType` union in `src/contexts/FormModalContext.tsx`:
   ```typescript
   export type FormType = 
     | 'camp-camper'
     | 'your-new-form' // Add here
   ```

2. **Add form configuration** to `FORM_CONFIGS` object:
   ```typescript
   'your-new-form': {
     title: 'Your Form Title',
     subtitle: 'Optional description for users',
     src: 'https://forms.monday.com/forms/embed/YOUR_FORM_ID',
     height: '1500px' // Adjust based on form length
   }
   ```

3. **Use FormButton** component on any page:
   ```tsx
   <FormButton formType="your-new-form" variant="violet" size="lg">
     Button Text
   </FormButton>
   ```

### Form Types Reference
- `camp-camper`: Camp registration for children
- `camp-counselor`: Camp counselor applications
- `crazy-socks-sponsor`: Corporate gift bag sponsorship
- `newsletter-signup`: Newsletter subscription (Mailchimp)
- `book-elana`: Elana speaking engagements
- `volunteer`: Volunteer applications
- `contact`: General contact form
- `aid-application`: Financial assistance applications

---

## External Services Used

### Monday.com
- **Purpose:** Form data collection and workflow management
- **Forms:** 7 of 10 forms use Monday.com
- **Access:** Requires Monday.com account with KCCF workspace access
- **Verification:** Check Monday.com boards for form submissions

### Mailchimp
- **Purpose:** Newsletter email list management
- **Forms:** Newsletter signup form only
- **URL:** https://thekccf.us17.list-manage.com/
- **Verification:** Check Mailchimp audience dashboard

### Zeffy
- **Purpose:** Donation processing (primary) and peer-to-peer fundraising
- **Forms:** Donation form (embedded), Peer-to-peer fundraising platform
- **Features:** 0% platform fees, embedded iframe, peer-to-peer campaign creation, leaderboard
- **Verification:** Check Zeffy dashboard for donation records and fundraising campaigns

### GiveLively
- **Purpose:** Donation processing (alternative)
- **Forms:** Donation form (external redirect)
- **Features:** External secure page, alternative to Zeffy
- **Verification:** Check GiveLively dashboard for donation records

---

## Form Testing Summary

### Common Test Steps for All Forms
1. **Enable Marketing Cookies**: Visit site, accept or customize cookies to enable Marketing cookies
2. **Navigate to Form Location**: Use the table above to find where each form is located
3. **Click Form Button**: Trigger the form modal or donation modal
4. **Verify Modal Opens**: Ensure the modal displays with correct title and embedded form
5. **Fill and Submit**: Complete the form with test data and submit
6. **External Verification**: Check the appropriate external service (Monday.com, Mailchimp, Zeffy, or GiveLively)

### Key Testing Notes
- **All 10 forms are production-ready** and actively used
- **No custom HTML forms** exist on the site - all forms use external services
- **Cookie consent is mandatory** for all forms to display
- **Modal forms (8 of 10)** open in responsive overlays with consistent UX
- **Donation form is unique** as it offers two provider options (Zeffy embedded, GiveLively redirect)
- **Peer-to-peer fundraisers** page provides full-page embedded Zeffy platform with leaderboard
- **File uploads** are handled within Monday.com forms (notably aid application)
- **No server-side form processing** on KCCF website - all handled by external services

### Troubleshooting Forms
- **Form not displaying**: Check Marketing cookies are enabled
- **Modal not opening**: Verify FormModalProvider is properly wrapped in layout
- **Form not loading**: Check external service URLs are accessible
- **Submission not working**: Verify on external service dashboard (Monday.com, Mailchimp, Zeffy, GiveLively)
- **Cookie banner not appearing**: Clear browser storage and reload in incognito mode

## SEO optimization
The site is optimized for corporate partnerships and CSR programs:

### Corporate volunteering SEO
- **Target keywords**: Corporate Social Responsibility (CSR), employee volunteering, volunteer days, VTO, workplace giving programs, team-building volunteer events
- **Primary pages**: Crazy Socks (gift bag volunteering), Volunteer (corporate programs), Contact (partnerships)
- **Content strategy**: SEO-optimized paragraphs with keyword integration on key pages
- **Metadata structure**: Each page has dedicated layout.tsx files with targeted meta descriptions and keywords

### File upload configuration (Legacy - Now Modal-Based)
The aid application previously included a complex multi-step form. It's now simplified to use Monday.com forms via modal system.

### Development
- Forms are now handled via Monday.com embedded iframes in modals
- No local file handling required for most forms
- Aid applications use Monday.com form with built-in file upload capabilities

## Troubleshooting
- Port already in use: stop the other service or change the port mapping in `docker-compose.yml`.
- ESLint warnings during build: `next.config.js` is set to allow builds to complete; use `npm run lint` locally to fix issues.
- Node version mismatch: ensure Node 20.x locally to match Docker.
- Dark mode not working: check `src/contexts/ThemeContext.tsx` and ensure theme toggle is properly connected.
- Cookie consent issues: verify `src/contexts/CookieConsentContext.tsx` is properly initialized in layout.
- Donation modal not loading: ensure marketing cookies are enabled in cookie preferences.
- Form modals not opening: verify `FormModalProvider` is properly wrapped in layout and `FormModal` component is included.
- Form modal scrolling issues: check modal height settings in `FormModal.tsx` (currently set to 85vh).
- Monday.com forms not loading: ensure marketing cookies are enabled and form URLs are correct in `FormModalContext.tsx`.

## Maintainers and handoff
- Primary owner: KCCF web team
- For deployment credentials/secrets, update your hosting provider’s environment settings (do not commit secrets).

## License
All rights reserved. Content and code are the property of Koenig Childhood Cancer Foundation unless otherwise noted.
