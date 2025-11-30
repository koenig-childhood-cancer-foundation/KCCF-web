import React from 'react';
import PageHeader from '@/components/PageHeader';
import DonationButton from '@/components/DonationButton';

export default function Donate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-platinum-50 via-white to-platinum-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <PageHeader 
        title="Make a Difference Today"
        subtitle="Your donation directly supports families battling childhood cancer. Every dollar makes a real impact in the lives of children and their families."
      />

      {/* Main Donation CTA - Moved to main area */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <DonationButton
            amount={50}
            campaign="Donate to save lives"
            variant="primary"
            size="lg"
            icon={
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
          >
                Donate Now
          </DonationButton>
        </div>
      </section>

      {/* Why Your Gift Matters */}
      <section className="py-20 bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Why Your <span className="text-violet-600 dark:text-saffron-400">Gift</span> Matters
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your generosity provides urgent relief and lasting hope to families fighting childhood cancer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Keep Families Housed</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Cover rent, utilities, and essentials when parents must miss work to care for their child.
              </p>
            </div>

            <div className="group bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Fund Critical Travel</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Provide rides and gas to life-saving appointments when treatment centers are far from home.
              </p>
            </div>

            <div className="group bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-fandango-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Bring Joy in Hospitals</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Sponsor Crazy Socks Gift Bags that brighten long hospital days for brave kids.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Ways to <span className="text-violet-600 dark:text-saffron-400">Give</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the option that works best for you. Every gift makes a real difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* One-Time Gift */}
            <div className="bg-gradient-to-br from-platinum-50 to-platinum-100 dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-14 h-14 bg-violet-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">One-Time Gift</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Make an immediate impact today.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <DonationButton amount={50} campaign="One-Time" variant="primary" size="md">Donate $50</DonationButton>
                <DonationButton amount={100} campaign="One-Time" variant="outline" size="md" className="rounded-full">Donate $100</DonationButton>
              </div>
            </div>

            {/* Monthly Gift */}
            <div className="bg-gradient-to-br from-platinum-50 to-platinum-100 dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Monthly Gift</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Provide steady support all year.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <DonationButton amount={20} campaign="Monthly" variant="primary" size="md">Give $20/mo</DonationButton>
                <DonationButton amount={35} campaign="Monthly" variant="outline" size="md" className="rounded-full">Give $35/mo</DonationButton>
              </div>
            </div>

            {/* DAF Donation */}
            <div className="bg-gradient-to-br from-platinum-50 to-platinum-100 dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">DAF Donation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Give through your Donor Advised Fund.</p>
              <div className="flex justify-center">
                <DonationButton campaign="DAF Donation" variant="primary" size="md">Learn More</DonationButton>
              </div>
            </div>

            {/* Corporate Matching */}
            <div className="bg-gradient-to-br from-platinum-50 to-platinum-100 dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Corporate Matching</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Multiply your impact through your employer.</p>
              <div className="flex justify-center">
                <DonationButton campaign="Corporate Matching" variant="primary" size="md">Get Started</DonationButton>
              </div>
            </div>

            {/* Stock Donation */}
            <div className="bg-gradient-to-br from-platinum-50 to-platinum-100 dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Stock Donation</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Donate appreciated securities for tax benefits.</p>
              <div className="flex justify-center">
                <DonationButton campaign="Stock Donation" variant="primary" size="md">Learn More</DonationButton>
              </div>
            </div>

            {/* Planned or Estate Gift */}
            <div className="bg-gradient-to-br from-platinum-50 to-platinum-100 dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-14 h-14 bg-fandango-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🎗️</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Planned or Estate Gift</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Leave a lasting legacy for children with cancer.</p>
              <div className="flex justify-center">
                <DonationButton campaign="Planned Gift" variant="primary" size="md">Learn More</DonationButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
