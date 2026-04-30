'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import FormButton from '@/components/FormButton';
import { useFormModal } from '@/contexts/FormModalContext';

// Narrowly-typed fallback for older browsers' MediaQueryList legacy API
type LegacyMediaQueryList = MediaQueryList & {
  addListener?: (listener: (e: MediaQueryListEvent) => void) => void;
  removeListener?: (listener: (e: MediaQueryListEvent) => void) => void;
};

export default function Volunteer() {
  const { openModal } = useFormModal();
  const [isLgUp, setIsLgUp] = useState<boolean>(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(min-width: 1024px)').matches
      : false,
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(min-width: 1024px)');
    const onChange = (e: MediaQueryListEvent) => setIsLgUp(e.matches);
    setIsLgUp(mql.matches);
    if (mql.addEventListener) {
      mql.addEventListener('change', onChange);
    } else {
      // Safari fallback (legacy API)
      (mql as LegacyMediaQueryList).addListener?.(onChange);
    }
    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', onChange);
      } else {
        (mql as LegacyMediaQueryList).removeListener?.(onChange);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with Background */}
      <div className="relative min-h-[66vh] flex justify-center text-center lg:text-left overflow-hidden pt-0">
        {/* Background Image */}
        <div className="absolute inset-0 top-24">
          <Image
            src="/images/header_image_volunteer.png"
            alt="Volunteer"
            fill
            className="object-cover object-[45%_center] sm:object-[45%_center] lg:object-[45%_center] xl:object-[center_10%] 2xl:object-[center_10%]"
            sizes="100vw"
            priority
          />
        </div>

        <div className="mx-auto lg:ml-20 xl:ml-0">
          {/* PageHeader */}
          <PageHeader
            title="Volunteer"
            subtitle={`Join us to change a life.${isLgUp ? ' ' : '<br/>'}Maybe even your own.`}
            headerStyle="pt-76 sm:pt-84 md:pt-84 lg:pt-64 xl:pt-68 2xl:pt-76 pb-12 xl:pl-24 2xl:pl-32"
            gridStyle="gap-0 lg:grid-cols-1"
            button={
              <FormButton
                formType="volunteer"
                variant="orange"
                size="md"
                className="text-lg 2xl:text-[1.3rem] mt-12"
                icon={
                  // <!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE --></div>
                  <svg
                    className="w-6 h-6 ml-1 2xl:w-7 2xl:h-7 mt-0.5 lg:mt-0 xl:mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M188 48a27.75 27.75 0 0 0-12 2.71V44a28 28 0 0 0-54.65-8.6A28 28 0 0 0 80 60v64l-3.82-6.13a28 28 0 0 0-48.6 27.82c16 33.77 28.93 57.72 43.72 72.69C86.24 233.54 103.2 240 128 240a88.1 88.1 0 0 0 88-88V76a28 28 0 0 0-28-28m12 104a72.08 72.08 0 0 1-72 72c-20.38 0-33.51-4.88-45.33-16.85C69.44 193.74 57.26 171 41.9 138.58a6 6 0 0 0-.3-.58a12 12 0 0 1 20.79-12a2 2 0 0 0 .14.23l18.67 30A8 8 0 0 0 96 152V60a12 12 0 0 1 24 0v60a8 8 0 0 0 16 0V44a12 12 0 0 1 24 0v76a8 8 0 0 0 16 0V76a12 12 0 0 1 24 0Z"
                    />
                  </svg>
                }
              >
                Apply Here
              </FormButton>
            }
          />
        </div>
      </div>

      {/* About Volunteering */}
      <section className="py-16 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-violet-700 dark:text-white">
              <p className="text-xl leading-relaxed mb-8">
                Koenig Childhood Cancer Foundation (KCCF) is a{' '}
                <span className="font-semibold">100% volunteer-run</span>{' '}
                organization. Your time, energy, and commitment directly{' '}
                <span className="font-semibold">
                  impact children battling cancer
                </span>{' '}
                and their families.
              </p>

              <p className="text-xl leading-relaxed mb-8">
                We welcome <span className="font-semibold">individuals</span>,
                community <span className="font-semibold">groups</span>, and
                corporate <span className="font-semibold">teams</span> to
                support our mission — whether you can volunteer a few hours each
                month or{' '}
                <span className="font-semibold">take on a larger role</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-violet-700 mb-12 dark:text-white">
            Volunteer Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 sm:px-24 md:px-0">
            {/* Fundraising Events */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:px-6 dark:bg-gray-800 flex flex-col space-between">
              <div className="text-violet-600 dark:text-saffron-400 p-4 w-fit mx-auto mb-6 bg-gray-200 bg-gradient-to-br dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center">
                {/* <!-- Icon from Huge Icons by Hugeicons - undefined --> */}
                <svg
                  className="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" strokeWidth="1.2">
                    <circle cx="12" cy="5" r="3" />
                    <circle cx="12" cy="20" r="2" />
                    <circle cx="20" cy="20" r="2" />
                    <circle cx="4" cy="20" r="2" />
                    <path
                      strokeLinecap="round"
                      d="M20 15c0-1.105-1.12-2-2.5-2h-11c-1.38 0-2.5.895-2.5 2m8-4v4"
                    />
                  </g>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-violet-700 dark:text-saffron-400 mb-4 text-center flex items-center justify-center group w-fit mx-auto">
                Peer-to-peer Fundraising
              </h3>
              <p className="mb-4 text-lg dark:text-white">
                Lead a fundraising campaign with your sports team, school, or
                community group to raise vital funds and awareness.
              </p>
              <ul className="text-md space-y-1 dark:text-white mb-4">
                <li>• Plan and coordinate fundraising events.</li>
                <li>• Engage donors and supporters within your community.</li>
                <li>• Promote KCCF campaigns through your social media.</li>
              </ul>
              <Link
                className="text-lg btn-violet rounded-full px-4 py-2 font-semibold text-violet-700 mt-auto text-center flex items-center justify-center group w-fit mx-auto"
                href="/fundraisers"
              >
                Learn More
                {/* <!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE --> */}
                <svg
                  className="w-5 h-5 ml-1 lg:mt-0 xl:mt-0.5 group-hover:translate-x-1 transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48"
                  />
                </svg>
              </Link>
            </div>

            {/* Crazy Socks Events */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:px-6 dark:bg-gray-800 flex flex-col space-between">
              <div className="text-violet-600 dark:text-saffron-400 p-4 w-fit mx-auto mb-6 bg-gray-200 bg-gradient-to-br dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center">
                {/* <!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE --> */}
                <svg
                  className="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M192 18h-88a14 14 0 0 0-14 14v77.51l-39.33 39.34a56.91 56.91 0 1 0 80.48 80.48l68.41-68.4a21.88 21.88 0 0 0 6.44-15.56V32a14 14 0 0 0-14-14m-88 12h88a2 2 0 0 1 2 2v18h-92V32a2 2 0 0 1 2-2m18.67 190.85a44.92 44.92 0 0 1-63.52-63.52l41.09-41.09A6 6 0 0 0 102 112V62h92v44.34A54.07 54.07 0 0 0 146 160a53.4 53.4 0 0 0 8.47 29Zm68.4-68.41l-27.85 27.86A41.54 41.54 0 0 1 158 160a42.05 42.05 0 0 1 36-41.56v26.93a9.93 9.93 0 0 1-2.93 7.07"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-violet-700 dark:text-saffron-400 mb-4 text-center flex items-center justify-center group w-fit mx-auto">
                Gift Bag Event Sponsorship
              </h3>
              <p className="mb-4 text-lg dark:text-white">
                Invite your company or community group to host KCCF’s signature
                Crazy Socks event to support hospitalized children.
              </p>
              <ul className="text-md space-y-1 dark:text-white mb-4">
                <li>• Connect KCCF with your corporate CSR representative.</li>
                <li>• Host a localized Crazy Socks gift bag event.</li>
                <li>• Assemble care packages for pediatric cancer patients.</li>
              </ul>
              <Link
                className="text-lg btn-violet rounded-full px-4 py-2 font-semibold text-violet-700 mt-auto text-center flex items-center justify-center group w-fit mx-auto"
                href="/crazy-socks"
              >
                Learn More
                {/* <!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE --> */}
                <svg
                  className="w-5 h-5 ml-1 lg:mt-0 xl:mt-0.5 group-hover:translate-x-1 transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48"
                  />
                </svg>
              </Link>
            </div>

            {/* Camp Support */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:px-6 dark:bg-gray-800 flex flex-col space-between md:col-span-2 md:max-w-[45vw] md:mx-auto xl:col-span-1 xl:mx-0">
              <div className="text-violet-600 dark:text-saffron-400 p-4 w-fit mx-auto mb-6 bg-gradient-to-br bg-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center">
                {/* <!-- Icon from Huge Icons by Hugeicons - undefined --> */}
                <svg
                  className="w-12 h-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M243.6 148.8a6 6 0 0 1-8.4-1.2A53.58 53.58 0 0 0 192 126a6 6 0 0 1 0-12a26 26 0 1 0-25.18-32.5a6 6 0 0 1-11.62-3a38 38 0 1 1 59.91 39.63a65.7 65.7 0 0 1 29.69 22.27a6 6 0 0 1-1.2 8.4M189.19 213a6 6 0 0 1-2.19 8.2a5.9 5.9 0 0 1-3 .81a6 6 0 0 1-5.2-3a59 59 0 0 0-101.62 0a6 6 0 1 1-10.38-6a70.1 70.1 0 0 1 36.2-30.46a46 46 0 1 1 50.1 0A70.1 70.1 0 0 1 189.19 213M128 178a34 34 0 1 0-34-34a34 34 0 0 0 34 34m-58-58a6 6 0 0 0-6-6a26 26 0 1 1 25.18-32.51a6 6 0 1 0 11.62-3a38 38 0 1 0-59.91 39.63A65.7 65.7 0 0 0 11.2 140.4a6 6 0 1 0 9.6 7.2A53.58 53.58 0 0 1 64 126a6 6 0 0 0 6-6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-violet-700 dark:text-saffron-400 mb-4 text-center flex items-center justify-center group w-fit mx-auto">
                International Camp Support
              </h3>
              <p className="mb-4 text-lg dark:text-white">
                Support the KCCF International Healing Camp in Azerbaijan,
                connecting pediatric cancer survivors and their siblings.
              </p>
              <ul className="text-md space-y-1 dark:text-white mb-4">
                <li>• Serve as a Camp Director, Counselor, or Teacher.</li>
                <li>• Assist with camp logistics.</li>
                <li>• Help organize and promote camp-specific fundraising.</li>
              </ul>
              <Link
                className="text-lg btn-violet rounded-full px-4 py-2 font-semibold text-violet-700 mt-auto text-center flex items-center justify-center group w-fit mx-auto"
                href="/camp"
              >
                Learn More
                {/* <!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE --> */}
                <svg
                  className="w-5 h-5 ml-1 lg:mt-0 xl:mt-0.5 group-hover:translate-x-1 transition-transform"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Requirements and Benefits Section */}
      <section className="py-16 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-violet-600 font-bold text-center mb-12 dark:text-white">
            Volunteer Requirements and Benefits
          </h2>
          <div className="prose prose-lg max-w-none text-violet-700 md:grid md:grid-cols-2 md:gap-12">
            <div className="bg-saffron-50 bg-gradient-to-br dark:from-gray-700 dark:to-gray-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-violet-700 dark:text-saffron-400 mb-4">
                Volunteer Requirements
              </h3>
              <ul className="space-y-2 text-violet-600 dark:text-white">
                <li className="flex items-start font-semibold">
                  <span className="text-violet-600 dark:text-white mr-2">
                    •
                  </span>
                  Volunteers must be 18 years or older
                </li>
                <li className="flex items-start font-semibold">
                  <span className="text-violet-600 dark:text-white mr-2">
                    •
                  </span>
                  Parental consent is required for minor volunteers
                </li>
                <li className="flex items-start font-semibold">
                  <span className="text-violet-600 dark:text-white mr-2">
                    •
                  </span>
                  A minimum one-year commitment is requested for most roles
                </li>
                <li className="flex items-start font-semibold">
                  <span className="text-violet-600 dark:text-white mr-2">
                    •
                  </span>
                  A background check may be required
                </li>
              </ul>
            </div>

            <div className="bg-saffron-50 bg-gradient-to-br dark:from-gray-700 dark:to-gray-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-violet-700 dark:text-saffron-400 mb-4">
                Volunteer Benefits
              </h3>
              <ul className="space-y-2 text-violet-600 dark:text-white">
                <li className="flex items-start font-semibold">
                  <span className="text-violet-600 dark:text-white mr-2">
                    •
                  </span>
                  Make a direct impact on families facing pediatric cancer
                </li>
                <li className="flex items-start font-semibold">
                  <span className="text-violet-600 dark:text-white mr-2">
                    •
                  </span>
                  Join a supportive community of mission-driven volunteers
                </li>
                <li className="flex items-start font-semibold">
                  <span className="text-violet-600 dark:text-white mr-2">
                    •
                  </span>
                  Gain valuable skills and experience
                </li>
                <li className="flex items-start font-semibold">
                  <span className="text-violet-600 dark:text-white mr-2">
                    •
                  </span>
                  Receive recognition for dedication and service
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16 bg-violet-500 text-white bg-gradient-to-br dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Become a Volunteer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Individual Volunteering Card */}
            <div className="card-static bg-white dark:bg-gray-800 rounded-lg p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-violet-700 dark:text-saffron-400 mb-4 text-center">
                Individual
              </h3>
              <p className="mb-6 flex-grow text-black dark:text-white">
                Individual volunteering includes opportunities to contribute
                your skills and/or participate in events that support our
                mission.
              </p>
              <div className="text-center mt-auto">
                <span
                  className="inline-flex 2xl:text-lg text-violet-600 dark:text-saffron-400 font-semibold transition-colors flex-1 justify-center items-center cursor-pointer group"
                  onClick={() => openModal('volunteer')}
                >
                  Apply Here
                  {/* <!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE --> */}
                  <svg
                    className="w-5 h-5 ml-1 2xl:w-7 2xl:h-7 lg:mt-0 xl:mt-0.5 group-hover:translate-x-1 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48"
                    />
                  </svg>
                </span>
              </div>
            </div>

            {/* Group Volunteering Card */}
            <div className="card-static bg-white dark:bg-gray-800 rounded-lg p-8 flex flex-col">
              <h3 className="text-2xl font-bold text-violet-700 dark:text-saffron-400 mb-4 text-center">
                Group
              </h3>
              <p className="text-black dark:text-white mb-6 flex-grow">
                Group volunteering usually involves corporate sponsorship of
                care bag supplies and assembling packages, writing notes for
                children in the hospital. Check with your company's Corporate
                Social Responsibility team.
              </p>
              <div className="text-center mt-auto">
                <Link
                  className="inline-flex 2xl:text-lg items-center text-violet-600 dark:text-saffron-400 font-semibold transition-colors group"
                  href="/crazy-socks"
                >
                  Learn More
                  {/* <!-- Icon from Phosphor by Phosphor Icons - https://github.com/phosphor-icons/core/blob/main/LICENSE --> */}
                  <svg
                    className="w-5 h-5 ml-1 2xl:w-7 2xl:h-7 lg:mt-0 xl:mt-0.5 group-hover:translate-x-1 transition-transform"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="m220.24 132.24l-72 72a6 6 0 0 1-8.48-8.48L201.51 134H40a6 6 0 0 1 0-12h161.51l-61.75-61.76a6 6 0 0 1 8.48-8.48l72 72a6 6 0 0 1 0 8.48"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-platinum-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-violet-700 mb-12 dark:text-white">
            What Our Volunteers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-gradient-to-br dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 border-2 border-violet-600 dark:border-saffron-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-violet-600 dark:text-saffron-400 text-2xl ">
                    S
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-violet-700 dark:text-saffron-400">
                    Sarah M.
                  </h4>
                  <p className="text-violet-600 dark:text-saffron-400 text-sm">
                    Crazy Socks Volunteer
                  </p>
                </div>
              </div>
              <p className="italic dark:text-white">
                "Volunteering with KCCF has been one of the most rewarding
                experiences of my life. Seeing the smiles on children's faces
                when we deliver care packages is priceless."
              </p>
            </div>

            <div className="bg-white bg-gradient-to-br dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 border-2 border-violet-600 dark:border-saffron-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-violet-600 dark:text-saffron-400 text-2xl ">
                    M
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-violet-700 dark:text-saffron-400">
                    Michael R.
                  </h4>
                  <p className="text-violet-600 dark:text-saffron-400 text-sm">
                    Administrative Volunteer
                  </p>
                </div>
              </div>
              <p className="italic dark:text-white">
                "I love being able to contribute my skills to such a meaningful
                cause. The KCCF team is amazing and makes every volunteer feel
                valued and appreciated."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
