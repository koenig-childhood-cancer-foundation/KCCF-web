"use client"

import React, { useState } from 'react';
import PageHeader from '@/components/PageHeader';

export default function NewsletterSignup() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    // Submit the form
    const formData = new FormData(e.currentTarget);
    
    fetch('/api/submit', {
      method: 'POST',
      body: formData
    }).then(response => {
      if (response.ok) {
        window.location.href = '/newsletter-signup?submitted=1';
      } else {
        window.location.href = '/newsletter-signup?submitted=0';
      }
    }).catch((error) => {
      console.error('Form submission error:', error);
      window.location.href = '/newsletter-signup?submitted=0';
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

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
            <h2 className="text-3xl font-bold text-center text-violet-700 mb-8">Subscribe to Our Newsletter</h2>
            
                         <form className="space-y-6" onSubmit={handleSubmit}>
               <input type="hidden" name="formType" value="newsletter_signup" />
               <input type="hidden" name="pagePath" value="/newsletter-signup" />
               {/* Personal Information */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="firstName" className="block text-sm font-medium text-violet-700 mb-2">
                     First Name *
                   </label>
                   <input
                     type="text"
                     id="firstName"
                     name="firstName"
                     required
                     className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                     placeholder="Enter your first name"
                   />
                 </div>
                 <div>
                   <label htmlFor="lastName" className="block text-sm font-medium text-violet-700 mb-2">
                     Last Name *
                   </label>
                   <input
                     type="text"
                     id="lastName"
                     name="lastName"
                     required
                     className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                     placeholder="Enter your last name"
                   />
                 </div>
               </div>

               <div>
                 <label htmlFor="email" className="block text-sm font-medium text-violet-700 mb-2">
                   Email Address *
                 </label>
                 <input
                   type="email"
                   id="email"
                   name="email"
                   required
                   className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                   placeholder="Enter your email address"
                 />
               </div>

               {/* Privacy and Consent */}
               <div className="flex items-start">
                 <input
                   type="checkbox"
                   id="privacyConsent"
                   name="privacyConsent"
                   required
                   className="mt-1 h-4 w-4 text-violet-600 focus:ring-saffron-400 border-violet-300 rounded"
                 />
                 <label htmlFor="privacyConsent" className="ml-2 block text-sm text-violet-600">
                   I consent to receiving email communications from KCCF. I understand I can unsubscribe at any time. *
                 </label>
               </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg cursor-pointer flex items-center justify-center mx-auto ${
                    isSubmitting 
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed scale-100' 
                      : 'bg-gradient-to-r from-fandango-500 to-violet-600 hover:from-fandango-600 hover:to-violet-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Subscribing...
                    </>
                  ) : (
                    'Subscribe to Newsletter'
                  )}
                </button>
              </div>
            </form>

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
              className="bg-fandango-600 hover:bg-fandango-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
