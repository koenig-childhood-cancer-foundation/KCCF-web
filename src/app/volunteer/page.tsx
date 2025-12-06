"use client"

import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import FormButton from '@/components/FormButton';

export default function Volunteer() {
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
          subtitle="Join our team of dedicated volunteers to help make a difference."
        />
      </div>

      {/* About Volunteering */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-violet-700 mb-8 text-center">Make a Difference</h2>

            <div className="prose prose-lg max-w-none text-violet-700">
              <p className="text-xl leading-relaxed mb-8">
                Our volunteers are the heart of KCCF. They bring compassion, energy, and dedication to every
                program and event, helping us reach more families and create more impact.
              </p>

              <p className="mb-6">
                Whether you have a few hours a month or want to make a more significant commitment,
                there are many ways to get involved and help children battling cancer and their families.
              </p>

              <div className="bg-saffron-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-violet-700 mb-4">Why Volunteer?</h3>
                <ul className="space-y-2 text-violet-600">
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Make a direct impact on children's lives
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Join a supportive community of like-minded individuals
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Gain valuable experience and skills
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Flexible scheduling to fit your availability
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Be part of a meaningful cause
                  </li>
                </ul>
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

      {/* Volunteer Requirements */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-violet-700 mb-12">Volunteer Requirements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-violet-700 mb-4">General Requirements</h3>
              <ul className="space-y-3 text-violet-600">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Must be 18 years or older (or accompanied by a parent/guardian)
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Complete volunteer orientation and training
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Pass background check (for hospital visits)
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Commit to minimum time requirements
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  Follow KCCF policies and procedures
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-violet-700 mb-4">Time Commitments</h3>
              <ul className="space-y-3 text-violet-600">
                <li className="flex items-start">
                  <span className="text-saffron-500 mr-2">•</span>
                  <strong>Flexible:</strong> 2-4 hours per month
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-500 mr-2">•</span>
                  <strong>Regular:</strong> 4-8 hours per month
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-500 mr-2">•</span>
                  <strong>Dedicated:</strong> 8+ hours per month
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-500 mr-2">•</span>
                  <strong>Special Events:</strong> One-time commitments
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-500 mr-2">•</span>
                  <strong>Virtual:</strong> Remote opportunities available
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Application Form */}
      <section className="py-16 bg-violet-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Become a Volunteer</h2>

          <div className="bg-white rounded-lg shadow-lg p-8 text-violet-900 text-center">
            <p className="text-lg text-violet-700 mb-8">
              Ready to make a difference? Complete this form to start your volunteer journey with KCCF.
            </p>
            
            <FormButton
              formType="volunteer"
              variant="violet"
              size="lg"
              className="min-w-[200px]"
            >
              Volunteer Application
            </FormButton>
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
