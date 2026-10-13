import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-20 bg-violet-600 dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          No child should fight cancer alone.
        </h2>
        <p className="text-3xl md:text-4xl font-extrabold text-[#ffb37a] max-w-3xl mx-auto leading-tight">
          90&cent; of every dollar goes directly to programs
        </p>
        <p className="text-sm text-white/80 mt-2 mb-6">
          Per KCCF&apos;s 2025 Financial Review.
        </p>
        <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Every donation, every volunteer hour, and every gift bag brings hope to a family facing childhood cancer.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/donate" className="btn-primary btn-primary-orange group text-white py-4 px-10 rounded-full font-semibold text-lg inline-flex items-center justify-center">
            <span>Donate Now</span>
            <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </Link>
          <Link href="/volunteer" className="btn-primary group bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-4 px-10 rounded-full font-semibold text-lg inline-flex items-center justify-center border border-white/30">
            <span>Volunteer</span>
            <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
