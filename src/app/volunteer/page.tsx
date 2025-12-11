"use client"

import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import FormButton from '@/components/FormButton';
import { useFormModal } from '@/contexts/FormModalContext';

export default function Volunteer() {
  const { openModal } = useFormModal()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with Background */}
      <div className="relative min-h-[66vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 top-24">
          <Image
            src="/images/header_image_volunteer.jpg"
            alt="Volunteer"
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
          title="Volunteer"
          subtitle="Join us to change a life. May be even your own."
        />
      </div>

      {/* About Volunteering */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-violet-700 mb-8 text-center">Give Hope</h2>

            <div className="prose prose-lg max-w-none text-violet-700">
              <p className="text-xl leading-relaxed mb-8">
                Koenig Childhood Cancer Foundation (KCCF) is a 100% volunteer-run organization. Volunteers are at the heart of everything we do — your time, energy, and commitment directly impact children battling cancer and their families.
              </p>

              <p className="mb-6">
                Whether you have a few hours a month or want to make a more significant commitment,
                there are many ways to get involved and help children battling cancer and their families.
              </p>

              <div className="bg-saffron-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-violet-700 mb-4">Volunteer Requirements</h3>
                <ul className="space-y-2 text-violet-600">
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    <strong>Ages:</strong> 18+
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    <strong>Under 18?</strong> Parental consent is required for teen volunteers. Youth roles may have limitations.
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    A minimum one-year commitment is requested for all volunteer roles.
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Optional Background Check (A Social Security Number will be required)
                  </li>
                </ul>
              </div>

              <div className="bg-saffron-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-violet-700 mb-4">Volunteer Benefits</h3>
                <ul className="space-y-2 text-violet-600">
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Make a direct impact on the lives of families facing pediatric cancer.
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Join a supportive community of passionate, mission-driven individuals.
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Gain valuable skills and experience.
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Recognition opportunities for outstanding dedication and service.
                  </li>
                </ul>
              </div>

              <div className="text-center mt-8">
                <FormButton
                  formType="volunteer"
                  variant="violet"
                  size="lg"
                  className="min-w-[200px]"
                >
                  Apply for Volunteering
                </FormButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16 bg-platinum-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-violet-700 mb-12">Volunteer Opportunities</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Crazy Socks Events */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-fandango-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🧦</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4 text-center">Crazy Socks Events</h3>
              <p className="text-violet-600 mb-4">
                Help organize and participate in hospital visits to deliver care packages and bring smiles to children's faces.
              </p>
              <ul className="text-sm text-violet-600 space-y-1">
                <li>• Hospital visits and gift delivery</li>
                <li>• Event planning and coordination</li>
                <li>• Package assembly and preparation</li>
              </ul>
            </div>

            {/* Administrative Support */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-violet-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4 text-center">Administrative Support</h3>
              <p className="text-violet-600 mb-4">
                Provide behind-the-scenes support to help our programs run smoothly and efficiently.
              </p>
              <ul className="text-sm text-violet-600 space-y-1">
                <li>• Data entry and record keeping</li>
                <li>• Phone and email support</li>
                <li>• Filing and organization</li>
              </ul>
            </div>

            {/* Fundraising Events */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-orange-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4 text-center">Fundraising Events</h3>
              <p className="text-violet-600 mb-4">
                Help raise funds and awareness through various events and campaigns throughout the year.
              </p>
              <ul className="text-sm text-violet-600 space-y-1">
                <li>• Event planning and execution</li>
                <li>• Donor outreach and engagement</li>
                <li>• Social media and marketing support</li>
              </ul>
            </div>

            {/* Camp Support */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-saffron-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">🏕️</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4 text-center">Camp Support</h3>
              <p className="text-violet-600 mb-4">
                Support our international summer camp program for children diagnosed with cancer.
              </p>
              <ul className="text-sm text-violet-600 space-y-1">
                <li>• Camp planning and logistics</li>
                <li>• Activity coordination</li>
                <li>• Travel and accommodation support</li>
              </ul>
            </div>

            {/* Social Media & Marketing */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-fandango-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4 text-center">Social Media & Marketing</h3>
              <p className="text-violet-600 mb-4">
                Help spread awareness and share our mission through digital platforms and marketing efforts.
              </p>
              <ul className="text-sm text-violet-600 space-y-1">
                <li>• Content creation and curation</li>
                <li>• Social media management</li>
                <li>• Graphic design and photography</li>
              </ul>
            </div>

            {/* Special Projects */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-16 h-16 bg-violet-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4 text-center">Special Projects</h3>
              <p className="text-violet-600 mb-4">
                Contribute your unique skills and expertise to special initiatives and projects.
              </p>
              <ul className="text-sm text-violet-600 space-y-1">
                <li>• Grant writing and research</li>
                <li>• Translation services</li>
                <li>• Specialized skills and expertise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16 bg-violet-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Become a Volunteer</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Individual Volunteering Card */}
            <div 
              onClick={() => openModal('volunteer')}
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 flex flex-col cursor-pointer group"
            >
              <h3 className="text-2xl font-bold text-violet-700 mb-4 text-center">Individual ⭐</h3>
              <p className="text-violet-600 mb-6 flex-grow">
                Individual volunteering includes opportunities to contribute your skills and/or participate in events that support our mission.
              </p>
              <div className="text-center mt-auto">
                <span className="inline-flex items-center text-violet-600 group-hover:text-violet-700 font-semibold transition-colors">
                  Click to Apply
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Group Volunteering Card */}
            <Link 
              href="/crazy-socks"
              className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 flex flex-col cursor-pointer group"
            >
              <h3 className="text-2xl font-bold text-violet-700 mb-4 text-center">Group 🤝</h3>
              <p className="text-violet-600 mb-6 flex-grow">
                Group volunteering usually involves corporate sponsorship of care bag supplies and assembling packages, writing notes for children in the hospital. Check with your company's Corporate Social Responsibility team.
              </p>
              <div className="text-center mt-auto">
                <span className="inline-flex items-center text-violet-600 group-hover:text-violet-700 font-semibold transition-colors">
                  Click to learn
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-platinum-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-violet-700 mb-12">What Our Volunteers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-fandango-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">S</span>
                </div>
                <div>
                  <h4 className="font-semibold text-violet-700">Sarah M.</h4>
                  <p className="text-violet-600 text-sm">Crazy Socks Volunteer</p>
                </div>
              </div>
              <p className="text-violet-600 italic">
                "Volunteering with KCCF has been one of the most rewarding experiences of my life.
                Seeing the smiles on children's faces when we deliver care packages is priceless."
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-saffron-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">M</span>
                </div>
                <div>
                  <h4 className="font-semibold text-violet-700">Michael R.</h4>
                  <p className="text-violet-600 text-sm">Administrative Volunteer</p>
                </div>
              </div>
              <p className="text-violet-600 italic">
                "I love being able to contribute my skills to such a meaningful cause.
                The KCCF team is amazing and makes every volunteer feel valued and appreciated."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
