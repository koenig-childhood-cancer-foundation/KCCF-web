"use client"

import React from 'react';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import { useArticleModal } from '@/contexts/ArticleModalContext';

export default function Media() {
  const { openModal } = useArticleModal();

  return (
    <div className="min-h-screen bg-platinum-50 dark:bg-gray-900">
      {/* Hero Section with Background */}
      <div className="relative min-h-[66vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 top-24">
          <Image
            src="/images/header_image_media.jpg"
            alt="Media & Press"
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
          title="Media & Press"
          subtitle="Stay updated with the latest news, press releases, and media coverage."
        />
      </div>

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
                className="text-violet-600 hover:text-violet-700 dark:text-saffron-600 dark:hover:text-white font-semibold"
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
                className="text-violet-600 hover:text-violet-700 dark:text-saffron-600 dark:hover:text-white font-semibold"
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
                className="text-violet-600 hover:text-violet-700 dark:text-saffron-600 dark:hover:text-white font-semibold"
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
                className="text-violet-600 hover:text-violet-700 dark:text-saffron-600 dark:hover:text-white font-semibold"
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
                className="text-violet-600 hover:text-violet-700 dark:text-saffron-600 dark:hover:text-white font-semibold"
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
                className="text-violet-600 hover:text-violet-700 dark:text-saffron-600 dark:hover:text-white font-semibold"
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
                className="text-violet-600 hover:text-violet-700 dark:text-saffron-600 dark:hover:text-white font-semibold"
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
                className="text-violet-600 hover:text-violet-700 dark:text-saffron-600 dark:hover:text-white font-semibold"
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
                className="text-violet-600 hover:text-violet-700 dark:text-saffron-600 dark:hover:text-white font-semibold"
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
            {/* Press Article 1 - People Magazine */}
            <div 
              onClick={() => openModal('people-magazine')}
              className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              <div className="text-saffron-600 dark:text-saffron-400 text-sm font-semibold mb-2">People Magazine</div>
              <h3 className="text-xl font-bold mb-3 text-violet-600 dark:text-saffron-400">
                Teen Cancer Survivor Turns Her Pain Into Purpose
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                Elana Koenig founded the Koenig Childhood Cancer Foundation to help families facing childhood cancer...
              </p>
              <button className="text-violet-600 hover:text-violet-700 dark:text-saffron-600 dark:hover:text-white font-semibold inline-flex items-center">
                Read Full Article →
              </button>
            </div>

            {/* Press Article 2 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="text-saffron-600 dark:text-saffron-400 text-sm font-semibold mb-2">ABC News</div>
              <h3 className="text-xl font-bold mb-3 text-violet-600 dark:text-saffron-400">
                11-Year-Old Cancer Survivor Creates Foundation to Help Other Children
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                Elana Koenig's inspiring journey from cancer patient to foundation founder is making waves across the nation...
              </p>
              <a href="#" className="text-violet-600 hover:text-violet-700 dark:text-saffron-600 dark:hover:text-white font-semibold">
                Read Full Article →
              </a>
            </div>

            {/* Press Article 3 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="text-saffron-600 dark:text-saffron-400 text-sm font-semibold mb-2">NBC Today Show</div>
              <h3 className="text-xl font-bold mb-3 text-violet-600 dark:text-saffron-400">
                Crazy Socks Day: How One Girl's Idea is Changing Lives
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                The annual Crazy Socks Day event has raised over $2 million for families battling childhood cancer...
              </p>
              <a href="#" className="text-violet-600 hover:text-violet-700 dark:text-saffron-600 dark:hover:text-white font-semibold">
                Read Full Article →
              </a>
            </div>

            {/* Press Article 4 */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="text-saffron-600 dark:text-saffron-400 text-sm font-semibold mb-2">Forbes</div>
              <h3 className="text-xl font-bold mb-3 text-violet-600 dark:text-saffron-400">
                Young Philanthropist of the Year: Elana Koenig
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                At just 14 years old, Elana Koenig has already made an indelible mark on the world of philanthropy...
              </p>
              <a href="#" className="text-violet-600 hover:text-violet-700 dark:text-saffron-600 dark:hover:text-white font-semibold">
                Read Full Article →
              </a>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
