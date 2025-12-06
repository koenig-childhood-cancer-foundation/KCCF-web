"use client"

import Image from 'next/image'
import DonationCard from '@/components/DonationCard'
import DonationButton from '@/components/DonationButton'

export default function Donate() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-platinum-50 via-white to-platinum-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section with Background */}
      <div className="relative min-h-[86vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 top-24">
          <Image
            src="/images/elana-charlotte.jpg"
            alt="Donate to save lives"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
        <div className="absolute inset-0 top-24 bg-amber-400/12 dark:bg-amber-400/18 pointer-events-none"></div>

        {/* Moved the title to the bottom left for exception to rule (readability) per rena request*/}
        <div className="absolute bottom-8 left-4 md:left-8 lg:left-12 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
            Help save lives
          </h1>
        </div>

        {/* DonationCard on the right */}
        <div className="relative w-full max-w-screen-2xl mx-auto px-4 py-8 md:py-12">
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <DonationCard />
            </div>
          </div>
        </div>
      </div>

      {/* Why Your Gift Matters */}
      <section className="py-20 bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Why Your <span className="text-violet-600 dark:text-saffron-400">Gift</span> Matters
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your gift provides emergency financial support to families with children battling cancer. You help cover meals, travel, lodging, and essential care during long hospital stays, bringing comfort, stability, and hope when they need it most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl" aria-hidden="true">🏠</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Keep Families Housed</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Cover rent, utilities, and essentials when parents must miss work to care for their child.
              </p>
            </div>

            <div className="group bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl" aria-hidden="true">🚗</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Fund Critical Travel</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Provide rides and gas to life-saving appointments when treatment centers are far from home.
              </p>
            </div>

            <div className="group bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-fandango-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl" aria-hidden="true">🎁</span>
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
                <span className="text-2xl" aria-hidden="true">💝</span>
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
                <span className="text-2xl" aria-hidden="true">🔄</span>
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
                <span className="text-2xl" aria-hidden="true">📋</span>
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
                <span className="text-2xl" aria-hidden="true">🏢</span>
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
                <span className="text-2xl" aria-hidden="true">📈</span>
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
                <span className="text-2xl" aria-hidden="true">🎗️</span>
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

      {/* FAQ Section */}
      <section className="py-20 bg-platinum-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-violet-600 dark:text-violet-400 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-violet-600 dark:text-violet-400 mb-3">
                Is my donation secure?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your donation is protected by industry-standard SSL encryption. Payments are processed securely through Zeffy or GiveLively using PCI-compliant technology.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-violet-600 dark:text-violet-400 mb-3">
                Is this donation tax-deductible?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes. Koenig Childhood Cancer Foundation is a registered 501(c)(3) nonprofit. Donations are tax-deductible to the extent permitted by U.S. law. EIN: 84-4892279
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-violet-600 dark:text-violet-400 mb-3">
                Will I receive a tax receipt?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes. A donation receipt will be emailed to you immediately after your gift is submitted.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-violet-600 dark:text-violet-400 mb-3">
                Can I cancel my recurring donation?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes. Monthly donations can be changed or canceled at any time. Just contact us at{' '}
                <a href="mailto:info@thekccf.org" className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 font-semibold">
                  info@thekccf.org
                </a>{' '}
                for help.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-violet-600 dark:text-violet-400 mb-3">
                What&apos;s the difference between Zeffy and GiveLively?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Zeffy charges no platform or processing fees, so <span className="font-bold text-violet-600 dark:text-violet-400">100% of your gift supports KCCF</span>. GiveLively offers more payment options (PayPal, Venmo, bank transfers, donor-advised funds) but applies standard payment processing fees.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
