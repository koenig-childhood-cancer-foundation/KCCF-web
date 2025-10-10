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

      {/* Main Donation CTA */}
      <section className="py-16 bg-[#732154] dark:bg-[#732154]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Your donation today will directly support families battling childhood cancer. 
            Every contribution, no matter the size, makes a real impact.
          </p>
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
      <section className="py-20 bg-white dark:bg-gray-800">
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
            <div className="group bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Keep Families Housed</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Cover rent, utilities, and essentials when parents must miss work to care for their child.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Fund Critical Travel</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Provide rides and gas to life-saving appointments when treatment centers are far from home.
              </p>
            </div>

            <div className="group bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
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
      <section className="py-20 bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Ways to <span className="text-violet-600 dark:text-saffron-400">Give</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the option that works best for you. Every gift makes a real difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">One-Time Gift</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Make an immediate impact today.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <DonationButton amount={50} campaign="One-Time" variant="primary" size="md">Donate $50</DonationButton>
                <DonationButton amount={100} campaign="One-Time" variant="outline" size="md" className="rounded-full">Donate $100</DonationButton>
                <DonationButton amount={250} campaign="One-Time" variant="ghost" size="md" className="rounded-full">Donate $250</DonationButton>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Monthly Giving</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Provide steady support all year.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <DonationButton amount={20} campaign="Monthly" variant="primary" size="md">Give $20/mo</DonationButton>
                <DonationButton amount={35} campaign="Monthly" variant="outline" size="md" className="rounded-full">Give $35/mo</DonationButton>
                <DonationButton amount={50} campaign="Monthly" variant="ghost" size="md" className="rounded-full">Give $50/mo</DonationButton>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center">
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Corporate Matching</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Multiply your impact through your employer.</p>
              <div className="flex justify-center">
                <DonationButton campaign="Corporate Matching" variant="primary" size="md">Get Started</DonationButton>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 text-center">
              <div className="flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.76-4.852a.932.932 0 0 1 .922-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">PayPal</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Send directly via PayPal.</p>
              <a 
                href="mailto:join@thekccf.org"
                className="inline-flex items-center justify-center px-6 py-3 text-base rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#732154] cursor-pointer bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Donate via PayPal
              </a>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                Send to: join@thekccf.org
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
