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
              Why Your Gift Matters
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your gift provides critical financial, emotional, and practical support to children battling cancer and their families such as cancer treatment, meals, travel, lodging and essential care during long hospital stays, bringing comfort, stability, and hope when they need it most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Help Families Financially */}
            <div className="group bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Help Families Financially</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong>$50</strong> – Provides a warm dinner for a family during their child&apos;s treatment<br/>
                <strong>$150</strong> – Covers one night of safe lodging near the hospital<br/>
                <strong>$1,000</strong> – Helps one family afford medical co-pays and critical living expenses
              </p>
            </div>

            {/* Bring Joy Bags to Hospitals */}
            <div className="group bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Bring Joy Bags to Hospitals</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong>$25</strong> – Sends a Joy Bag to a hospitalized child filled with comfort and love<br/>
                <strong>$100</strong> – Delivers care bags for both a child and their caregiver during treatment<br/>
                <strong>$5,000</strong> – Provides Joy Bags for every child on a full hospital floor
              </p>
            </div>

            {/* Heal Emotionally in KCCF Camp */}
            <div className="group bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-fandango-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏕️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Heal Emotionally in KCCF Camp</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong>$250</strong> – Covers a full day of emotional healing and connection at KCCF Camp<br/>
                <strong>$1,000</strong> – Sponsors a child&apos;s full Healing Camp experience<br/>
                <strong>$5,000</strong> – Supports therapeutic programs for an entire KCCF Camp session
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
              Ways to Give
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the option that works best for you. Every gift makes a real difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Corporate Matching */}
            <div className="card-interactive bg-gradient-to-br from-platinum-50 to-platinum-100 dark:bg-gray-700 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl" aria-hidden="true">🏢</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Corporate Matching</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Please check if your corporation / company matches employee donation</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                To learn more about it you can reach out to us at{' '}
                <a href="mailto:join@thekccf.org" className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 font-semibold">
                  join@thekccf.org
                </a>
                {' '}or{' '}
                <a href="tel:+19177656272" className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 font-semibold">
                  1 (917) 765-6272
                </a>
              </p>
              <div className="flex justify-center">
                <DonationButton campaign="Corporate Matching" variant="primary" size="md">Get Started</DonationButton>
              </div>
            </div>

            {/* Stock Donation */}
            <div className="card-interactive bg-gradient-to-br from-platinum-50 to-platinum-100 dark:bg-gray-700 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl" aria-hidden="true">📈</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Stock Donations and Donor Advised Funds</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Making a gift to Koenig Childhood Cancer Foundation directly through your Donor Advised Fund (DAF) or by donating appreciated stock is a meaningful and tax-efficient way to support children and families facing illness and crisis. These giving options ensure your generosity has an immediate and lasting impact.</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                To learn more about it you can reach out to us at{' '}
                <a href="mailto:join@thekccf.org" className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 font-semibold">
                  join@thekccf.org
                </a>
                {' '}or{' '}
                <a href="tel:+19177656272" className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 font-semibold">
                  1 (917) 765-6272
                </a>
              </p>
              <div className="flex justify-center">
                <DonationButton campaign="Stock Donation" variant="primary" size="md">Learn More</DonationButton>
              </div>
            </div>

            {/* Planned or Estate Gift */}
            <div className="card-interactive bg-gradient-to-br from-platinum-50 to-platinum-100 dark:bg-gray-700 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-14 h-14 bg-fandango-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl" aria-hidden="true">🎗️</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Planned or Estate Gift</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Leave a lasting legacy for children with cancer.</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                To learn more about it you can reach out to us at{' '}
                <a href="mailto:join@thekccf.org" className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 font-semibold">
                  join@thekccf.org
                </a>
                {' '}or{' '}
                <a href="tel:+19177656272" className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 font-semibold">
                  1 (917) 765-6272
                </a>
              </p>
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
                <a href="mailto:join@thekccf.org" className="text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 font-semibold">
                  join@thekccf.org
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
