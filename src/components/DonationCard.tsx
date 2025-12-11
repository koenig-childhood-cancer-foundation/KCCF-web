"use client"

import { useState } from 'react'
import GiveLivelyWidget from './GiveLivelyWidget'

type DonationProvider = 'zeffy' | 'givelively'

export default function DonationCard() {
  const [platform, setPlatform] = useState<DonationProvider>('zeffy')
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once')
  const [amount, setAmount] = useState<number>(50)

  const presetAmounts = [25, 50, 75, 100]

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
            <>Standard payment processing fees apply. Supports PayPal, Venmo, bank transfers & donor-advised funds.</>
          )}
        </p>
      </div>

      {/* FREQUENCY SELECTION */}
      {platform === 'givelively' && (
        <div className="mb-4">
          <div className="flex w-full bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
            <button
              className={`w-1/2 py-2.5 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 ${
                frequency === 'once'
                  ? 'bg-gray-300 dark:bg-gray-600 font-semibold text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              onClick={() => setFrequency('once')}
              aria-pressed={frequency === 'once'}
            >
              One-time
            </button>
            <button
              className={`w-1/2 py-2.5 text-sm font-medium flex items-center justify-center gap-1 transition-all focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 ${
                frequency === 'monthly'
                  ? 'bg-violet-600 dark:bg-violet-700 text-white font-semibold'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              onClick={() => setFrequency('monthly')}
              aria-pressed={frequency === 'monthly'}
            >
              <span aria-hidden="true">❤️</span>
              <span>Monthly</span>
            </button>
          </div>
        </div>
      )}

      {/* AMOUNT SELECTOR - Only show for GiveLively */}
      {platform === 'givelively' && (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Choose an amount:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {presetAmounts.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setAmount(amt)}
                  className={`py-2.5 rounded-lg border font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 ${
                    amount === amt
                      ? 'bg-violet-600 dark:bg-violet-700 text-white border-violet-600 dark:border-violet-700'
                      : 'bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'
                  }`}
                  aria-pressed={amount === amt}
                  aria-label={`Donate $${amt}`}
                >
                  ${amt}
                </button>
              ))}
            </div>
          </div>

          {/* CUSTOM AMOUNT */}
          <div className="mb-4">
            <label htmlFor="custom-amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              Or enter a custom amount:
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400" aria-hidden="true">$</span>
              <input
                id="custom-amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg py-2.5 pl-8 pr-4 text-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
                min={1}
                aria-label="Custom donation amount"
              />
            </div>
          </div>

          {/* SUBMIT BUTTON FOR GIVELIVELY */}
          <button
            onClick={() => {
              const widget = document.getElementById('give-lively-widget')
              if (widget) {
                widget.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            }}
            className="w-full bg-violet-600 dark:bg-violet-700 hover:bg-violet-700 dark:hover:bg-violet-800 text-white py-3 rounded-lg text-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
          >
            {frequency === 'monthly' ? 'Donate Monthly' : 'Donate Now'}
          </button>
        </>
      )}

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

