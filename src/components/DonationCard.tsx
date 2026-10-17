"use client"

import { useState, useRef, useEffect } from 'react'

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
  const [selectedProvider, setSelectedProvider] = useState<DonationProvider>('zeffy')

  return (
    <div className="w-full flex flex-col min-h-0 h-[calc(60vh-8rem)] md:h-[calc(75vh-6rem)] bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-bold text-center leading-tight text-[#2B2330] dark:text-white">
            Help Children <span className="text-violet-600 dark:text-saffron-400">Beat Cancer.</span>
          </h1>
        </div>
      </div>

      <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
        {/* Provider Selection */}
        <div className="px-6 py-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
          <p className="text-sm text-gray-900 dark:text-white mb-3 text-center">Choose your preferred donation platform:</p>
          <div className="flex justify-center space-x-4">
            <div className="flex flex-col">
              <button
                onClick={() => setSelectedProvider('zeffy')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-md cursor-pointer border-2 ${
                  selectedProvider === 'zeffy'
                    ? 'bg-[#772D5E] text-white hover:bg-[#772D5E]/90 border-[#772D5E]'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 border-[#772D5E]'
                }`}
              >
                Zeffy
              </button>
              <ul className="mt-2 text-xs text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>No fees</li>
                <li>Accepts international donations</li>
              </ul>
            </div>
            <div className="flex flex-col">
              <button
                onClick={() => setSelectedProvider('givelively')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-md cursor-pointer border-2 ${
                  selectedProvider === 'givelively'
                    ? 'bg-[#772D5E] text-white hover:bg-[#772D5E]/90 border-[#772D5E]'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 border-[#772D5E]'
                }`}
              >
                GiveLively
              </button>
              <ul className="mt-2 text-xs text-gray-700 dark:text-gray-300 list-disc list-inside">
                <li>Standard processing fees</li>
                <li>Accepts PayPal / Venmo / DAFs</li>
              </ul>
            </div>
          </div>
        </div>
        
        {selectedProvider === 'zeffy' ? (
          <div className="flex-1 min-h-0 overflow-auto">
            <iframe
              className="block w-full h-full max-w-full border-0"
              src="https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-18649"
              title="Zeffy donation form"
              scrolling="yes"
              allow="payment"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              style={{
                WebkitOverflowScrolling: 'touch',
                overflow: 'auto',
                minHeight: '300px',
                height: '100%'
              }}
            />
          </div>
        ) : (
          <div className="flex-1 min-h-0">
            <GiveLivelyWidgetCard />
          </div>
        )}
      </div>
    </div>
  )
}
