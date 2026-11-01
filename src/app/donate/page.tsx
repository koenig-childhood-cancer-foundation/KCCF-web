"use client"

import { type ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DonationCard from '@/components/DonationCard'
import DonationButton from '@/components/DonationButton'

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
    amounts: [],
    note: 'Crazy Socks gift bags delivered to children fighting cancer in hospitals.',
    stat: '135,000+ gift bags delivered',
  },
  {
    title: 'KCCF Camp',
    amounts: [],
    note: 'International summer camp for emotional recovery.',
    stat: '120 children hosted',
  },
]

// Legal name and EIN from KCCF Current Facts – MASTER; brokers, DAF sponsors and Benevity ask for them.
const waysToGive: { title: string; body: ReactNode; ein?: 'number' | 'full' }[] = [
  {
    title: 'Check by Mail',
    body: (
      <>
        Payable to Koenig Childhood Cancer Foundation
        <br />
        1175 York Ave, Suite 15E
        <br />
        New York, NY 10065
      </>
    ),
    ein: 'number',
  },
  {
    title: 'Corporate Matching',
    body: 'Many companies match employee gifts. Ask HR, or find KCCF on Benevity, to have your gift matched.',
    ein: 'full',
  },
  {
    title: 'Donor Advised Funds (DAF)',
    body: 'Ask your fund to send a grant to KCCF, using our legal name and EIN below. Questions? Email join@thekccf.org.',
    ein: 'full',
  },
  {
    title: 'Stock, Crypto & Wire Transfers',
    body: 'We accept gifts of stock, crypto (including Bitcoin) and wire transfers. Email us and we will send you the transfer details.',
    ein: 'full',
  },
]

const linkClass =
  'py-1.5 font-semibold text-violet-600 dark:text-saffron-400 underline underline-offset-4 decoration-[#DAB87E] hover:text-violet-700 dark:hover:text-saffron-300'
const faqCardClass =
  'group bg-white dark:bg-gray-700 rounded-[22px] overflow-hidden border-t-4 border-violet-600 dark:border-saffron-400 shadow-md'
const faqQuestionClass =
  'flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden px-6 py-5 text-lg font-semibold text-[#2B2330] dark:text-white'
const faqAnswerClass = 'px-6 pb-6 -mt-1 text-gray-600 dark:text-gray-300'

// Each answer is shown on the page; `text` is the same answer in plain words for
// the FAQPage data that search engines and AI tools read. Keep the two the same.
const faqs: { question: string; answer: ReactNode; text: string }[] = [
  {
    question: 'Is my donation secure?',
    answer: 'Your donation is protected by industry-standard SSL encryption. Payments are processed securely through Zeffy or GiveLively using PCI-compliant technology.',
    text: 'Your donation is protected by industry-standard SSL encryption. Payments are processed securely through Zeffy or GiveLively using PCI-compliant technology.',
  },
  {
    question: 'Is this donation tax-deductible?',
    answer: 'Yes. Koenig Childhood Cancer Foundation (KCCF) is a registered 501(c)(3) nonprofit. Donations are tax-deductible to the extent permitted by U.S. law. EIN: 84-4892279',
    text: 'Yes. Koenig Childhood Cancer Foundation (KCCF) is a registered 501(c)(3) nonprofit. Donations are tax-deductible to the extent permitted by U.S. law. EIN: 84-4892279',
  },
  {
    question: 'Will I receive a tax receipt?',
    answer: 'Yes. A donation receipt will be emailed to you immediately after your gift is submitted.',
    text: 'Yes. A donation receipt will be emailed to you immediately after your gift is submitted.',
  },
  {
    question: 'Can I cancel my recurring donation?',
    answer: (
      <>
        Yes. Sign in to your Zeffy, PayPal or Venmo account and change or cancel your monthly gift there. Need help? Email us at{' '}
        <a href="mailto:join@thekccf.org" className={linkClass}>
          join@thekccf.org
        </a>
        .
      </>
    ),
    text: 'Yes. Sign in to your Zeffy, PayPal or Venmo account and change or cancel your monthly gift there. Need help? Email us at join@thekccf.org.',
  },
  {
    question: 'How do I avoid fees?',
    answer: (
      <>
        At checkout, Zeffy, our donation processing platform, asks for an optional contribution under &ldquo;Help keep Zeffy free.&rdquo; To skip it, choose <strong>Other</strong> and enter <strong>0</strong>. Then <span className="font-bold text-violet-600 dark:text-saffron-400">100% of your gift goes to KCCF</span>.
      </>
    ),
    text: 'At checkout, Zeffy, our donation processing platform, asks for an optional contribution under "Help keep Zeffy free." To skip it, choose Other and enter 0. Then 100% of your gift goes to KCCF.',
  },
  {
    question: 'How can I give through my Donor Advised Fund (DAF)?',
    answer: (
      <>
        Ask your fund to send a grant to Koenig Childhood Cancer Foundation, Inc., EIN 84-4892279. Questions? Email us at{' '}
        <a href="mailto:join@thekccf.org" className={linkClass}>
          join@thekccf.org
        </a>
        .
      </>
    ),
    text: 'Ask your fund to send a grant to Koenig Childhood Cancer Foundation, Inc., EIN 84-4892279. Questions? Email us at join@thekccf.org.',
  },
  {
    question: 'How can I donate stock?',
    answer: (
      <>
        Email us at{' '}
        <a href="mailto:join@thekccf.org" className={linkClass}>
          join@thekccf.org
        </a>{' '}
        and we will send you the transfer details for your broker. Our legal name is Koenig Childhood Cancer Foundation, Inc., EIN 84-4892279.
      </>
    ),
    text: 'Email us at join@thekccf.org and we will send you the transfer details for your broker. Our legal name is Koenig Childhood Cancer Foundation, Inc., EIN 84-4892279.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.text },
  })),
}

