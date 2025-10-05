"use client"

import React from 'react';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import FormButton from '@/components/FormButton';

export default function NewsletterSignup() {
  return (
    <div className="min-h-screen bg-platinum-50">
      <PageHeader
        title="Stay Connected"
        subtitle="Join our newsletter to receive updates about our programs, events, and the families we help."
      />



      {/* Newsletter Signup Form */}
      <section className="py-16 bg-violet-500">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-violet-700 mb-6">Join Our Newsletter</h2>
            <p className="text-violet-600 mb-8">
              Stay updated with our latest programs, events, and the impact we're making together.
            </p>
            
            <FormButton
              formType="newsletter-signup"
              variant="violet"
              size="lg"
              className="min-w-[200px]"
            >
              Sign Up for Newsletter
            </FormButton>
            
            <div className="mt-8">
              <p className="text-sm text-violet-600">
                We respect your privacy. You can unsubscribe at any time by clicking the link in our emails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Archive Preview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-violet-700 mb-12">Recent Newsletter Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-violet-400 to-fandango-400 flex items-center justify-center">
                <span className="text-white text-4xl">📊</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-violet-700 mb-2">2024 Impact Report</h3>
                <p className="text-violet-600 mb-4">See how your support helped hundreds of families this year.</p>
                <span className="text-sm text-violet-500 font-medium">December 2024</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-saffron-400 to-orange-400 flex items-center justify-center">
                <span className="text-white text-4xl">🎄</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-violet-700 mb-2">Holiday Gift Drive Success</h3>
                <p className="text-violet-600 mb-4">Over 500 children received special holiday care packages.</p>
                <span className="text-sm text-violet-500 font-medium">November 2024</span>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-fandango-400 to-violet-400 flex items-center justify-center">
                <span className="text-white text-4xl">🏕️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-violet-700 mb-2">Summer Camp Registration</h3>
                <p className="text-violet-600 mb-4">Applications are now open for our international summer camp program.</p>
                <span className="text-sm text-violet-500 font-medium">October 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-platinum-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-violet-700 mb-8">Questions About Our Newsletter?</h2>
          <p className="text-lg text-violet-600 mb-8">
            If you have any questions about our newsletter or need help with your subscription,
            please don't hesitate to reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Contact Us
            </a>
            <a
              href="mailto:info@thekccf.org"
              className="bg-fandango-600 hover:bg-fandango-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Email Us
            </a>
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
            Get <span className="text-saffron-300">Involved</span>
          </h2>
          <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            There are many ways to support our mission and help children battling cancer.
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
  );
}
