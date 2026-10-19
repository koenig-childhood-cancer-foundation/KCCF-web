// Sends an event to Google Tag Manager, which forwards it to GA4.
// GTM only loads after the visitor allows analytics cookies, so until then
// the event just waits in dataLayer and is never sent.
type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] }

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  const w = window as DataLayerWindow
  w.dataLayer = w.dataLayer || []
  w.dataLayer.push({ event: name, page_path: window.location.pathname, ...params })
}