export default function Donate() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-platinum-50 via-white to-platinum-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-violet-600 dark:text-white">
              Why Your Gift Matters
            </h2>
            <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-6" aria-hidden="true" />
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your gift gives children battling cancer and their families financial and emotional support: treatment, meals, travel, lodging and care during long hospital stays.
            </p>
            <div className="mt-10 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-white dark:bg-gray-800 border border-[#DAB87E] rounded-[22px] shadow-md px-8 py-5 max-w-2xl">
              <span className="text-6xl font-extrabold text-violet-600 dark:text-saffron-400 leading-none">90.6%</span>
              <div className="text-center sm:text-left">
                <p className="text-xl font-bold text-[#2B2330] dark:text-white">
                  of expenses go directly to programs
                </p>
                <p className="text-sm italic text-[#8A6A2E] dark:text-[#DAB87E] mt-1">
                  (2025 Financial Review). 100% volunteer&#8209;run: no salaries.
                </p>
              </div>
            </div>
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

          <div className="flex flex-wrap justify-center gap-7 max-w-4xl mx-auto">
            {waysToGive.map((way) => (
              <div
                key={way.title}
                className="w-full md:w-[calc(50%-0.875rem)] bg-[#FAF6F2] dark:bg-gray-700 rounded-[22px] overflow-hidden border-t-4 border-violet-600 dark:border-saffron-400 shadow-md px-7 py-8 text-center"
              >
                <h3 className="text-xl font-bold mb-3 text-[#2B2330] dark:text-white">{way.title}</h3>
                <p className="text-[#2B2330] dark:text-gray-200 leading-relaxed">{way.body}</p>
                {way.ein && (
                  <p className="mt-3 text-sm font-semibold text-[#2B2330] dark:text-gray-200">
                    {way.ein === 'full' && (
                      <>
                        Koenig Childhood Cancer Foundation, Inc.
                        <br />
                      </>
                    )}
                    <span className="whitespace-nowrap">EIN 84-4892279</span>
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-gray-600 dark:text-gray-300">
            Questions about any of these ways to give? Email{' '}
            <a href="mailto:join@thekccf.org" className={linkClass}>
              join@thekccf.org
            </a>{' '}
            <span className="whitespace-nowrap">
              or call{' '}
              <a href="tel:+19177656272" className={linkClass}>
                (917) 765&#8209;6272
              </a>
              .
            </span>
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-violet-600 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-12" aria-hidden="true" />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className={faqCardClass}>
                <summary className={faqQuestionClass}>
                  {faq.question}
                  <span className="shrink-0 text-[#8A6A2E] dark:text-[#DAB87E] text-2xl leading-none transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className={faqAnswerClass}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing call to action, matching the home and Crazy Socks plum bands */}
      <section className="py-20 bg-violet-600 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Make Your Gift Today
          </h2>
          <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-8" aria-hidden="true" />
          <p className="text-xl text-white/90 mb-10">
            Or raise even more by starting your own fundraiser.
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
              Donate Now
            </DonationButton>
            <Link
              href="/get-involved#fundraisers"
              className="py-4 px-10 rounded-full font-semibold text-lg inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-violet-700 transition-colors"
            >
              Start a Fundraiser
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
