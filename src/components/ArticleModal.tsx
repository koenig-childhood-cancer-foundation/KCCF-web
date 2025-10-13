"use client"

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { useArticleModal, ARTICLE_CONFIGS } from '@/contexts/ArticleModalContext'

export default function ArticleModal() {
  const { isOpen, articleType, closeModal } = useArticleModal()

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

  if (!isOpen || !articleType) return null

  const article = ARTICLE_CONFIGS[articleType]

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeModal}
      />
      
      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex-1">
            <div className="text-saffron-600 dark:text-saffron-400 text-sm font-semibold mb-1">
              {article.publication}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {article.title}
            </h2>
            {article.subtitle && (
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                {article.subtitle}
              </p>
            )}
          </div>
          
          {/* Close button */}
          <button
            onClick={closeModal}
            className="ml-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors cursor-pointer flex-shrink-0"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Article Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="prose dark:prose-invert max-w-none">
            {article.imageUrl && (
              <div className="mb-6">
                <Image 
                  src={article.imageUrl} 
                  alt={article.title}
                  width={800}
                  height={600}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            )}
            
            <div className="text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-line">
              {article.content}
            </div>

            {article.externalUrl && (
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <a 
                  href={article.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-fandango-600 hover:text-fandango-700 dark:text-fandango-400 dark:hover:text-fandango-300 font-semibold"
                >
                  Watch Related Video Coverage →
                </a>
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
