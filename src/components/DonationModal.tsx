"use client"

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'
import { useDonationModal } from '@/contexts/DonationModalContext'
import { useCookieConsent } from '@/contexts/CookieConsentContext'

type DonationProvider = 'zeffy' | 'givelively'
 

// All previous multi-step and amount form logic removed in favor of Zeffy embed

export default function DonationModal() {
  const { isOpen, closeModal, campaign } = useDonationModal()
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
                src="/images/ElanaOliviaGiftBags-scaled.jpg"
                alt="Elana and Olivia preparing gift bags"
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
            <div className="flex items-center justify-between text-sm text-white/80">
              <div className="flex items-center space-x-4">
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
            <div className="mt-4">
              <Link 
                href="/donate"
                onClick={closeModal}
                className="inline-flex items-center text-sm text-white/90 hover:text-white underline underline-offset-2 transition-colors"
              >
                Other ways to donate
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
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
                  <div className="flex space-x-4">
                     <div className="flex flex-col">
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
                       <ul className="mt-2 text-xs text-gray-500 dark:text-gray-400 list-disc list-inside">
                         <li>No fees</li>
                         <li>Accepts international donations</li>
                       </ul>
                     </div>
                     <div className="flex flex-col">
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
                       <ul className="mt-2 text-xs text-gray-500 dark:text-gray-400 list-disc list-inside">
                         <li>Standard processing fees</li>
                         <li>Accepts PayPal / Venmo / DAFs</li>
                       </ul>
                     </div>
                  </div>
                </div>
                
                {selectedProvider === 'zeffy' ? (
                <div className="h-[600px] sm:h-[650px] overflow-auto">
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
                      minHeight: '600px',
                      height: '100%'
                    }}
                  />
                </div>
              ) : (
                <div className="h-[600px] sm:h-[650px] overflow-auto">
                  <iframe
                    className="block w-full h-full max-w-full border-0"
                    src="https://secure.givelively.org/donate/koenig-childhood-cancer-foundation?ref=sd_widget"
                    title="GiveLively donation form"
                    scrolling="yes"
                    allow="payment"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    style={{
                      WebkitOverflowScrolling: 'touch',
                      overflow: 'auto',
                      minHeight: '600px',
                      height: '100%'
                    }}
                  />
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
