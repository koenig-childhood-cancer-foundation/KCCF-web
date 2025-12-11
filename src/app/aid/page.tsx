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
          title="Emergency Family Fund"
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
              {/* Storytelling Section */}
              <div className="bg-violet-50 rounded-lg p-6 mb-8 border-l-4 border-violet-400">
                <p className="italic text-lg leading-relaxed mb-4">
                  "When I was going through cancer treatment we understand all too well how important it is to be with your critically ill child. For most of us, that means jobs, bills, and life outside the hospital come second. Unfortunately, we still have to find a way to pay those bills. That is why we provide financial help for kids with cancer through our Family Assistance program."
                </p>
                <p className="text-right text-violet-600 font-semibold">
                  — Elana, survivor<br />
                  Emanuel, 20xx-202xx
                </p>
              </div>

              <p className="mb-6">
                This program gives qualified families money for expenses that are attributable to their child's cancer diagnosis. The goal of the program is to lessen the financial burden so families can focus on helping their children get well. We often help families with the following expenses and bills:
              </p>

              <div className="bg-orange-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-violet-700 mb-4">What We Cover</h3>
                <ul className="space-y-2 text-violet-600">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Medical treatment or medications that insurance won't cover
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Travel costs for treatments
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    Mortgage payments/rent
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2">•</span>
                    And more
                  </li>
                </ul>
              </div>

              <div className="bg-saffron-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-violet-700 mb-4">Criteria to Receive Assistance</h3>
                <ul className="space-y-2 text-violet-600">
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Have a child diagnosed with cancer under the age of 21
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Need assistance with expenses directly attributable to your child's diagnosis
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Receive treatment at any credential Hospitals in the United States or our international partner hospitals
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    Application MUST be completely filled out by the family (Page 1) and the Social Worker (Page 2) for it to be reviewed
                  </li>
                  <li className="flex items-start">
                    <span className="text-saffron-500 mr-2">•</span>
                    We only pay creditors directly
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
              <h3 className="text-xl font-bold text-violet-700 mb-4">Family Completes Part 1</h3>
              <p className="text-violet-600">
                Qualified families fill out their part of the application.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-saffron-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4">Email Confirmation</h3>
              <p className="text-violet-600">
                Once complete, family will receive an email confirming completion of part 1, and the social worker listed on the application will automatically receive part 2 via email.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-fandango-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4">Social Worker Completes Part 2</h3>
              <p className="text-violet-600">
                Once part 1 is completed by the family and part 2 is completed by the social worker, both parties will receive a confirmation about completion.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-violet-400 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4">Board Review</h3>
              <p className="text-violet-600">
                The board will review the complete application for decision.
              </p>
            </div>
          </div>

          {/* Important Notice */}
          <div className="mt-12 bg-red-50 border-l-4 border-red-500 rounded-lg p-6 max-w-4xl mx-auto">
            <p className="text-lg font-bold text-red-700 text-center">
              *APPLICATIONS WILL NOT BE CONSIDERED UNTIL BOTH PARTS ARE COMPLETE*
            </p>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-violet-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Apply for Family Assistance</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-violet-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-violet-700 mb-4">Start Your Application</h3>
            <p className="text-lg text-violet-600 mb-8 max-w-2xl mx-auto">
              Complete our comprehensive application form to apply for family assistance during your child's cancer treatment. All information will be kept confidential.
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
