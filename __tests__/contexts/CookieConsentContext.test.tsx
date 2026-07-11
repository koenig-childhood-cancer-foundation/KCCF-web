import { act, renderHook } from '@testing-library/react'
import type { ReactNode } from 'react'
import {
  CookieConsentProvider,
  useCookieConsent,
} from '@/contexts/CookieConsentContext'

const wrapper = ({ children }: { children: ReactNode }) => (
  <CookieConsentProvider>{children}</CookieConsentProvider>
)

describe('CookieConsentContext', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('defaults to only necessary consent', () => {
    const { result } = renderHook(() => useCookieConsent(), { wrapper })
    expect(result.current.consent).toEqual({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    })
    expect(result.current.hasConsentedToAll).toBe(false)
  })

  it('acceptAll enables every category and persists to localStorage', () => {
    const { result } = renderHook(() => useCookieConsent(), { wrapper })
    act(() => result.current.acceptAll())
    expect(result.current.consent).toEqual({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    })
    expect(result.current.hasConsentedToAll).toBe(true)
    expect(localStorage.getItem('cookieConsent.v1')).toBeTruthy()
  })

  it('rejectAll disables optional categories but keeps necessary', () => {
    const { result } = renderHook(() => useCookieConsent(), { wrapper })
    act(() => result.current.acceptAll())
    act(() => result.current.rejectAll())
    expect(result.current.consent).toEqual({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    })
  })

  it('never allows necessary consent to be turned off', () => {
    const { result } = renderHook(() => useCookieConsent(), { wrapper })
    act(() => result.current.updateConsent({ necessary: false, analytics: true }))
    expect(result.current.consent.necessary).toBe(true)
    expect(result.current.consent.analytics).toBe(true)
  })

  it('reloads persisted consent on mount', () => {
    localStorage.setItem(
      'cookieConsent.v1',
      JSON.stringify({
        version: '1.0.0',
        timestamp: 123,
        state: {
          necessary: true,
          analytics: true,
          marketing: false,
          functional: true,
        },
      })
    )
    const { result } = renderHook(() => useCookieConsent(), { wrapper })
    expect(result.current.consent.analytics).toBe(true)
    expect(result.current.consent.functional).toBe(true)
    expect(result.current.consent.marketing).toBe(false)
  })
})
