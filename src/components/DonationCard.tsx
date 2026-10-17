"use client"

import { useState, useRef, useEffect, type ReactNode } from 'react'

type DonationProvider = 'zeffy' | 'givelively'

// GiveLively widget component that loads the donation form via script
// Uses a ref callback to create a container that React won't try to manage
function GiveLivelyWidgetCard() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const widgetContainerRef = useRef<HTMLDivElement | null>(null)
  const scriptRef = useRef<HTMLScriptElement | null>(null)
  
  useEffect(() => {
    if (!wrapperRef.current) return
    
    // Create the widget container manually (outside React's control)
    // Must use id="give-lively-widget" as the GiveLively script looks for this specific ID
    const widgetContainer = document.createElement('div')
    widgetContainer.id = 'give-lively-widget'
    widgetContainer.className = 'gl-simple-donation-widget'
    wrapperRef.current.appendChild(widgetContainer)
    widgetContainerRef.current = widgetContainer
    
    // Create and load the GiveLively script
    const gl = document.createElement('script')
    gl.src = 'https://secure.givelively.org/widgets/simple_donation/koenig-childhood-cancer-foundation.js?show_suggested_amount_buttons=true&show_in_honor_of=true&address_required=false&suggested_donation_amounts[]=25&suggested_donation_amounts[]=50&suggested_donation_amounts[]=100&suggested_donation_amounts[]=250'
    scriptRef.current = gl
    document.head.appendChild(gl)
    
    return () => {
      // Clean up GiveLively modal element from body
      const glModal = document.getElementById('gl-widget-modal')
      if (glModal) {
        glModal.remove()
      }
      
      // Clean up any other GiveLively elements added to body
      document.querySelectorAll('body > .gl-modal').forEach(el => el.remove())
      
      // Clean up script from head
      if (scriptRef.current) {
        scriptRef.current.remove()
        scriptRef.current = null
      }
      
      // Clean up our manually created widget container from wrapper
      if (widgetContainerRef.current && wrapperRef.current) {
        // Clear the widget container's content first
        widgetContainerRef.current.innerHTML = ''
        // Then remove the container from wrapper
        if (wrapperRef.current.contains(widgetContainerRef.current)) {
          wrapperRef.current.removeChild(widgetContainerRef.current)
        }
        widgetContainerRef.current = null
      }
    }
  }, [])
  
  return (
    <div 
      ref={wrapperRef}
      className="h-full min-h-0 overflow-auto p-4 bg-white dark:bg-gray-800 rounded-b-2xl"
    >
      {/* GiveLively widget container is created via DOM API, not React */}
    </div>
  )
}

export default function DonationCard() {
  // Zeffy (no fees) shows first; GiveLively is a one-tap switch for PayPal, Venmo and DAF gifts
  const [selectedProvider, setSelectedProvider] = useState<DonationProvider>('zeffy')
  const switchLinkClass =
    'font-semibold text-violet-600 dark:text-saffron-400 underline underline-offset-4 decoration-[#DAB87E] hover:text-violet-700 dark:hover:text-saffron-300 cursor-pointer'

  return (
    <div className="w-full flex flex-col h-[44rem] bg-white dark:bg-gray-800 rounded-[22px] overflow-hidden border-t-4 border-violet-600 dark:border-saffron-400 shadow-xl">
      <div className="flex-shrink-0 px-6 py-4 border-b border-gray-200 dark:border-gray-700 text-center">
        {title ?? <h2 className="text-xl font-bold text-[#2B2330] dark:text-white">Donate to KCCF</h2>}
      </div>

      <div className="relative flex-1 min-h-0">
        {selectedProvider === 'zeffy' ? (
          <>
            {/* Shown behind the form until Zeffy finishes loading */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-gray-500 dark:text-gray-400" aria-hidden="true">
              <div className="w-8 h-8 rounded-full border-4 border-[#DAB87E] border-t-violet-600 animate-spin" />
              <p className="text-sm">Loading the secure donation form&hellip;</p>
            </div>
            <iframe
              className="relative block w-full h-full max-w-full border-0"
              src="https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-18649"
              title="Zeffy donation form"
              scrolling="yes"
              allow="payment"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              style={{
                WebkitOverflowScrolling: 'touch',
                overflow: 'auto',
              }}
            />
          </>
        ) : (
          <GiveLivelyWidgetCard />
        )}
      </div>

      <div className="flex-shrink-0 px-5 py-3 bg-[#FAF6F2] dark:bg-gray-700 text-center text-sm text-gray-600 dark:text-gray-300">
        {selectedProvider === 'zeffy' ? (
          <>
            Prefer PayPal, Venmo or a donor-advised fund?{' '}
            <button type="button" onClick={() => setSelectedProvider('givelively')} className={switchLinkClass}>
              Give through GiveLively &rarr;
            </button>
          </>
        ) : (
          <button type="button" onClick={() => setSelectedProvider('zeffy')} className={switchLinkClass}>
            &larr; Back to card or bank transfer (no fees)
          </button>
        )}
      </div>
    </div>
  )
}
