"use client"

import PageHeader from '@/components/PageHeader';
import FormButton from '@/components/FormButton';

export default function Camp() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <PageHeader
        title="Camp"
        subtitle="Join us for an unforgettable camp experience designed for children with cancer and their families."
      />

      {/* About Camp Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-violet-700 dark:text-saffron-600 mb-6">KCCF International Healing Camp</h2>
            <p className="text-lg text-violet-600 dark:text-white max-w-3xl mx-auto mb-4">
              Cancer is a lifelong journey. The KCCF International Camp brings together children diagnosed with cancer and their siblings from around the world, helps heal their emotional wounds, and inspires them to feel joyful and included as part of society.
            </p>
            <p className="text-lg text-violet-600 dark:text-white max-w-3xl mx-auto">
              Our camp provides a safe, supportive environment where children with cancer can have fun,
              make friends, and create lasting memories. Whether you&apos;re a camper or want to join as a counselor,
              we welcome you to be part of this special experience.
            </p>
          </div>

          {/* Camp Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-saffron-100 dark:bg-saffron-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏕️</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 dark:text-saffron-600 mb-3">Safe Environment</h3>
              <p className="text-violet-600 dark:text-white">
                Medical staff on-site, accessible facilities, and activities designed for all abilities.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-fandango-100 dark:bg-fandango-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 dark:text-saffron-600 mb-3">Community Support</h3>
              <p className="text-violet-600 dark:text-white">
                Connect with other families who understand the journey and build lasting friendships.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 dark:text-saffron-600 mb-3">Fun Activities</h3>
              <p className="text-violet-600 dark:text-white">
                Arts & crafts, outdoor adventures, games, and special events for all ages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Selection */}
      <section className="py-16 bg-platinum-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-violet-700 dark:text-saffron-600 mb-12">Join Our Camp</h2>

          {/* Camp Registration Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center flex-1 max-w-sm">
              <div className="w-16 h-16 bg-violet-100 dark:bg-violet-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🏕️</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 dark:text-saffron-600 mb-3">Join as a Camper</h3>
              <p className="text-violet-600 dark:text-white mb-6 text-sm">
                Register your child for our upcoming camp session.
              </p>
              <FormButton
                formType="camp-camper"
                variant="violet"
                size="md"
                fullWidth={true}
              >
                Register Now
              </FormButton>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 text-center flex-1 max-w-sm">
              <div className="w-16 h-16 bg-saffron-100 dark:bg-saffron-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-violet-700 dark:text-saffron-600 mb-3">Join as a Counselor</h3>
              <p className="text-violet-600 dark:text-white mb-6 text-sm">
                Help create magical moments for children facing cancer.
              </p>
              <FormButton
                formType="camp-counselor"
                variant="violet"
                size="md"
                fullWidth={true}
              >
                Apply Now
              </FormButton>
            </div>
          </div>
        </div>
      </section>

      {/* Camp Information */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-violet-700 dark:text-saffron-600 mb-12">Camp Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-violet-700 dark:text-saffron-600 mb-4">For Campers</h3>
              <ul className="space-y-3 text-violet-600 dark:text-white">
                <li className="flex items-start">
                  <span className="text-orange-500 dark:text-orange-400 mr-2">•</span>
                  Medical staff available 24/7
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 dark:text-orange-400 mr-2">•</span>
                  All activities adapted for various abilities
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 dark:text-orange-400 mr-2">•</span>
                  Nutritious meals and snacks provided
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 dark:text-orange-400 mr-2">•</span>
                  Transportation available if needed
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 dark:text-orange-400 mr-2">•</span>
                  No cost to families
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-violet-700 dark:text-saffron-600 mb-4">For Counselors</h3>
              <ul className="space-y-3 text-violet-600 dark:text-white">
                <li className="flex items-start">
                  <span className="text-saffron-500 dark:text-saffron-400 mr-2">•</span>
                  Training and orientation provided
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-500 dark:text-saffron-400 mr-2">•</span>
                  Room and board during camp
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-500 dark:text-saffron-400 mr-2">•</span>
                  Valuable experience and references
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-500 dark:text-saffron-400 mr-2">•</span>
                  Make a difference in children's lives
                </li>
                <li className="flex items-start">
                  <span className="text-saffron-500 dark:text-saffron-400 mr-2">•</span>
                  Join a supportive community
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
