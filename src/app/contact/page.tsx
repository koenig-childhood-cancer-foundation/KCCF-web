"use client"

import Image from 'next/image';
import { useFormModal } from '@/contexts/FormModalContext';
import type { FormType } from '@/contexts/FormModalContext';

// No phone number on this page, to cut down on solicitation: every topic opens a form.
// The address and phone are still in the footer.

// The three ways to reach KCCF, each with its own form (Rena's RD-7 layout)
const contacts: { title: string; text: string; label: string; form: FormType }[] = [
  {
    title: 'Corporate Partnerships',
    text: 'Bring a Crazy Socks gift bag event to your company, school or group. Many companies fund it from their CSR or volunteer budget.',
    label: 'Sponsor a Gift Bag Event',
    form: 'crazy-socks-sponsor',
  },
  {
    title: 'Media & Speaking Engagements',
    text: 'Interviews, press, and booking Elana to speak or sing at your event.',
    label: 'Book Elana to Speak',
    form: 'book-elana',
  },
  {
    title: 'General Inquiries',
    text: 'Anything else on your mind? Write to us and we will get back to you.',
    label: 'Send Us a Message',
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

      {/* Mailing address above the three ways to reach us */}
      <section className="pt-14 pb-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=1175+York+Ave+Suite+15E+New+York+NY+10065"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border-2 border-[#DAB87E] bg-[#FFFDF9] dark:bg-gray-700 px-8 py-3 hover:bg-[#FBF5EA]"
            >
              <span className="block text-sm font-bold text-[#8A6A2E] dark:text-[#DAB87E]">Mailing address</span>
              <span className="block text-base md:text-lg font-extrabold text-violet-600 dark:text-saffron-400">
                Koenig Childhood Cancer Foundation, Inc. · 1175 York Ave, Suite 15E, New York, NY 10065
              </span>
            </a>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-12 md:gap-8">
            {contacts.map((c) => (
              <div key={c.title} className="text-center flex flex-col items-center">
                <Star />
                <h2 className="mt-3 text-2xl font-bold text-violet-600 dark:text-white">{c.title}</h2>
                <p className="mt-3 mb-6 text-gray-700 dark:text-gray-200 max-w-xs">{c.text}</p>
                <button
                  type="button"
                  onClick={() => openModal(c.form)}
                  className="mt-auto btn-primary btn-primary-orange text-white py-3 px-7 rounded-full font-semibold inline-flex items-center justify-center cursor-pointer"
                >
                  {c.label}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
