"use client"

import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import FormButton from '@/components/FormButton';
import CallToAction from '@/components/CallToAction';

export default function OurStory() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-platinum-50 via-white to-platinum-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-x-hidden">
      {/* Hero Section with Background */}
      <div className="relative min-h-[66vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 top-24">
          <Image
            src="/images/header_image_our_story.jpg"
            alt="Our Story"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
        <div className="absolute inset-0 top-24 bg-amber-400/12 dark:bg-amber-400/18 pointer-events-none"></div>

        {/* PageHeader */}
        <PageHeader
          title="Our Story"
          subtitle="From a child cancer survivor's dream to a foundation that has helped thousands of families globally."
        />
      </div>

      {/* Elana's Journey Section */}
      <section className="py-20 bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-white">
              Elana's Journey
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* During Treatment */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg cursor-default">
              <div className="relative mb-6">
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-fandango-400 rounded-full opacity-20"></div>
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
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg cursor-default">
              <div className="relative mb-6">
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 to-orange-400 rounded-full opacity-20"></div>
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
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg cursor-default">
              <div className="relative mb-6">
                <div className="relative w-64 h-64 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-fandango-400 to-violet-400 rounded-full opacity-20"></div>
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
                A thriving young leader, singer, and founder helping thousands of families through their cancer journeys.
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
      <CallToAction />
    </div>
  );
}
