"use client"

import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';
import Spinner from '@/components/Spinner';

export default function NewsletterSignup() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  return (
    <div className="min-h-screen bg-platinum-50">
      <PageHeader
        title="Stay Connected"
        subtitle="Join our newsletter to receive updates about our programs, events, and the families we help."
      />

      {/* Newsletter Signup Form */}
      <section className="py-16 bg-violet-500">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-violet-700 mb-6 text-center">Join Our Newsletter</h2>
            <p className="text-violet-600 mb-8 text-center">
              Stay updated with our latest programs, events, and the impact we&apos;re making together.
            </p>

            {/* Embedded Newsletter Form */}
            <div className="relative min-h-[650px]">
              {!iframeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-white">
                  <Spinner text="Loading form..." />
                </div>
              )}
              <iframe
                className={`w-full border-0 ${!iframeLoaded ? 'invisible' : ''}`}
                src="https://thekccf.us17.list-manage.com/subscribe?u=041a777be61cc7e1bc20e3517&id=8696f27783"
                title="Newsletter Signup Form"
                height="650"
                scrolling="auto"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                onLoad={() => setIframeLoaded(true)}
              />
            </div>

            <div className="mt-8 text-center">
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
              className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
