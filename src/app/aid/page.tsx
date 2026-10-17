'use client';

import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import FormButton from '@/components/FormButton';
import { Fragment } from 'react';
import { IMPACT_STATS } from '@/constants/impactStats';

const aidCards = [
  {
    title: 'Covered Expenses',
    items: [
      'Medical treatments or medications not covered by insurance',
      'Travel costs for care',
      'Rent or mortgage payments',
      'And more',
    ],
  },
  {
    title: 'Eligibility Requirements',
    items: [
      'Expenses must be directly related to the child’s diagnosis',
      'Child must be receiving treatment at a credentialed hospital',
      'Funds are paid directly to creditors or service providers',
    ],
  },
];

const applySteps = [
  { title: 'Family Applies', text: 'The family completes and submits their portion.' },
  { title: 'Social Worker Verifies', text: 'The listed social worker receives and submits their portion.' },
  { title: 'Board Reviews', text: 'The Board reviews the application and decides.' },
];

export default function Aid() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with Background */}
      <div className="relative min-h-[66vh] flex justify-center overflow-hidden pt-0">
        {/* Background Image */}
        <div className="absolute inset-0 top-24">
          <Image
            src="/images/header_image_family_assistance.png"
            alt="Family Aid"
            fill
            className="object-cover object-[65%_center] md:object-[right_30%]"
            sizes="100vw"
            priority
          />
          {/* Home-page-style hero: warm tint plus a soft shade behind the words, family side left clear */}
          <div className="absolute inset-0 bg-amber-400/12 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/60 md:bg-gradient-to-r md:from-black/60 md:via-black/30 md:to-transparent pointer-events-none"></div>
        </div>

        {/* PageHeader */}
        <PageHeader
          title="Family Aid"
          subtitle="Let us ease your financial burden during your child’s cancer treatment."
          headerStyle="pt-92 sm:pt-100 2xl:pt-92 lg:pl-24"
          gridStyle="gap-0 lg:grid-cols-1"
        />
      </div>

      {/* Elana's words */}
      <section className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="block text-[#DAB87E] text-7xl font-serif leading-none h-10" aria-hidden="true">&ldquo;</span>
          <p className="text-xl md:text-2xl leading-relaxed text-[#2B2330] dark:text-white">
            When I was going through cancer treatment,{' '}
            <span className="font-semibold text-violet-600 dark:text-saffron-400">all I wanted was to have my parents by my side</span>{' '}
            and they wanted the same.{' '}
            <span className="font-semibold text-violet-600 dark:text-saffron-400">They put their lives on hold to be with me.</span>{' '}
            For most families, that means stepping away from jobs, bills, and daily responsibilities. But the bills still come.
            That&rsquo;s why we offer financial assistance to families of children with cancer so they can{' '}
            <span className="font-semibold text-violet-600 dark:text-saffron-400">focus on what matters most: healing.</span>
          </p>
          <p className="mt-6 italic font-semibold text-[#8A6A2E] dark:text-[#DAB87E]">
            &mdash; Elana, founder &amp; childhood cancer survivor
          </p>
          <div className="mt-10 inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-5 bg-white dark:bg-gray-800 border border-[#DAB87E] rounded-[22px] shadow-md px-8 py-5">
            <span className="text-5xl font-extrabold text-violet-600 dark:text-saffron-400 leading-none">{IMPACT_STATS.HOME[0].value}</span>
            <span className="text-lg font-bold text-[#2B2330] dark:text-white">families helped with emergency financial aid</span>
          </div>
        </div>
      </section>

      {/* Coverage and eligibility */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-violet-600 dark:text-white">
              What We Cover
            </h2>
            <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto" aria-hidden="true" />
          </div>
          <div className="grid md:grid-cols-2 gap-7">
            {aidCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#FAF6F2] dark:bg-gray-700 rounded-[22px] overflow-hidden border-t-4 border-violet-600 dark:border-saffron-400 shadow-md px-8 py-8"
              >
                <h3 className="text-xl font-bold mb-4 text-center text-[#2B2330] dark:text-white">{card.title}</h3>
                <ul className="space-y-2.5 text-[#2B2330] dark:text-gray-200">
                  {card.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2 w-2 h-2 shrink-0 rounded-full bg-[#DAB87E]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application process */}
      <section className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <div className="container text-center mx-auto px-4 sm:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-violet-600 dark:text-white">
            How to Apply
          </h2>
          <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-12" aria-hidden="true" />
          <ol className="flex flex-col lg:flex-row items-stretch max-w-sm lg:max-w-5xl mx-auto list-none">
            {applySteps.map((step, index) => (
              <Fragment key={step.title}>
                {index > 0 && (
                  <li
                    className="flex items-center justify-center text-[#8A6A2E] dark:text-[#DAB87E] text-[2.6rem] font-bold py-2 lg:py-0 lg:px-4"
                    aria-hidden="true"
                  >
                    <span className="lg:hidden">&darr;</span>
                    <span className="hidden lg:inline">&rarr;</span>
                  </li>
                )}
                <li className="flex-1 bg-white dark:bg-gray-700 rounded-[22px] overflow-hidden border-t-4 border-violet-600 dark:border-saffron-400 shadow-md px-6 py-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#8A6A2E] text-white text-3xl font-bold flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-[#2B2330] dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{step.text}</p>
                </li>
              </Fragment>
            ))}
          </ol>
          <p className="mt-10 max-w-3xl mx-auto bg-white dark:bg-gray-800 border border-[#DAB87E] rounded-[22px] px-6 py-4 font-semibold text-[#8A6A2E] dark:text-[#DAB87E]">
            Applications will not be reviewed until both the parent and social worker portions are fully completed.
          </p>
        </div>
      </section>

      {/* A family we helped */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <div className="bg-white p-2.5 rounded-[14px] border border-[#DAB87E] shadow-lg">
            <Image
              src="/images/daniz-elana.jpg"
              alt="Elana with Daniz in the hospital in 2022 and at KCCF Camp 2026"
              width={880}
              height={688}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              &ldquo;When Daniz was diagnosed with cancer, there was no hope for her in Azerbaijan. Then I was connected to Elana, whose charity covered all our medical expenses and travel to New York and embraced us like family. If it weren&apos;t for them, Daniz might not be with us today.&rdquo;
            </p>
            <p className="mt-5 italic font-semibold text-[#8A6A2E] dark:text-[#DAB87E]">&mdash; Vusala, Daniz&apos;s mom</p>
          </div>
        </div>
      </section>

      {/* Apply */}
      <section className="py-20 bg-violet-600 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Apply for Family Aid</h2>
          <p className="text-xl md:text-2xl font-bold text-[#DAB87E] mb-10">
            Thank you for trusting us to be part of your journey. We are here for you.
          </p>
          <FormButton formType="aid-application" variant="orange" size="lg" className="py-4 px-10 text-lg">
            Apply for Family Aid
          </FormButton>
        </div>
      </section>
    </div>
  );
}
