'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
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
                Host an Event
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

      {/* Crazy Socks numbers */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-[#ECDBE6] dark:border-gray-700">
        <ul className="container mx-auto px-4 flex flex-wrap justify-center gap-x-12 gap-y-4">
          {[
            { value: IMPACT_STATS.CRAZY_SOCKS[0].value, label: 'gift bags delivered' },
            { value: IMPACT_STATS.CRAZY_SOCKS[1].value, label: 'items inside the bags' },
          ].map((stat) => (
            <li key={stat.label} className="border-l-4 border-[#DAB87E] pl-4 py-1">
              <div className="text-3xl md:text-[2.6rem] font-bold leading-tight text-violet-600 dark:text-white">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-semibold text-[#8A6A2E] dark:text-saffron-400">
                {stat.label}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-800 dark:to-gray-700">
        <div className="container text-center mx-auto px-4 sm:px-8 lg:px-6 2xl:px-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-violet-600 dark:text-white">
            How It Works <br className="sm:hidden" /> In 3 Steps
          </h2>
          <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-6" aria-hidden="true" />
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            An hour-long event we bring to you, with a keynote by Elana. Your
            sponsorship covers the supplies.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg px-4 2xl:px-10 py-10 sm:pb-13 flex-1 flex flex-col items-center">
            <ol className="text-xl md:text-2xl text-left space-y-3 text-black dark:text-white list-none list-outside lg:grid lg:grid-cols-3 lg:gap-x-10 xl:gap-x-16 2xl:gap-x-24 lg:gap-y-10 lg:space-y-0">
              <li className="font-semibold mb-8 md:mb-10 text-center text-violet-600 dark:text-saffron-400">
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mx-0 inline-block bg-[#DAB87E] text-violet-600 rounded-full p-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  {/* <!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE --> */}
                  <path
                    fill="currentColor"
                    d="M252.51 108.8L227 57.75a14 14 0 0 0-18.78-6.27l-25.56 12.78l-53.13-14.06a6.1 6.1 0 0 0-3.06 0L73.34 64.26L47.79 51.48A14 14 0 0 0 29 57.75L3.49 108.8a14 14 0 0 0 6.26 18.78l27.15 13.58l55.61 39.72a6 6 0 0 0 2 .94l64 16a6 6 0 0 0 1.49.18a6 6 0 0 0 4.24-1.76l55.31-55.31l26.7-13.35a14 14 0 0 0 6.26-18.78m-53 35.16l-35.8-28.68a6 6 0 0 0-8 .45c-18.65 18.79-39.5 16.42-52.79 7.92a2 2 0 0 1-.94-1.5a1.9 1.9 0 0 1 .51-1.55L146.43 78h33.86l28.41 56.82Zm-185.4-28.27a2 2 0 0 1 .11-1.52l25.52-51.06a2 2 0 0 1 1.8-1.1a2 2 0 0 1 .89.21l22.21 11.1L37.32 128l-22.21-11.1a2 2 0 0 1-1-1.21m144.05 69.67l-59.6-14.9l-50.9-36.36l29.18-58.35L128 62.21l14.8 3.92a5.9 5.9 0 0 0-3 1.57l-45.7 44.35a14 14 0 0 0 2.39 21.72c20.22 12.92 44.75 10.49 63.8-5.89L191 152.5Zm83.73-69.67a2 2 0 0 1-1 1.16L218.68 128l-27.32-54.68l22.21-11.1a2 2 0 0 1 1.53-.11a2 2 0 0 1 1.16 1l25.52 51.06a2 2 0 0 1 .11 1.52m-112 101.76a6 6 0 0 1-7.27 4.37l-41.73-10.43a5.9 5.9 0 0 1-2-.94l-26.37-18.81a6 6 0 1 1 7-9.77L84.91 200l40.61 10.15a6 6 0 0 1 4.36 7.3Z"
                  />
                </svg>
                <br className="mb-2" />
                <span className="ml-2 text-gray-700 dark:text-white font-normal">
                  <span className="text-violet-700 dark:text-saffron-400 font-semibold">
                    KCCF Coordinates
                  </span>{' '}
                  <br className="mb-2" /> We deliver supplies and handle the
                  setup
                </span>
              </li>
              <li className="list-item font-semibold mb-8 md:mb-10 text-center text-violet-600 dark:text-saffron-400">
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mx-0 inline-block bg-[#DAB87E] text-violet-600 rounded-full p-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  {/* <!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE --> */}
                  <path
                    fill="currentColor"
                    d="M196.89 130.94L144.4 111.6l-19.34-52.49a13.92 13.92 0 0 0-26.12 0L79.6 111.6l-52.49 19.34a13.92 13.92 0 0 0 0 26.12L79.6 176.4l19.34 52.49a13.92 13.92 0 0 0 26.12 0l19.34-52.49l52.49-19.34a13.92 13.92 0 0 0 0-26.12m-4.15 14.86l-55.08 20.3a6 6 0 0 0-3.56 3.56l-20.3 55.08a1.92 1.92 0 0 1-3.6 0l-20.3-55.08a6 6 0 0 0-3.56-3.56l-55.08-20.3a1.92 1.92 0 0 1 0-3.6l55.08-20.3a6 6 0 0 0 3.56-3.56l20.3-55.08a1.92 1.92 0 0 1 3.6 0l20.3 55.08a6 6 0 0 0 3.56 3.56l55.08 20.3a1.92 1.92 0 0 1 0 3.6M146 40a6 6 0 0 1 6-6h18V16a6 6 0 0 1 12 0v18h18a6 6 0 0 1 0 12h-18v18a6 6 0 0 1-12 0V46h-18a6 6 0 0 1-6-6m100 48a6 6 0 0 1-6 6h-10v10a6 6 0 0 1-12 0V94h-10a6 6 0 0 1 0-12h10V72a6 6 0 0 1 12 0v10h10a6 6 0 0 1 6 6"
                  />
                </svg>
                <br className="mb-2" />
                <span className="ml-2 text-gray-700 dark:text-white font-normal">
                  <span className="text-violet-700 dark:text-saffron-400 font-semibold">
                    Elana Inspires
                  </span>{' '}
                  <br className="mb-1" /> Our teen-founder and survivor shares
                  the "why"
                </span>
              </li>
              <li className="list-item font-semibold mb-9 sm:mb-11 md:mb-12 text-center text-violet-600 dark:text-saffron-400">
                <svg
                  className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 mx-0 inline-block bg-[#DAB87E] text-violet-600 rounded-full p-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  {/* <!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE --> */}
                  <path
                    fill="currentColor"
                    d="M229.12 142.65a22.43 22.43 0 0 0-19.55-3.88l-4.32 1C227 119.55 238 99.51 238 80c0-25.36-20.39-46-45.46-46A45.51 45.51 0 0 0 156 52a45.51 45.51 0 0 0-36.54-18C94.39 34 74 54.64 74 80c0 11.38 3.63 22.49 11.29 34.36a29.73 29.73 0 0 0-16.56 8.43L45.52 146H16a14 14 0 0 0-14 14v40a14 14 0 0 0 14 14h104a6 6 0 0 0 1.46-.18l64-16a7 7 0 0 0 .89-.3L225.17 181l.33-.15a22.6 22.6 0 0 0 3.62-38.18ZM119.46 46a33.16 33.16 0 0 1 31 20.28a6 6 0 0 0 11.1 0a33.16 33.16 0 0 1 31-20.28C210.68 46 226 61.57 226 80c0 20.24-16.18 43-46.8 65.75l-14.87 3.42A26 26 0 0 0 140 114H99.67C90.36 101.67 86 90.81 86 80c0-18.43 15.32-34 33.46-34M14 200v-40a2 2 0 0 1 2-2h26v44H16a2 2 0 0 1-2-2m206.28-30l-38.2 16.27L119.26 202H54v-47.51l23.21-23.22A17.88 17.88 0 0 1 89.94 126H140a14 14 0 0 1 0 28h-28a6 6 0 0 0 0 12h32a6 6 0 0 0 1.34-.15l67-15.41l.24-.06a10.6 10.6 0 0 1 7.7 19.62"
                  />
                </svg>
                <br className="mb-2" />
                <span className="ml-2 text-gray-700 dark:text-white font-normal">
                  <span className="text-violet-700 dark:text-saffron-400 font-semibold">
                    Team Builds
                  </span>{' '}
                  <br className="mb-1" /> Participants write notes of hope and
                  assemble bags
                </span>
              </li>
            </ol>
            <a
              href="/documents/KCCF-Brochure.pdf"
              download="KCCF-Crazy-Socks-Brochure"
            >
              <button className="cursor-pointer text-md sm:text-lg md:text-2xl btn-primary btn-outline-violet group py-3 md:py-4 px-6 rounded-full font-semibold inline-flex items-center justify-center">
                Download Our Brochure
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 ml-2 mx-0 inline-block mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  {/* <!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE --> */}
                  <path
                    fill="currentColor"
                    d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31L188.69 80H160ZM200 216H56V40h88v48a8 8 0 0 0 8 8h48zm-42.34-61.66a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L120 164.69V120a8 8 0 0 1 16 0v44.69l10.34-10.35a8 8 0 0 1 11.32 0"
                  />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Crazy Socks numbers */}
      <section className="py-8 bg-[#F7EFF4] dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap justify-center gap-4">
            {[
              { value: IMPACT_STATS.CRAZY_SOCKS[0].value, label: 'gift bags delivered' },
              { value: IMPACT_STATS.CRAZY_SOCKS[1].value, label: 'items inside the bags' },
              { value: '1 hour', label: 'team event we bring to you' },
              { value: 'Keynote', label: 'by founder Elana Koenig' },
            ].map((stat) => (
              <li
                key={stat.label}
                className="bg-white dark:bg-gray-700 rounded-xl border-l-4 border-[#DAB87E] shadow-sm px-6 py-4 min-w-[200px]"
              >
                <div className="text-3xl font-bold text-violet-600 dark:text-white">{stat.value}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 xl:px-28 2xl:px-32">
          <div className="grid lg:grid-cols-2 gap-14 2xl:gap-26 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-[2.5rem] font-bold mb-8 text-violet-600 dark:text-white">
                Why Crazy Socks Gift Bags?
              </h2>
              <div className="w-14 h-1 bg-[#DAB87E] rounded-full -mt-4 mb-8" aria-hidden="true" />

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
                  children fighting cancer.
                </p>
                <p className="text-xl 2xl:text-[1.7rem] font-semibold text-gray-900 dark:text-white">
                  To date, more than{' '}
                  <span className="font-bold text-orange-600">
                    {IMPACT_STATS.CRAZY_SOCKS[0].value.replace(/\+$/, '')}
                  </span>{' '}
                  gift bags, containing over{' '}
                  <span className="font-bold text-orange-600">
                    {IMPACT_STATS.CRAZY_SOCKS[1].value.replace(/\+$/, '')}
                  </span>{' '}
                  items, have been delivered to hospitalized children across the
                  United States and around the world.
                </p>
              </div>
              <div className="mt-10 flex-1 flex flex-col items-start sm:items-start">
                <FormButton
                  formType="crazy-socks-sponsor"
                  variant="outline"
                  size="lg"
                  className="text-lg pr-4 2xl:text-[1.35rem] 2xl:px-6 2xl:py-3 2xl:pr-5"
                  icon={
                    // <!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE -->
                    <svg
                      className="w-6 h-6 ml-1 2xl:w-7 2xl:h-7 mt-0.5 lg:mt-0 xl:mt-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                    >
                      <path
                        fill="currentColor"
                        d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m48-88a8 8 0 0 1-8 8h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 8 8"
                      />
                    </svg>
                  }
                >
                  Learn More
                </FormButton>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white dark:bg-gray-800 p-1.5 rounded-3xl border-2 border-[#DAB87E] shadow-lg">
                <Image
                  src="/images/crazy-socks.jpg"
                  alt="Crazy Socks Gift Bags"
                  width={500}
                  height={600}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
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

      {/* What Companies Say */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-xs md:text-sm font-bold tracking-[0.22em] uppercase text-[#8A6A2E] dark:text-saffron-400 mb-3">
              Trusted by
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-white">
              What Companies Say
            </h2>
            <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-6" aria-hidden="true" />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meta, Bank of America, Aflac, Forvis Mazars, Sumitomo Mitsui Bank
              and UBS have hosted Crazy Socks events.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {companyQuotes.map((company) => (
              <div
                key={company.name}
                className="relative bg-[#FFFDF7] dark:bg-gray-700 border border-[#ECDBE6] dark:border-gray-600 rounded-2xl shadow-md p-3 pb-6"
              >
                <div
                  className="absolute -top-2.5 left-1/2 -translate-x-1/2 -rotate-3 w-20 h-5 bg-[#DAB87E]/55 rounded-sm"
                  aria-hidden="true"
                />
                <div className="aspect-square relative rounded-xl overflow-hidden mb-5">
                  <Image
                    src={company.image}
                    alt={company.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">
                  {company.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-200 text-center px-2">
                  <span className="italic">&quot;{company.quote}&quot;</span> — {company.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor Form Section */}
      <section className="py-20 bg-[#F7EFF4] dark:bg-gray-700 border-t-4 border-[#DAB87E] relative overflow-hidden">

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-violet-600 dark:text-white">
              Sponsor Gift Bag Event
            </h2>
            <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mt-6" aria-hidden="true" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg border-2 border-[#DAB87E] p-8 md:p-12 text-gray-900 text-center">
              <p className="text-lg 2xl:text-2xl text-gray-700 mb-8">
                Ready to make a difference? Partner with us to sponsor a gift
                bag event and bring joy to hospitalized children.
              </p>

              <FormButton
                formType="crazy-socks-sponsor"
                variant="orange"
                size="lg"
                className="min-w-[250px] lg:text-lg 2xl:text-xl"
                icon={
                  <svg
                    className="w-5 h-5 2xl:w-6 2xl:h-6 2xl:ml-1"
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
                Sponsor Gift Bag Event
              </FormButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
