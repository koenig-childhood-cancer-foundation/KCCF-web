"use client"

import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useFormModal, FORM_CONFIGS, type FormType } from '@/contexts/FormModalContext'
import Spinner from '@/components/Spinner'

// The pop-up stays on the page, hidden, so forms can load inside it before anyone clicks.
// Each form that is warmed up (button pointed at, or PreloadForms after page load) gets its
// own frame here; opening the pop-up only shows the frame that is already loaded.
export default function FormModal() {
  const { isOpen, formType, closeModal, warmedForms } = useFormModal()
  const [mounted, setMounted] = useState(false)
  // Which frames have finished loading, and a counter per form to reload it after use
  const [loaded, setLoaded] = useState<Partial<Record<FormType, boolean>>>({})
  const [resets, setResets] = useState<Partial<Record<FormType, number>>>({})
  // The last form shown, so the pop-up keeps its size while hidden and can reset it on close
  const lastShown = useRef<FormType | null>(null)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (isOpen && formType) {
      lastShown.current = formType
      return
    }
    // Closed: reload the form that was just used, so the next visitor sees a blank form
    // (not their typed answers or the thank-you screen). It reloads hidden, in the background.
    const used = lastShown.current
    if (!isOpen && used) {
      setLoaded(prev => ({ ...prev, [used]: false }))
      setResets(prev => ({ ...prev, [used]: (prev[used] ?? 0) + 1 }))
    }
  }, [isOpen, formType])

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, closeModal])

  if (!mounted) return null

  // Forms to keep in the pop-up: every warmed form, plus the open one
  const forms: FormType[] = [...warmedForms]
  if (formType && !forms.includes(formType)) forms.push(formType)
  if (forms.length === 0) return null

  const shown = isOpen && formType ? formType : null
  const sizeFor = shown ?? lastShown.current ?? forms[0]
  const config = FORM_CONFIGS[sizeFor]
  const compact = !!config.compact
  const shownLoaded = shown ? !!loaded[shown] : false

  const modalContent = (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 ${shown ? '' : 'invisible pointer-events-none'}`}
      aria-hidden={shown ? undefined : true}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      />

      {/* Modal */}
      <div className={`relative bg-[#FBF5EA] dark:bg-gray-800 rounded-[22px] border-t-4 border-[#DAB87E] dark:border-saffron-400 shadow-2xl w-full flex flex-col overflow-hidden ${compact ? 'max-w-xl max-h-[90vh]' : `${config.narrow ? 'max-w-2xl' : 'max-w-4xl'} h-[90vh] sm:h-[85vh]`}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-6 bg-violet-600 dark:bg-gray-800 border-b-[3px] border-[#DAB87E] dark:border-gray-700">
          <div className="flex-1 text-center">
            <h2 className="text-lg sm:text-2xl font-bold text-white">
              {config.title}
            </h2>
            {config.subtitle && !(config.subtitleWhileLoading && shownLoaded) && (
              <p className="text-xs sm:text-sm text-white/85 dark:text-gray-300 mt-2 sm:mt-3">
                {config.subtitle}
              </p>
            )}
          </div>

          {/* Close button */}
          <button
            onClick={closeModal}
            tabIndex={shown ? undefined : -1}
            className="ml-2 sm:ml-4 p-1.5 sm:p-2 hover:bg-white/15 dark:hover:bg-gray-700 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/85 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form Content */}
        <div
          // Compact: the form's own height, but allowed to shrink inside max-h-[90vh]
          // on short screens (phone in landscape); the form then scrolls inside its frame.
          className={`flex flex-col relative min-h-0 overflow-hidden ${compact ? 'shrink' : 'flex-1'}`}
          style={compact ? { height: config.height } : undefined}
        >
          {/* Monday.com forms are loaded as strictly necessary services */}
          {shown && !shownLoaded && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#FBF5EA]/80 dark:bg-gray-800/80">
              <Spinner text="Loading form..." />
            </div>
          )}
          {forms.map(type => {
            const c = FORM_CONFIGS[type]
            const active = type === sizeFor
            return (
              <iframe
                key={`${type}-${resets[type] ?? 0}`}
                // The active form fills the pop-up; the others wait hidden behind it.
                // Hidden with visibility (not display:none) so they load at full size.
                className={`w-full ${active ? 'flex-1' : 'absolute inset-0 h-full'} ${active && shownLoaded ? '' : 'invisible'}`}
                src={c.src}
                title={c.title}
                tabIndex={active && shown ? undefined : -1}
                frameBorder={0}
                scrolling="auto"
                allow="payment"
                // trimTop hides the empty space at the top of the embedded form
                style={c.trimTop ? { marginTop: -c.trimTop } : undefined}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                onLoad={() => setLoaded(prev => ({ ...prev, [type]: true }))}
              />
            )
          })}
        </div>
      </div>
    </div>
  )

  // Use portal to render modal outside of normal DOM hierarchy
  return createPortal(modalContent, document.body)
}
