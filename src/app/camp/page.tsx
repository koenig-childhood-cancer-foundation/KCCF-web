"use client"

import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import FormButton from '@/components/FormButton';

export default function Camp() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <PageHeader
        title="Camp"
        subtitle="Join us for an unforgettable camp experience designed for children with cancer and their families."
      />

      {/* About Camp Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-violet-700 dark:text-violet-400 mb-6">KCCF Camp Experience</h2>
            <p className="text-lg text-violet-600 dark:text-violet-300 max-w-3xl mx-auto">
              Our camp provides a safe, supportive environment where children with cancer can have fun,
              make friends, and create lasting memories. Whether you're a camper or want to join as a counselor,
              we welcome you to be part of this special experience.
            </p>
          </div>

          {/* Camp Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-saffron-100 dark:bg-saffron-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏕️</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400 mb-3">Safe Environment</h3>
              <p className="text-violet-600 dark:text-violet-300">
                Medical staff on-site, accessible facilities, and activities designed for all abilities.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-fandango-100 dark:bg-fandango-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400 mb-3">Community Support</h3>
              <p className="text-violet-600 dark:text-violet-300">
                Connect with other families who understand the journey and build lasting friendships.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400 mb-3">Fun Activities</h3>
              <p className="text-violet-600 dark:text-violet-300">
                Arts & crafts, outdoor adventures, games, and special events for all ages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Selection */}
      <section className="py-16 bg-platinum-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-violet-700 dark:text-violet-400 mb-12">Join Our Camp</h2>

          {/* Camp Registration Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center flex-1 max-w-sm">
              <div className="w-16 h-16 bg-violet-100 dark:bg-violet-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏕️</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400 mb-3">Join as a Camper</h3>
              <p className="text-violet-600 dark:text-violet-300 mb-6 text-sm">
                Register your child for our upcoming camp session.
              </p>
              <FormButton
                formType="camp-camper"
                variant="violet"
                size="md"
                fullWidth={true}
              >
                Register Now
              </FormButton>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center flex-1 max-w-sm">
              <div className="w-16 h-16 bg-saffron-100 dark:bg-saffron-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400 mb-3">Join as a Counselor</h3>
              <p className="text-violet-600 dark:text-violet-300 mb-6 text-sm">
                Help create magical moments for children facing cancer.
              </p>
              <FormButton
                formType="camp-counselor"
                variant="violet"
                size="md"
                fullWidth={true}
              >
                Apply Now
              </FormButton>
            </div>
          </div>
        </div>
      </section>

      {/* Camp Information */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-violet-700 dark:text-violet-400 mb-12">Camp Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400 mb-4">For Campers</h3>
              <ul className="space-y-3 text-violet-600 dark:text-violet-300">
                <li className="flex items-start">
                  <span className="text-orange-500 dark:text-orange-400 mr-2">•</span>
                  Medical staff available 24/7
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 dark:text-orange-400 mr-2">•</span>
                  All activities adapted for various abilities
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 dark:text-orange-400 mr-2">•</span>
                  Nutritious meals and snacks provided
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 dark:text-orange-400 mr-2">•</span>
                  Transportation available if needed
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 dark:text-orange-400 mr-2">•</span>
                  No cost to families
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-violet-700 dark:text-violet-400 mb-4">For Counselors</h3>
              <ul className="space-y-3 text-violet-600 dark:text-violet-300">
                <li className="flex items-start">
                  <span className="text-saffron-500 dark:text-saffron-400 mr-2">•</span>
                  Training and orientation provided
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-500 dark:text-saffron-400 mr-2">•</span>
                  Room and board during camp
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-500 dark:text-saffron-400 mr-2">•</span>
                  Valuable experience and references
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-500 dark:text-saffron-400 mr-2">•</span>
                  Make a difference in children's lives
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-500 dark:text-saffron-400 mr-2">•</span>
                  Join a supportive community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-violet-600 via-fandango-600 to-violet-800 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Support Our <span className="text-saffron-300">Mission</span>
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Help us continue providing life-changing camp experiences for children battling cancer.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/donate" className="group bg-orange-500 hover:bg-orange-600 text-white py-4 px-10 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center">
              <span>Donate Now</span>
              <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>
            <Link href="/volunteer" className="group bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white py-4 px-10 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center border border-white/30">
              <span>Volunteer</span>
              <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
