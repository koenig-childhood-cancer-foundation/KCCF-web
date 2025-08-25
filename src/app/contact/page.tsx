"use client"

import PageHeader from '@/components/PageHeader';
import { useState } from 'react';

export default function Contact() {
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
        window.location.href = '/contact?submitted=1';
      } else {
        window.location.href = '/contact?submitted=0';
      }
    }).catch((error) => {
      console.error('Form submission error:', error);
      window.location.href = '/contact?submitted=0';
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Contact Us"
        subtitle="Get in touch with us. We're here to help and answer any questions you may have."
      />

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-violet-700 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-violet-700 mb-2">Address</h3>
                    <p className="text-violet-600">1175 York Ave., Suite 15E</p>
                    <p className="text-violet-600">New York, NY 10065</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-saffron-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-saffron-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-violet-700 mb-2">Phone</h3>
                    <p className="text-violet-600">+1 (917) 765-6272</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-fandango-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-fandango-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-violet-700 mb-2">Email</h3>
                    <p className="text-violet-600">join@thekccf.org</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-violet-700 mb-2">Office Hours</h3>
                    <p className="text-violet-600">Monday - Friday: 9:00 AM - 5:00 PM EST</p>
                    <p className="text-violet-600">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-platinum-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-violet-700 mb-4">Emergency Support</h3>
                <p className="text-violet-600 mb-4">
                  If you're a family in need of immediate assistance, please call us directly or email us with "URGENT" in the subject line.
                </p>
                <p className="text-violet-600">
                  We strive to respond to all urgent requests within 24 hours.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-violet-700 mb-6">Send Us a Message</h2>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <input type="hidden" name="formType" value="contact" />
                <input type="hidden" name="pagePath" value="/contact" />
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
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-violet-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-violet-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-violet-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="aid">Financial Aid Request</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="donation">Donation Questions</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="media">Media Inquiries</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-violet-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Please tell us how we can help you..."
                    className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    className="mt-1 h-4 w-4 text-violet-600 focus:ring-saffron-400 border-violet-300 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-2 block text-sm text-violet-600">
                    I would like to receive updates about KCCF's work and upcoming events.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                      : 'bg-orange-500 hover:bg-orange-600 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending Message...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-platinum-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-violet-700 mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-violet-700 mb-3">How can I apply for financial assistance?</h3>
              <p className="text-violet-600">
                Families can apply for financial assistance through our Family Assistance program. Visit our 
                <a href="/aid" className="text-orange-500 hover:text-orange-600 font-semibold"> Apply For Aid</a> page for more information and to start your application.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-violet-700 mb-3">How can I volunteer with KCCF?</h3>
              <p className="text-violet-600">
                We welcome volunteers for various programs including Crazy Socks events, administrative support, 
                and fundraising activities. Visit our 
                <a href="/volunteer" className="text-orange-500 hover:text-orange-600 font-semibold"> Volunteer</a> page to learn more.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-violet-700 mb-3">How can my company partner with KCCF?</h3>
              <p className="text-violet-600">
                We offer various corporate partnership opportunities including Crazy Socks sponsorships, 
                matching gift programs, and employee engagement initiatives. Contact us to discuss partnership options.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-violet-700 mb-3">How can I book Elana for an event?</h3>
              <p className="text-violet-600">
                Elana is available for speaking engagements, singing performances, and media opportunities. 
                Visit our <a href="/our-story/#bookelanaformsection" className="text-orange-500 hover:text-orange-600 font-semibold">Our Story</a> page to submit a booking request.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
