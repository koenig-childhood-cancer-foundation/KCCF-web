'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

interface SubmissionModalProps {
  onClose?: () => void
}

export default function SubmissionModal({ onClose }: SubmissionModalProps) {
  const searchParams = useSearchParams()
  const [isVisible, setIsVisible] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    const submitted = searchParams.get('submitted')
    if (submitted === '1' || submitted === '0') {
      setIsSuccess(submitted === '1')
      setIsVisible(true)
      
      // Auto-hide after 5 seconds
      const timer = setTimeout(() => {
        setIsVisible(false)
        onClose?.()
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [searchParams, onClose])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => {
          setIsVisible(false)
          onClose?.()
        }}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 transform transition-all duration-300">
        {/* Close button */}
        <button
          onClick={() => {
            setIsVisible(false)
            onClose?.()
          }}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors cursor-pointer"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Icon */}
        <div className="text-center mb-6">
          {isSuccess ? (
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#732154' }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          ) : (
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#732154' }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-3" style={{ color: '#732154' }}>
            {isSuccess ? 'Success!' : 'Something went wrong'}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            {isSuccess 
              ? 'Thank you for your submission. You\'ll hear from us soon!'
              : 'There was an error submitting your form. Please try again or contact us directly.'
            }
          </p>
          
          <button
            onClick={() => {
              setIsVisible(false)
              onClose?.()
            }}
            className="px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 text-white shadow-lg cursor-pointer"
            style={{ backgroundColor: '#732154' }}
          >
            {isSuccess ? 'Continue' : 'Try Again'}
          </button>
        </div>
      </div>
    </div>
  )
}
