// Sends an event to Google Tag Manager, which forwards it to GA4.
// GTM (and its dataLayer) only exists after the visitor allows analytics
// cookies, so before that nothing is queued or sent.
type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] }

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  const w = window as DataLayerWindow
  if (!w.dataLayer) return
  w.dataLayer.push({ event: name, page_path: window.location.pathname, ...params })
}
