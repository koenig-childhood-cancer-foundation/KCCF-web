'use client';

import Image from 'next/image';
import Link from 'next/link';
import CallToAction from '@/components/CallToAction';
import { useFormModal } from '@/contexts/FormModalContext';
import { IMPACT_STATS } from '@/constants/impactStats';

// Volunteer and Fundraisers combined into one page.
// Numbers follow KCCF Current Facts – MASTER.

const stats = [
  { value: IMPACT_STATS.HOME[1].value, label: 'volunteers' },
  { value: IMPACT_STATS.CRAZY_SOCKS[3].value, label: 'volunteer hours' },
  { value: IMPACT_STATS.HOME[2].value, label: 'gift bags delivered' },
];

const requirements = [
  'Volunteers must be 18 years or older',
  'Parental consent is required for minor volunteers',
  'A minimum one-year commitment is requested for most roles',
  'A background check may be required',
];

const benefits = [
  'Make a direct impact on families facing pediatric cancer',
  'Join a supportive community of mission-driven volunteers',
  'Gain valuable skills and experience',
  'Receive recognition for dedication and service',
];

const fundraiserSteps = [
  { title: 'Start Your Peer-to-Peer Fundraiser', text: 'Create your own fundraising page in a few minutes. It is free.' },
  { title: 'Share It', text: 'Send it to family, friends, your team, school or company.' },
  { title: 'Help a Child', text: 'Every gift goes to children battling cancer and their families.' },
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

function GoldList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 text-[#2B2330] dark:text-gray-200">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-2 w-2 h-2 shrink-0 rounded-full bg-[#DAB87E]" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function GetInvolved() {
  const { openModal } = useFormModal();

  const ways = [
    {
      title: 'Volunteer',
      text: 'Give your time and skills, on your own or with a group.',
      photo: '/images/MetaLeadershipMakingfitBags-scaled.jpg',
      alt: 'Volunteers packing gift bags',
      action: { label: 'Apply Here', onClick: () => openModal('volunteer') },
    },
    {
      title: 'Start a Fundraiser',
      text: 'Raise funds with your team, school or friends.',
      photo: '/images/header_image_fundraisers.jpg',
      alt: 'KCCF supporters at a fundraiser',
      action: { label: 'Start Here', href: '#fundraisers' },
    },
    {
      title: 'Sponsor a Gift Bag Event',
      text: 'Bring Crazy Socks to your company or community group.',
      photo: '/images/MetaCSGiftBagEvent-scaled.jpg',
      alt: 'A corporate team at a Crazy Socks gift bag event',
      action: { label: 'Learn More', href: '/crazy-socks' },
    },
    {
      title: 'Help at Camp',
      text: 'Serve as a counselor, teacher or helper at the KCCF International Camp.',
      photo: '/images/camp-impact-program.jpg',
      alt: 'Children at the KCCF International Camp',
      action: { label: 'Learn More', href: '/camp' },
    },
  ];

  const linkClass =
    'mt-auto inline-flex items-center gap-1 font-semibold text-violet-600 dark:text-saffron-400 hover:text-violet-800 dark:hover:text-saffron-300';

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      {/* Hero: home-page style (full photo, warm tint, soft shade behind the words) */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-end overflow-hidden pt-24">
        <div className="absolute inset-0 top-24">
          <Image
            src="/images/header_image_volunteer.png"
            alt="KCCF volunteers"
            fill
            className="object-cover object-[45%_center] xl:object-[center_10%]"
            sizes="100vw"
            priority
          />
          {/* Soft blur on the left half only (behind the words); the right side stays sharp */}
          <div
            className="hidden md:block absolute inset-0 backdrop-blur-[6px] pointer-events-none"
            style={{
              maskImage: 'linear-gradient(to right, black 0%, black 30%, transparent 55%)',
              WebkitMaskImage: 'linear-gradient(to right, black 0%, black 30%, transparent 55%)',
            }}
          />
          <div className="absolute inset-0 bg-amber-400/12 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 md:bg-gradient-to-r md:from-black/60 md:via-black/30 md:to-transparent pointer-events-none" />
        </div>
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 lg:pl-24 pb-14 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">Get Involved</h1>
          <p className="mt-5 text-xl md:text-2xl font-semibold text-white max-w-xl mx-auto lg:mx-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
            Join us to change a life. Maybe even your own.
          </p>
        </div>
      </section>

      {/* Impact numbers, each in its own gold oval */}
      <section className="py-12 bg-white dark:bg-gray-800 border-b border-[#F1E7D6] dark:border-gray-700">
        <ul className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 max-w-5xl mx-auto px-4 list-none">
          {stats.map((stat) => (
            <li
              key={stat.label}
              className="w-full max-w-72 sm:w-auto sm:max-w-none rounded-full border-2 border-[#DAB87E] bg-[#FFFDF9] dark:bg-gray-700 px-10 py-4 sm:py-5 text-center"
            >
              <div className="text-3xl md:text-[2.75rem] font-extrabold leading-none text-violet-600 dark:text-saffron-400">
                {stat.value}
              </div>
              <div className="mt-1.5 text-sm md:text-base font-bold text-[#8A6A2E] dark:text-[#DAB87E]">{stat.label}</div>
            </li>
          ))}
        </ul>
      </section>

      {/* Four ways to help */}
      <section className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <SectionTitle title="Ways to Get Involved" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 max-w-7xl mx-auto">
            {ways.map((way) => (
              <div
                key={way.title}
                className="bg-white dark:bg-gray-700 rounded-[22px] overflow-hidden border-t-4 border-violet-600 dark:border-saffron-400 shadow-md p-4 flex flex-col"
              >
                <div className="relative aspect-[4/3] rounded-[14px] overflow-hidden">
                  <Image src={way.photo} alt={way.alt} fill sizes="(max-width: 640px) 90vw, 300px" className="object-cover" />
                </div>
                <div className="px-2 pt-5 pb-2 flex flex-col flex-1 text-center items-center">
                  <h3 className="text-xl font-bold text-[#2B2330] dark:text-white">{way.title}</h3>
                  <p className="mt-2 mb-5 text-gray-700 dark:text-gray-200">{way.text}</p>
                  {'onClick' in way.action ? (
                    <button type="button" onClick={way.action.onClick} className={linkClass}>
                      {way.action.label} &rarr;
                    </button>
                  ) : (
                    <Link href={way.action.href} className={linkClass}>
                      {way.action.label} &rarr;
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="py-20 bg-white dark:bg-gray-900 scroll-mt-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="Volunteer With Us" />
          <p className="max-w-3xl mx-auto text-center text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-12">
            We welcome individuals, community groups, and corporate teams. Whether you can give a few hours each month or
            take on a larger role, your time directly helps children battling cancer and their families.
          </p>
          <div className="grid md:grid-cols-2 gap-7 max-w-5xl mx-auto">
            <div className="bg-[#FAF6F2] dark:bg-gray-700 rounded-[22px] overflow-hidden border-t-4 border-violet-600 dark:border-saffron-400 shadow-md px-8 py-8">
              <h3 className="text-xl font-bold mb-4 text-center text-[#2B2330] dark:text-white">What We Ask</h3>
              <GoldList items={requirements} />
            </div>
            <div className="bg-[#FAF6F2] dark:bg-gray-700 rounded-[22px] overflow-hidden border-t-4 border-violet-600 dark:border-saffron-400 shadow-md px-8 py-8">
              <h3 className="text-xl font-bold mb-4 text-center text-[#2B2330] dark:text-white">What You Gain</h3>
              <GoldList items={benefits} />
            </div>
          </div>
        </div>
      </section>

      {/* Fundraisers */}
      <section id="fundraisers" className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700 scroll-mt-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="Start a Fundraiser" subtitle="Turn a birthday, a game, a run or a school event into help for a child with cancer." />
          <ol className="grid md:grid-cols-3 gap-7 max-w-5xl mx-auto list-none">
            {fundraiserSteps.map((step, index) => (
              <li
                key={step.title}
                className="bg-white dark:bg-gray-700 rounded-[22px] overflow-hidden border-t-4 border-violet-600 dark:border-saffron-400 shadow-md px-6 py-8 text-center"
              >
                <span className="mx-auto mb-4 flex w-12 h-12 items-center justify-center rounded-full bg-violet-600 text-xl font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold text-[#2B2330] dark:text-white">{step.title}</h3>
                <p className="mt-2 text-gray-700 dark:text-gray-200">{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-14 max-w-5xl mx-auto bg-white rounded-[22px] overflow-hidden border-t-4 border-violet-600 shadow-md">
            {/* Zeffy forms are loaded as strictly necessary services */}
            <iframe
              src="https://www.zeffy.com/en-US/peer-to-peer/peer-to-peer-fundraisers"
              title="KCCF Peer-to-Peer Fundraisers"
              className="w-full border-0"
              style={{ minHeight: '800px' }}
              loading="lazy"
              allow="payment"
            />
          </div>

          <div className="mt-14 max-w-5xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-violet-600 dark:text-white mb-6">Top Fundraisers</h3>
            <div className="bg-white rounded-[22px] overflow-hidden border-t-4 border-violet-600 shadow-md">
              <iframe
                title="KCCF fundraising leaderboard powered by Zeffy"
                className="w-full border-0"
                style={{ minHeight: '400px' }}
                loading="lazy"
                src="https://www.zeffy.com/en-US/embed/leaderboard/peer-to-peer-fundraisers"
              />
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
}
