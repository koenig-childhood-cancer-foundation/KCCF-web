"use client"

import { useEffect } from 'react'
import { useCookieConsent } from '@/contexts/CookieConsentContext'
import { captureGclidFromUrl } from '@/lib/gclid'

// Captures the Google Ads gclid from the landing URL so DonationModal can pass
// it through the Zeffy form for conversion attribution. Gated on `marketing`
// consent to match the site's consent model. Runs on mount and again if the
// visitor grants marketing consent while still on the landing page (the URL
// still carries the gclid at that point).
export default function GclidCapture() {
  const { consent } = useCookieConsent()

  useEffect(() => {
    if (consent.marketing) {
      captureGclidFromUrl()
    }
  }, [consent.marketing])

  return null
}
