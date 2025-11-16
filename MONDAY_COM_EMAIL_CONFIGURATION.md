# Monday.com Email Configuration Guide

## Overview
This document describes the steps required to configure the outbound email address for Monday.com forms to use `info@thekccf.org` instead of `olivia@thekccf.org`.

## Background
The KCCF website uses Monday.com embedded forms for various purposes:
- Camp registration (camper and counselor)
- Volunteer applications
- Contact form
- Aid applications
- Newsletter signup (uses Mailchimp)
- Book Elana form
- Crazy Socks sponsorship

The email configuration for these forms is managed within the Monday.com platform, not in this repository.

## Required Changes in Monday.com

### Step 1: Access Monday.com Form Settings
1. Log in to your Monday.com account
2. Navigate to the board that contains your forms
3. For each form used on the website, click on the form to open its settings

### Step 2: Update Email Notification Settings
For each form, update the email notification settings:

1. Go to the form's settings/integrations
2. Look for "Email Notifications" or "Automations"
3. Find the automation or notification that sends emails when a form is submitted
4. Update the "From" email address from `olivia@thekccf.org` to `info@thekccf.org`
5. Save the changes

### Step 3: Verify Sender Email Authentication
Ensure that `info@thekccf.org` is properly authenticated in Monday.com:

1. Go to your Monday.com workspace settings
2. Navigate to Email & Notifications settings
3. Verify that `info@thekccf.org` is added as a verified sender email
4. If not verified, follow Monday.com's email verification process:
   - Add `info@thekccf.org` as a sender email
   - Check the inbox for the verification email
   - Click the verification link
   - Wait for confirmation that the email is verified

### Step 4: Update Form-Specific Automations
Some forms may have custom automations. Check each form for:

1. **Submission confirmations**: Emails sent to form submitters
2. **Internal notifications**: Emails sent to team members
3. **Integration emails**: Emails sent through integrations

For each automation:
1. Open the automation settings
2. Change the sender email from `olivia@thekccf.org` to `info@thekccf.org`
3. Save and test

### Forms to Update
Based on the form configurations in `/src/contexts/FormModalContext.tsx`, update these forms:

1. **Camp Camper Registration** (ID: 41086441b740b6e179cbde8b574bd794)
2. **Camp Counselor Application** (ID: 87920448930e50b7a0554e414662d32b)
3. **Crazy Socks Sponsor** (ID: 78b71c024990383d274ad455e744923a)
4. **Book Elana** (ID: 0caf48b3cfeede4c889e59ac52ce5fb1)
5. **Volunteer Application** (ID: 650d6c93433108a85097471c822b4cbf)
6. **Contact Form** (ID: 7d2a1baf81662443852a38886ac80dd4)
7. **Aid Application** (ID: 972de98e599d383218e348dd923eec38)

Note: Newsletter signup uses Mailchimp, not Monday.com, so it may need to be configured separately in Mailchimp.

### Step 5: Test Each Form
After making changes:

1. Submit a test form submission for each form type
2. Check that the confirmation email comes from `info@thekccf.org`
3. Verify that internal notifications also use `info@thekccf.org`
4. Check spam folders if emails don't arrive

## Mailchimp Configuration (Newsletter)
The newsletter signup form uses Mailchimp. To update the sender email:

1. Log in to Mailchimp
2. Go to Audience settings
3. Navigate to "Signup forms" or "Default from email address"
4. Update the default sender email to `info@thekccf.org`
5. Verify the email address if not already verified
6. Save changes

## Troubleshooting

### Email Not Sending
- Verify that `info@thekccf.org` is properly authenticated in Monday.com
- Check that email limits haven't been exceeded
- Verify DNS records (SPF, DKIM) for the domain

### Emails Going to Spam
- Ensure SPF and DKIM records are properly configured for `thekccf.org`
- Add Monday.com's sending IP addresses to your SPF record
- Consider setting up DMARC

### Form Not Found
- Double-check form IDs in the codebase match Monday.com
- Ensure forms haven't been archived or deleted
- Verify embed URLs are still active

## Support
For issues with Monday.com configuration:
- Contact Monday.com support: https://support.monday.com/
- Check Monday.com documentation: https://support.monday.com/hc/en-us/articles/360007186319-Forms

For issues with the website:
- Create an issue in the GitHub repository: https://github.com/koenig-childhood-cancer-foundation/KCCF-web/issues

## References
- Monday.com Forms Documentation: https://support.monday.com/hc/en-us/sections/360003458279-Forms
- Email Authentication Guide: https://support.monday.com/hc/en-us/articles/360015802660-Email-authentication
