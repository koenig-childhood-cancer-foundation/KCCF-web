'use client'

import Image from 'next/image';
import Link from 'next/link';
import DonationButton from '@/components/DonationButton';
import PartnersCarousel from '@/components/PartnersCarousel';
import { useTheme } from '@/contexts/ThemeContext';
import { IMPACT_STATS } from '@/constants/impactStats';

export default function HomeContent() {
  const { theme } = useTheme()
  return (
    <div className="min-h-screen bg-gradient-to-br from-platinum-50 via-white to-platinum-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-0">
        {/* Background Banner Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/banner.webp"
            alt="KCCF Banner Background"
            fill
            sizes="100vw"
            className="object-cover object-[90%_center]"
            priority
            fetchPriority="high"
          />
        </div>

        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-platinum-50/40 via-white/40 to-platinum-100/40 dark:from-gray-900/70 dark:via-gray-800/70 dark:to-gray-900/70"></div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-violet-600"></div>
          <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-saffron-500"></div>
          <div className="absolute bottom-32 left-1/3 w-20 h-20 rounded-full bg-violet-500"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 rounded-full bg-orange-500"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">

            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-violet-600 dark:text-saffron-400">
              Life-saving support for children battling cancer
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-gray-700 dark:text-gray-200 max-w-3xl mx-auto leading-relaxed font-normal">
              Koenig Childhood Cancer Foundation was started by 11-year-old cancer survivor Elana Koenig in 2020 with $900 in her piggy bank.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link href="/aid" className="group bg-violet-500 hover:bg-violet-600 text-white py-4 px-10 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center">
                <span>Apply for Aid</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <DonationButton
                amount={50}
                campaign="Donate to save lives"
                variant="primary"
                size="lg"
                className="group bg-orange-600 hover:bg-orange-700 text-white py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                icon={
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                }
              >
                Donate Now
              </DonationButton>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {IMPACT_STATS.HOME.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl md:text-4xl font-bold ${stat.color.light} ${stat.color.dark} mb-2`}>
                    {stat.value}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-20 bg-white dark:bg-gray-800 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-orange-600 px-4 py-2 rounded-full mb-6">
                <span className="text-white font-semibold text-sm">Our Founder</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-violet-600 dark:text-white">
                Meet Elana Koenig
              </h2>

              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                <p>
                  Elana Koenig is a childhood cancer survivor, singer, influencer, and founder of Koenig Childhood Cancer Foundation. At seven, Elana witnessed firsthand the financial and emotional struggles of families like her own, which motivated her to start the charity and help others facing the same experience.
                </p>
                <p className="text-violet-600 dark:text-saffron-400 font-semibold">
                  "Every child deserves a fighting chance, and every family deserves support during their darkest hours."
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/our-story" className="bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600 text-white py-3 px-8 rounded-full transition duration-300 font-semibold text-center">
                  Read Her Story
                </Link>
                <Link href="/our-story/#bookelanaformsection" className="border-2 border-violet-500 text-violet-600 dark:text-white hover:bg-violet-500/10 dark:hover:bg-violet-500/10 py-3 px-8 rounded-full transition-all duration-300 font-semibold text-center hover:shadow-lg hover:-translate-y-0.5">
                  Book Elana to Speak
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#732154] to-violet-400 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
                <div className="relative bg-gradient-to-br from-[#732154]/20 to-[#732154]/30 dark:from-[#732154]/40 dark:to-[#732154]/50 p-8 rounded-3xl shadow-2xl">
                  <Image
                    src="/images/NUP_206704_00566-scaled.jpg"
                    alt="Elana Koenig"
                    width={500}
                    height={600}
                    className="rounded-2xl w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-white">
              Our Impact Programs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive support to families facing childhood cancer through multiple programs designed to address their unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Family Financial Assistance */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Family Financial Assistance</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Direct financial support for families to cover medical bills, housing, transportation, and other essential expenses during treatment.
              </p>
              <Link href="/aid" className="inline-flex items-center text-violet-600 dark:text-saffron-600 hover:text-violet-700 dark:hover:text-violet-300 font-semibold transition-colors">
                Apply for Aid
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Crazy Socks Day */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🧦</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Crazy Socks Day</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Our signature fundraising event where schools and organizations wear crazy socks to raise awareness and funds for childhood cancer families.
              </p>
              <Link href="/crazy-socks" className="inline-flex items-center text-saffron-600 dark:text-saffron-400 hover:text-saffron-700 dark:hover:text-saffron-300 font-semibold transition-colors">
                Learn About Crazy Socks Day
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

            {/* Emotional Support */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Emotional Support</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Connecting families with support groups, counseling services, and other families who understand their journey.
              </p>
              <Link href="/contact" className="inline-flex items-center text-violet-600 dark:text-saffron-600 hover:text-violet-700 dark:hover:text-violet-300 font-semibold transition-colors">
                Get Support
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Top Media Coverage Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-violet-600 dark:text-saffron-400">Top Media Coverage</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {/* Kelly Clarkson Show */}
            <div className="group bg-platinum-50 dark:bg-gray-700 rounded-lg p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600">
              <div className="aspect-video mb-3 md:mb-4">
                <iframe
                  className="w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-300"
                  src="https://www.youtube.com/embed/clbbmsPRyS8?rel=0&start=380"
                  title="Charles Esten Invites 15-Year-Old Cancer Survivor To Sing At Nashville Benefit Concert"
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-violet-600 dark:text-saffron-400 leading-tight group-hover:text-violet-700 dark:group-hover:text-saffron-300 transition-colors">Elana on The Kelly Clarkson Show as the youngest Rad Human</h3>
            </div>

            {/* Mets Game */}
            <div className="group bg-platinum-50 dark:bg-gray-700 rounded-lg p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600">
              <div className="aspect-video mb-3 md:mb-4">
                <iframe
                  className="w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-300"
                  src="https://www.youtube.com/embed/dZmB8dH9X70"
                  title="Elana, Teen Cancer Survivor, Sings National Anthem at Mets Game!"
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-violet-600 dark:text-saffron-400 leading-tight group-hover:text-violet-700 dark:group-hover:text-saffron-300 transition-colors">Elana singing the national anthem at a Mets game</h3>
            </div>

            {/* People Magazine */}
            <div className="group bg-platinum-50 dark:bg-gray-700 rounded-lg p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600">
              <div className="aspect-video mb-3 md:mb-4">
                <iframe
                  className="w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-300"
                  src="https://www.youtube.com/embed/Bgisln8H59w?rel=0"
                  title="WNBC Mark Ukraine"
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-violet-600 dark:text-saffron-400 leading-tight group-hover:text-violet-700 dark:group-hover:text-saffron-300 transition-colors">Elana and KCCF's story featured in People</h3>
            </div>

            {/* Nasdaq */}
            <div className="group bg-platinum-50 dark:bg-gray-700 rounded-lg p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600">
              <div className="aspect-video mb-3 md:mb-4">
                <iframe
                  className="w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-300"
                  src="https://www.youtube.com/embed/tiamL9EdPC0"
                  title="Nasdaq Honors Elana – Teen Cancer Survivor and Founder of KCCF!"
                  loading="lazy"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-violet-600 dark:text-saffron-400 leading-tight group-hover:text-violet-700 dark:group-hover:text-saffron-300 transition-colors">Elana and KCCF honored by Nasdaq at the closing bell</h3>
            </div>
          </div>

          <div className="text-center">
            <Link href="/media" className="inline-flex items-center bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600 text-white py-3 px-6 md:px-8 rounded-full transition duration-300 font-semibold text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span>View All Media Coverage</span>
              <svg className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Brave Warriors Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-white">
              Our Brave Warriors
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet some of the incredible children and families whose lives have been touched by KCCF's support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {[
              {
                name: "Derek",
                image: "/images/cropped-Derek_5704-scaled.jpeg",
                quote: "KCCF helped my family stay in our home during my treatment."
              },
              {
                name: "Khadija",
                image: "/images/cropped-Khadija-Base-1.jpg",
                quote: "The foundation gave us hope when we needed it most."
              },
              {
                name: "Zariyah",
                image: "/images/cropped-Zariyah_4132-1-scaled.jpg",
                quote: "Thank you for helping my family during my cancer journey."
              },
              {
                name: "Mark",
                image: "/images/cropped-cropped-Mark_2022-06-13-12.21.08.jpg",
                quote: "Ependymoma warrior - KCCF's support made all the difference."
              },
              {
                name: "Mishka",
                image: "/images/cropped-Mishka-Belarus.jpg",
                quote: "Neuroblastoma fighter - grateful for KCCF's love and support."
              }
            ].map((warrior, index) => (
              <div key={index} className="group bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative mb-4">
                  <div className="relative w-full aspect-square max-w-48 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-violet-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <Image
                      src={warrior.image}
                      alt={warrior.name}
                      fill
                      sizes="192px"
                      className="rounded-full object-cover relative z-10"
                      loading="lazy"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white text-center">{warrior.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-200 text-center italic leading-tight">"{warrior.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-saffron-600">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're grateful for the support of these incredible organizations who help us make a difference.
            </p>
          </div>

          <PartnersCarousel />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-violet-600 dark:bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Join Our <span className="text-white">Mission</span>
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Together, we can make a difference in the lives of children battling cancer and their families. Every donation, every volunteer hour, and every act of support brings hope to those who need it most.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/donate" className="group bg-orange-600 hover:bg-orange-700 text-white py-4 px-10 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center">
              <span>Donate Now</span>
              <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>
            <Link href="/volunteer" className="group bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-4 px-10 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center border border-white/30">
              <span>Volunteer</span>
              <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
