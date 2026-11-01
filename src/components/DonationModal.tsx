"use client"

import { useEffect, useState, useRef } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'
import { useDonationModal } from '@/contexts/DonationModalContext'
import Spinner from '@/components/Spinner'

type DonationProvider = 'zeffy' | 'givelively'

const ZEFFY_FORM_PATH = '/embed/donation-form/donate-to-make-a-difference-18649'
const ZEFFY_EMBED_SCRIPT = 'https://www.zeffy.com/embed/v2/zeffy-embed.js'
// About the height of the form's first step, so the box starts at its final
// size instead of growing (and shaking) when the form arrives.
const ZEFFY_START_HEIGHT = '520'

type ZeffyWindow = Window & { Zeffy?: { embed?: { init: () => void } } }

// Zeffy's own embed (v2). Their script puts the form inside our box and
// changes the box height at every step, so phones show no empty space.
// If the script cannot load, we fall back to the plain fixed-size form.
function ZeffyEmbed() {
  const [failed, setFailed] = useState(false)
  const [fallbackLoaded, setFallbackLoaded] = useState(false)

  useEffect(() => {
    const win = window as ZeffyWindow
    if (win.Zeffy?.embed) {
      win.Zeffy.embed.init()
      return
    }
    let script = document.querySelector<HTMLScriptElement>(`script[src="${ZEFFY_EMBED_SCRIPT}"]`)
    if (!script) {
      script = document.createElement('script')
      script.src = ZEFFY_EMBED_SCRIPT
      script.async = true
      document.head.appendChild(script)
    }
    const onError = () => setFailed(true)
    script.addEventListener('error', onError)
    return () => script?.removeEventListener('error', onError)
  }, [])

  if (failed) {
    return (
      <div className="relative h-[70vh] lg:h-full">
        {!fallbackLoaded && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 dark:bg-gray-800/80">
            <Spinner text="Loading donation form..." />
          </div>
        )}
        <iframe
          className="block w-full h-full border-0"
          src={`https://www.zeffy.com${ZEFFY_FORM_PATH}`}
          title="Zeffy donation form"
          allow="payment"
          onLoad={() => setFallbackLoaded(true)}
        />
      </div>
    )
  }

  // Zeffy's script fills this box; React leaves its contents alone.
  return <div className="p-2 sm:p-3"><div data-zeffy-embed data-form-url={ZEFFY_FORM_PATH} data-min-height={ZEFFY_START_HEIGHT} /></div>
}

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
  const { isOpen, isWarm, closeModal } = useDonationModal()
  const [selectedProvider, setSelectedProvider] = useState<DonationProvider>('zeffy')
  const switchLinkClass =
    'inline-flex items-center gap-1 mt-2 px-6 py-2.5 whitespace-nowrap rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-colors cursor-pointer'

  // When the pop-up closes, go back to the Zeffy form. This removes the
  // PayPal/Venmo form, which otherwise stays visible on the page after the
  // pop-up is hidden (for example after "Other ways to give").
  useEffect(() => {
    if (!isOpen) setSelectedProvider('zeffy')
  }, [isOpen])

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

  if (!isOpen && !isWarm) return null

  // Stripe CardPaymentSection removed; using GiveLively iframe

  const modalContent = (
    <div 
      aria-hidden={!isOpen}
      inert={!isOpen}
      className={`fixed inset-0 z-50 flex items-start lg:items-center justify-center overflow-y-auto overflow-x-hidden p-2 sm:p-4 ${isOpen ? '' : 'invisible pointer-events-none'}`}
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
      <div className="relative rounded-2xl max-w-5xl w-full lg:h-[75vh] min-[1800px]:h-[65vh] lg:min-h-[600px] flex items-stretch gap-4 lg:my-auto">
        {/* Campaign Card - Left Side */}
         <div className="hidden lg:flex lg:w-1/2 h-full bg-violet-600 dark:bg-violet-800 text-white flex-col justify-between rounded-[28px] overflow-hidden shadow-xl">
          <div className="flex-1 min-h-0 flex flex-col">
            <div className="campaign-image-holder overflow-hidden flex-shrink-0 h-56 [@media(min-height:880px)]:h-72">
              <Image 
                className="w-full h-56 [@media(min-height:880px)]:h-72 object-cover scale-[1.3] origin-left"
                style={{ objectPosition: 'left 20%' }}
                src="/images/elana-charlotte.jpg"
                alt="Elana and Charlotte"
                width="516"
                height="288"
              />
            </div>
            
            <div className="campaign-body p-4 xl:p-6 min-[1800px]:p-8 pt-4 xl:pt-5 min-[1800px]:pt-6 flex-1 min-h-0 text-center">
              <p
                className="text-white font-semibold leading-relaxed text-sm xl:text-base"
              >
                KCCF provides life-saving financial and emotional support to children battling cancer and their families.
              </p>
              <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mt-3 xl:mt-4" aria-hidden="true" />
              {/* Gift levels from KCCF Current Facts – MASTER */}
              <ul className="mt-3 xl:mt-4 space-y-2 text-sm text-white/90 text-left inline-block mx-auto">
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#DAB87E] flex-shrink-0" aria-hidden="true" /><span><strong className="text-[#DAB87E]">$50</strong> = a dinner for a family</span></li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#DAB87E] flex-shrink-0" aria-hidden="true" /><span><strong className="text-[#DAB87E]">$360</strong> = 3 nights of lodging</span></li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[#DAB87E] flex-shrink-0" aria-hidden="true" /><span><strong className="text-[#DAB87E]">$1,000</strong> = medication for one chemo cycle</span></li>
              </ul>
            </div>
          </div>
          
          <div className="px-4 xl:px-6 py-4 xl:py-5 bg-violet-600 dark:bg-violet-800 border-t-2 border-[#DAB87E] text-white flex-shrink-0 text-center h-28 flex flex-col justify-center">
            <Link
              href="/donate?nomodal=1#ways-to-give"
              onClick={closeModal}
              className="mx-auto inline-flex items-center gap-1 px-6 py-2.5 whitespace-nowrap rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-colors text-sm xl:text-base"
            >
              Other ways to give: stock, DAF, crypto, check
              <svg className="w-4 h-4 xl:w-5 xl:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Donation Form - Right Side replaced entirely by Zeffy */}
        <div className="lg:w-1/2 w-full min-h-[min(660px,calc(100dvh-1rem))] lg:min-h-0 max-h-[calc(100dvh-1rem)] lg:max-h-none lg:h-full flex flex-col bg-white dark:bg-gray-800 rounded-[28px] overflow-hidden shadow-xl">
          <div className="flex-shrink-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            {/* Top row: title + close button */}
            <div className="relative flex items-center justify-center p-2 sm:p-3 lg:p-4">
              <h2 className="px-10 text-center text-lg sm:text-xl font-bold text-violet-600 dark:text-saffron-400">
                Help Children Beat Cancer.
              </h2>
              
              <button
                onClick={closeModal}
                className="absolute right-2 sm:right-3 lg:right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
          </div>

          <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
            {/* Zeffy/GiveLively donation forms are loaded as strictly necessary services */}
            
            {selectedProvider === 'zeffy' ? (
              <div className="flex-1 min-h-0 overflow-auto">
                <ZeffyEmbed />
              </div>
            ) : (
              <div className="flex-1 min-h-[70vh] lg:min-h-0 overflow-auto">
                <GiveLivelyWidget />
              </div>
            )}
          </div>

          {/* Zeffy (no fees) shows first; GiveLively is a one-tap switch for PayPal and Venmo */}
          <div className="flex-shrink-0 lg:h-28 flex flex-col justify-center items-center px-5 py-4 bg-violet-600 dark:bg-violet-800 border-t-2 border-[#DAB87E] text-center">
            {selectedProvider === 'zeffy' ? (
              <>
                <button type="button" onClick={() => setSelectedProvider('givelively')} className={switchLinkClass}>
                  Or give with PayPal or Venmo &rarr;
                </button>
              </>
            ) : (
              <button type="button" onClick={() => setSelectedProvider('zeffy')} className={switchLinkClass}>
                &larr; Back to card or bank transfer (no fees)
              </button>
            )}
            {/* Phones and tablets: the left side (with this link) is hidden, so show it here */}
            <Link
              href="/donate?nomodal=1#ways-to-give"
              onClick={closeModal}
              className="lg:hidden mt-3 text-sm font-semibold text-white underline underline-offset-4 hover:text-[#DAB87E] transition-colors"
            >
              Other ways to give: stock, DAF, crypto, check &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  )

  // Use portal to render modal outside of normal DOM hierarchy
  return createPortal(modalContent, document.body)
}
