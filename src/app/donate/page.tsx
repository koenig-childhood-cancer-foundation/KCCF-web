"use client"

import { Suspense, useEffect, type ReactNode } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import DonationCard from '@/components/DonationCard'
import DonationButton from '@/components/DonationButton'
import { useDonationModal } from '@/contexts/DonationModalContext'

// Gift amounts come from KCCF Current Facts – MASTER (Cost per child).
const giftImpacts: {
  title: string
  amounts: { amount: string; text: string }[]
  note?: string
  stat?: string
}[] = [
  {
    title: 'Family Aid',
    amounts: [
      { amount: '$50', text: 'a dinner for a family' },
      { amount: '$360', text: '3 nights of lodging for a family' },
      { amount: '$1,000', text: 'medication for one chemo cycle that insurance doesn’t cover' },
    ],
  },
  {
    title: 'Crazy Socks Gift Bags',
    amounts: [
      { amount: '$20', text: 'one gift bag for a child in the hospital' },
      { amount: '$6,000', text: '300 gift bags for 300 children' },
    ],
  },
  {
    title: 'KCCF International Camp',
    amounts: [],
    note: 'International summer camp for emotional recovery.',
    stat: '120 children hosted',
  },
]

const waysToGive: { title: string; body: ReactNode; contact: boolean }[] = [
  {
    title: 'Corporate Matching',
    body: 'Check if your company offers a matching gift program. KCCF is on Benevity.',
    contact: true,
  },
  {
    title: 'Stock Donations',
    body: (
      <>
        You can donate your appreciated stock here:
        <br />
        <span className="font-semibold">RBC DTC # 0235</span>
      </>
    ),
    contact: true,
  },
  {
    title: 'Donor Advised Funds (DAF)',
    body: 'You can make a donation through your Donor Advised Fund.',
    contact: true,
  },
  {
    title: 'Crypto & Wire Transfers',
    body: 'We accept crypto (including Bitcoin) and wire transfers. Email us for details.',
    contact: true,
  },
  {
    title: 'Check by Mail',
    body: (
      <>
        Payable to Koenig Childhood Cancer Foundation
        <br />
        1175 York Ave, Ste. 15E
        <br />
        New York, NY 10065
      </>
    ),
    contact: false,
  },
]

const linkClass =
  'font-semibold text-violet-600 dark:text-saffron-400 underline underline-offset-4 decoration-[#DAB87E] hover:text-violet-700 dark:hover:text-saffron-300'
const faqCardClass =
  'group bg-white dark:bg-gray-700 rounded-[22px] overflow-hidden border-t-4 border-violet-600 dark:border-saffron-400 shadow-md'
const faqQuestionClass =
  'flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden px-6 py-5 text-lg font-semibold text-[#2B2330] dark:text-white'
const faqAnswerClass = 'px-6 pb-6 -mt-1 text-gray-600 dark:text-gray-300'

// Separate component that uses useSearchParams - must be wrapped in Suspense
function DonateModalTrigger() {
  const { openModal } = useDonationModal()
  const searchParams = useSearchParams()

  // Automatically open the donation modal when the page loads
  // Skip if nomodal=1 query param is present (used when navigating from "Other ways to donate")
  useEffect(() => {
    const noModal = searchParams.get('nomodal')
    if (noModal !== '1') {
      openModal()
    }
  }, [openModal, searchParams])

  return null
}

