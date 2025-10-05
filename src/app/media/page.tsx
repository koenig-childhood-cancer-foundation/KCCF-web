import React from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';

export default function Media() {
  return (
    <div className="min-h-screen bg-platinum-50 dark:bg-gray-900">
      {/* Hero Section */}
      <PageHeader 
        title="Media & Press"
        subtitle="Stay updated with the latest news, press releases, and media coverage of the Koenig Childhood Cancer Foundation"
      />

      {/* Video Gallery Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-violet-600 dark:text-saffron-400">Video Gallery</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 - Charles Esten & Kelly Clarkson */}
            <div className="bg-platinum-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/clbbmsPRyS8?rel=0&start=380"
                  title="Charles Esten Invites 15-Year-Old Cancer Survivor To Sing At Nashville Benefit Concert"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-xl font-bold mb-2 text-violet-600 dark:text-saffron-400">Sponsor Gift Bag Event</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Charles Esten invites 15-year-old cancer survivor Elana Koenig to sing at Nashville benefit concert
              </p>
              <a 
                href="https://www.youtube.com/watch?v=clbbmsPRyS8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-fandango-600 hover:text-fandango-700 dark:text-fandango-400 dark:hover:text-fandango-300 font-semibold"
              >
                Watch on YouTube →
              </a>
            </div>

            {/* Video 2 - Elana Sings National Anthem */}
            <div className="bg-platinum-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/dZmB8dH9X70"
                  title="Elana, Teen Cancer Survivor, Sings National Anthem at Mets Game!"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-xl font-bold mb-2 text-violet-600 dark:text-saffron-400">Request Elana for an Event</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Elana, teen cancer survivor, sings the National Anthem at Mets Game!
              </p>
              <a 
                href="https://www.youtube.com/watch?v=dZmB8dH9X70" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-fandango-600 hover:text-fandango-700 dark:text-fandango-400 dark:hover:text-fandango-300 font-semibold"
              >
                Watch on YouTube →
              </a>
        </div>

            {/* Video 3 - WNBC Mark Ukraine */}
            <div className="bg-platinum-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/Bgisln8H59w"
                  title="WNBC Mark Ukraine"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-xl font-bold mb-2 text-violet-600 dark:text-saffron-400">Help Save Lives</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                WNBC coverage featuring Mark and Ukraine families supported by KCCF
              </p>
              <a 
                href="https://www.youtube.com/watch?v=Bgisln8H59w" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-fandango-600 hover:text-fandango-700 dark:text-fandango-400 dark:hover:text-fandango-300 font-semibold"
              >
                Watch on YouTube →
              </a>
            </div>

            {/* Video 4 - Nasdaq Honors Elana */}
            <div className="bg-platinum-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/tiamL9EdPC0"
                  title="Nasdaq Honors Elana – Teen Cancer Survivor and Founder of KCCF!"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-xl font-bold mb-2 text-violet-600 dark:text-saffron-400">Help Provide Lodging</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Nasdaq honors Elana – Teen Cancer Survivor and Founder of KCCF!
              </p>
              <a 
                href="https://www.youtube.com/watch?v=tiamL9EdPC0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-fandango-600 hover:text-fandango-700 dark:text-fandango-400 dark:hover:text-fandango-300 font-semibold"
              >
                Watch on YouTube →
              </a>
            </div>

            {/* Video 5 - WNBC Gifts */}
            <div className="bg-platinum-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/IYs6eX-1Rgg"
                  title="WNBC Gifts"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-xl font-bold mb-2 text-violet-600 dark:text-saffron-400">Elana & Sabrina on NBC 4 New York</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Cancer survivor delivers smiles to hospitalized kids - July 8, 2022
              </p>
              <a 
                href="https://www.nbcnewyork.com/news/cancer-survivor-delivers-smiles-to-hospitalized-kids/3767312/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-fandango-600 hover:text-fandango-700 dark:text-fandango-400 dark:hover:text-fandango-300 font-semibold"
              >
                Read Full Article →
              </a>
            </div>

            {/* Video 6 - ABC7 Father's Day */}
            <div className="bg-platinum-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://abc7ny.com/video/embed/?pid=10814909"
                  title="ABC7 New York Father's Day Coverage"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-xl font-bold mb-2 text-violet-600 dark:text-saffron-400">Elana on ABC7 New York</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Be Kind: Father's Day cancer survivor coverage - June 20, 2021
              </p>
              <a 
                href="https://abc7ny.com/be-kind-fathers-day-cancer-survivor/10814428/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-fandango-600 hover:text-fandango-700 dark:text-fandango-400 dark:hover:text-fandango-300 font-semibold"
              >
                Read Full Article →
              </a>
            </div>

            {/* Video 7 - ABC7 Valentine's Day */}
            <div className="bg-platinum-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://abc7ny.com/video/embed/?pid=10340426"
                  title="ABC7 New York Valentine's Day Coverage"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-xl font-bold mb-2 text-violet-600 dark:text-saffron-400">Elana and Sabrina on ABC7 New York</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                Be Kind: Valentine's Day cancer care packages - February 15, 2021
              </p>
              <a 
                href="https://abc7ny.com/be-kind-valentines-day-cancer-care-packages/10340454/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-fandango-600 hover:text-fandango-700 dark:text-fandango-400 dark:hover:text-fandango-300 font-semibold"
              >
                Read Full Article →
              </a>
            </div>

            {/* Video 8 - NBC Valentine's Gifts */}
            <div className="bg-platinum-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/pKssob6SdV4"
                  title="NBC Valentine's Gifts"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-xl font-bold mb-2 text-violet-600 dark:text-saffron-400">Elana and Sabrina on NBC 4 New York</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                12-year-old survivor delivers heartfelt packages to kids with cancer - February 15, 2021
              </p>
              <a 
                href="https://www.nbcnewyork.com/news/local/12-year-old-survivor-delivers-heartfelt-packages-to-kids-with-cancer/2889964/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-fandango-600 hover:text-fandango-700 dark:text-fandango-400 dark:hover:text-fandango-300 font-semibold"
              >
                Read Full Article →
              </a>
            </div>

            {/* Video 9 - World Net Summit */}
            <div className="bg-platinum-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="aspect-video mb-4">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/nq52J4znyWI"
                  title="World Net Summit 2020 - Elana Koenig, Founder of Koenig Child Cancer Foundation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <h3 className="text-xl font-bold mb-2 text-violet-600 dark:text-saffron-400">Elana on World Net Summit</h3>
              <p className="text-gray-700 dark:text-gray-200 mb-3">
                World Net Summit 2020 - Elana Koenig, Founder of Koenig Child Cancer Foundation - December 17, 2020
              </p>
              <a 
                href="https://worldnetsummit.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-fandango-600 hover:text-fandango-700 dark:text-fandango-400 dark:hover:text-fandango-300 font-semibold"
              >
                Visit World Net Summit →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Press Coverage Section */}
      <section className="py-16 bg-platinum-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-violet-600 dark:text-saffron-400">Recent Press Coverage</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Press Article 1 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="text-saffron-600 dark:text-saffron-400 text-sm font-semibold mb-2">ABC News</div>
              <h3 className="text-xl font-bold mb-3 text-violet-600 dark:text-saffron-400">
                11-Year-Old Cancer Survivor Creates Foundation to Help Other Children
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                Elana Koenig's inspiring journey from cancer patient to foundation founder is making waves across the nation...
              </p>
              <a href="#" className="text-fandango-600 hover:text-fandango-700 dark:text-fandango-400 dark:hover:text-fandango-300 font-semibold">
                Read Full Article →
              </a>
            </div>

            {/* Press Article 2 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="text-saffron-600 dark:text-saffron-400 text-sm font-semibold mb-2">NBC Today Show</div>
              <h3 className="text-xl font-bold mb-3 text-violet-600 dark:text-saffron-400">
                Crazy Socks Day: How One Girl's Idea is Changing Lives
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                The annual Crazy Socks Day event has raised over $2 million for families battling childhood cancer...
              </p>
              <a href="#" className="text-fandango-600 hover:text-fandango-700 dark:text-fandango-400 dark:hover:text-fandango-300 font-semibold">
                Read Full Article →
                      </a>
                    </div>
                    
            {/* Press Article 3 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="text-saffron-600 dark:text-saffron-400 text-sm font-semibold mb-2">Forbes</div>
              <h3 className="text-xl font-bold mb-3 text-violet-600 dark:text-saffron-400">
                Young Philanthropist of the Year: Elana Koenig
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                At just 14 years old, Elana Koenig has already made an indelible mark on the world of philanthropy...
              </p>
              <a href="#" className="text-fandango-600 hover:text-fandango-700 dark:text-fandango-400 dark:hover:text-fandango-300 font-semibold">
                Read Full Article →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-violet-600 via-fandango-600 to-violet-800 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Join Our <span className="text-saffron-300">Mission</span>
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Help us continue making headlines for all the right reasons - supporting families battling childhood cancer.
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
