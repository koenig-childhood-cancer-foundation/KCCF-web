"use client";

import Script from 'next/script'
import { useCookieConsent } from '@/contexts/CookieConsentContext'

// Hardcoded GTM ID for the KCCF website
const GTM_ID = 'GTM-P2SBKM7K'

export default function GoogleTagManager() {
  const { consent } = useCookieConsent()

  // GTM runs Google Analytics and Microsoft Clarity, so it loads only after the
  // visitor allows analytics cookies, as the Privacy page promises.
  // Forms (Zeffy, monday.com) are separate iframes and don't need GTM.
  // Note: noscript fallback is rendered in the server layout component (layout.tsx)
  if (!consent.analytics) return null

  return (
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
  )
}
