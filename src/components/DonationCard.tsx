"use client"

import { useState } from 'react'
import GiveLivelyWidget from './GiveLivelyWidget'

type DonationProvider = 'zeffy' | 'givelively'

export default function DonationCard() {
  const [platform, setPlatform] = useState<DonationProvider>('zeffy')

  return (
    <div className="rounded-2xl bg-white dark:bg-gray-800 shadow-xl h-[calc(66vh-8rem)] md:h-[calc(85vh-6rem)] overflow-hidden flex flex-col">
      <div className="p-4 md:p-6 overflow-y-auto custom-scrollbar flex-1">
        
        {/* TITLE */}
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-violet-600 dark:text-violet-400">
         KCCF families need you ❤️
        </h3>

      {/* PLATFORM SELECTION */}
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 text-center">
          Choose how you&apos;d like to give:
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setPlatform('zeffy')}
            className={`flex-1 py-2.5 px-3 rounded-lg border text-center font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 ${
              platform === 'zeffy'
                ? 'bg-violet-600 dark:bg-violet-700 text-white border-violet-600 dark:border-violet-700'
                : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'
            }`}
            aria-pressed={platform === 'zeffy'}
            aria-label="Select Zeffy donation platform"
          >
            Zeffy
          </button>

          <button
            onClick={() => setPlatform('givelively')}
            className={`flex-1 py-2.5 px-3 rounded-lg border text-center font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 ${
              platform === 'givelively'
                ? 'bg-violet-600 dark:bg-violet-700 text-white border-violet-600 dark:border-violet-700'
                : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'
            }`}
            aria-pressed={platform === 'givelively'}
            aria-label="Select GiveLively donation platform"
          >
            GiveLively
          </button>
        </div>
        
        {/* Platform info */}
        <p className="mt-2 text-xs text-center text-gray-600 dark:text-gray-400 min-h-[2.5rem] flex items-center justify-center">
          {platform === 'zeffy' ? (
            <>No platform or processing fees. <span className="font-bold text-violet-600 dark:text-violet-400">100% of your gift supports KCCF.</span></>
          ) : (
            <>Standard payment processing fees apply. <span className="font-bold text-violet-600 dark:text-violet-400">Supports PayPal, Venmo, and bank transfers.</span></>
          )}
        </p>
      </div>


      {/* ZEFFY IFRAME */}
      {platform === 'zeffy' && (
        <div className="mt-4">
          <iframe
            className="w-full border-0 rounded-lg"
            src="https://www.zeffy.com/embed/donation-form/donate-to-make-a-difference-18649"
            title="Zeffy donation form"
            scrolling="yes"
            allow="payment"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation-by-user-activation"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ minHeight: '600px' }}
            tabIndex={0}
          />
        </div>
      )}

      {/* GIVELIVELY WIDGET */}
      {platform === 'givelively' && <GiveLivelyWidget />}

      </div>
    </div>
  )
}

