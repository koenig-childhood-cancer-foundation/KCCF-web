"use client"

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useFormModal, FORM_CONFIGS } from '@/contexts/FormModalContext'
import Spinner from '@/components/Spinner'

export default function FormModal() {
  const { isOpen, formType, closeModal } = useFormModal()
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Reset iframeLoaded every time modal opens (isOpen changes to true)
  useEffect(() => {
    if (isOpen) {
      setIframeLoaded(false);
    }
  }, [isOpen]);

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

  if (!isOpen || !formType) return null

  const config = FORM_CONFIGS[formType]

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full h-[85vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex-1 text-center">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {config.title}
            </h2>
            {config.subtitle && (
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {config.subtitle}
              </p>
            )}
          </div>
          
          {/* Close button */}
          <button
            onClick={closeModal}
            className="ml-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form Content */}
        <div className="flex-1 min-h-0 flex flex-col relative">
          {/* Monday.com forms are loaded as strictly necessary services */}
          <>
            {!iframeLoaded && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/80 dark:bg-gray-800/80">
                <Spinner text="Loading form..." />
              </div>
            )}
            <iframe
              className={`flex-1 w-full ${!iframeLoaded ? 'hidden' : ''}`}
              src={config.src}
              title={config.title}
              frameBorder={0}
              scrolling="auto"
              allow="payment"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              onLoad={() => setIframeLoaded(true)}
            />
          </>
        </div>
      </div>
    </div>
  )

  // Use portal to render modal outside of normal DOM hierarchy
  return createPortal(modalContent, document.body)
}
