"use client"

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { useDonationModal } from '@/contexts/DonationModalContext'
import { useTheme } from '@/contexts/ThemeContext'
import { useCookieConsent } from '@/contexts/CookieConsentContext'

type DonationProvider = 'zeffy' | 'givelively' | 'paypal'

// PayPal donation link - Update this with your organization's PayPal donation URL
// Example formats:
// - PayPal Donate Button: https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID
// - PayPal.me: https://www.paypal.me/yourusername
const PAYPAL_DONATE_URL = 'https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID'
 

// All previous multi-step and amount form logic removed in favor of Zeffy embed

export default function DonationModal() {
  const { isOpen, closeModal, campaign } = useDonationModal()
  const { theme } = useTheme()
  const { consent, openPreferences } = useCookieConsent()
  const [selectedProvider, setSelectedProvider] = useState<DonationProvider>('zeffy')

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, closeModal])

  // All previous step handlers removed

  if (!isOpen) return null

  // Stripe CardPaymentSection removed; using GiveLively iframe

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto"
         style={{ WebkitOverflowScrolling: 'touch' }}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex"
           style={{ WebkitOverflowScrolling: 'touch' }}>
        {/* Campaign Card - Left Side */}
         <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-[#732154] to-violet-600 text-white p-8 flex-col justify-between">
          <div>
            <div className="mb-6">
              <Image 
                src="/images/cropped-Koenig-Foundation-Logo-01.png"
                alt="Koenig Childhood Cancer Foundation Logo"
                className="h-12 w-auto mb-4"
                width={200}
                height={48}
              />
            </div>
            
            <div className="campaign-image-holder mb-6">
              <Image 
                className="w-full h-64 object-cover rounded-xl shadow-lg"
                src="/images/MetaLeadershipMakingfitBags-scaled.jpg"
                alt="Crazy Socks Gift Bags Campaign"
                width="516"
                height="289"
              />
            </div>
            
            <div className="campaign-body">
              <h2 className="text-2xl font-bold mb-4">
                {campaign || "Help hospitalized children with cancer"}
              </h2>
              <p className="text-white/90 leading-relaxed">
                Your donation helps provide support and resources to hospitalized children battling cancer. 
                Your generosity brings joy, comfort, and hope to children during their difficult hospital stays. 
                Every donation makes a real difference in a child's life.
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/20">
            <div className="flex items-center space-x-4 text-sm text-white/80">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Secure & Trusted</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Tax Deductible</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Donation Form - Right Side replaced entirely by Zeffy */}
        <div className="lg:w-1/2 w-full flex flex-col">
          <div className="bg-white dark:bg-gray-800">
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Donate to save lives</h2>
                {campaign && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Campaign: {campaign}</p>
                )}
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors hover:cursor-pointer"
              >
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1">
            {consent.marketing ? (
              <>
                {/* Provider Selection */}
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Choose your preferred donation platform:</p>
                  <div className="flex flex-wrap gap-2">
                     <button
                       onClick={() => setSelectedProvider('zeffy')}
                       className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-md cursor-pointer ${
                         selectedProvider === 'zeffy'
                           ? 'bg-[#732154] text-white hover:bg-[#732154]/90'
                           : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500'
                       }`}
                     >
                       Zeffy
                     </button>
                     <button
                       onClick={() => setSelectedProvider('givelively')}
                       className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-md cursor-pointer ${
                         selectedProvider === 'givelively'
                           ? 'bg-[#732154] text-white hover:bg-[#732154]/90'
                           : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500'
                       }`}
                     >
                       GiveLively
                     </button>
                     <button
                       onClick={() => setSelectedProvider('paypal')}
                       className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 hover:shadow-md cursor-pointer ${
                         selectedProvider === 'paypal'
                           ? 'bg-[#732154] text-white hover:bg-[#732154]/90'
                           : 'bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-500'
                       }`}
                     >
                       PayPal
                     </button>
                  </div>
                </div>
                
                {selectedProvider === 'zeffy' ? (
                <div className="h-[600px] sm:h-[650px] overflow-auto">
                  <iframe
                    className="block w-full h-full max-w-full border-0"
                    src="https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-18649"
                    title="Zeffy donation form"
                    frameBorder={0}
                    scrolling="yes"
                    allow="payment"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                    style={{
                      WebkitOverflowScrolling: 'touch',
                      overflow: 'auto',
                      minHeight: '600px',
                      height: '100%'
                    }}
                  />
                </div>
              ) : selectedProvider === 'givelively' ? (
                <div className="h-[600px] flex flex-col items-center justify-center p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      Donate via GiveLively
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Click the button below to be redirected to our secure GiveLively donation page.
                    </p>
                  </div>
                  <a
                    href="https://secure.givelively.org/donate/koenig-childhood-cancer-foundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#732154] text-white hover:bg-[#732154]/90 transition-colors font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Donate with GiveLively
                  </a>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 max-w-md text-center">
                    You'll be redirected to GiveLively's secure donation platform in a new tab.
                  </p>
                </div>
              ) : (
                <div className="h-[600px] flex flex-col items-center justify-center p-8">
                  <div className="text-center mb-6">
                    <div className="mb-4">
                      <svg className="w-16 h-16 mx-auto text-[#0070ba]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.555.48l-1.12 7.106h-.001l-.275 1.74a.56.56 0 0 0 .555.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.76-4.852a.932.932 0 0 1 .922-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      Donate via PayPal
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Click the button below to donate securely through PayPal.
                    </p>
                  </div>
                  <a
                    href={PAYPAL_DONATE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0070ba] text-white hover:bg-[#003087] transition-colors font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.555.48l-1.12 7.106h-.001l-.275 1.74a.56.56 0 0 0 .555.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.76-4.852a.932.932 0 0 1 .922-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
                    </svg>
                    Donate with PayPal
                  </a>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 max-w-md text-center">
                    You'll be redirected to PayPal's secure donation platform in a new tab.
                  </p>
                </div>
                )}
              </>
            ) : (
              <div className="h-[600px] flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Marketing cookies required</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
                  To display our embedded donation form, please enable Marketing cookies in your preferences.
                </p>
                <button
                  type="button"
                  onClick={openPreferences}
                  className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#732154] text-white hover:bg-[#732154]/90 hover:cursor-pointer"
                >
                  Manage cookie preferences
                </button>
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
