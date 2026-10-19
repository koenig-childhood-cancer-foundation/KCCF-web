'use client';

import Link from 'next/link';
import { useDonationModal } from '@/contexts/DonationModalContext';

export default function CallToAction() {
  const { openModal, warmUp } = useDonationModal();

  return (
    <section className="py-20 bg-violet-600 dark:bg-gray-800 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Help a Child Today
        </h2>
        <div className="w-14 h-1 bg-[#DAB87E] rounded-full mx-auto mb-8" aria-hidden="true" />
        <p className="text-xl text-white/90 mb-6">No child should fight cancer alone.</p>
        <p className="text-2xl md:text-3xl font-extrabold text-[#ffb37a] mx-auto leading-tight">
          90.6% of expenses go directly to programs
        </p>
        <p className="text-sm text-white/80 mt-2 mb-10">
          (2025 Financial Review). 100% volunteer&#8209;run: no salaries.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button type="button" onClick={() => openModal()} onMouseEnter={warmUp} onFocus={warmUp} className="btn-primary btn-primary-orange group text-white py-4 px-10 rounded-full font-semibold text-lg inline-flex items-center justify-center cursor-pointer">
            <span>Donate Now</span>
            <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <Link href="/get-involved" className="group py-4 px-10 rounded-full font-semibold text-lg inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-violet-700 transition-colors">
            <span>Get Involved</span>
            <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
