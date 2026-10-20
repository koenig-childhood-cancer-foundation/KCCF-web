'use client'

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DonationButton from '@/components/DonationButton';
import PartnersCarousel from '@/components/PartnersCarousel';
import VideoEmbed from '@/components/VideoEmbed';
import CallToAction from '@/components/CallToAction';
import FormButton from '@/components/FormButton';
import { IMPACT_STATS } from '@/constants/impactStats';
import { useFormModal } from '@/contexts/FormModalContext';

export default function HomeContent() {
  const { openModal } = useFormModal();

  // Old newsletter links land on /?subscribe=1: show the sign-up pop-up, then tidy the address.
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('subscribe') === '1') {
      openModal('newsletter-signup');
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [openModal]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-platinum-50 via-white to-platinum-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-40 md:pt-52 pb-10 overflow-hidden">
        {/* Full vibrant image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/banner.webp"
            alt="Elana with a child in the hospital, entertaining her"
            fill
            sizes="100vw"
            className="object-cover object-[80%]"
            priority
            fetchPriority="high"
          />
        </div>
               {/* Change this section for hero overlay tones */}
          <div className="absolute inset-0 bg-amber-400/12 dark:bg-amber-400/18 pointer-events-none"></div>
        {/* Dark gradient added for mobile readability*/}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/30 md:from-black/40 md:via-black/30 md:to-transparent pointer-events-none"></div>

        <div className="relative z-10 text-center lg:text-left container mx-auto px-2 lg:mx-0 lg:max-w-none lg:pl-20 lg:pr-12">
          <div className="max-w-4xl mx-auto lg:ml-0 p-0 -mt-8 md:-mt-12">
            <h1 className="text-5xl md:text-6xl lg:text-5xl font-bold mb-8 text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
              Helping Children Beat Cancer!
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-white max-w-3xl mx-auto lg:mx-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] font-medium">
              Life-saving financial and emotional support to children battling cancer and their families.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16 lg:mt-[72px] lg:mb-0">
              <DonationButton
                id="hero-donate"
                amount={50}
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
                href="/aid"
                className="btn-primary group bg-white/10 hover:bg-white/20 border-2 border-white text-white py-4 px-10 rounded-full text-lg font-semibold inline-flex items-center justify-center"
              >
                <span>Apply for Family Aid</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Impact Stats */}
            <div className="mt-12 md:mt-26 lg:mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto lg:mx-0">
              {IMPACT_STATS.HOME.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.5)]">
                    {stat.value}
                  </div>
                  <p className="text-white/90 text-sm font-medium drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="mt-10 py-20 bg-violet-600 dark:bg-gray-800 border-y-[3px] border-[#DAB87E] relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Meet Our Founder, Elana Koenig
            </h2>
            <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto" aria-hidden="true" />
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">

              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                <p>
                  Elana Koenig was diagnosed with cancer at age 7 and treated at Memorial Sloan Kettering Cancer Center. Over 18 months of treatment, she went through 9 cycles of chemotherapy and 15 surgeries, and spent 6 months in a full-body cast. She saw firsthand the financial and emotional struggles that families like hers face.
                </p>
                <p>
                  In 2020, at age 11, Elana founded Koenig Childhood Cancer Foundation (KCCF) with the $900 in her piggy bank. Today she is a teen cancer survivor, singer, influencer, and student at Cornell University, and she has appeared three times on The Kelly Clarkson Show as its youngest Rad Human.
                </p>
                <p className="text-[#F1DDB0] font-semibold">
                  "Every child deserves a fighting chance, and every family deserves support during their darkest hours."
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/about-us" className="py-3 px-8 rounded-full font-semibold text-center border-2 border-white text-white hover:bg-white hover:text-violet-700 transition-colors">
                  Read Her Story
                </Link>
                <FormButton 
                  formType="book-elana"
                  variant="orange"
                  size="md"
                  className="py-3 px-8"
                >
                  Book Elana to Speak
                </FormButton>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative bg-white p-2.5 rounded-md border border-[#DAB87E] shadow-lg max-w-md mx-auto">
                  <Image
                    src="/images/NUP_206704_00566-scaled.jpg"
                    alt="Elana Koenig"
                    width={500}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-white">
              Our Impact Programs
            </h2>
            <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-6" aria-hidden="true" />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Three ways we help children and families facing cancer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Family Financial Assistance */}
            <div className="card-interactive group bg-white dark:bg-gray-800 p-8 rounded-[22px] overflow-hidden border border-gray-100 border-t-4 border-t-violet-600 dark:border-gray-700 dark:border-t-violet-400 flex flex-col">
              <div className="flex items-center justify-center mb-6 overflow-hidden rounded-xl">
                <Image
                  src="/images/family-assistance-impact-program.jpeg"
                  alt="A smiling child in a hospital room with Elana, KCCF founder"
                  width={500}
                  height={600}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Family Aid</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                We can help with emergency medical expenses during your child's cancer treatment, such as medical bills, transportation, lodging, food, and more.
              </p>
              <Link href="/aid" className="inline-flex items-center text-violet-600 dark:text-saffron-600 hover:text-violet-700 dark:hover:text-violet-300 font-semibold transition-colors mt-auto">
                Apply for Family Aid
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Crazy Socks Day */}
            <div className="card-interactive group bg-white dark:bg-gray-800 p-8 rounded-[22px] overflow-hidden border border-gray-100 border-t-4 border-t-violet-600 dark:border-gray-700 dark:border-t-violet-400 flex flex-col">
              <div className="flex items-center justify-center mb-6 overflow-hidden rounded-xl">
                <Image
                  src="/images/crazy-socks-impact-program.jpg"
                  alt="A KCCF child is happy to get a KCCF Crazy Socks gift bag"
                  width={500}
                  height={600}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Crazy Socks Gift Bags</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                Sponsor a team-building gift bag event through your company's CSR program. Your team packs gift bags for children in the hospital.
              </p>
              <button
                type="button"
                onClick={() => openModal('crazy-socks-sponsor')}
                className="inline-flex items-center self-start text-violet-600 dark:text-saffron-600 hover:text-violet-700 dark:hover:text-violet-300 font-semibold transition-colors mt-auto cursor-pointer"
              >
                Sponsor a Gift Bag Event
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            {/* KCCF Camp */}
            <div className="card-interactive group bg-white dark:bg-gray-800 p-8 rounded-[22px] overflow-hidden border border-gray-100 border-t-4 border-t-violet-600 dark:border-gray-700 dark:border-t-violet-400 flex flex-col">
              <div className="flex items-center justify-center mb-6 overflow-hidden rounded-xl">
                <Image
                  src="/images/camp-impact-program.jpg"
                  alt="KCCF children in yellow KCCF shirts cheering at KCCF Camp"
                  width={500}
                  height={600}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">KCCF Camp</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                An international summer camp in Azerbaijan for children with cancer and their siblings, free for families.
              </p>
              <Link href="/camp" className="inline-flex items-center text-violet-600 dark:text-saffron-600 hover:text-violet-700 dark:hover:text-violet-300 font-semibold transition-colors mt-auto">
                Learn More About KCCF Camp
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Daniz's Story */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-white">
              &ldquo;My child is alive because of KCCF&rdquo;
            </h2>
            <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto" aria-hidden="true" />
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative bg-white p-2.5 rounded-md border border-[#DAB87E] shadow-lg max-w-xl mx-auto">
                <Image
                  src="/images/daniz-elana.jpg"
                  alt="Elana with Daniz in the hospital in 2022 and at KCCF Camp 2026"
                  width={880}
                  height={688}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                &ldquo;When Daniz was diagnosed with cancer, there was no hope for her in Azerbaijan. Then I was connected to Elana, whose charity covered all our medical expenses and travel to New York and embraced us like family. If it weren&apos;t for them, Daniz might not be with us today.&rdquo;
              </p>
              <p className="mt-6 text-violet-600 dark:text-saffron-400 font-semibold">
                &mdash; Vusala, Daniz&apos;s mom
              </p>
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
                Elana &amp; Daniz in the hospital in 2022 &amp; at KCCF Camp 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KCCF Kids Section */}
      <section className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-white">
              Thank You from Our KCCF Kids
            </h2>
            <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-6" aria-hidden="true" />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Some of the children KCCF has supported.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 max-w-7xl mx-auto">
            {[
              {
                name: "Derek",
                image: "/images/cropped-Derek_5704-scaled.jpeg"
              },
              {
                name: "Khadija",
                image: "/images/cropped-Khadija-Base-1.jpg"
              },
              {
                name: "Zariyah",
                image: "/images/cropped-Zariyah_4132-1-scaled.jpg"
              },
              {
                name: "Mark",
                image: "/images/cropped-cropped-Mark_2022-06-13-12.21.08.jpg"
              },
              {
                name: "Mishka",
                image: "/images/cropped-Mishka-Belarus.jpg"
              }
            ].map((warrior, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-[22px] overflow-hidden border-t-4 border-violet-600 dark:border-violet-400 p-3 shadow-md">
                <div className="relative mb-4">
                  <div className="relative w-full aspect-square max-w-64 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-violet-400 rounded-full opacity-20"></div>
                    <Image
                      src={warrior.image}
                      alt={warrior.name}
                      fill
                      sizes="256px"
                      className="rounded-full object-cover relative z-10"
                      loading="lazy"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-violet-600 dark:text-white text-center">{warrior.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Media Coverage Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-violet-600 dark:text-saffron-400">Top Media Coverage</h2>
            <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto" aria-hidden="true" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {/* Kelly Clarkson Show */}
            <div className="card-interactive group bg-[#FBF5EA] dark:bg-gray-700 p-4 md:p-6 rounded-[22px] overflow-hidden border border-[#F0E4CC] border-t-4 border-t-violet-600 dark:border-gray-600 dark:border-t-violet-400">
              <div className="aspect-video mb-3 md:mb-4 rounded-xl overflow-hidden">
                <VideoEmbed src="https://www.youtube.com/embed/clbbmsPRyS8?rel=0&start=380" title="Charles Esten Invites 15-Year-Old Cancer Survivor To Sing At Nashville Benefit Concert" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#2B2330] dark:text-saffron-400 leading-tight group-hover:text-violet-700 dark:group-hover:text-saffron-300 transition-colors">Elana, 3× on The Kelly Clarkson Show as its youngest Rad Human</h3>
            </div>

            {/* Mets Game */}
            <div className="card-interactive group bg-[#FBF5EA] dark:bg-gray-700 p-4 md:p-6 rounded-[22px] overflow-hidden border border-[#F0E4CC] border-t-4 border-t-violet-600 dark:border-gray-600 dark:border-t-violet-400">
              <div className="aspect-video mb-3 md:mb-4 rounded-xl overflow-hidden">
                <VideoEmbed src="https://www.youtube.com/embed/dZmB8dH9X70" title="Elana, Teen Cancer Survivor, Sings National Anthem at Mets Game!" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#2B2330] dark:text-saffron-400 leading-tight group-hover:text-violet-700 dark:group-hover:text-saffron-300 transition-colors">Elana singing the national anthem at a Mets game</h3>
            </div>

            {/* WNBC: families from Ukraine */}
            <div className="card-interactive group bg-[#FBF5EA] dark:bg-gray-700 p-4 md:p-6 rounded-[22px] overflow-hidden border border-[#F0E4CC] border-t-4 border-t-violet-600 dark:border-gray-600 dark:border-t-violet-400">
              <div className="aspect-video mb-3 md:mb-4 rounded-xl overflow-hidden">
                <VideoEmbed src="https://www.youtube.com/embed/Bgisln8H59w?rel=0" title="WNBC: A Toddler from Ukraine Supported by KCCF" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#2B2330] dark:text-saffron-400 leading-tight group-hover:text-violet-700 dark:group-hover:text-saffron-300 transition-colors">WNBC: A Toddler from Ukraine Supported by KCCF</h3>
            </div>

            {/* Nasdaq */}
            <div className="card-interactive group bg-[#FBF5EA] dark:bg-gray-700 p-4 md:p-6 rounded-[22px] overflow-hidden border border-[#F0E4CC] border-t-4 border-t-violet-600 dark:border-gray-600 dark:border-t-violet-400">
              <div className="aspect-video mb-3 md:mb-4 rounded-xl overflow-hidden">
                <VideoEmbed src="https://www.youtube.com/embed/tiamL9EdPC0" title="Nasdaq Honors Elana – Teen Cancer Survivor and Founder of KCCF!" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#2B2330] dark:text-saffron-400 leading-tight group-hover:text-violet-700 dark:group-hover:text-saffron-300 transition-colors">Elana and KCCF honored by Nasdaq at the closing bell</h3>
            </div>
          </div>

          <div className="text-center">
            <Link href="/media" className="btn-primary btn-primary-violet inline-flex items-center py-3 px-6 md:px-8 rounded-full font-semibold text-base md:text-lg">
              <span>View All Media Coverage</span>
              <svg className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-saffron-600">
              Our Partners
            </h2>
            <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-6" aria-hidden="true" />
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're grateful for the support of these incredible organizations who help us make a difference.
            </p>
          </div>

          <PartnersCarousel />
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
