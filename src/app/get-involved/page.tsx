'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useFormModal } from '@/contexts/FormModalContext';
import { IMPACT_STATS } from '@/constants/impactStats';

// Volunteer and Fundraisers combined into one page.
// Numbers follow KCCF Current Facts – MASTER.

// Rena's picks. Gift bags and families from KCCF Current Facts – MASTER;
// volunteer hours is Rena's number (to be added to MASTER).
const stats = [
  { value: IMPACT_STATS.HOME[2].value, label: 'gift bags delivered' },
  { value: IMPACT_STATS.HOME[0].value, label: 'families helped' },
  { value: IMPACT_STATS.CRAZY_SOCKS[3].value, label: 'volunteer hours' },
];

const ZEFFY_CAMPAIGN = 'https://www.zeffy.com/en-US/peer-to-peer/peer-to-peer-fundraisers';

const fundraiserSteps = [
  { title: 'Start Your Page', text: 'Create your own fundraising page in a few minutes. It is free.' },
  { title: 'Share It', text: 'Send it to family, friends, your team, school or company.' },
  { title: 'Help a Child', text: 'Every gift goes to children battling cancer and their families.' },
];

type Way = {
  title: string;
  text: string;
  photo: string;
  alt: string;
  position?: string;
  action: { label: string; href: string } | { label: string; onClick: () => void };
};

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

  const ways: Way[] = [
    {
      title: 'Start a Fundraiser',
      text: 'Raise funds with your team, school or friends.',
      photo: '/images/fundraiser-table.jpg',
      alt: 'KCCF supporters at a fundraising table with gift bags',
      position: 'center 30%',
      action: { label: 'Start a Fundraiser', href: '#fundraisers' },
    },
    {
      title: 'Sponsor a Gift Bag Event',
      text: 'A team-building event with heart for your company, school or group. Many companies pay for it from their CSR or volunteer budget.',
      photo: '/images/yellow-shirt.jpg',
      alt: 'Teen volunteers in yellow KCCF shirts',
      action: { label: 'Learn More', href: '/crazy-socks' },
    },
    {
      title: 'Book Elana to Speak',
      text: 'Invite Elana to share her story at your school, company, gala or graduation.',
      photo: '/images/elana-speaking-stage.jpg',
      alt: 'Elana Koenig speaking on stage in front of the KCCF banner',
      action: { label: 'Book Elana to Speak', onClick: () => openModal('book-elana') },
    },
    {
      title: 'Help Build Our Camp',
      text: 'Bring your camp, medical or child-care experience to help plan and run KCCF Camp in Azerbaijan.',
      photo: '/images/header_image_camp.jpg',
      alt: 'Campers and staff at the KCCF International Camp',
      action: { label: 'Learn More', href: '/camp' },
    },
    {
      title: 'Volunteer',
      text: 'Give your time and skills, on your own or with a group.',
      photo: '/images/volunteer-with-child.jpg',
      alt: 'A KCCF volunteer with a child',
      action: { label: 'Apply to Volunteer', onClick: () => openModal('volunteer') },
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
            src="/images/get-involved-hero.jpg"
            alt="A team of KCCF volunteers with Crazy Socks gift bags"
            fill
            className="object-cover object-[center_80%] brightness-110 saturate-[1.2] sepia-[0.15]"
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
          {/* Darker band under the table so the words read clearly */}
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/75 via-black/40 to-transparent pointer-events-none" />
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

      {/* Five ways to help */}
      <section className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <SectionTitle title="Ways to Get Involved" />
          <div className="flex flex-wrap justify-center gap-7 max-w-6xl mx-auto">
            {ways.map((way) => (
              <div
                key={way.title}
                className="w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.333%-19px)] bg-white dark:bg-gray-700 rounded-[22px] overflow-hidden border-t-4 border-violet-600 dark:border-saffron-400 shadow-md p-4 flex flex-col"
              >
                <div className="relative aspect-[4/3] rounded-[14px] overflow-hidden">
                  <Image src={way.photo} alt={way.alt} fill sizes="(max-width: 640px) 90vw, 300px" className="object-cover" style={{ objectPosition: way.position ?? 'center' }} />
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

          {/* Zeffy's campaign page opens in a new tab; embedded, it showed as a page inside the page with its own scroll bar */}
          <div className="mt-14 max-w-3xl mx-auto rounded-[40px] border-2 border-[#DAB87E] bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-800 px-6 py-12 md:px-14 text-center shadow-md">
            <h3 className="text-3xl md:text-4xl font-bold text-violet-600 dark:text-white">Ready to Start?</h3>
            <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mt-5 mb-6" aria-hidden="true" />
            <p className="text-lg text-gray-700 dark:text-gray-200 max-w-xl mx-auto">
              Set up your fundraising page on Zeffy, our giving platform. It takes a few minutes and it is free.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href={ZEFFY_CAMPAIGN}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-primary-orange text-white py-4 px-10 rounded-full font-semibold text-lg inline-flex items-center justify-center"
              >
                Start My Fundraiser
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Plum ending: volunteer (also the /volunteer landing spot); fundraising lives in the cream card above */}
      <section id="volunteer" className="py-20 bg-violet-600 dark:bg-gray-800 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Volunteer With Us</h2>
          <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-8" aria-hidden="true" />
          <p className="text-xl text-white/90 mb-10">
            KCCF is a 100% volunteer-run organization. We bring on skilled volunteers as needs come up.
          </p>
          <button
            type="button"
            onClick={() => openModal('volunteer')}
            className="btn-primary btn-primary-orange text-white py-4 px-10 rounded-full font-semibold text-lg inline-flex items-center justify-center cursor-pointer"
          >
            Apply to Volunteer
          </button>
        </div>
      </section>
    </div>
  );
}
