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
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
          Join Our <span className="text-white">Mission</span>
        </h2>
        <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Together, we can make a difference in the lives of children battling cancer and their families. Every donation, every volunteer hour, and every act of support brings hope to those who need it most.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/donate" className="group btn-orange py-4 px-10 font-semibold text-lg">
            <span>Donate Now</span>
            <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </Link>
          <Link href="/volunteer" className="group bg-white/20 hover:bg-white/30  text-white py-4 px-10 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center border border-white/30">
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
