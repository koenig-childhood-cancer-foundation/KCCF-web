# PayPal Donation Configuration

## Overview
A PayPal donation option has been added to the donation modal alongside Zeffy and GiveLively.

## Configuration Required

The PayPal donation URL needs to be updated with your organization's actual PayPal donation link.

### Location
File: `src/components/DonationModal.tsx`

Look for the constant:
```typescript
const PAYPAL_DONATE_URL = 'https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID'
```

### How to Update

Replace `YOUR_BUTTON_ID` with your actual PayPal donation button ID, or use one of these alternatives:

#### Option 1: PayPal Donate Button
1. Log in to your PayPal Business account
2. Go to "Tools" > "PayPal Buttons"
3. Create a "Donate" button
4. Copy the hosted button ID from the generated code
5. Update the URL: `https://www.paypal.com/donate/?hosted_button_id=YOUR_ACTUAL_BUTTON_ID`

#### Option 2: PayPal.me Link
If you prefer using PayPal.me:
```typescript
const PAYPAL_DONATE_URL = 'https://www.paypal.me/yourorganization'
```

#### Option 3: Direct PayPal Giving Fund Link
If you're using PayPal Giving Fund:
```typescript
const PAYPAL_DONATE_URL = 'https://www.paypal.com/us/fundraiser/charity/YOUR_CHARITY_ID'
```

## Testing

After updating the URL:
1. Start the development server: `npm run dev`
2. Open the donation modal by clicking any "Donate" button
3. Click the "PayPal" tab
4. Click the "Donate with PayPal" button
5. Verify it redirects to the correct PayPal donation page

## Support

If you need help finding your PayPal donation link, contact PayPal support or check your PayPal Business account settings.
