"use client"

import Link from 'next/link';
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-violet-600 via-fandango-600 to-violet-800 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Make a <span className="text-saffron-300">Difference</span>
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Beyond fundraising, there are many ways to support families battling childhood cancer.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/donate" className="group bg-orange-500 hover:bg-orange-600 text-white py-4 px-10 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center">
              <span>Donate Now</span>
              <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>
            <Link href="/volunteer" className="group bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-4 px-10 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center border border-white/30">
              <span>Volunteer</span>
              <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
