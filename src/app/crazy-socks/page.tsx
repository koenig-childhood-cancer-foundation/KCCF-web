'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useRef } from 'react';
import PageHeader from '@/components/PageHeader';
import FormButton from '@/components/FormButton';
import { IMPACT_STATS } from '@/constants/impactStats';
import { useFormModal } from '@/contexts/FormModalContext';

export default function CrazySocks() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { openModal } = useFormModal();

  const howItWorksSteps = [
    {
      title: 'You Sponsor',
      text: 'Your sponsorship covers the supplies. We ship them to your office and guide you through every step.',
      image: '/images/bankofamerica-scaled.jpeg',
      alt: 'Gift bag supplies set out on a table before an event',
    },
    {
      title: 'Your Team Packs',
      text: 'Your team hears Elana’s story, assembles bags and writes notes of hope.',
      image: '/images/MetaLeadershipMakingfitBags-scaled.jpg',
      alt: 'A company team packing gift bags in their office',
    },
    {
      title: 'A Child Opens Your Gift',
      text: 'We deliver the bags to children fighting cancer in hospitals and send you photos for your CSR report.',
      image: '/images/IMG_6703-scaled.jpeg',
      alt: 'A child in the hospital holding a gift bag',
    },
  ];

  const companyQuotes = [
    {
      name: 'Meta Leadership',
      image: '/images/MetaCSGiftBagEvent-scaled.jpg',
      quote:
        'Elana’s story moved us all to tears. Our leadership team traveled from all over the country to connect through this special mission.',
      role: 'Participant',
    },
    {
      name: 'Bank of America',
      image: '/images/bankofamerica-scaled.jpeg',
      quote:
        'We love the Crazy Socks project. My daughter was so inspired that she donated her hair to the cause! We look forward to a long-term partnership.',
      role: 'Organizer',
    },
    {
      name: 'Aflac Global Investments',
      image: '/images/AlfacGiftMakingEvent-scaled.jpeg',
      quote:
        'I am going through cancer treatment myself at the moment. I am so glad we can give our Aflac ducks to children along with these gifts.',
      role: 'Organizer',
    },
    {
      name: 'Forvis Mazars Group',
      image: '/images/giftbagevent2-scaled.jpeg',
      quote:
        'This project is truly growing with purpose! So many people signed up that we decided to host two separate events. We are so proud to help with this cause.',
      role: 'CEO',
    },
    {
      name: 'Sumitomo Mitsui Bank',
      image: '/images/sumitomo-csr.jpg',
      quote:
        'I have never seen so many employees sign up for a single event! They were all so excited to learn from Elana’s experience and join the cause.',
      role: 'Organizer',
    },
    {
      name: 'UBS',
      image: '/images/ubs-season-of-service.jpg',
      quote:
        'KCCF brought a care package to my daughter; it was the brightest moment during her cancer treatment. We wanted to make an impact through KCCF.',
      role: 'Leader',
    },
  ];

  // The three quotes shown on the page; the full list stays above for reuse.
  const featuredCompanies = companyQuotes.filter((company) =>
    ['Meta Leadership', 'Forvis Mazars Group', 'Sumitomo Mitsui Bank'].includes(company.name),
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.5 }, // 50% of video must be visible for autoplay
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Outreach links land on /crazy-socks?sponsor=1: open the sponsor form, then drop only that flag (tracking tags stay).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('sponsor') === '1') {
      openModal('crazy-socks-sponsor');
      params.delete('sponsor');
      const rest = params.toString();
      window.history.replaceState(null, '', window.location.pathname + (rest ? `?${rest}` : '') + window.location.hash);
    }
  }, [openModal]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-platinum-50 via-white to-platinum-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-x-hidden">
      {/* Hero Section with Background */}
      <div className="relative min-h-[66vh] flex items-center justify-center overflow-hidden bg-[#3a2e33]">
        {/* Blurred copy fills the left side once the photo shifts right on large screens */}
        <div className="hidden lg:block absolute inset-0 top-24 overflow-hidden" aria-hidden="true">
          <Image
            src="/images/header_image_crazy_socks.jpg"
            alt=""
            fill
            className="object-cover object-left blur-2xl scale-110"
            sizes="100vw"
          />
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 top-24 lg:left-[15%]">
          <Image
            src="/images/header_image_crazy_socks.jpg"
            alt="Elana and her sister smiling and holding KCCF Crazy Socks gift bags"
            fill
            className="object-cover object-[45%_center] sm:object-[70%_center] lg:object-[center_20%]"
            sizes="100vw"
            priority
          />
          {/* Soft seam where the photo meets the blurred fill */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-[35%] bg-gradient-to-r from-[#282024]/30 via-[#282024]/15 to-transparent" aria-hidden="true" />
          {/* Light overlay so the words stay readable, matching the home page */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/10 lg:bg-gradient-to-r lg:from-black/5 lg:via-black/5 lg:to-transparent pointer-events-none" aria-hidden="true" />
        </div>

        {/* PageHeader */}
        <PageHeader
          title="Crazy Socks<br/>Gift Bags"
          subtitle="Team building that gives back: hear Elana’s story, then pack gift bags for children fighting cancer in hospitals."
          headerStyle="pt-72 xl:pt-84 pb-12 xl:pl-14 2xl:pl-20"
          gridStyle="gap-0 lg:grid-cols-1"
          button={
            <div className="mt-12 flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
              <FormButton
                formType="crazy-socks-sponsor"
                variant="orange"
                size="md"
                className="text-lg 2xl:text-[1.3rem]"
                icon={
                  <svg
                    className="w-6 h-6 lg:w-6 lg:h-6 2xl:w-6.5 2xl:h-6.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                }
              >
                Plan a Gift Bag Event
              </FormButton>
            </div>
          }
        />
      </div>

      {/* Impact numbers, each in its own gold oval */}
      <section className="py-12 bg-white dark:bg-gray-800 border-b border-[#F1E7D6] dark:border-gray-700">
        <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 max-w-5xl mx-auto px-4 list-none">
          {[
            { value: IMPACT_STATS.CRAZY_SOCKS[0].value, label: 'gift bags delivered' },
            { value: IMPACT_STATS.CRAZY_SOCKS[1].value, label: 'items inside the bags' },
            { value: IMPACT_STATS.CRAZY_SOCKS[3].value, label: 'volunteer hours' },
          ].map((stat) => (
            <li
              key={stat.label}
              className="w-full max-w-72 sm:w-auto sm:max-w-none rounded-full border-2 border-[#DAB87E] bg-[#FFFDF9] dark:bg-gray-700 px-10 py-4 sm:py-5 text-center"
            >
              <div className="text-3xl md:text-[2.75rem] font-extrabold leading-none text-violet-600 dark:text-saffron-400">
                {stat.value}
              </div>
              <div className="mt-1.5 text-sm md:text-base font-bold text-[#8A6A2E] dark:text-[#DAB87E]">{stat.label}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Story */}
      <section className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4 xl:px-28 2xl:px-32">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-white">
              Why Crazy Socks Gift Bags?
            </h2>
            <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto" aria-hidden="true" />
          </div>
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-12 2xl:gap-20 items-center max-w-6xl mx-auto">
            <div>
              <div className="space-y-6 text-lg xl:text-[1.15rem] 2xl:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed">
                <p>
                  Crazy Socks Gift Bag is KCCF's signature project, inspired by
                  founder Elana's personal journey with cancer at the age of 7.
                  While battling a rare and aggressive bone
                  cancer, Elana was struck by how the dull hospital socks
                  mirrored the monotony and sadness of her days.
                </p>
                <p>
                  The moment she got home, she would pull them off and throw
                  them away, hoping to leave behind the needles, pain, and fear.
                  She was determined to change that experience for other
                  children fighting cancer. This is how the Crazy Socks Gift
                  Bags movement started.
                </p>
              </div>
              <div className="flex items-center gap-3.5 mt-7" aria-hidden="true">
                <span className="h-0.5 w-16 bg-[#DAB87E]" />
                <svg width="28" height="26" viewBox="0 0 24 22" className="shrink-0">
                  <path
                    d="M12 21s-7-4.4-9.3-8.6C1.1 9.4 2.8 5.5 6.5 5.5c2.2 0 3.6 1.3 4.5 2.6.9-1.3 2.3-2.6 4.5-2.6 3.7 0 5.4 3.9 3.8 6.9C19 16.6 12 21 12 21z"
                    fill="none"
                    stroke="#DAB87E"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="h-0.5 w-16 bg-[#DAB87E]" />
              </div>
              <p className="mt-4 text-base md:text-lg italic font-semibold text-[#8A6A2E] dark:text-[#DAB87E]">
                Elana gives a gift bag to a child in treatment.
              </p>
            </div>

            <div className="relative">
              <div className="relative bg-white p-2.5 rounded-md border border-[#DAB87E] shadow-lg max-w-[360px] mx-auto lg:mr-0">
                <Image
                  src="/images/crazy-socks.jpg"
                  alt="Elana with a child holding a Crazy Socks gift bag"
                  width={500}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container text-center mx-auto px-4 sm:px-8 lg:px-6 2xl:px-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-violet-600 dark:text-white">
            How It Works
          </h2>
          <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-12" aria-hidden="true" />
          <ol className="flex flex-col lg:flex-row items-stretch max-w-sm lg:max-w-5xl mx-auto list-none">
            {howItWorksSteps.map((step, index) => (
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
                <li className="flex-1 flex flex-col bg-[#FAF6F2] dark:bg-gray-700 rounded-[22px] overflow-hidden border-t-4 border-violet-600 dark:border-saffron-400 shadow-md pt-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#8A6A2E] text-white text-3xl font-bold flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 px-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed px-4">
                    {step.text}
                  </p>
                  <div className="flex-1 min-h-[30px]" />
                  <div className="mx-[18px] mb-[18px] bg-white p-[7px] rounded-[14px] border border-[#DAB87E] shadow-lg">
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        sizes="(max-width: 1024px) 90vw, 300px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </li>
              </Fragment>
            ))}
          </ol>
          {/* Quick facts from KCCF Current Facts – MASTER (Crazy Socks row); no price on purpose */}
          <ul className="mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-4xl mx-auto list-none">
            {['Any group size', '1+ hours', 'In person or hybrid'].map((fact) => (
              <li key={fact} className="px-6 py-3 rounded-full border-2 border-[#DAB87E] text-[#5B3A10] dark:text-[#F1DDB0] font-semibold text-lg">
                {fact}
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => openModal('crazy-socks-sponsor')}
            className="mt-8 text-lg font-semibold text-violet-600 dark:text-saffron-400 underline underline-offset-4 hover:text-violet-800 dark:hover:text-saffron-300 transition-colors"
          >
            Questions? Tell us about your team &rarr;
          </button>
        </div>
      </section>

      {/* Trusted by Leading Companies (company quotes) */}
      <section className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-white">
              Trusted by Leading Companies
            </h2>
            <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-6" aria-hidden="true" />
            <p className="text-sm md:text-base font-bold uppercase tracking-[0.14em] leading-loose text-[#8A6A2E] dark:text-[#DAB87E] max-w-4xl mx-auto">
              Meta &middot; Bank of America &middot; Amazon &middot; Aflac &middot; Forvis Mazars &middot; Sumitomo Mitsui Bank &middot; UBS
            </p>
            <p className="mt-7 italic text-gray-600 dark:text-gray-300">In their words:</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-7 max-w-xl lg:max-w-6xl mx-auto">
            {featuredCompanies.map((company) => (
              <div
                key={company.name}
                className="bg-white dark:bg-gray-700 rounded-[22px] overflow-hidden border-t-4 border-violet-600 dark:border-saffron-400 shadow-md p-6 flex flex-col"
              >
                <h3 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                  {company.name}
                </h3>
                <div className="flex-1 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center sm:items-start lg:items-center xl:items-start gap-5">
                  <div className="shrink-0 w-[150px] h-[150px] bg-white p-1.5 rounded-[14px] border border-[#DAB87E] shadow-md">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={company.image}
                        alt={company.name}
                        fill
                        sizes="150px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed text-center">
                    <span className="text-[#DAB87E] text-4xl font-serif leading-[0] relative top-[0.3em] mr-1" aria-hidden="true">
                      &ldquo;
                    </span>
                    {company.quote}
                    <span className="text-[#DAB87E] text-4xl font-serif leading-[0] relative top-[0.3em] ml-1" aria-hidden="true">
                      &rdquo;
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing call to action, matching the home page band */}
      <section className="py-20 bg-violet-600 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Plan a Gift Bag Event
          </h2>
          <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-8" aria-hidden="true" />
          <p className="text-xl text-white/90 mb-10">
            Bring Crazy Socks to your company, school or community group.
            <br />
            Already hosted an event? Make it a yearly tradition, or bring it to another office.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <FormButton
              formType="crazy-socks-sponsor"
              variant="orange"
              size="lg"
              className="py-4 px-10 text-lg"
              icon={
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              }
            >
              Plan a Gift Bag Event
            </FormButton>
            <Link
              href="/get-involved#fundraisers"
              className="py-4 px-10 rounded-full font-semibold text-lg inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-violet-700 transition-colors"
            >
              Start a Fundraiser
            </Link>
          </div>
          <p className="mt-8 text-lg text-white/90">
            Employees can give through Benevity, and many companies match their gifts.
          </p>
        </div>
      </section>
    </div>
  );
}
