'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useFormModal } from '@/contexts/FormModalContext';
import { IMPACT_STATS } from '@/constants/impactStats';

// Volunteer and Fundraisers combined into one page.
// Numbers follow KCCF Current Facts – MASTER.

const stats = [
  { value: IMPACT_STATS.HOME[1].value, label: 'volunteers' },
  { value: IMPACT_STATS.CRAZY_SOCKS[3].value, label: 'volunteer hours' },
  { value: IMPACT_STATS.HOME[2].value, label: 'gift bags delivered' },
];

const fundraiserSteps = [
  { title: 'Start Your Page', text: 'Create your own fundraising page in a few minutes. It is free.' },
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

export default function GetInvolved() {
  const { openModal } = useFormModal();

  const ways = [
    {
      title: 'Start a Fundraiser',
      text: 'Raise funds with your team, school or friends.',
      photo: '/images/header_image_fundraisers.jpg',
      alt: 'Young KCCF fundraisers in yellow shirts',
      action: { label: 'Start Here', href: '#fundraisers' },
    },
    {
      title: 'Be a Crazy Socks Champion',
      text: 'Bring a Crazy Socks gift bag event to your company, school or community group.',
      photo: '/images/yellow-shirt.jpg',
      alt: 'Teen volunteers in yellow KCCF shirts',
      action: { label: 'Learn More', href: '/crazy-socks' },
    },
    {
      title: 'Help Build Our Camp',
      text: 'Bring your camp, medical or child-care experience to help plan and run the KCCF International Camp in Azerbaijan.',
      photo: '/images/header_image_camp.png',
      alt: 'Campers and staff at the KCCF International Camp',
      action: { label: 'Learn More', href: '/camp' },
    },
    {
      title: 'Volunteer',
      text: 'Give your time and skills, on your own or with a group.',
      photo: '/images/IMG_6861-scaled.jpeg',
      alt: 'KCCF volunteers delivering gift bags',
      action: { label: 'Apply Here', onClick: () => openModal('volunteer') },
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
            className="object-cover object-[45%_center] xl:object-[center_10%] brightness-110 saturate-[1.2] sepia-[0.15]"
            sizes="100vw"
            priority
          />
          {/* Soft blur only in the lower-left corner (behind the words); faces at the top stay sharp */}
          <div
            className="hidden md:block absolute inset-0 backdrop-blur-[2px] pointer-events-none"
            style={{
              maskImage: 'radial-gradient(ellipse 45% 40% at 0% 100%, black 30%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 45% 40% at 0% 100%, black 30%, transparent 100%)',
            }}
          />
          <div className="absolute inset-0 bg-amber-400/15 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 md:hidden pointer-events-none" />
          <div
            className="hidden md:block absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 70% at 0% 100%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.22) 50%, transparent 100%)' }}
          />
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

      {/* Fundraisers */}
      <section id="fundraisers" className="py-20 bg-white dark:bg-gray-900 scroll-mt-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="Start a Peer-to-Peer Fundraiser" subtitle="Turn a birthday, a bar or bat mitzvah, a game, a run or a school event into help for a child with cancer." />
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

      {/* Volunteer: KCCF brings on individual volunteers as needs come up */}
      <section id="volunteer" className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700 scroll-mt-24">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle title="Volunteer With Us" />
          <p className="max-w-2xl mx-auto text-xl text-gray-700 dark:text-gray-200 leading-relaxed mb-10">
            We bring on skilled volunteers as needs come up. Tell us how you&rsquo;d like to help.
          </p>
          <button
            type="button"
            onClick={() => openModal('volunteer')}
            className="btn-primary btn-primary-orange text-white py-4 px-10 rounded-full font-semibold text-lg cursor-pointer"
          >
            Apply Here
          </button>
        </div>
      </section>


      {/* Plum ending: the page's main ask */}
      <section className="py-20 bg-violet-600 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Ready to Make a Difference?</h2>
          <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-8" aria-hidden="true" />
          <p className="text-xl text-white/90 mb-10">Start a fundraiser today, or give in one minute.</p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a href="#fundraisers" className="btn-primary btn-primary-orange text-white py-4 px-10 rounded-full font-semibold text-lg inline-flex items-center justify-center">
              Start a Fundraiser
            </a>
            <Link href="/donate" className="py-4 px-10 rounded-full font-semibold text-lg inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-violet-700 transition-colors">
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
