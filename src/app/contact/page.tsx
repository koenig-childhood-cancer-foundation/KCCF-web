"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useFormModal } from '@/contexts/FormModalContext';
import { useDonationModal } from '@/contexts/DonationModalContext';
import type { FormType } from '@/contexts/FormModalContext';

// Giving options follow KCCF Current Facts – MASTER. The page offers the contact form
// instead of a phone number or email address, to cut down on solicitation.

type Action =
  | { label: string; href: string }
  | { label: string; form: FormType }
  | { label: string; donate: true };

// "How can we help?": the main ways to reach KCCF, and where each one goes
const helps: { title: string; text: string; action: Action }[] = [
  {
    title: 'Financial Help for a Family',
    text: 'Families of children in active treatment can apply for emergency aid.',
    action: { label: 'Apply for Family Aid', form: 'aid-application' },
  },
  {
    title: 'Make a Donation',
    text: 'Give online, or by stock, crypto, donor-advised fund, wire or check.',
    action: { label: 'Donate Now', donate: true },
  },
  {
    title: 'Start a Fundraiser',
    text: 'Turn a birthday, a game, a run or a school event into help for a child.',
    action: { label: 'Start a Fundraiser', href: '/get-involved#fundraisers' },
  },
  {
    title: 'Sponsor a Gift Bag Event',
    text: 'Bring Crazy Socks to your company, school or community group.',
    action: { label: 'Sponsor an Event', form: 'crazy-socks-sponsor' },
  },
  {
    title: 'Book Elana to Speak',
    text: 'For graduations, galas, corporate events and media.',
    action: { label: 'Book Elana to Speak', form: 'book-elana' },
  },
  {
    title: 'Volunteer',
    text: 'KCCF is a 100% volunteer-run organization. Tell us about your skills.',
    action: { label: 'Apply to Volunteer', form: 'volunteer' },
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

export default function Contact() {
  const { openModal } = useFormModal();
  const { openModal: openDonationModal } = useDonationModal();
  const linkClass =
    'mt-auto inline-flex items-center gap-1 font-semibold text-violet-600 dark:text-saffron-400 hover:text-violet-800 dark:hover:text-saffron-300 cursor-pointer';

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden">
      {/* Hero: same style as Get Involved */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-end overflow-hidden pt-24">
        <div className="absolute inset-0 top-24">
          <Image
            src="/images/header_image_contact_us.jpg"
            alt="A KCCF volunteer with a child"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-black/70 via-black/35 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60 md:hidden pointer-events-none" />
        </div>
        <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 lg:pl-24 pb-14 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">Contact Us</h1>
          <p className="mt-5 text-xl md:text-2xl font-semibold text-white max-w-xl mx-auto lg:mx-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
            We are here to help.
          </p>
        </div>
      </section>

      {/* Contact form and mailing address in gold ovals */}
      <section className="py-12 bg-white dark:bg-gray-800 border-b border-[#F1E7D6] dark:border-gray-700">
        <ul className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-6 max-w-6xl mx-auto px-4 list-none">
          <li>
            <button
              type="button"
              onClick={() => openModal('contact')}
              className="block rounded-full border-2 border-[#DAB87E] bg-[#FFFDF9] dark:bg-gray-700 px-8 py-4 text-center hover:bg-[#FBF5EA] cursor-pointer"
            >
              <span className="block text-sm font-bold text-[#8A6A2E] dark:text-[#DAB87E]">Write to us</span>
              <span className="block text-xl md:text-2xl font-extrabold text-violet-600 dark:text-saffron-400">Send Us a Message</span>
            </button>
          </li>
          <li>
            <a
              href="https://www.google.com/maps/search/?api=1&query=1175+York+Ave+Suite+15E+New+York+NY+10065"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-full border-2 border-[#DAB87E] bg-[#FFFDF9] dark:bg-gray-700 px-8 py-4 text-center hover:bg-[#FBF5EA]"
            >
              <span className="block text-sm font-bold text-[#8A6A2E] dark:text-[#DAB87E]">Mail</span>
              <span className="block text-lg md:text-xl font-extrabold text-violet-600 dark:text-saffron-400">1175 York Ave, Suite 15E, New York, NY 10065</span>
            </a>
          </li>
        </ul>
      </section>

      {/* How can we help: every way to reach KCCF */}
      <section className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <SectionTitle title="How Can We Help?" subtitle="Choose what you need, and we will take you to the right place." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
            {helps.map((help) => (
              <div
                key={help.title}
                className="bg-white dark:bg-gray-700 rounded-[22px] border-t-4 border-violet-600 dark:border-saffron-400 shadow-md px-6 py-7 text-center flex flex-col items-center"
              >
                <h3 className="text-xl font-bold text-[#2B2330] dark:text-white">{help.title}</h3>
                <p className="mt-2 mb-5 text-gray-700 dark:text-gray-200">{help.text}</p>
                {'donate' in help.action ? (
                  <button type="button" onClick={() => openDonationModal()} className={linkClass}>
                    {help.action.label} &rarr;
                  </button>
                ) : 'form' in help.action ? (
                  <button type="button" onClick={() => openModal((help.action as { form: FormType }).form)} className={linkClass}>
                    {help.action.label} &rarr;
                  </button>
                ) : help.action.href.startsWith('/') ? (
                  <Link href={help.action.href} className={linkClass}>
                    {help.action.label} &rarr;
                  </Link>
                ) : (
                  <a href={help.action.href} className={linkClass}>
                    {help.action.label} &rarr;
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plum ending: the action */}
      <section className="py-20 bg-violet-600 dark:bg-gray-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Send Us a Message</h2>
          <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-8" aria-hidden="true" />
          <p className="text-xl text-white/90 mb-10">Anything else on your mind? Write to us and we will get back to you.</p>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => openModal('contact')}
              className="btn-primary btn-primary-orange text-white py-4 px-10 rounded-full font-semibold text-lg inline-flex items-center justify-center cursor-pointer"
            >
              Send Us a Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
