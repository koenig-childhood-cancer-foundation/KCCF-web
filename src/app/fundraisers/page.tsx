"use client"

import PageHeader from '@/components/PageHeader';

export default function Fundraisers() {
  return (
    <div className="min-h-screen">
      <PageHeader
        title="Fundraisers"
        subtitle="Support our mission through peer-to-peer fundraising campaigns. Start your own fundraiser or contribute to existing ones."
      />

      {/* Zeffy Iframe - Dynamic Height */}
      <div className="flex-1 w-full">
        {/* Zeffy forms are loaded as strictly necessary services */}
        <iframe
          src="https://www.zeffy.com/en-US/peer-to-peer/peer-to-peer-fundraisers"
          title="KCCF Peer-to-Peer Fundraisers"
          className="w-full border-0"
          style={{ minHeight: '800px', height: 'auto' }}
          loading="lazy"
          allow="payment"
        />
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
            <div className="w-full">
              <iframe
                title='Donation form powered by Zeffy'
                className="w-full border-0"
                style={{ minHeight: '400px', height: 'auto' }}
                src='https://www.zeffy.com/embed/leaderboard/peer-to-peer-fundraisers'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
