"use client"

import PageHeader from '@/components/PageHeader';
import { useState } from 'react';

export default function Volunteer() {
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
        window.location.href = '/volunteer?submitted=1';
      } else {
        window.location.href = '/volunteer?submitted=0';
      }
    }).catch((error) => {
      console.error('Form submission error:', error);
      window.location.href = '/volunteer?submitted=0';
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="min-h-screen">
      <PageHeader 
        title="Volunteer"
        subtitle="Join our team of dedicated volunteers and help make a difference in the lives of children battling cancer."
      />

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
          
          <div className="bg-white rounded-lg shadow-lg p-8 text-violet-900">
            <p className="text-lg text-violet-700 mb-8 text-center">
              Ready to make a difference? Complete this form to start your volunteer journey with KCCF.
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="formType" value="volunteer_application" />
              <input type="hidden" name="pagePath" value="/volunteer" />
              {/* Personal Information */}
              <div className="border-b border-violet-200 pb-6">
                <h3 className="text-xl font-bold text-violet-700 mb-4">Personal Information</h3>
                
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="address" className="block text-sm font-medium text-violet-700 mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Volunteer Interests */}
              <div className="border-b border-violet-200 pb-6">
                <h3 className="text-xl font-bold text-violet-700 mb-4">Volunteer Interests</h3>
                
                <div>
                  <label htmlFor="interests" className="block text-sm font-medium text-violet-700 mb-2">
                    Areas of Interest *
                  </label>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input type="checkbox" id="crazySocks" name="interests" value="crazySocks" className="mr-2" />
                      <label htmlFor="crazySocks" className="text-violet-700">Crazy Socks Events</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="administrative" name="interests" value="administrative" className="mr-2" />
                      <label htmlFor="administrative" className="text-violet-700">Administrative Support</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="fundraising" name="interests" value="fundraising" className="mr-2" />
                      <label htmlFor="fundraising" className="text-violet-700">Fundraising Events</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="camp" name="interests" value="camp" className="mr-2" />
                      <label htmlFor="camp" className="text-violet-700">Camp Support</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="socialMedia" name="interests" value="socialMedia" className="mr-2" />
                      <label htmlFor="socialMedia" className="text-violet-700">Social Media & Marketing</label>
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="specialProjects" name="interests" value="specialProjects" className="mr-2" />
                      <label htmlFor="specialProjects" className="text-violet-700">Special Projects</label>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="availability" className="block text-sm font-medium text-violet-700 mb-2">
                    Availability *
                  </label>
                  <select
                    id="availability"
                    name="availability"
                    required
                    className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                  >
                    <option value="">Select availability</option>
                    <option value="flexible">Flexible (2-4 hours/month)</option>
                    <option value="regular">Regular (4-8 hours/month)</option>
                    <option value="dedicated">Dedicated (8+ hours/month)</option>
                    <option value="specialEvents">Special Events Only</option>
                    <option value="virtual">Virtual/Remote Only</option>
                  </select>
                </div>

                <div className="mt-6">
                  <label htmlFor="skills" className="block text-sm font-medium text-violet-700 mb-2">
                    Skills & Experience
                  </label>
                  <textarea
                    id="skills"
                    name="skills"
                    rows={3}
                    placeholder="Tell us about your skills, experience, or special talents..."
                    className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                  ></textarea>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h3 className="text-xl font-bold text-violet-700 mb-4">Additional Information</h3>
                
                <div>
                  <label htmlFor="motivation" className="block text-sm font-medium text-violet-700 mb-2">
                    Why do you want to volunteer with KCCF? *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    rows={4}
                    required
                    placeholder="Tell us why you want to volunteer and what you hope to contribute..."
                    className="w-full px-4 py-3 border border-violet-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron-400 focus:border-transparent"
                  ></textarea>
                </div>

                <div className="flex items-start mt-6">
                  <input
                    type="checkbox"
                    id="backgroundCheck"
                    name="backgroundCheck"
                    required
                    className="mt-1 h-4 w-4 text-violet-600 focus:ring-saffron-400 border-violet-300 rounded"
                  />
                  <label htmlFor="backgroundCheck" className="ml-2 block text-sm text-violet-600">
                    I understand that a background check may be required for certain volunteer positions. *
                  </label>
                </div>

                <div className="flex items-start mt-4">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    className="mt-1 h-4 w-4 text-violet-600 focus:ring-saffron-400 border-violet-300 rounded"
                  />
                  <label htmlFor="newsletter" className="ml-2 block text-sm text-violet-600">
                    I would like to receive updates about volunteer opportunities and KCCF news.
                  </label>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 cursor-pointer flex items-center justify-center mx-auto ${
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
                      Submitting Application...
                    </>
                  ) : (
                    'Submit Volunteer Application'
                  )}
                </button>
              </div>
            </form>
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
