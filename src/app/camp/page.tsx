'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IMPACT_STATS } from '@/constants/impactStats';

// Facts from KCCF Current Facts – MASTER: KCCF International Camp (in Azerbaijan),
// an international summer camp for emotional recovery; 120 children hosted.
// Registration is not open yet, so families send an interest email instead of a form.

const CAMP_EMAIL = 'join@thekccf.org';
const interestLink = `mailto:${CAMP_EMAIL}?subject=${encodeURIComponent('KCCF Camp: please tell me when registration opens')}&body=${encodeURIComponent("Hello KCCF,\n\nPlease let me know when registration for the KCCF International Camp opens.\n\nMy name:\nMy child's age:\nCountry:\n\nThank you!")}`;
const volunteerLink = `mailto:${CAMP_EMAIL}?subject=${encodeURIComponent('KCCF Camp: I would like to volunteer')}&body=${encodeURIComponent('Hello KCCF,\n\nI would like to help at the KCCF International Camp.\n\nMy name:\nMy experience (camp, medical, child care, other):\n\nThank you!')}`;

const stats = [
  { value: IMPACT_STATS.HOME[3].value, label: 'children hosted' },
  { value: 'Azerbaijan', label: 'international summer camp' },
];

const gives = [
  { title: 'Emotional Recovery', text: 'Time away from hospitals to heal the emotional wounds of cancer.' },
  { title: 'Friends Who Understand', text: 'Children and their siblings from around the world meet others who know the journey.' },
  { title: 'Joy and Play', text: 'Arts and crafts, outdoor adventures, games and special events.' },
];

const photos = [
  { src: '/images/camp-group-mountains.jpg', alt: 'Campers and staff in yellow KCCF shirts with the KCCF banner and flags' },
  { src: '/images/camp-impact-program.jpg', alt: 'Campers together at the KCCF International Camp' },
  { src: '/images/camp-campers-meadow.jpg', alt: 'Campers in yellow KCCF shirts celebrating in a meadow' },
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

export default function Camp() {
  const outline =
    'py-4 px-10 rounded-full font-semibold text-lg inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-violet-700 transition-colors';

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      {/* Hero: same style as Get Involved (full photo, soft shade behind the words) */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-end overflow-hidden pt-24">
        <div className="absolute inset-0 top-24">
          <Image
            src="/images/header_image_camp.png"
            alt="Campers holding the KCCF banner with the flags of Azerbaijan and the United States"
            fill
            className="object-cover object-[center_30%]"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/70 via-black/35 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 md:hidden pointer-events-none" />
        </div>
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 lg:pl-24 pb-14 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">KCCF International Camp</h1>
          <p className="mt-5 text-xl md:text-2xl font-semibold text-white max-w-2xl mx-auto lg:mx-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
            A healing place for children battling cancer and their siblings from all over the world.
          </p>
        </div>
      </section>

      {/* Numbers in gold ovals */}
      <section className="py-12 bg-white dark:bg-gray-800 border-b border-[#F1E7D6] dark:border-gray-700">
        <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 max-w-5xl mx-auto px-4 list-none">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="w-full max-w-72 sm:w-auto sm:max-w-none rounded-full border-2 border-[#DAB87E] bg-[#FFFDF9] dark:bg-gray-700 px-10 py-4 sm:py-5 text-center"
            >
              <div className="text-3xl md:text-[2.75rem] font-extrabold leading-none text-violet-600 dark:text-saffron-400">{stat.value}</div>
              <div className="mt-1.5 text-sm md:text-base font-bold text-[#8A6A2E] dark:text-[#DAB87E]">{stat.label}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* About camp + photos */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <SectionTitle title="A Place to Heal" />
          <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
            Cancer is a lifelong journey. The KCCF International Camp in Azerbaijan brings together children diagnosed
            with cancer and their siblings from around the world, helps heal their emotional wounds, and inspires them to
            feel joyful and included as part of society.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {photos.map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] rounded-[22px] overflow-hidden shadow-md">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 90vw, 380px" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What camp gives */}
      <section className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <SectionTitle title="What Camp Gives" />
          <div className="grid md:grid-cols-3 gap-7 max-w-6xl mx-auto">
            {gives.map((item) => (
              <div
                key={item.title}
                className="bg-white dark:bg-gray-700 rounded-[22px] border-t-4 border-violet-600 dark:border-saffron-400 shadow-md px-6 py-8 text-center"
              >
                <h3 className="text-xl font-bold text-[#2B2330] dark:text-white">{item.title}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-200">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join us: families and volunteers (cream card, like Get Involved) */}
      <section id="join" className="py-20 bg-white dark:bg-gray-900 scroll-mt-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="Join Us at Camp" />
          <div className="grid md:grid-cols-2 gap-7 max-w-5xl mx-auto">
            <div className="rounded-[40px] border-2 border-[#DAB87E] bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-800 px-6 py-10 md:px-10 text-center shadow-md flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-violet-600 dark:text-white">For Families</h3>
              <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mt-4 mb-5" aria-hidden="true" />
              <p className="text-lg text-gray-700 dark:text-gray-200 flex-1">
                Registration is not open yet. Send us an email and we will let you know when it opens.
              </p>
              <a href={interestLink} className="mt-8 btn-primary btn-primary-orange text-white py-4 px-8 rounded-full font-semibold text-lg inline-flex items-center justify-center self-center">
                Email Me When Registration Opens
              </a>
            </div>
            <div className="rounded-[40px] border-2 border-[#DAB87E] bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-800 px-6 py-10 md:px-10 text-center shadow-md flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-violet-600 dark:text-white">For Volunteers</h3>
              <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mt-4 mb-5" aria-hidden="true" />
              <p className="text-lg text-gray-700 dark:text-gray-200 flex-1">
                Bring your camp, medical or child-care experience. Email us and we will reach out when we plan the next camp.
              </p>
              <a href={volunteerLink} className="mt-8 py-4 px-8 rounded-full font-semibold text-lg inline-flex items-center justify-center self-center border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white dark:border-white dark:text-white transition-colors">
                Email Us About Volunteering
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Plum ending: the action */}
      <section className="py-20 bg-violet-600 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Help a Child Heal at Camp</h2>
          <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-8" aria-hidden="true" />
          <p className="text-xl text-white/90 mb-10">Your gift helps children with cancer and their siblings come to camp.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/donate" className="btn-primary btn-primary-orange text-white py-4 px-10 rounded-full font-semibold text-lg inline-flex items-center justify-center">
              Donate Now
            </Link>
            <a href={interestLink} className={outline}>
              Get Camp Updates
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
