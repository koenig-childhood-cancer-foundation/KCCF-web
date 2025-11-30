"use client";

import Script from 'next/script'

// Hardcoded GTM ID for the KCCF website
const GTM_ID = 'GTM-P2SBKM7K'

export default function GoogleTagManager() {
  // GTM is loaded automatically as it's a functional/necessary service
  // that enables essential site features like forms (Zeffy, Monday).
  // Analytics services (Google Analytics, Microsoft Clarity) are configured
  // within GTM to respect user consent preferences.
  // Note: noscript fallback is rendered in the server layout component (layout.tsx)

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
