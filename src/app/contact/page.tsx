"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useFormModal } from '@/contexts/FormModalContext';
import { useDonationModal } from '@/contexts/DonationModalContext';
import type { FormType } from '@/contexts/FormModalContext';

// Giving options follow KCCF Current Facts – MASTER. The page offers forms instead of
// a phone number, to cut down on solicitation (the footer still shows it).

type Action =
  | { label: string; href: string }
  | { label: string; form: FormType }
  | { label: string; donate: true };

// The remaining ways to reach KCCF, shown as cards under the stars
const helps: { title: string; text: string; action: Action }[] = [
  {
    title: 'Family Aid',
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
    title: 'Volunteer',
    text: 'KCCF is a 100% volunteer-run organization. Tell us about your skills.',
    action: { label: 'Apply to Volunteer', form: 'volunteer' },
  },
];

// The three stars: each opens its own form
const stars: { title: string; text: string; label: string; form: FormType }[] = [
  {
    title: 'Corporate Partnerships',
    text: 'Bring a Crazy Socks gift bag event to your company, school or group. Many companies fund it from their CSR or volunteer budget.',
    label: 'Sponsor a Gift Bag Event',
    form: 'crazy-socks-sponsor',
  },
  {
    title: 'Media, PR & Speaking Engagements',
    text: 'Interviews, press, and booking Elana to speak or sing at your event.',
    label: 'Book Elana to Speak',
    form: 'book-elana',
  },
  {
    title: 'Organize a Benefit Event',
    text: 'Host a gala, concert, game or school event for children with cancer. Tell us your idea and we will get back to you.',
    label: 'Tell Us About Your Event',
    form: 'contact',
  },
];

function Star() {
  return (
    <svg width="46" height="46" viewBox="0 0 24 24" className="mx-auto fill-violet-600 dark:fill-saffron-400" aria-hidden="true">
      <path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.7 7-6.3-3.9-6.3 3.9 1.7-7L2 9.5l7.1-.6z" />
    </svg>
  );
}

export default function Contact() {
  const { openModal } = useFormModal();
  const { openModal: openDonationModal, warmUp: warmUpDonation } = useDonationModal();
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

      {/* Mailing address, Write to Us, then the three stars */}
      <section className="pt-12 pb-16 bg-white dark:bg-gray-800 border-b border-[#F1E7D6] dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-700 dark:text-gray-200">
            <span className="block text-sm font-bold text-[#8A6A2E] dark:text-[#DAB87E]">Mailing address</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=1175+York+Ave+Suite+15E+New+York+NY+10065"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-lg font-semibold text-violet-600 dark:text-saffron-400 hover:underline"
            >
              <span className="block">Koenig Childhood Cancer Foundation, Inc.</span>
              <span className="block">1175 York Ave, Suite 15E, New York, NY 10065</span>
            </a>
          </p>

          <h2 className="mt-10 text-2xl md:text-3xl font-bold text-violet-600 dark:text-white">Write to Us</h2>
          <button
            type="button"
            onClick={() => openModal('contact')}
            className="mt-4 inline-block rounded-full border-2 border-[#DAB87E] bg-[#FFFDF9] dark:bg-gray-700 px-8 py-4 text-center hover:bg-[#FBF5EA] cursor-pointer"
          >
            <span className="block text-xl md:text-2xl font-extrabold text-violet-600 dark:text-saffron-400">Send Us a Message</span>
          </button>

          <div className="mt-14 grid md:grid-cols-3 gap-12 md:gap-8">
            {stars.map((s) => (
              <div key={s.title} className="flex flex-col items-center">
                <Star />
                <h3 className="mt-3 text-2xl font-bold text-violet-600 dark:text-white">{s.title}</h3>
                <p className="mt-3 mb-6 text-gray-700 dark:text-gray-200 max-w-xs">{s.text}</p>
                <button
                  type="button"
                  onClick={() => openModal(s.form)}
                  className="mt-auto btn-primary btn-primary-orange text-white py-3 px-7 rounded-full font-semibold inline-flex items-center justify-center cursor-pointer"
                >
                  {s.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The remaining ways to reach KCCF */}
      <section className="py-20 bg-gradient-to-b from-[#FBF5EA] to-[#FDF9F2] dark:from-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {helps.map((help) => (
              <div
                key={help.title}
                className="bg-white dark:bg-gray-700 rounded-[22px] border-t-4 border-violet-600 dark:border-saffron-400 shadow-md px-6 py-7 text-center flex flex-col items-center"
              >
                <h3 className="text-xl font-bold text-[#2B2330] dark:text-white">{help.title}</h3>
                <p className="mt-2 mb-5 text-gray-700 dark:text-gray-200">{help.text}</p>
                {'donate' in help.action ? (
                  <button type="button" onClick={() => openDonationModal()} onMouseEnter={warmUpDonation} onFocus={warmUpDonation} className={linkClass}>
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
    </div>
  );
}
