// Small typed wrapper around the GTM dataLayer.
//
// The GTM container (GTM-P2SBKM7K) is loaded in GoogleTagManager.tsx. That
// component also defines window.gtag and pushes the Consent Mode defaults
// before the container loads. This module is the single place the rest of the
// app talks to the dataLayer: custom events (e.g. donate intent) and consent
// updates driven by the cookie banner.

import type { ConsentState } from '@/contexts/CookieConsentContext'

declare global {
  interface Window {
    dataLayer: unknown[]
    // gtag pushes its `arguments` object onto the dataLayer. Consent commands
    // MUST go through this (not a plain array push) to be understood by GTM.
    gtag: (...args: unknown[]) => void
  }
}

/**
 * Push a Custom Event onto the dataLayer for GTM triggers to react to.
 * No-op during SSR / static export where `window` is undefined.
 */
export function gtmEvent(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}

/**
 * Bridge the cookie-consent state into Google Consent Mode v2 so marketing /
 * analytics tags (including the Google Ads conversion tag) respect the banner.
 *   analytics -> analytics_storage
 *   marketing -> ad_storage, ad_user_data, ad_personalization
 */
export function gtmConsentUpdate(state: ConsentState): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return
  window.gtag('consent', 'update', {
    analytics_storage: state.analytics ? 'granted' : 'denied',
    ad_storage: state.marketing ? 'granted' : 'denied',
    ad_user_data: state.marketing ? 'granted' : 'denied',
    ad_personalization: state.marketing ? 'granted' : 'denied',
  })
}
