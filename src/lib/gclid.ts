// Utilities for capturing the Google Ads click identifier (gclid) and reading
// it back when building the Zeffy donation form URL. Passing the gclid through
// the form lets donations be matched back to the originating ad click via
// Google Ads offline conversion import (the webhook -> Zapier/Make -> Ads path).
//
// Privacy note: a gclid is advertising/measurement data, so capture is gated on
// the site's `marketing` consent category (see CookieConsentContext). Callers
// are responsible for checking consent before invoking captureGclidFromUrl().

const STORAGE_KEY = 'kccf.gclid'

// Google Ads' default click-to-conversion window is up to 90 days; keep the
// stored gclid for the same window so late donations still attribute.
const GCLID_TTL_MS = 90 * 24 * 60 * 60 * 1000

interface StoredGclid {
  value: string
  timestamp: number
}

/** Read a gclid from the current URL's query string and persist it. */
export function captureGclidFromUrl(): void {
  if (typeof window === 'undefined') return
  try {
    const gclid = new URLSearchParams(window.location.search).get('gclid')
    if (!gclid) return
    const payload: StoredGclid = { value: gclid, timestamp: Date.now() }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  } catch {
    // Storage may be unavailable (private mode / blocked); fail silently.
  }
}

/** Return a stored, non-expired gclid, or null. */
export function getStoredGclid(): string | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const stored = JSON.parse(raw) as StoredGclid
    if (!stored?.value) return null
    if (Date.now() - stored.timestamp > GCLID_TTL_MS) {
      localStorage.removeItem(STORAGE_KEY)
      return null
    }
    return stored.value
  } catch {
    return null
  }
}
