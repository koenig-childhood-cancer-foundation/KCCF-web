'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import CallToAction from '@/components/CallToAction';

type LegacyMediaQueryList = MediaQueryList & {
  addListener?: (listener: (e: MediaQueryListEvent) => void) => void;
  removeListener?: (listener: (e: MediaQueryListEvent) => void) => void;
};

export default function KCCFFamily() {
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
    <div className="min-h-screen bg-gradient-to-br from-platinum-50 via-white to-platinum-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-x-hidden">
      {/* Hero Section with Background */}
      <div className="relative min-h-[66vh] xl:min-h-[80vh] 2xl:min-h-[85vh] 3xl:h-[90vh] flex justify-center overflow-hidden pt-28">
        {/* Background Image */}
        <div className="absolute inset-0 top-24">
          <Image
            src="/images/header_image_kccf_family.png"
            alt="KCCF Family"
            fill
            className="object-cover object-[40%_center] xl:object-[55%_0%]"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>

        {/* PageHeader */}
        <div className="mx-auto lg:ml-0 xl:ml-0">
          <PageHeader
            title="KCCF Family"
            subtitle={`The incredible team${isLgUp ? ' ' : '<br/>'}that drives our mission.`}
            headerStyle="text-center lg:text-left pt-0 lg:pt-8 2xl:pt-8 pb-12 lg:pl-8 xl:pl-16 2xl:pl-16"
            gridStyle="gap-0 lg:grid-cols-1"
          />
        </div>
      </div>

      {/* Elana Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="lg:text-center text-4xl lg:text-5xl font-bold mb-8 lg:mb-16 text-violet-600 dark:text-saffron-400">
            Meet Our Founder, Elana Koenig
          </h2>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="xl:mx-16">
              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                <p className="text-xl lg:text-2xl xl:text-[1.6rem] 2xl:text-4xl font-semibold text-[#732154] dark:text-saffron-400">
                  Cancer Survivor, Singer, Influencer
                </p>
                <p className="space-y-6 text-lg xl:text-[1.4rem] 2xl:text-[1.8rem] text-gray-700 dark:text-gray-200 leading-relaxed">
                  At just 11 years old, Elana founded KCCF in 2020 with $900
                  from her piggy bank after surviving cancer herself. Today, she
                  continues to lead our mission as a thriving cancer survivor.
                </p>
                <p className="space-y-6 text-lg xl:text-[1.4rem] 2xl:text-[1.8rem] text-gray-700 dark:text-gray-200 leading-relaxed">
                  Elana's personal experience with cancer drives her passion for
                  helping other families facing similar financial and emotional
                  challenges. Additionally, she is a powerful advocate, singer,
                  and speaker—who shares her story to inspire hope and action.
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="/our-story"
                  className="text-lg lg:text-xl 2xl:text-2xl btn-violet rounded-full px-4 py-2 lg:px-5 lg:py-3 font-semibold text-violet-700 text-center flex items-center justify-center group w-fit"
                >
                  Read Elana's Story
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

            <div className="relative">
              <div className="relative bg-gradient-to-br from-[#732154]/20 to-[#732154]/30 dark:from-[#732154]/40 dark:to-[#732154]/50 p-8 rounded-3xl shadow-2xl">
                <Image
                  src="/images/cropped-IMG_1521-scaled-1.jpg"
                  alt="Elana Koenig, Founder"
                  width={500}
                  height={600}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-20 bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-violet-600 dark:text-white">
              Board Members
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Rena Koenig */}
            <div className="card-static bg-white dark:bg-gray-800 rounded-2xl p-8">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#732154] to-fandango-400 rounded-full opacity-20"></div>
                  <Image
                    src="/images/Untitled-drawing-1.jpg"
                    alt="Rena Koenig"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">
                Rena Koenig, EMBA
              </h3>
              <p className="text-gray-600 dark:text-gray-200 text-center leading-relaxed">
                An NYU Stern graduate with 20 years of corporate leadership at
                firms like KPMG. She spent the past decade co-running a family
                business before fully dedicating herself to her daughter Elana's
                mission—Koenig Childhood Cancer Foundation.
              </p>
            </div>

            {/* Scott Koenig */}
            <div className="card-static bg-white dark:bg-gray-800 rounded-2xl p-8">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 to-orange-400 rounded-full opacity-20"></div>
                  <Image
                    src="/images/Untitled-drawing-33.png"
                    alt="Scott Koenig"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">
                Scott Koenig, MBA
              </h3>
              <p className="text-gray-600 dark:text-gray-200 text-center leading-relaxed">
                A Weatherhead School of Management graduate, Scott began his
                career on Wall Street, later owned and ran a 75-year-old
                lighting company, sold it in 2018, and now focuses on business
                planning and growth strategy for startups.
              </p>
            </div>

            {/* Bradley Bailyn */}
            <div className="card-static bg-white dark:bg-gray-800 rounded-2xl p-8">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-fandango-400 to-[#732154] rounded-full opacity-20"></div>
                  <Image
                    src="/images/cropped-Bradley-Bailyn-1.png"
                    alt="Bradley Bailyn"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">
                Bradley Bailyn, Esq
              </h3>
              <p className="text-gray-600 dark:text-gray-200 text-center leading-relaxed">
                A graduate of NYU Stern and Brooklyn Law School, Bradley is a
                leading corporate attorney, litigator, and founder of Bailyn
                Law. A proud lifelong Brooklyn resident, with his wife, two kids
                and a dog.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advisers Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="text-[#732154] dark:text-saffron-400">
                Advisers
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mike Blumenfeld */}
            <div className="card-static bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8">
              <div className="relative mb-6">
                <div className="relative w-40 h-40 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#732154] to-fandango-400 rounded-full opacity-20"></div>
                  <Image
                    src="/images/Mike-Blumenfeld-Director-copy.png"
                    alt="Mike Blumenfeld"
                    width={160}
                    height={160}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">
                Mike Blumenfeld, MBA
              </h3>
              <p className="text-gray-600 dark:text-gray-200 text-center leading-relaxed">
                A graduate of Wharton and NYU Stern, Mike leverages over 30
                years of experience in strategic planning to assist KCCF with
                organizational growth. Since 1981, he has specialized in helping
                entrepreneurs build profitable businesses and positive cultures.
                Mike focuses on practical, results-driven solutions to help
                small-to-midsized companies thrive.
              </p>
            </div>

            {/* Clarke Moyer */}
            <div className="card-static bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8">
              <div className="relative mb-6">
                <div className="relative w-40 h-40 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 to-orange-400 rounded-full opacity-20"></div>
                  <Image
                    src="/images/cropped-Clarke-Moyer-Bio-Picture-2MP.jpg"
                    alt="Clarke Moyer"
                    width={160}
                    height={160}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">
                Clarke Moyer, MBA-ITM
              </h3>
              <p className="text-gray-600 dark:text-gray-200 text-center leading-relaxed">
                A U.S. Army veteran, Clarke is a Principal Investigator at Penn
                State Applied Research Laboratory. He holds an MBA-ITM from
                Western Governors University and is currently an eDBA candidate
                at PSU Smeal. Clarke leverages his deep technical expertise to
                lead robust cybersecurity and automation solutions that drive
                organizational growth.
              </p>
            </div>

            {/* Oliwia Caes */}
            <div className="card-static bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8">
              <div className="relative mb-6">
                <div className="relative w-40 h-40 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-fandango-400 to-[#732154] rounded-full opacity-20"></div>
                  <Image
                    src="/images/Oliwia-Caes.JPEG"
                    alt="Oliwia Caes"
                    width={160}
                    height={160}
                    className="rounded-full w-full h-full object-cover object-[0%_30%] relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">
                Oliwia Caes
              </h3>
              <p className="text-gray-600 dark:text-gray-200 text-center leading-relaxed">
                A UCLA Biochemistry student, Oliwia is passionate about
                medicinal chemistry, oncology, and biomedical research. She
                manages vital communications for oncology families and donors,
                ensuring clear and compassionate outreach. Oliwia is a dedicated
                advocate for the cause and has been a proud member of the KCCF
                family since its inception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Honorary Directors Section */}
      <section className="py-20 bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-violet-600 dark:text-white">
              Honorary Directors
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The medical professionals who saved Elana's life and continue to
              support our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dr. Wexler */}
            <div className="card-static bg-white dark:bg-gray-800 rounded-2xl p-8">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#732154] to-fandango-400 rounded-full opacity-20"></div>
                  <Image
                    src="/images/Dr.-Wexler-Honorary-Director-copy.png"
                    alt="Dr. Wexler"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">
                Dr. Wexler
              </h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center mb-3">
                Saved Elana's Life
              </p>
              <p className="text-gray-600 dark:text-gray-200 text-center">
                Pediatric Hematologist – Oncologist
                <br />
                Memorial Sloan Kettering Cancer Center
              </p>
            </div>

            {/* Dr. Morris */}
            <div className="card-static bg-white dark:bg-gray-800 rounded-2xl p-8">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 to-orange-400 rounded-full opacity-20"></div>
                  <Image
                    src="/images/Carol-Morris-2-copy-2_FINAL.png"
                    alt="Dr. Morris"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">
                Dr. Morris
              </h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center mb-3">
                Removed Elana's Tumor
              </p>
              <p className="text-gray-600 dark:text-gray-200 text-center">
                Orthopaedic Surgeon
                <br />
                Memorial Sloan Kettering Cancer Center
              </p>
            </div>

            {/* Dr. Prince */}
            <div className="card-static bg-white dark:bg-gray-800 rounded-2xl p-8">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-fandango-400 to-[#732154] rounded-full opacity-20"></div>
                  <Image
                    src="/images/cropped-DrPrinceElana-scaled.jpg"
                    alt="Dr. Prince"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">
                Dr. Prince
              </h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center mb-3">
                Elana's Second Surgeon
              </p>
              <p className="text-gray-600 dark:text-gray-200 text-center">
                Orthopaedic Surgeon
                <br />
                Memorial Sloan Kettering Cancer Center
              </p>
            </div>

            {/* Dr. Charas */}
            <div className="card-static bg-white dark:bg-gray-800 rounded-2xl p-8">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#732154] to-fandango-400 rounded-full opacity-20"></div>
                  <Image
                    src="/images/Dr.-Tomas-copy.png"
                    alt="Dr. Charas"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">
                Dr. Charas
              </h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center mb-3">
                Volunteer Shani's dad
              </p>
              <p className="text-gray-600 dark:text-gray-200 text-center">
                Radiation Oncologist
                <br />
                Rambam Health Care Campus, Israel
              </p>
            </div>

            {/* Dr. Kearney */}
            <div className="card-static bg-white dark:bg-gray-800 rounded-2xl p-8">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 to-orange-400 rounded-full opacity-20"></div>
                  <Image
                    src="/images/kearney_170721_02_3x2-copy.png"
                    alt="Dr. Kearney"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">
                Dr. Kearney
              </h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center mb-3">
                Elana's Therapist
              </p>
              <p className="text-gray-600 dark:text-gray-200 text-center">
                Pediatric Psychiatrist
                <br />
                Memorial Sloan Kettering Cancer Center
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
