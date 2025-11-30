"use client"

import { useEffect, useRef, useState } from 'react'
import { ConsentState, useCookieConsent } from '@/contexts/CookieConsentContext'

export default function ConsentPreferencesModal() {
  const { isPreferencesOpen, closePreferences, consent, updateConsent, acceptAll, rejectAll } = useCookieConsent()
  const [draft, setDraft] = useState<ConsentState>(consent)
  const initialFocusRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    setDraft(consent)
  }, [isPreferencesOpen, consent])

  useEffect(() => {
    if (isPreferencesOpen) {
      initialFocusRef.current?.focus()
    }
  }, [isPreferencesOpen])

  if (!isPreferencesOpen) return null

  const onSave = () => {
    updateConsent(draft, { persist: true })
    closePreferences()
  }

  return (
    <div className="fixed inset-0 z-[70]">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closePreferences} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden">
                     <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
             <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Privacy preferences</h2>
             <button onClick={closePreferences} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none hover:cursor-pointer text-gray-900 dark:text-white" aria-label="Close preferences">
               <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
             </button>
           </div>

          <div className="p-4 space-y-4">
            <PreferenceRow
              title="Strictly necessary"
              description="Required for basic site functionality including forms (Zeffy, Monday) and Google Tag Manager. Always on."
              checked
              disabled
            />
            <PreferenceRow
              title="Analytics"
              description="Helps us understand usage to improve the site (Google Analytics, Microsoft Clarity)."
              checked={draft.analytics}
              onChange={(v) => setDraft(s => ({ ...s, analytics: v }))}
            />
            <PreferenceRow
              title="Functional"
              description="Remembers preferences and enhances functionality."
              checked={draft.functional}
              onChange={(v) => setDraft(s => ({ ...s, functional: v }))}
            />
            <PreferenceRow
              title="Marketing"
              description="Used for advertising and measuring campaign performance."
              checked={draft.marketing}
              onChange={(v) => setDraft(s => ({ ...s, marketing: v }))}
            />
            <div className="pt-2 text-sm text-gray-600 dark:text-gray-300">
              Read our <a href="/privacy" className="underline hover:no-underline text-gray-600 dark:text-gray-300">Cookie Policy</a> for details.
            </div>
          </div>

                     <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
             <div className="flex gap-2">
               <button ref={initialFocusRef} type="button" onClick={rejectAll} className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:cursor-pointer text-gray-900 dark:text-white">Reject all</button>
               <button type="button" onClick={acceptAll} className="px-4 py-2 rounded-lg bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:opacity-90 hover:cursor-pointer">Accept All</button>
             </div>
             <div className="flex gap-2">
               <button type="button" onClick={closePreferences} className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:cursor-pointer text-gray-900 dark:text-white">Cancel</button>
               <button type="button" onClick={onSave} className="px-4 py-2 rounded-lg bg-[#732154] text-white hover:bg-[#732154]/90 hover:cursor-pointer">Save preferences</button>
             </div>
           </div>
        </div>
      </div>
    </div>
  )
}

function PreferenceRow({ title, description, checked, onChange, disabled }: { title: string; description: string; checked?: boolean; onChange?: (v: boolean) => void; disabled?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <div className="text-sm font-medium text-gray-900 dark:text-white">{title}</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">{description}</div>
      </div>
      <label className={`relative inline-flex items-center ${disabled ? 'opacity-60' : ''}`}>
        <input type="checkbox" className="sr-only peer" checked={!!checked} onChange={e => onChange?.(e.target.checked)} disabled={disabled} />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-[#732154] transition-colors"></div>
        <div className="absolute left-0.5 top-0.5 h-5 w-5 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
      </label>
    </div>
  )
}
