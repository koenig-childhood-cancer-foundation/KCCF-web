"use client"

import PageHeader from '@/components/PageHeader';
import { useCookieConsent } from '@/contexts/CookieConsentContext';

export default function Fundraisers() {
  const { consent, openPreferences } = useCookieConsent();

  return (
    <div className="min-h-screen">
      <PageHeader
        title="Fundraisers"
        subtitle="Support our mission through peer-to-peer fundraising campaigns. Start your own fundraiser or contribute to existing ones."
      />

      {/* Zeffy Iframe - Dynamic Height */}
      <div className="flex-1 w-full">
        {consent.marketing ? (
          <iframe
            src="https://www.zeffy.com/en-US/peer-to-peer/peer-to-peer-fundraisers"
            title="KCCF Peer-to-Peer Fundraisers"
            className="w-full border-0"
            style={{ minHeight: '800px', height: 'auto' }}
            loading="lazy"
            allow="payment"
          />
        ) : (
          <div className="min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-gray-50 dark:bg-gray-800">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Marketing cookies required</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
              To display our peer-to-peer fundraising platform, please enable Marketing cookies in your preferences.
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

      {/* Leaderboard Section */}
      <section className="py-16 bg-platinum-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-violet-700 mb-4">Fundraising Leaderboard</h2>
            <p className="text-lg text-violet-600 max-w-3xl mx-auto">
              See who's leading the charge in our peer-to-peer fundraising campaigns.
              Every contribution makes a difference in the lives of children with cancer.
            </p>
          </div>

          {/* Leaderboard Iframe */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-violet-700">Top Fundraisers</h3>
              <p className="text-violet-600 mt-2">
                Check out the latest rankings and support your favorite campaigns.
              </p>
            </div>
            {consent.marketing ? (
              <div className="w-full">
                <iframe
                  title='Donation form powered by Zeffy'
                  className="w-full border-0"
                  style={{ minHeight: '400px', height: 'auto' }}
                  src='https://www.zeffy.com/embed/leaderboard/peer-to-peer-fundraisers'
                />
              </div>
            ) : (
              <div className="min-h-[200px] flex flex-col items-center justify-center text-center p-8 bg-gray-50 dark:bg-gray-800">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Marketing cookies required</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
                  To display our fundraising leaderboard, please enable Marketing cookies in your preferences.
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
      </section>
    </div>
  )
}
