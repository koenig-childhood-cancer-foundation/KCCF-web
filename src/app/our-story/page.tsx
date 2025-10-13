"use client"

import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import FormButton from '@/components/FormButton';

export default function OurStory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-platinum-50 via-white to-platinum-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <PageHeader
        title="Our Story"
        subtitle="From a young cancer survivor's dream to a foundation that has helped hundreds of families across the nation."
      />

      {/* Elana's Journey Section */}
      <section className="py-20 bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-white">
              Elana's Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From a brave young girl fighting cancer to a powerful advocate helping others in their battles.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* During Treatment */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-fandango-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src="/images/cropped-ElanaNoHairUpsetDuringTreatment-scaled.jpg"
                    alt="Elana during treatment"
                    width={256}
                    height={256}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white text-center">Elana during treatment</h3>
              <p className="text-gray-600 dark:text-gray-200 text-center">
                A brave 7-year-old facing the toughest battle of her life with courage and determination.
              </p>
            </div>

            {/* After Beating Cancer */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 to-orange-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src="/images/cropped-Elana-and-Trophy.png"
                    alt="Elana kicked cancer's butt"
                    width={256}
                    height={256}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white text-center">Elana kicked cancer's butt</h3>
              <p className="text-gray-600 dark:text-gray-200 text-center">
                Victory achieved! After 15 months of treatment, Elana emerged stronger and more determined than ever.
              </p>
            </div>

            {/* Elana Today */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-fandango-400 to-violet-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src="/images/cropped-NUP_206704_00566.jpg"
                    alt="Elana today"
                    width={256}
                    height={256}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white text-center">Elana today</h3>
              <p className="text-gray-600 dark:text-gray-200 text-center">
                A thriving young leader, singer, and founder helping hundreds of families through their cancer journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Elana's Story Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-orange-500 px-4 py-2 rounded-full mb-6">
                <span className="text-white font-semibold text-sm">From Patient to Founder</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-violet-600 dark:text-saffron-400">
                Elana's Story
              </h2>

              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                <p className="text-xl font-semibold text-violet-600 dark:text-saffron-400">
                  My name is Elana Koenig, and I am a cancer survivor, singer, and founder of Koenig Childhood Cancer Foundation.
                </p>
                <p>
                  I was only 7 when I was diagnosed with an aggressive rare childhood cancer called Ewing's Sarcoma. I remember seeing my mother and father heartbroken, trying to hide it. I didn't yet understand the difficult journey that lay ahead.
                </p>
                <p>
                  Over the next one and a half years, I experienced firsthand the physical and emotional toll of spending 15 grueling months in the hospital, enduring 9 cycles of chemotherapy, and undergoing 15 surgeries. My parents put their own lives on hold to stand by my side every step of the way.
                </p>
                <p>
                  On the day of my final chemotherapy treatment, as I prepared to leave the hospital, I realized that while my own battle had ended, the fight countless children and families were facing was far from over. That motivated me to start KCCF in 2020 with $900 in my piggy bank to help other children battling cancer.
                </p>
                <p className="text-violet-600 dark:text-saffron-400 font-semibold text-xl">
                  "No child should fight cancer alone."
                </p>
                <p className="text-violet-600 dark:text-saffron-400 font-semibold">
                  — Elana Koenig, Founder
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#732154] to-fandango-400 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
              <div className="relative bg-gradient-to-br from-[#732154]/20 to-[#732154]/30 dark:from-[#732154]/40 dark:to-[#732154]/50 p-8 rounded-3xl shadow-2xl">
                <Image
                  src="/images/NUP_206704_00566-scaled.jpg"
                  alt="Elana during her cancer treatment"
                  width={500}
                  height={600}
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-violet-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Mission</h3>
              <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
                To provide life-saving financial and emotional support to children bravely fighting cancer, every step of the way.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-fandango-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-2xl">👁️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Vision</h3>
              <p className="text-gray-600 dark:text-gray-200 leading-relaxed">
                To ensure every child confronting cancer is surrounded by compassion and unwavering support throughout their journey.
              </p>
            </div>
          </div>

          {/* Why We Do What We Do */}
          <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Why we do what we do!
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-200 leading-relaxed text-center max-w-4xl mx-auto">
              Every day, 275 children are diagnosed with cancer worldwide, roughly equivalent to the load of 7 school buses. The average age for these patients at diagnosis is 6. They often spend about half of their lives in the hospital. To embrace hope at specialized cancer centers, families frequently confront challenges of travel, lodging, living expenses and treatment costs. KCCF plays a vital role in alleviating the financial strain caused by this heartbreaking circumstance.
            </p>
          </div>
        </div>
      </section>

      {/* Book Elana Section */}
      <section className="py-20 bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-white">
                Book Elana Koenig
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Elana shares her inspiring story at schools, organizations, and events to raise awareness about childhood cancer and the importance of supporting affected families.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Invite Elana to share her powerful story of hope, resilience, and the importance of supporting families facing childhood cancer.
              </p>

              <FormButton
                formType="book-elana"
                variant="violet"
                size="lg"
                className="min-w-[200px]"
              >
                Book Elana for Event
              </FormButton>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-violet-600 dark:bg-gray-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Join Elana's Mission
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Help us continue Elana's vision of supporting families battling childhood cancer.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/donate" className="group bg-orange-500 hover:bg-orange-600 text-white py-4 px-10 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center">
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
