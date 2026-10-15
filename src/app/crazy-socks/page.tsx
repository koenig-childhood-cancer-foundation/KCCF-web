'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useEffect, useRef } from 'react';
import PageHeader from '@/components/PageHeader';
import FormButton from '@/components/FormButton';
import { IMPACT_STATS } from '@/constants/impactStats';

export default function CrazySocks() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const collageImages = [
    '/images/yellow-shirt.jpg',
    '/images/IMG_6861-scaled.jpeg',
    '/images/IMG_6703-scaled.jpeg',
    '/images/IMG_5046-scaled.jpg',
  ];

  const howItWorksSteps = [
    { title: 'You Sponsor', text: 'Your sponsorship covers the supplies. We deliver them and set up.' },
    { title: 'Elana Inspires', text: 'Our teen founder and survivor shares the why.' },
    { title: 'Your Team Packs', text: 'Write notes of hope and fill the bags.' },
    { title: 'A Child Opens Your Gift', text: 'We deliver the bags to children in the hospital and send your team photos.' },
  ];

  const companyQuotes = [
    {
      name: 'Meta Leadership',
      image: '/images/MetaLeadershipMakingfitBags-scaled.jpg',
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
      image: '/images/ubs-season-of-service.png',
      quote:
        'KCCF brought a care package to my daughter; it was the brightest moment during her cancer treatment. We wanted to make an impact through KCCF.',
      role: 'Leader',
    },
  ];

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
            alt="Crazy Socks Gift Bags"
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
          title="Crazy Socks<br/>Gift Bag Events"
          subtitle="Your team packs gift bags for children in the hospital, with a keynote by Elana."
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
                Sponsor an Event
              </FormButton>
              <a
                href="/documents/KCCF-Brochure.pdf"
                download="KCCF-Brochure"
                className="btn-primary inline-flex items-center justify-center rounded-full border-2 border-white bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 text-lg 2xl:text-[1.3rem]"
              >
                Download the Brochure
              </a>
            </div>
          }
        />
      </div>

      {/* Story */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 xl:px-28 2xl:px-32">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-white">
              Why Crazy Socks Gift Bags?
            </h2>
            <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto" aria-hidden="true" />
          </div>
          <div className="grid lg:grid-cols-2 gap-14 2xl:gap-26 items-center max-w-6xl mx-auto">
            <div>
              <div className="space-y-6 text-lg xl:text-[1.15rem] 2xl:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed">
                <p>
                  Crazy Socks Gift Bag is KCCF's signature project, inspired by
                  founder Elana's personal journey with cancer at the age of 7.
                  While battling Ewing's sarcoma, a rare and aggressive bone
                  cancer, Elana was struck by how the dull hospital socks
                  mirrored the monotony and sadness of her days.
                </p>
                <p>
                  The moment she got home, she would pull them off and throw
                  them away, hoping to leave behind the needles, pain, and fear.
                  She was determined to change that experience for other
                  children fighting cancer. This is how our signature Crazy
                  Socks Gift Bags movement started.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white p-2.5 rounded-md border border-[#DAB87E] shadow-lg max-w-md mx-auto">
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
      <section className="py-20 bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-800 dark:to-gray-700">
        <div className="container text-center mx-auto px-4 sm:px-8 lg:px-6 2xl:px-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-violet-600 dark:text-white">
            How It Works
          </h2>
          <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-12" aria-hidden="true" />
          <ol className="flex flex-col lg:flex-row items-stretch max-w-6xl mx-auto list-none">
            {howItWorksSteps.map((step, index) => (
              <Fragment key={step.title}>
                {index > 0 && (
                  <li
                    className="flex items-center justify-center text-[#DAB87E] text-3xl font-bold py-2 lg:py-0 lg:px-2"
                    aria-hidden="true"
                  >
                    <span className="lg:hidden">&darr;</span>
                    <span className="hidden lg:inline">&rarr;</span>
                  </li>
                )}
                <li className="flex-1 bg-white dark:bg-gray-700 border-t-4 border-violet-600 dark:border-saffron-400 shadow-md px-5 py-7 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#DAB87E] text-white text-3xl font-bold flex items-center justify-center mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                    {step.text}
                  </p>
                </li>
              </Fragment>
            ))}
          </ol>
        </div>
      </section>

      {/* Teams in Action */}
      <section className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <div className="text-center mb-16 px-4">
          <p className="text-xs md:text-sm font-bold tracking-[0.22em] uppercase text-[#8A6A2E] dark:text-saffron-400 mb-3">
            In action
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-white">
            Teams in Action
          </h2>
          <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-8">
          {collageImages.map((image, index) => (
            <div
              key={image}
              className="bg-white p-2 sm:p-2.5 pb-6 sm:pb-8 rounded-md border border-[#DAB87E] shadow-lg opacity-0"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards',
              }}
            >
              <div className="aspect-square relative">
                <Image
                  src={image}
                  alt={`Crazy Socks event photo ${index + 1}`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teams Like Yours (company quotes) */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-white">
              Teams Like Yours
            </h2>
            <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-6" aria-hidden="true" />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl lg:max-w-[100vw] mx-auto">
              Meta, Bank of America, Aflac, Forvis Mazars, Sumitomo Mitsui Bank
              and UBS have hosted Crazy Socks events.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-7 max-w-6xl mx-auto">
            {companyQuotes.map((company) => (
              <div
                key={company.name}
                className="bg-[#FAF6F2] dark:bg-gray-700 border-t-4 border-violet-600 dark:border-saffron-400 p-5 sm:p-7 flex flex-col sm:flex-row gap-6"
              >
                <div className="shrink-0 w-full sm:w-[170px] aspect-square bg-white p-1.5 border border-[#DAB87E] shadow-md">
                  <div className="relative w-full h-full">
                    <Image
                      src={company.image}
                      alt={company.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 170px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {company.name}
                  </h3>
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
                    <span className="text-[#DAB87E] text-4xl font-serif leading-[0] relative top-[0.3em] mr-1" aria-hidden="true">
                      &ldquo;
                    </span>
                    {company.quote}
                  </p>
                  <p className="mt-auto border-t border-[#E8E0D8] dark:border-gray-600 pt-3 text-xs font-bold tracking-[0.16em] uppercase text-gray-900 dark:text-gray-100">
                    {company.role}
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
          <ul className="flex flex-wrap justify-center gap-x-14 gap-y-5 mb-12">
            {[
              { value: IMPACT_STATS.CRAZY_SOCKS[0].value, label: 'gift bags delivered' },
              { value: IMPACT_STATS.CRAZY_SOCKS[1].value, label: 'items inside the bags' },
            ].map((stat) => (
              <li key={stat.label} className="border-l-4 border-[#DAB87E] pl-4 py-1 text-left">
                <div className="text-4xl md:text-5xl font-bold leading-tight text-white">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-semibold text-[#DAB87E]">
                  {stat.label}
                </div>
              </li>
            ))}
          </ul>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Be the reason a child smiles today.
          </h2>
          <p className="text-2xl md:text-3xl font-extrabold text-[#ffb37a] mx-auto leading-tight">
            Bring Crazy Socks to your team.
          </p>
          <p className="text-white/80 mt-3 mb-10">
            Sponsor an event at your company, or start a fundraiser with your colleagues.
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
              Sponsor an Event
            </FormButton>
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
  );
}
