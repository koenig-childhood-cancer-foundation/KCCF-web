"use client"

import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import FormButton from '@/components/FormButton';

export default function Aid() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section with Background */}
      <div className="relative min-h-[66vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 top-24">
          <Image
            src="/images/header_image_family_assistance.jpg"
            alt="Family Assistance"
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
          title="Family Assistance"
          subtitle="We can assist with emergency medical expenses during your child's cancer treatment,
          such as medical bills, transportation, lodging, food, and more."
        />
      </div>

      {/* About Our Aid Program */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-violet-700 mb-8 text-center">Family Assistance Program</h2>
            
            <div className="prose prose-lg max-w-none text-violet-700">
              <p className="text-xl leading-relaxed mb-8">
                When a child is diagnosed with cancer, families face not only emotional challenges but also 
                significant financial burdens. Our Family Assistance Program is here to help.
              </p>

              <p className="mb-6">
                We understand that medical bills, transportation costs, lodging, and other expenses can 
                quickly become overwhelming. Our goal is to provide financial relief so families can focus 
                on what matters most - their child's recovery.
              </p>

              <div className="bg-orange-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-violet-700 mb-4">What We Cover</h3>
                <ul className="space-y-2 text-violet-600">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Medical bills and treatment costs
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Transportation to and from treatment
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Lodging near treatment centers
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Food and basic necessities
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Childcare for siblings
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Other essential expenses
                  </li>
                </ul>
              </div>

              <div className="bg-saffron-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-violet-700 mb-4">Eligibility</h3>
                <p className="text-violet-600 mb-4">
                  To be eligible for assistance, families must:
                </p>
                <ul className="space-y-2 text-violet-600">
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Have a child under 18 diagnosed with cancer
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Demonstrate financial need
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Be receiving treatment at an accredited medical facility
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Complete the application process
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-platinum-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-violet-700 mb-12">Application Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4">Apply</h3>
              <p className="text-violet-600">
                Complete the online application form with your family's information and needs.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-saffron-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4">Review</h3>
              <p className="text-violet-600">
                Our team reviews your application and may request additional documentation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-fandango-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4">Approval</h3>
              <p className="text-violet-600">
                Once approved, we work with you to determine the best way to provide assistance.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-violet-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4">Support</h3>
              <p className="text-violet-600">
                We provide ongoing support and may offer additional assistance as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-violet-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Apply for Financial Assistance</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-violet-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-violet-700 mb-4">Start Your Application</h3>
            <p className="text-lg text-violet-600 mb-8 max-w-2xl mx-auto">
              Complete our comprehensive application form to apply for financial assistance during your child's cancer treatment. All information will be kept confidential.
            </p>
            
            <FormButton
              formType="aid-application"
              variant="violet"
              size="lg"
              className="min-w-[250px] shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              icon={
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
              }
            >
              Family Assistance
            </FormButton>
            
          </div>
        </div>
      </section>
    </div>
  )
}
