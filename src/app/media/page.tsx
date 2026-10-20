"use client"

import Image from 'next/image';
import VideoEmbed from '@/components/VideoEmbed';
import { useFormModal } from '@/contexts/FormModalContext';

// "As seen on" items follow Credentials and media in KCCF Current Facts – MASTER.
const seenOn = [
  'The Kelly Clarkson Show',
  'People Magazine',
  'Nasdaq',
  'NBC 4 New York',
  'ABC7 New York',
  'CBS News',
];

const videos = [
  {
    title: 'Elana, 15, on The Kelly Clarkson Show',
    text: 'Charles Esten invites Elana to sing with him at a Nashville benefit concert.',
    embed: 'https://www.youtube.com/embed/clbbmsPRyS8?rel=0&start=380',
    link: { label: 'Watch on YouTube', href: 'https://www.youtube.com/watch?v=clbbmsPRyS8' },
  },
  {
    title: 'Singing for 50,000 at a Mets Game',
    text: 'Elana sings the national anthem at Citi Field and brings KCCF\'s mission to the whole stadium.',
    embed: 'https://www.youtube.com/embed/dZmB8dH9X70',
    link: { label: 'Watch on YouTube', href: 'https://www.youtube.com/watch?v=dZmB8dH9X70' },
  },
  {
    title: 'Nasdaq Honors Elana and KCCF',
    text: 'A teen cancer survivor and founder at the closing bell in Times Square.',
    embed: 'https://www.youtube.com/embed/tiamL9EdPC0',
    link: { label: 'Watch on YouTube', href: 'https://www.youtube.com/watch?v=tiamL9EdPC0' },
  },
  {
    title: 'Elana Helping a Toddler Flee Ukraine',
    text: 'A teen in New York helps a 3-year-old boy and his family escape the war, as told on NBC 4 New York.',
    embed: 'https://www.youtube.com/embed/Bgisln8H59w',
    link: { label: 'Watch on YouTube', href: 'https://www.youtube.com/watch?v=Bgisln8H59w' },
  },
  {
    title: 'Delivering Smiles to Kids in the Hospital',
    text: 'At 13, Elana is already helping hundreds of children fighting cancer. NBC 4 New York, July 8, 2022.',
    embed: 'https://www.youtube.com/embed/IYs6eX-1Rgg',
    link: { label: 'Read the article', href: 'https://www.nbcnewyork.com/news/cancer-survivor-delivers-smiles-to-hospitalized-kids/3767312/' },
  },
  {
    title: 'A Father\'s Day Thank-You from a Young Cancer Survivor',
    text: 'Elana honors the dad who danced with her through treatment and helped deliver gift bags to children in the hospital. ABC7 New York, June 20, 2021.',
    embed: 'https://abc7ny.com/video/embed/?pid=10814909',
    source: 'ABC7 New York',
    link: { label: 'Read the article', href: 'https://abc7ny.com/be-kind-fathers-day-cancer-survivor/10814428/' },
  },
  {
    title: 'Cancer Survivor Spreads Love on Valentine\'s Day',
    text: 'Elana, 12, brings Crazy Socks gift bags to children in the hospital. ABC7 New York, February 15, 2021.',
    embed: 'https://abc7ny.com/video/embed/?pid=10340426',
    source: 'ABC7 New York',
    link: { label: 'Read the article', href: 'https://abc7ny.com/be-kind-valentines-day-cancer-care-packages/10340454/' },
  },
  {
    title: 'Making Valentine\'s Day a Little Sweeter',
    text: 'NBC 4 New York meets the 12-year-old from the Upper East Side who brings joy to kids battling cancer. February 15, 2021.',
    embed: 'https://www.youtube.com/embed/pKssob6SdV4',
    link: { label: 'Read the article', href: 'https://www.nbcnewyork.com/news/local/12-year-old-survivor-delivers-heartfelt-packages-to-kids-with-cancer/2889964/' },
  },
  {
    title: 'Elana Speaks at World Net Summit',
    text: 'At 11, the year she founded KCCF, Elana shares her mission with a global audience. December 17, 2020.',
    embed: 'https://www.youtube.com/embed/nq52J4znyWI',
    // worldnetsummit.com now belongs to an unrelated site, so link to the video itself
    link: { label: 'Watch on YouTube', href: 'https://www.youtube.com/watch?v=nq52J4znyWI' },
  },
];

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-violet-600 dark:text-white">{title}</h2>
      <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto" aria-hidden="true" />
      {subtitle && <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
}

const cardClass =
  'bg-white dark:bg-gray-700 rounded-[22px] overflow-hidden border-t-4 border-violet-600 dark:border-saffron-400 shadow-md';
const linkClass =
  'inline-flex items-center gap-1 font-semibold text-violet-600 dark:text-saffron-400 hover:text-violet-800 dark:hover:text-saffron-300';

