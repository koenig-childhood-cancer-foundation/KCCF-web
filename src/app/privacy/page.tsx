"use client"

import PageHeader from '@/components/PageHeader';
import { useCookieConsent } from "@/contexts/CookieConsentContext";

export default function Privacy() {
  const { openPreferences } = useCookieConsent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-platinum-50 via-white to-platinum-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-x-hidden">
      <PageHeader
        title="Privacy & Cookie Policy"
        subtitle="Your privacy matters to us. Learn how we collect, use, and protect your personal information."
      />

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
            {/* Last Updated */}
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              Last Updated: November 2025
            </p>

            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-violet-600 dark:text-saffron-400 mb-4">Introduction</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Koenig Childhood Cancer Foundation (&quot;KCCF,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at thekccf.org, make donations, or interact with our services.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Please read this Privacy Policy carefully. By using our website and services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-violet-600 dark:text-saffron-400 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Personal Information</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-6 ml-4">
                <li>Make a donation</li>
                <li>Sign up for our newsletter</li>
                <li>Apply for financial assistance</li>
                <li>Register for events or volunteer</li>
                <li>Contact us through forms or email</li>
                <li>Book Elana for speaking engagements</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                This information may include your name, email address, mailing address, phone number, payment information, and any other information you choose to provide.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Automatically Collected Information</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When you visit our website, we may automatically collect certain information about your device, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our website. We use cookies and similar tracking technologies to collect this information.
              </p>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-violet-600 dark:text-saffron-400 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li>Process donations and send tax receipts</li>
                <li>Communicate with you about our programs, events, and impact</li>
                <li>Process applications for financial assistance</li>
                <li>Respond to your inquiries and provide support</li>
                <li>Send newsletters and updates (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and protect our organization</li>
              </ul>
            </div>

            {/* Cookie Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-violet-600 dark:text-saffron-400 mb-4">Cookie Policy</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors come from.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Third-Party Services</h3>
              
              <div className="space-y-4 mb-6">
                <div className="bg-platinum-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Strictly Necessary Services (Always Active)</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    These services are essential for the website to function properly and cannot be disabled:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-1 ml-2">
                    <li><strong>Google Tag Manager (GTM)</strong> - Manages the loading of other scripts and services</li>
                    <li><strong>Zeffy</strong> - Powers our donation forms and payment processing</li>
                    <li><strong>Monday.com Forms</strong> - Enables our contact, volunteer, and application forms</li>
                  </ul>
                </div>
                
                <div className="bg-platinum-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Analytics Services (Require Consent)</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    These services help us understand how visitors use our website. They are only activated with your consent:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm space-y-1 ml-2">
                    <li><strong>Google Analytics</strong> - Collects anonymous statistics about website usage</li>
                    <li><strong>Microsoft Clarity</strong> - Provides heatmaps and session recordings to improve usability</li>
                  </ul>
                </div>

                <div className="bg-platinum-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Functional Cookies</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    These cookies enable enhanced functionality and personalization, such as remembering your preferences, language, or theme settings. If you do not allow these cookies, some or all of these services may not function properly.
                  </p>
                </div>

                <div className="bg-platinum-50 dark:bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Marketing Cookies</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
                  </p>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                You can manage your cookie preferences at any time by clicking the button below:
              </p>
              <button
                type="button"
                onClick={openPreferences}
                className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors cursor-pointer"
              >
                Manage Cookie Preferences
              </button>
            </div>

            {/* GDPR Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-violet-600 dark:text-saffron-400 mb-4">Your Rights Under GDPR (European Users)</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR). These rights include:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-6 ml-4">
                <li><strong>Right to Access:</strong> You can request copies of your personal data.</li>
                <li><strong>Right to Rectification:</strong> You can request that we correct any inaccurate or incomplete personal data.</li>
                <li><strong>Right to Erasure:</strong> You can request that we delete your personal data under certain conditions.</li>
                <li><strong>Right to Restrict Processing:</strong> You can request that we limit the processing of your personal data under certain conditions.</li>
                <li><strong>Right to Data Portability:</strong> You can request that we transfer your data to another organization or directly to you under certain conditions.</li>
                <li><strong>Right to Object:</strong> You can object to our processing of your personal data under certain conditions.</li>
                <li><strong>Right to Withdraw Consent:</strong> Where we rely on your consent to process your personal data, you have the right to withdraw that consent at any time.</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To exercise any of these rights, please contact us at <a href="mailto:join@thekccf.org" className="text-violet-600 dark:text-saffron-400 hover:underline">join@thekccf.org</a>. We will respond to your request within 30 days.
              </p>
            </div>

            {/* California Privacy Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-violet-600 dark:text-saffron-400 mb-4">Your California Privacy Rights (CCPA)</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with specific rights regarding your personal information:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Right to Know</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                You have the right to request that we disclose what personal information we collect, use, disclose, and sell about you. This includes:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-6 ml-4">
                <li>The categories of personal information we have collected about you</li>
                <li>The categories of sources from which the personal information is collected</li>
                <li>The business or commercial purpose for collecting personal information</li>
                <li>The categories of third parties with whom we share personal information</li>
                <li>The specific pieces of personal information we have collected about you</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Right to Delete</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                You have the right to request that we delete any personal information we have collected from you, subject to certain exceptions provided by law.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Right to Non-Discrimination</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                We will not discriminate against you for exercising any of your CCPA rights.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">Do Not Sell My Personal Information</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                KCCF does not sell your personal information to third parties. We are a nonprofit organization and do not engage in the sale of personal data for monetary or other valuable consideration.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">How to Exercise Your Rights</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To exercise your California privacy rights, please contact us at <a href="mailto:join@thekccf.org" className="text-violet-600 dark:text-saffron-400 hover:underline">join@thekccf.org</a> or call us at <a href="tel:+19177656272" className="text-violet-600 dark:text-saffron-400 hover:underline">+1 (917) 765-6272</a>. We will verify your identity before processing your request.
              </p>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-violet-600 dark:text-saffron-400 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
                <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as payment processing, email delivery, and website analytics.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid legal requests.</li>
                <li><strong>Protection of Rights:</strong> We may disclose your information to protect our rights, privacy, safety, or property, and that of our users and the public.</li>
                <li><strong>With Your Consent:</strong> We may share your information for any other purpose with your consent.</li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-violet-600 dark:text-saffron-400 mb-4">Data Security</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-violet-600 dark:text-saffron-400 mb-4">Data Retention</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. Donation records are retained in accordance with IRS requirements for nonprofit organizations.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-violet-600 dark:text-saffron-400 mb-4">Children&apos;s Privacy</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately, and we will take steps to delete such information.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-violet-600 dark:text-saffron-400 mb-4">Third-Party Links</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read the privacy policies of any third-party websites you visit.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-violet-600 dark:text-saffron-400 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-violet-600 dark:text-saffron-400 mb-4">Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-platinum-50 dark:bg-gray-700 rounded-lg p-6">
                <p className="text-gray-800 dark:text-white font-semibold mb-2">Koenig Childhood Cancer Foundation</p>
                <p className="text-gray-600 dark:text-gray-300">1175 York Ave., Suite 15E</p>
                <p className="text-gray-600 dark:text-gray-300">New York, NY 10065</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Email: <a href="mailto:join@thekccf.org" className="text-violet-600 dark:text-saffron-400 hover:underline">join@thekccf.org</a>
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Phone: <a href="tel:+19177656272" className="text-violet-600 dark:text-saffron-400 hover:underline">+1 (917) 765-6272</a>
                </p>
              </div>
            </div>

            {/* EIN Information */}
            <div className="text-center pt-8 border-t border-gray-200 dark:border-gray-600">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Koenig Childhood Cancer Foundation is a 501(c)(3) tax-exempt organization. EIN: 84-4892279
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
