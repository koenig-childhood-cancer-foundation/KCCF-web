import type { Metadata } from 'next';
import React from 'react';
import PageHeader from '@/components/PageHeader';
import DonationButton from '@/components/DonationButton';

export const metadata: Metadata = {
  title: "Donate - Support Childhood Cancer Families | Koenig Childhood Cancer Foundation",
  description: "Make a difference in the lives of children battling cancer. Your donation directly supports families with medical bills, transportation, lodging, and essential expenses.",
  keywords: ["donate", "childhood cancer", "cancer foundation", "charity", "donation", "help families", "medical bills"],
  openGraph: {
    title: "Donate - Support Childhood Cancer Families | Koenig Childhood Cancer Foundation",
    description: "Make a difference in the lives of children battling cancer. Your donation directly supports families with medical bills, transportation, lodging, and essential expenses.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/donate` : "https://thekccf.org/donate",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
            campaign="General Donation"
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

          <div className="grid md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>
    </div>
  );
}
