"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useCookieConsent } from "@/contexts/CookieConsentContext"
import { useState } from 'react'

export default function Footer() {
  const { openPreferences } = useCookieConsent()
  const [isSubmitting, setIsSubmitting] = useState(false)

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
        window.location.href = '/?submitted=1';
      } else {
        window.location.href = '/?submitted=0';
      }
    }).catch((error) => {
      console.error('Form submission error:', error);
      window.location.href = '/?submitted=0';
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-200 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-white">Koenig Childhood Cancer Foundation</h3>
            <div className="space-y-2 text-gray-300">
              <p>1175 York Ave., Suite 15E</p>
              <p>New York, NY 10065</p>
              <p>Phone: +1 (917) 765-6272</p>
              <p>Email: join@thekccf.org</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/donate" className="text-gray-300 hover:text-white transition-colors">Donate</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/aid" className="text-gray-300 hover:text-white transition-colors">Apply For Aid</Link></li>
              <li><Link href="/volunteer" className="text-gray-300 hover:text-white transition-colors">Volunteer</Link></li>
              <li><Link href="/camp" className="text-gray-300 hover:text-white transition-colors">Camp</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">More</h4>
            <ul className="space-y-2">
              <li><Link href="/crazy-socks" className="text-gray-300 hover:text-white transition-colors">Sponsor Gift Bag Event</Link></li>
              <li><Link href="/our-story/#bookelanaformsection" className="text-gray-300 hover:text-white transition-colors">Book Elana, Founder</Link></li>
              <li><Link href="/our-story" className="text-gray-300 hover:text-white transition-colors">KCCF Story</Link></li>
              <li><Link href="/kccf-family" className="text-gray-300 hover:text-white transition-colors">KCCF Family</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold mb-4 text-white">Get the Latest Nonprofit News in Our Newsletter</h4>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="hidden" name="formType" value="footer_newsletter" />
              <input type="hidden" name="pagePath" value="footer" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors bg-gray-800 text-white border border-gray-600 placeholder-gray-400"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  name="lastName"
                  className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors bg-gray-800 text-white border border-gray-600 placeholder-gray-400"
                />
              </div>
              <input
                type="email"
                placeholder="E.g. john@doe.com"
                name="email"
                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors bg-gray-800 text-white border border-gray-600 placeholder-gray-400"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-4 py-2 rounded-md font-medium transition-all duration-200 hover:opacity-90 cursor-pointer flex items-center justify-center ${
                  isSubmitting 
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                    : 'bg-orange-600 hover:bg-orange-700 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </>
                ) : (
                  'Keep Me Posted'
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-6 text-white">Recognition & Awards</h4>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flex flex-col items-center">
                <a 
                  href="https://www.guidestar.org/profile/84-4892279" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity flex flex-col items-center"
                >
                  <Image
                    src="/candid seal of transparency.png"
                    alt="Candid seal of transparency logo"
                    width={100}
                    height={100}
                    className="mb-2"
                  />
                  <p className="text-sm text-gray-300 text-center">Candid Platinum Transparency 2025</p>
                </a>
              </div>
              <div className="flex flex-col items-center">
                <a 
                  href="https://greatnonprofits.org/org/koenig-childhood-cancer-foundation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity flex flex-col items-center"
                >
                  <Image
                    src="/greatnonprofits logo.png"
                    alt="GreatNonprofits logo"
                    width={120}
                    height={120}
                    className="mb-2"
                  />
                  <p className="text-sm text-gray-300 text-center">GreatNonprofits 2024 Top-Rated Nonprofit</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 text-center text-sm border-t border-gray-700 text-gray-300">
          <p>©2025 Koenig Childhood Cancer Foundation, 501(c)(3) tax-exempt, EIN: 84-489-2279</p>
          <p className="mt-2">
            Koenig Childhood Cancer Foundation is committed to equal employment and volunteer opportunity without regard to age, ancestry, disability, national or ethnic origin, race, religious belief, sex, sexual orientation, gender identity, marital or veteran status.
          </p>
          <div className="mt-3 flex items-center justify-center gap-4">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <button type="button" onClick={openPreferences} className="hover:underline hover:cursor-pointer">Cookie settings</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
