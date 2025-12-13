"use client"

import { type ReactNode, createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

export type ConsentCategory = 'necessary' | 'analytics' | 'marketing' | 'functional'

export type ConsentState = Record<ConsentCategory, boolean>

interface StoredConsent {
  version: string
  timestamp: number
  state: ConsentState
}

interface CookieConsentContextValue {
  consent: ConsentState
  hasConsentedToAll: boolean
  openPreferences: () => void
  closePreferences: () => void
  isPreferencesOpen: boolean
  updateConsent: (updates: Partial<ConsentState>, options?: { persist?: boolean }) => void
  acceptAll: () => void
  rejectAll: () => void
}

const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
}

const CONSENT_VERSION = '1.0.0'
const STORAGE_KEY = 'cookieConsent.v1'

const CookieConsentContext = createContext<CookieConsentContextValue | undefined>(undefined)

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState>(DEFAULT_CONSENT)
  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const stored: StoredConsent = JSON.parse(raw)
        if (stored?.version === CONSENT_VERSION && stored?.state) {
          setConsent({ ...DEFAULT_CONSENT, ...stored.state, necessary: true })
        }
      }
    } catch {
      // ignore
    }
  }, [])

  const persist = useCallback((state: ConsentState) => {
    try {
      const payload: StoredConsent = {
        version: CONSENT_VERSION,
        timestamp: Date.now(),
        state,
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
    } catch {
      // ignore
    }
  }, [])

  const updateConsent = useCallback((updates: Partial<ConsentState>, options?: { persist?: boolean }) => {
    setConsent(prev => {
      const next = { ...prev, ...updates, necessary: true }
      if (options?.persist) persist(next)
      return next
    })
  }, [persist])

  const acceptAll = useCallback(() => {
    const next: ConsentState = { necessary: true, analytics: true, marketing: true, functional: true }
    setConsent(next)
    persist(next)
  }, [persist])

  const rejectAll = useCallback(() => {
    const next: ConsentState = { necessary: true, analytics: false, marketing: false, functional: false }
    setConsent(next)
    persist(next)
  }, [persist])

  const value = useMemo<CookieConsentContextValue>(() => ({
    consent,
    hasConsentedToAll: !!(consent.analytics && consent.marketing && consent.functional),
    isPreferencesOpen,
    openPreferences: () => setIsPreferencesOpen(true),
    closePreferences: () => setIsPreferencesOpen(false),
    updateConsent,
    acceptAll,
    rejectAll,
  }), [consent, isPreferencesOpen, updateConsent, acceptAll, rejectAll])

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  )
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext)
  if (!ctx) throw new Error('useCookieConsent must be used within CookieConsentProvider')
  return ctx
}