export default function Media() {
  const { openModal } = useFormModal();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      {/* Hero: same style as Get Involved */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-end overflow-hidden pt-24">
        <div className="absolute inset-0 top-24">
          <Image
            src="/images/header_image_media.jpg"
            alt="Elana Koenig during a TV interview"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/70 via-black/35 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 md:hidden pointer-events-none" />
        </div>
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 lg:pl-24 pb-14 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">Media &amp; Press</h1>
          <p className="mt-5 text-xl md:text-2xl font-semibold text-white max-w-xl mx-auto lg:mx-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
            Elana and KCCF in the news.
          </p>
        </div>
      </section>

      {/* As seen on, in gold ovals */}
      <section className="py-12 bg-white dark:bg-gray-800 border-b border-[#F1E7D6] dark:border-gray-700">
        <p className="text-center text-sm font-bold tracking-[0.2em] uppercase text-[#8A6A2E] dark:text-[#DAB87E] mb-6">As Seen On</p>
        <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl mx-auto px-4 list-none">
          {seenOn.map((name) => (
            <li
              key={name}
              className="rounded-full border-2 border-[#DAB87E] bg-[#FFFDF9] dark:bg-gray-700 px-6 py-3 text-base md:text-lg font-bold text-violet-600 dark:text-saffron-400"
            >
              {name}
            </li>
          ))}
        </ul>
      </section>

      {/* Videos */}
      <section className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <SectionTitle title="Video Gallery" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
            {videos.map((video) => (
              <div key={video.embed} className={`${cardClass} p-4 flex flex-col`}>
                <div className="aspect-video rounded-[14px] overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <VideoEmbed
                    src={video.embed}
                    title={video.title}
                    source={video.source}
                  />
                </div>
                <div className="px-2 pt-5 pb-2 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-[#2B2330] dark:text-white">{video.title}</h3>
                  <p className="mt-2 mb-4 text-gray-700 dark:text-gray-200 flex-1">{video.text}</p>
                  <a href={video.link.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {video.link.label} &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press articles */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle title="Press Coverage" />
          <div className="grid md:grid-cols-3 gap-7 max-w-6xl mx-auto">
            <a
              href="https://people.com/teen-beat-cancer-saves-boy-struggling-with-disease-ukraine-my-extraordinary-family-7559454"
              target="_blank"
              rel="noopener noreferrer"
              className={`${cardClass} p-6 flex flex-col`}
            >
              <span className="text-sm font-bold uppercase tracking-wide text-[#8A6A2E] dark:text-[#DAB87E]">People Magazine</span>
              <span className="mt-2 text-xl font-bold text-[#2B2330] dark:text-white">Teen Who Beat Cancer Saves Boy, 3, Struggling with Disease in Ukraine</span>
              <span className="mt-2 mb-4 text-gray-700 dark:text-gray-200 flex-1">His family reached treatment in New York with Elana&rsquo;s help.</span>
              <span className={linkClass}>Read the article &rarr;</span>
            </a>
            <a
              href="https://www.cbsnews.com/newyork/news/14-year-old-cancer-survivor-giving-gift-bags-to-children-spending-the-holidays-in-the-hospital/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${cardClass} p-6 flex flex-col`}
            >
              <span className="text-sm font-bold uppercase tracking-wide text-[#8A6A2E] dark:text-[#DAB87E]">CBS News</span>
              <span className="mt-2 text-xl font-bold text-[#2B2330] dark:text-white">14-Year-Old Cancer Survivor Giving Gift Bags to Children in the Hospital</span>
              <span className="mt-2 mb-4 text-gray-700 dark:text-gray-200 flex-1">Her Crazy Socks bags bring some holiday joy to kids who can&rsquo;t go home.</span>
              <span className={linkClass}>Read the article &rarr;</span>
            </a>
            <a
              href="https://www.stern.nyu.edu/portal-partners/alumni/alumni-news-profiles/news/rena-koenig-mba-17-shares-how-she-used-tools-business-start-foundation-with-her-13-year-old-cancer"
              target="_blank"
              rel="noopener noreferrer"
              className={`${cardClass} p-6 flex flex-col`}
            >
              <span className="text-sm font-bold uppercase tracking-wide text-[#8A6A2E] dark:text-[#DAB87E]">NYU Stern</span>
              <span className="mt-2 text-xl font-bold text-[#2B2330] dark:text-white">Rena Koenig MBA &rsquo;17 on Starting KCCF With Her Daughter</span>
              <span className="mt-2 mb-4 text-gray-700 dark:text-gray-200 flex-1">Business-school lessons, put to work for a cause.</span>
              <span className={linkClass}>Read the article &rarr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* Plum ending: the action */}
      <section className="py-20 bg-violet-600 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Press &amp; Media Inquiries</h2>
          <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-8" aria-hidden="true" />
          <p className="text-xl text-white/90 mb-10">For interviews, stories and appearances, we would love to hear from you.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              type="button"
              onClick={() => openModal('contact')}
              className="btn-primary btn-primary-orange text-white py-4 px-10 rounded-full font-semibold text-lg inline-flex items-center justify-center cursor-pointer"
            >
              Send Us a Message
            </button>
            <button
              type="button"
              onClick={() => openModal('book-elana')}
              className="py-4 px-10 rounded-full font-semibold text-lg inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-violet-700 transition-colors cursor-pointer"
            >
              Book Elana to Speak
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
