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
            <h2 className="text-3xl font-bold mb-6 text-violet-700 dark:text-saffron-600">
              Why Your Gift Matters
            </h2>
            <p className="text-lg text-violet-600 dark:text-white max-w-3xl mx-auto">
              Your gift provides critical financial, emotional, and practical support to children battling cancer and their families such as cancer treatment, meals, travel, lodging and essential care during long hospital stays, bringing comfort, stability, and hope when they need it most.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Help Families Financially */}
            <div className="group bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-violet-100 dark:bg-violet-900 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-violet-700 dark:text-saffron-600">Support Families Financially</h3>
              <p className="text-violet-600 dark:text-white leading-relaxed">
                <strong>$50</strong> – A warm meal for a family<br/>
                <strong>$150</strong> – One night of safe lodging<br/>
                <strong>$1,000</strong> – Average co-pay for a child
              </p>
            </div>

            {/* Bring Joy Bags to Hospitals */}
            <div className="group bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-violet-700 dark:text-saffron-600">Bring Joy Bags to Hospitals</h3>
              <p className="text-violet-600 dark:text-white leading-relaxed">
                <strong>$25</strong> – A gift bag for one child<br/>
                <strong>$100</strong> – Gift bags for a child and caregiver<br/>
                <strong>$5,000</strong> – Gift bags for an entire hospital floor
              </p>
            </div>

            {/* Heal Emotionally at KCCF Camp */}
            <div className="group bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-fandango-100 dark:bg-fandango-900 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <span className="text-2xl">🏕️</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-violet-700 dark:text-saffron-600">Heal Emotionally at KCCF Camp</h3>
              <p className="text-violet-600 dark:text-white leading-relaxed">
                <strong>$250</strong> – One day of healing camp<br/>
                <strong>$1,000</strong> – One week of camp for a child<br/>
                <strong>$5,000</strong> – Therapeutic programs during camp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-violet-700 dark:text-saffron-600">
              Ways to Give
            </h2>
            <p className="text-lg text-violet-600 dark:text-white max-w-3xl mx-auto">
              Choose the option that works best for you. Every gift makes a real difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Corporate Matching */}
            <div className="card-interactive bg-gradient-to-br from-platinum-50 to-platinum-100 dark:bg-gray-700 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl" aria-hidden="true">🏢</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-violet-700 dark:text-saffron-600">Corporate Matching</h3>
              <p className="text-violet-600 dark:text-white mb-4">
                Check if your company offers a matching gift program.
              </p>
              <p className="text-violet-600 dark:text-white text-sm">
                Any questions, contact us at{' '}
                <a href="mailto:join@thekccf.org" className="relative z-10 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 font-semibold">
                  join@thekccf.org
                </a>
                {' '}or call{' '}
                <a href="tel:+19177656272" className="relative z-10 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 font-semibold">
                  (917) 765‑6272
                </a>
              </p>
            </div>

            {/* Stock Donations */}
            <div className="card-interactive bg-gradient-to-br from-platinum-50 to-platinum-100 dark:bg-gray-700 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl" aria-hidden="true">📈</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-violet-700 dark:text-saffron-600">Stock Donations</h3>
              <p className="text-violet-600 dark:text-white mb-4">
                You can donate your appreciated stock here:
                <br />
                <span className="font-semibold">RBC DTC # 0235</span>
              </p>
              <p className="text-violet-600 dark:text-white text-sm">
                Any questions, contact us at{' '}
                <a href="mailto:join@thekccf.org" className="relative z-10 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 font-semibold">
                  join@thekccf.org
                </a>
                {' '}or call{' '}
                <a href="tel:+19177656272" className="relative z-10 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 font-semibold">
                  (917) 765‑6272
                </a>
              </p>
            </div>

            {/* Donor Advised Funds (DAF) */}
            <div className="card-interactive bg-gradient-to-br from-platinum-50 to-platinum-100 dark:bg-gray-700 rounded-2xl p-8 border border-gray-100 dark:border-gray-700 text-center">
              <div className="w-14 h-14 bg-fandango-100 dark:bg-fandango-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl" aria-hidden="true">🎗️</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-violet-700 dark:text-saffron-600">Donor Advised Funds (DAF)</h3>
              <p className="text-violet-600 dark:text-white mb-4">
                You can make a donation through your Donor Advised Funds.
              </p>
              <p className="text-violet-600 dark:text-white text-sm mb-4">
                To learn more, contact us at{' '}
                <a href="mailto:join@thekccf.org" className="relative z-10 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 font-semibold">
                  join@thekccf.org
                </a>
                {' '}or call{' '}
                <a href="tel:+19177656272" className="relative z-10 text-orange-500 hover:text-orange-600 dark:text-orange-400 dark:hover:text-orange-500 font-semibold">
                  (917) 765‑6272
                </a>
              </p>
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
