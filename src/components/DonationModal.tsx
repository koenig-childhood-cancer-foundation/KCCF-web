"use client"

import { useEffect, useState, useRef, useMemo } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'
import { useDonationModal } from '@/contexts/DonationModalContext'
import { useCookieConsent } from '@/contexts/CookieConsentContext'
import { getStoredGclid } from '@/lib/gclid'
import Spinner from '@/components/Spinner'

const ZEFFY_FORM_URL = 'https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-18649'

type DonationProvider = 'zeffy' | 'givelively'

// GiveLively widget component that loads the donation form via script
// Uses a ref callback to create a container that React won't try to manage
function GiveLivelyWidget() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const widgetContainerRef = useRef<HTMLDivElement | null>(null)
  const scriptRef = useRef<HTMLScriptElement | null>(null)
  const isMountedRef = useRef(true)
  
  useEffect(() => {
    isMountedRef.current = true
    
    if (!wrapperRef.current) return
    
    // Create the widget container manually (outside React's control)
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
      isMountedRef.current = false
      
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
      className="h-full min-h-0 overflow-auto p-2 sm:p-4 bg-white dark:bg-gray-800"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      {/* GiveLively widget container is created via DOM API, not React */}
    </div>
  )
}

export default function DonationModal() {
  const { isOpen, closeModal, campaign } = useDonationModal()
  const { consent } = useCookieConsent()
  const [selectedProvider, setSelectedProvider] = useState<DonationProvider>('zeffy')
  const [iframeLoaded, setIframeLoaded] = useState(false)
  const [isProviderSectionOpen, setIsProviderSectionOpen] = useState(true)

  // Build the Zeffy form URL, carrying the Google Ads gclid (when present and
  // marketing consent is granted) so the donation can be tied back to the ad
  // click. Zeffy round-trips UTM params into the donation record + webhook
  // payload, so the gclid rides along in utm_content; the Zap/automation reads
  // utm_content back out and sends it to Google Ads offline conversion import.
  // Recomputed when the modal opens so a gclid captured after first render is
  // still picked up. Verify with a $1 test donation before relying on it.
  const zeffyFormUrl = useMemo(() => {
    if (!isOpen || !consent.marketing) return ZEFFY_FORM_URL
    const gclid = getStoredGclid()
    if (!gclid) return ZEFFY_FORM_URL
    return `${ZEFFY_FORM_URL}?utm_content=${encodeURIComponent(gclid)}`
  }, [isOpen, consent.marketing])

  // Reset iframeLoaded when modal opens or provider changes
  useEffect(() => {
    if (isOpen) {
      setIframeLoaded(false)
    }
  }, [isOpen, selectedProvider])

  // Close modal on escape key and prevent body scroll
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

  // All previous step handlers removed

  if (!isOpen) return null

  // Stripe CardPaymentSection removed; using GiveLively iframe

  const modalContent = (
    <div 
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center overflow-y-auto overflow-x-hidden p-2 sm:p-4"
      style={{ 
        paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))',
        paddingTop: 'max(0.5rem, env(safe-area-inset-top))',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      />
      
      {/* Modal */}
      <div className="relative rounded-2xl max-w-5xl w-full h-[90vh] sm:h-[85vh] lg:h-[75vh] min-[1800px]:h-[65vh] min-h-[600px] flex items-stretch gap-4 my-auto">
        {/* Campaign Card - Left Side */}
         <div className="hidden lg:flex lg:w-1/2 h-full bg-gradient-to-br from-[#732154] to-violet-600 text-white flex-col justify-between rounded-2xl overflow-hidden">
          <div className="flex-1 min-h-0 flex flex-col">
            <div className="campaign-image-holder overflow-hidden flex-shrink-0 h-72">
              <Image 
                className="w-full h-72 object-cover scale-[1.3] origin-left"
                style={{ objectPosition: 'left 20%' }}
                src="/images/elana-charlotte.jpg"
                alt="Elana and Charlotte"
                width="516"
                height="288"
              />
            </div>
            
            <div className="campaign-body p-4 xl:p-6 min-[1800px]:p-8 pt-4 xl:pt-5 min-[1800px]:pt-6 flex-1 min-h-0">
              <Image
                src="/kccf_logo_light.png"
                alt="KCCF Logo"
                width={120}
                height={40}
                className="mb-3 xl:mb-4"
              />
              <h2 
                className="font-bold mb-2 xl:mb-3 min-[1800px]:mb-4 text-xl xl:text-2xl"
              >
                {campaign || "Your Donation Saves Lives!"}
              </h2>
              <p 
                className="text-white/90 leading-relaxed text-sm xl:text-base"
              >
                KCCF supports children fighting cancer by paying for medical bills, lodging, and food. Whether large or small, every donation makes a real difference for a family in need.
              </p>
            </div>
          </div>
          
          <div className="mx-4 xl:mx-6 min-[1800px]:mx-8 mb-4 xl:mb-6 min-[1800px]:mb-8 pt-4 xl:pt-5 min-[1800px]:pt-6 border-t border-white/20 flex-shrink-0 text-center">
            <div className="flex items-center justify-center text-white/80 text-sm xl:text-base">
              <div className="flex items-center space-x-4 xl:space-x-6">
                <div className="flex items-center">
                  <svg className="w-4 h-4 xl:w-5 xl:h-5 mr-1.5 xl:mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Secure & Trusted</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 xl:w-5 xl:h-5 mr-1.5 xl:mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Tax Deductible</span>
                </div>
              </div>
            </div>
            <div className="mt-2 xl:mt-3 min-[1800px]:mt-4">
              <Link 
                href="/donate?nomodal=1"
                onClick={closeModal}
                className="inline-flex items-center text-white/90 hover:text-white underline underline-offset-2 transition-colors font-semibold text-sm xl:text-base"
              >
                Other ways to donate
                <svg className="w-4 h-4 xl:w-5 xl:h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Donation Form - Right Side replaced entirely by Zeffy */}
        <div className="lg:w-1/2 w-full h-full flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
          {/* Header with collapsible platform selector */}
          <div className="flex-shrink-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            {/* Top row: Platform toggle + campaign + close button */}
            <div className="flex items-center p-2 sm:p-3 lg:p-4">
              <button
                onClick={() => setIsProviderSectionOpen(!isProviderSectionOpen)}
                className="flex items-center justify-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all cursor-pointer w-[100px] sm:w-[120px]"
              >
                <span className="text-gray-500 dark:text-gray-400 font-medium text-xs sm:text-sm">
                  {selectedProvider === 'zeffy' ? 'Zeffy' : 'GiveLively'}
                </span>
                <svg 
                  className={`w-3 h-3 sm:w-4 sm:h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${isProviderSectionOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Spacer to keep close button on the right */}
              <div className="flex-1" />
              
              <button
                onClick={closeModal}
                className="flex-shrink-0 ml-auto p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Collapsible platform options */}
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isProviderSectionOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div>
                <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-3">
                  Choose your preferred donation platform:
                </p>
                <div className="flex justify-center gap-3 sm:gap-4">
                  <div className="flex flex-col items-center flex-1 max-w-[150px] sm:max-w-[180px]">
                    <button
                      onClick={() => setSelectedProvider('zeffy')}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-sm font-medium transition-all duration-200 active:scale-95 sm:hover:scale-105 hover:shadow-md cursor-pointer border-2 ${
                        selectedProvider === 'zeffy'
                          ? 'bg-[#732154] text-white hover:bg-[#732154]/90 border-[#732154]'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 border-[#732154]'
                      }`}
                    >
                      Zeffy
                    </button>
                    <ul className="mt-1.5 sm:mt-2 text-xs text-gray-600 dark:text-gray-300 list-disc list-inside leading-relaxed">
                      <li>No fees</li>
                      <li>International</li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center flex-1 max-w-[150px] sm:max-w-[180px]">
                    <button
                      onClick={() => setSelectedProvider('givelively')}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg text-sm font-medium transition-all duration-200 active:scale-95 sm:hover:scale-105 hover:shadow-md cursor-pointer border-2 ${
                        selectedProvider === 'givelively'
                          ? 'bg-[#732154] text-white hover:bg-[#732154]/90 border-[#732154]'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 border-[#732154]'
                      }`}
                    >
                      GiveLively
                    </button>
                    <ul className="mt-1.5 sm:mt-2 text-xs text-gray-600 dark:text-gray-300 list-disc list-inside leading-relaxed">
                      <li>Standard fees</li>
                      <li>Paypal / Venmo / DAF</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
            {/* Zeffy/GiveLively donation forms are loaded as strictly necessary services */}
            
            {selectedProvider === 'zeffy' ? (
              <div className="flex-1 min-h-[200px] overflow-auto relative">
                {!iframeLoaded && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 dark:bg-gray-800/80">
                    <Spinner text="Loading donation form..." />
                  </div>
                )}
                <iframe
                  className={`block w-full h-full max-w-full border-0 ${!iframeLoaded ? 'opacity-0' : 'opacity-100'}`}
                  src={zeffyFormUrl}
                  title="Zeffy donation form"
                  scrolling="yes"
                  allow="payment"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  style={{
                    WebkitOverflowScrolling: 'touch',
                    overflow: 'auto',
                    minHeight: '200px',
                    height: '100%'
                  }}
                  onLoad={() => setIframeLoaded(true)}
                />
              </div>
            ) : (
              <div className="flex-1 min-h-[200px] overflow-auto">
                <GiveLivelyWidget />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )

  // Use portal to render modal outside of normal DOM hierarchy
  return createPortal(modalContent, document.body)
}
