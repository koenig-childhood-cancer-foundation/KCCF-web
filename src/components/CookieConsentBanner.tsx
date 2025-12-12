"use client"

import { useEffect, useState } from 'react'
import { useCookieConsent } from '@/contexts/CookieConsentContext'

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const { openPreferences, acceptAll, rejectAll } = useCookieConsent()

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookieConsent.v1')
      if (!consent) {
        setIsVisible(true)
      }
    } catch {
      // If localStorage is unavailable, show the banner
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    acceptAll()
    setIsVisible(false)
  }

  const handleReject = () => {
    rejectAll()
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 md:pb-6">
      <div className="mx-auto w-full md:max-w-4xl rounded-2xl border border-gray-200/70 dark:border-white/10 bg-white/90 dark:bg-gray-900/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 supports-[backdrop-filter]:dark:bg-gray-900/70 shadow-2xl ring-1 ring-black/5 dark:ring-white/10">
        <div className="p-4 md:p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#732154]/10 text-[#732154] dark:bg-[#732154]/20">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M12 1.5a.75.75 0 01.53.22l3.22 3.22h3.75a.75.75 0 01.75.75v3.75l3.22 3.22a.75.75 0 010 1.06l-3.22 3.22v3.75a.75.75 0 01-.75.75h-3.75l-3.22 3.22a.75.75 0 01-1.06 0L7.72 21.75H3.97a.75.75 0 01-.75-.75v-3.75L0 14.03a.75.75 0 010-1.06L3.22 9.75V6a.75.75 0 01.75-.75h3.75L11.47 1.72A.75.75 0 0112 1.5zm-3 9.75a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">We value your privacy</p>
              <p className="text-sm text-gray-700/90 dark:text-gray-300/90">
                We use cookies to enhance your experience and analyze usage. Read our <a href="/privacy" className="underline hover:no-underline">Cookie Policy</a>.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 md:gap-4 self-end md:self-auto">
            <button
              type="button"
              onClick={openPreferences}
              className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:cursor-pointer"
            >
              Preferences
            </button>
            <button
              type="button"
              onClick={handleReject}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300/50 transition-colors hover:cursor-pointer"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="px-5 py-2.5 btn-violet font-normal focus:outline-none focus-visible:ring-2 focus-visible:ring-[#732154]/40 hover:cursor-pointer"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