export default function Donate() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-platinum-50 via-white to-platinum-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Suspense boundary for useSearchParams */}
      <Suspense fallback={null}>
        <DonateModalTrigger />
      </Suspense>

      {/* Hero: on computers the card sits on the photo; on phones and tablets the photo comes first and the card below it, so faces stay visible */}
      <div className="relative lg:min-h-[86vh] flex flex-col lg:flex-row lg:items-center justify-center overflow-hidden pt-24">
        {/* Background Image */}
        <div className="relative h-72 sm:h-96 lg:absolute lg:inset-0 lg:top-24 lg:h-auto">
          <Image
            src="/images/elana-charlotte.jpg"
            alt="Elana Koenig smiling with a young child in a yellow KCCF shirt"
            fill
            className="object-cover object-[22%_30%] sm:object-[30%_30%] lg:object-center"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
        <div className="hidden lg:block absolute inset-0 top-24 bg-amber-400/12 dark:bg-amber-400/18 pointer-events-none"></div>

        {/* DonationCard on the right */}
        <div className="relative w-full max-w-screen-2xl mx-auto px-4 -mt-12 pb-10 lg:mt-0 lg:py-12">
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <DonationCard />
            </div>
          </div>
        </div>
      </div>

      {/* Why Your Gift Matters */}
      <section className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="mb-12 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white dark:bg-gray-800 border border-[#DAB87E] rounded-[22px] shadow-md px-8 py-5 max-w-2xl">
              <span className="text-6xl font-extrabold text-violet-600 dark:text-saffron-400 leading-none">90&cent;</span>
              <div className="text-center sm:text-left">
                <p className="text-xl font-bold text-[#2B2330] dark:text-white">
                  of every dollar goes directly to programs
                </p>
                <p className="text-sm italic text-[#8A6A2E] dark:text-[#DAB87E] mt-1">
                  Program expenses were 90.6% of total expenses, per KCCF&apos;s 2025 Financial Review.
                </p>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-violet-600 dark:text-white">
              Why Your Gift Matters
            </h2>
            <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-6" aria-hidden="true" />
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your gift gives children battling cancer and their families financial and emotional support: treatment, meals, travel, lodging and care during long hospital stays.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7 max-w-6xl mx-auto">
            {giftImpacts.map((program) => (
              <div
                key={program.title}
                className="bg-white dark:bg-gray-700 rounded-[22px] overflow-hidden border-t-4 border-violet-600 dark:border-saffron-400 shadow-md px-7 py-8 text-center"
              >
                <h3 className="text-xl font-bold mb-4 text-[#2B2330] dark:text-white">{program.title}</h3>
                {program.amounts.map((line) => (
                  <p key={line.amount} className="my-1.5 text-[#2B2330] dark:text-gray-200 leading-relaxed">
                    <strong className="text-lg text-violet-600 dark:text-saffron-400">{line.amount}</strong> &ndash; {line.text}
                  </p>
                ))}
                {program.note && (
                  <p className="text-[#2B2330] dark:text-gray-200 leading-relaxed">{program.note}</p>
                )}
                {program.stat && (
                  <p className="mt-3 text-lg font-bold text-violet-600 dark:text-saffron-400">{program.stat}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section id="ways-to-give" className="py-20 bg-white dark:bg-gray-800 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-violet-600 dark:text-white">
              Ways to Give
            </h2>
            <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-6" aria-hidden="true" />
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the option that works best for you. Every gift makes a real difference.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-7 max-w-6xl mx-auto">
            {waysToGive.map((way) => (
              <div
                key={way.title}
                className="w-full md:w-[calc(50%-0.875rem)] lg:w-[calc(33.333%-1.17rem)] bg-[#FAF6F2] dark:bg-gray-700 rounded-[22px] overflow-hidden border-t-4 border-violet-600 dark:border-saffron-400 shadow-md px-7 py-8 text-center"
              >
                <h3 className="text-xl font-bold mb-3 text-[#2B2330] dark:text-white">{way.title}</h3>
                <p className="text-[#2B2330] dark:text-gray-200 leading-relaxed">{way.body}</p>
                {way.contact && (
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                    Questions?{' '}
                    <a href="mailto:join@thekccf.org" className={linkClass}>
                      join@thekccf.org
                    </a>
                    {' '}or{' '}
                    <a href="tel:+19177656272" className={linkClass}>
                      (917) 765&#8209;6272
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-violet-600 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-12" aria-hidden="true" />

          <div className="space-y-4">
            <details className={faqCardClass}>
              <summary className={faqQuestionClass}>
                Is my donation secure?
                <span className="shrink-0 text-[#8A6A2E] dark:text-[#DAB87E] text-2xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className={faqAnswerClass}>
                Your donation is protected by industry-standard SSL encryption. Payments are processed securely through Zeffy or GiveLively using PCI-compliant technology.
              </p>
            </details>

            <details className={faqCardClass}>
              <summary className={faqQuestionClass}>
                Is this donation tax-deductible?
                <span className="shrink-0 text-[#8A6A2E] dark:text-[#DAB87E] text-2xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className={faqAnswerClass}>
                Yes. Koenig Childhood Cancer Foundation is a registered 501(c)(3) nonprofit. Donations are tax-deductible to the extent permitted by U.S. law. EIN: 84-4892279
              </p>
            </details>

            <details className={faqCardClass}>
              <summary className={faqQuestionClass}>
                Will I receive a tax receipt?
                <span className="shrink-0 text-[#8A6A2E] dark:text-[#DAB87E] text-2xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className={faqAnswerClass}>
                Yes. A donation receipt will be emailed to you immediately after your gift is submitted.
              </p>
            </details>

            <details className={faqCardClass}>
              <summary className={faqQuestionClass}>
                Can I cancel my recurring donation?
                <span className="shrink-0 text-[#8A6A2E] dark:text-[#DAB87E] text-2xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className={faqAnswerClass}>
                Yes. Monthly donations can be changed or canceled at any time. Just contact us at{' '}
                <a href="mailto:join@thekccf.org" className={linkClass}>
                  join@thekccf.org
                </a>{' '}
                for help.
              </p>
            </details>

            <details className={faqCardClass}>
              <summary className={faqQuestionClass}>
                What&apos;s the difference between Zeffy and GiveLively?
                <span className="shrink-0 text-[#8A6A2E] dark:text-[#DAB87E] text-2xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className={faqAnswerClass}>
                Zeffy charges no platform or processing fees, so <span className="font-bold text-violet-600 dark:text-saffron-400">100% of your gift supports KCCF</span>. GiveLively offers more payment options (PayPal, Venmo, bank transfers, donor-advised funds) but applies standard payment processing fees.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Closing call to action, matching the home and Crazy Socks plum bands */}
      <section className="py-20 bg-violet-600 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            No child should fight cancer alone.
          </h2>
          <p className="text-xl md:text-2xl font-bold text-[#DAB87E] mb-10">
            Thank you for standing with our families.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <DonationButton
              campaign="Donate to save lives"
              variant="primary"
              size="lg"
              className="btn-primary btn-primary-orange group text-white py-4 px-10 rounded-full"
              icon={
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
            >
              Give Now
            </DonationButton>
            <Link
              href="/fundraisers"
              className="btn-primary bg-white/10 hover:bg-white/20 text-white py-4 px-10 rounded-full font-semibold text-lg inline-flex items-center justify-center border-2 border-white"
            >
              Start a Fundraiser
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
