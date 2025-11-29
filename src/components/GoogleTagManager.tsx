"use client";

import Script from 'next/script'
import { useCookieConsent } from '@/contexts/CookieConsentContext'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

// Validate GTM ID format (GTM-XXXXXXX)
const isValidGtmId = (id: string | undefined): id is string => {
  return typeof id === 'string' && /^GTM-[A-Z0-9]+$/.test(id)
}

export default function GoogleTagManager() {
  const { consent } = useCookieConsent()

  // Only load GTM when user has consented to analytics and GTM ID is valid
  if (!isValidGtmId(GTM_ID) || !consent.analytics) {
    return null
  }

  return (
    <>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
      {/* The <noscript> fallback for GTM is intentionally omitted from this client component.
          For proper support, add the <noscript> iframe to a server-side layout (e.g., layout.tsx). */}
    </>
  )
}
