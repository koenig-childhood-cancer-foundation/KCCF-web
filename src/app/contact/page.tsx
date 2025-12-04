"use client"

import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import FormButton from '@/components/FormButton';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with Background */}
      <div className="relative min-h-[66vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 top-24">
          <Image
            src="/images/header_image_contact_us.jpg"
            alt="Contact Us"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
        <div className="absolute inset-0 top-24 bg-amber-400/12 dark:bg-amber-400/18 pointer-events-none"></div>

        {/* PageHeader */}
        <PageHeader
          title="Contact Us"
          subtitle="Get in touch with us. We're here to help and answer any questions you may have."
        />
      </div>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center h-fit">
              <div className="w-12 h-12 bg-violet-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-violet-700 mb-4">Send Us a Message</h2>
              <p className="text-violet-600 mb-6 text-sm">
                Have questions or need assistance? We're here to help and will get back to you as soon as possible.
              </p>
              
              <FormButton
                formType="contact"
                variant="violet"
                size="lg"
                className="min-w-[200px]"
              >
                Contact Us
              </FormButton>
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
                <a href="/aid" className="text-orange-500 hover:text-orange-600 font-semibold"> Family Assistance</a> page for more information and to start your application.
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
