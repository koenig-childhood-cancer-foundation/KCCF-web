import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export const metadata: Metadata = {
  title: "KCCF Family - Meet Our Brave Warriors | Koenig Childhood Cancer Foundation",
  description: "Meet the incredible children and families whose lives have been touched by KCCF's support. See the real impact of our programs on families battling childhood cancer.",
  keywords: ["KCCF family", "brave warriors", "childhood cancer", "cancer families", "survivors", "warriors", "impact stories"],
  openGraph: {
    title: "KCCF Family - Meet Our Brave Warriors | Koenig Childhood Cancer Foundation",
    description: "Meet the incredible children and families whose lives have been touched by KCCF's support. See the real impact of our programs on families battling childhood cancer.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/kccf-family` : "https://thekccf.org/kccf-family",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KCCFFamily() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-platinum-50 via-white to-platinum-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <PageHeader
        title="KCCF Family"
        subtitle="Meet the incredible team and community that makes our mission possible."
      />

      {/* Elana Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block bg-orange-500 px-4 py-2 rounded-full mb-6">
                <span className="text-white font-semibold text-sm">Our Founder</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-violet-600 dark:text-white">
                Elana Koenig
              </h2>

              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                <p className="text-xl font-semibold text-[#732154] dark:text-saffron-400">
                  Cancer Survivor, Singer, Influencer
                </p>
                <p>
                  At just 11 years old, Elana founded KCCF with $900 from her piggy bank after surviving cancer herself. Today, she continues to lead our mission as a thriving 14-year-old cancer survivor.
                </p>
                <p>
                  Elana's personal experience with cancer drives her passion for helping other families facing similar challenges. She is a powerful advocate and speaker who shares her story to inspire hope and action.
                </p>
              </div>

              <div className="mt-10">
                <Link href="/our-story" className="bg-[#732154] hover:bg-[#732154]/90 dark:bg-[#732154] dark:hover:bg-[#732154]/90 text-white py-3 px-8 rounded-full transition duration-300 font-semibold text-center inline-block">
                  Read Elana's Story
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#732154] to-fandango-400 rounded-3xl transform rotate-6 scale-105 opacity-20"></div>
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
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-white">
              Board Members
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Dedicated professionals guiding KCCF's mission and strategic direction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Rena Koenig */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#732154] to-fandango-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src="/images/Untitled-drawing-1.jpg"
                    alt="Rena Koenig"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">Rena Koenig, EMBA</h3>
              <p className="text-gray-600 dark:text-gray-200 text-center leading-relaxed">
                An NYU Stern graduate with 20 years of corporate leadership at firms like KPMG. She spent the past decade co-running a family business before fully dedicating herself to her daughter Elana's mission—Koenig Childhood Cancer Foundation.
              </p>
            </div>

            {/* Scott Koenig */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 to-orange-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src="/images/Untitled-drawing-33.png"
                    alt="Scott Koenig"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">Scott Koenig, MBA</h3>
              <p className="text-gray-600 dark:text-gray-200 text-center leading-relaxed">
                A Weatherhead School of Management graduate, Scott began his career on Wall Street, later owned and ran a 75-year-old lighting company, sold it in 2018, and now focuses on business planning and growth strategy for startups.
              </p>
            </div>

            {/* Bradley Bailyn */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-fandango-400 to-[#732154] rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src="/images/cropped-Bradley-Bailyn-1.png"
                    alt="Bradley Bailyn"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">Bradley Bailyn, Esq</h3>
              <p className="text-gray-600 dark:text-gray-200 text-center leading-relaxed">
                A graduate of NYU Stern and Brooklyn Law School, Bradley is a leading corporate attorney, litigator, and founder of Bailyn Law. A proud lifelong Brooklyn resident, with his wife, two kids and a dog.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advisers Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="text-[#732154] dark:text-saffron-400">Advisers</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mike Blumenfeld */}
            <div className="group bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="relative w-40 h-40 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#732154] to-fandango-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src="/images/Mike-Blumenfeld-Director-copy.png"
                    alt="Mike Blumenfeld"
                    width={160}
                    height={160}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">Mike Blumenfeld, MBA</h3>
            </div>

            {/* Clarke Mayor */}
            <div className="group bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="relative w-40 h-40 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 to-orange-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src="/images/cropped-Clarke-Moyer-Bio-Picture-2MP.jpg"
                    alt="Clarke Mayor"
                    width={160}
                    height={160}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">Clarke Mayor, MBA-ITM</h3>
            </div>

            {/* Jim Kowalski */}
            <div className="group bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="relative w-40 h-40 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-fandango-400 to-[#732154] rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src="/images/cropped-JKowalski.png"
                    alt="Jim Kowalski"
                    width={160}
                    height={160}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white text-center">Jim Kowalski – IT</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Honorary Directors Section */}
      <section className="py-20 bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-violet-600 dark:text-white">
              Honorary Directors
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The medical professionals who saved Elana's life and continue to support our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dr. Wexler */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#732154] to-fandango-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src="/images/Dr.-Wexler-Honorary-Director-copy.png"
                    alt="Dr. Wexler"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">Dr. Wexler</h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center mb-3">Saved Elana's Life</p>
              <p className="text-gray-600 dark:text-gray-200 text-center">
                Pediatric Hematologist – Oncologist<br />
                Memorial Sloan Kettering Cancer Center
              </p>
            </div>

            {/* Dr. Morris */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 to-orange-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src="/images/Carol-Morris-2-copy-2_FINAL.png"
                    alt="Dr. Morris"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">Dr. Morris</h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center mb-3">Removed Elana's Tumor</p>
              <p className="text-gray-600 dark:text-gray-200 text-center">
                Orthopaedic Surgeon<br />
                Memorial Sloan Kettering Cancer Center
              </p>
            </div>

            {/* Dr. Prince */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-fandango-400 to-[#732154] rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src="/images/cropped-DrPrinceElana-scaled.jpg"
                    alt="Dr. Prince"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">Dr. Prince</h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center mb-3">Elana's Second Surgeon</p>
              <p className="text-gray-600 dark:text-gray-200 text-center">
                Orthopaedic Surgeon<br />
                Memorial Sloan Kettering Cancer Center
              </p>
            </div>

            {/* Dr. Charas */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#732154] to-fandango-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src="/images/Dr.-Tomas-copy.png"
                    alt="Dr. Charas"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">Dr. Charas</h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center mb-3">Volunteer Shani's dad</p>
              <p className="text-gray-600 dark:text-gray-200 text-center">
                Radiation Oncologist<br />
                Rambam Health Care Campus, Israel
              </p>
            </div>

            {/* Dr. Kearney */}
            <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative mb-6">
                <div className="relative w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-saffron-400 to-orange-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src="/images/kearney_170721_02_3x2-copy.png"
                    alt="Dr. Kearney"
                    width={192}
                    height={192}
                    className="rounded-full w-full h-full object-cover relative z-10"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">Dr. Kearney</h3>
              <p className="text-[#732154] dark:text-saffron-400 font-semibold text-center mb-3">Elana's Therapist</p>
              <p className="text-gray-600 dark:text-gray-200 text-center">
                Pediatric Psychiatrist<br />
                Memorial Sloan Kettering Cancer Center
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Financials Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="text-[#732154] dark:text-saffron-400">Financials</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transparency and accountability in everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* 990 Forms */}
            <div className="bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">990 Forms</h3>
              <div className="space-y-4">
                <a href="#" className="block text-[#732154] dark:text-saffron-400 hover:text-[#732154]/80 dark:hover:text-saffron-300 font-semibold transition-colors">2023</a>
                <a href="#" className="block text-[#732154] dark:text-saffron-400 hover:text-[#732154]/80 dark:hover:text-saffron-300 font-semibold transition-colors">2022</a>
                <a href="#" className="block text-[#732154] dark:text-saffron-400 hover:text-[#732154]/80 dark:hover:text-saffron-300 font-semibold transition-colors">2021</a>
              </div>
            </div>

            {/* Other Forms */}
            <div className="bg-gradient-to-br from-platinum-50 to-platinum-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Other Forms</h3>
              <div className="space-y-4">
                <a href="#" className="block text-[#732154] dark:text-saffron-400 hover:text-[#732154]/80 dark:hover:text-saffron-300 font-semibold transition-colors">IRS Determination</a>
                <a href="#" className="block text-[#732154] dark:text-saffron-400 hover:text-[#732154]/80 dark:hover:text-saffron-300 font-semibold transition-colors">W9</a>
              </div>
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
            Join Our Family
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            There are many ways to become part of the KCCF family and help children battling cancer.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/volunteer" className="group bg-orange-500 hover:bg-orange-600 text-white py-4 px-10 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center">
              <span>Volunteer</span>
              <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
            <Link href="/donate" className="group bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-4 px-10 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center border border-white/30">
              <span>Donate</span>
              <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>
            <Link href="/contact" className="group bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-4 px-10 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center border border-white/30">
              <span>Partner</span>
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
