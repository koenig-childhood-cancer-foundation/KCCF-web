"use client"
import Link from 'next/link'
import Image from 'next/image'
import { useCookieConsent } from "@/contexts/CookieConsentContext"
import FormButton from '@/components/FormButton'

export default function Footer() {
  const { openPreferences } = useCookieConsent()

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-200 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Koenig Childhood Cancer Foundation</h3>
            <div className="space-y-2 text-gray-300">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=1175+York+Ave+Suite+15E+New+York+NY+10065" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:text-white transition-colors"
                aria-label="View our location on Google Maps"
              >
                <p>1175 York Ave., Suite 15E</p>
                <p>New York, NY 10065</p>
              </a>
              <p>Phone: <a href="tel:+19177656272" className="hover:text-white transition-colors">+1 (917) 765-6272</a></p>
              <p>Email: <a href="mailto:join@thekccf.org" className="hover:text-white transition-colors">join@thekccf.org</a></p>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/theKCCF?modal=admin_todo_tour#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://x.com/TheKccf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  aria-label="Follow us on X (Twitter)"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/company/thekccf/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-600 transition-colors"
                  aria-label="Follow us on LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/elanalailakoenig/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pink-500 transition-colors"
                  aria-label="Follow Elana on Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/koenig-childhood-cancer-foundation/KCCF-web/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition-colors"
                  aria-label="Report a website issue on GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
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

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Get the Latest Nonprofit News in Our Newsletter</h4>
            <p className="text-gray-300 mb-6 text-sm">
              Stay updated with our latest programs, events, and the impact we're making together.
            </p>
            
            <FormButton
              formType="newsletter-signup"
              variant="orange"
              size="md"
              fullWidth={true}
              className="bg-orange-600 hover:bg-orange-700"
            >
              Subscribe to Newsletter
            </FormButton>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4 md:mb-6 text-white">Recognition & Awards</h4>
            <div className="flex flex-col sm:flex-row items-end justify-center gap-4 sm:gap-6 md:gap-8">
              <div className="flex flex-col items-center w-full sm:w-auto max-w-[200px] mx-auto sm:mx-0">
                <a 
                  href="https://www.guidestar.org/profile/84-4892279" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity flex flex-col items-center"
                >
                  <div className="h-[80px] sm:h-[100px] flex items-center justify-center mb-2">
                    <Image
                      src="/candid seal of transparency.png"
                      alt="Candid seal of transparency logo"
                      width={80}
                      height={80}
                      className="sm:w-[100px] sm:h-[100px]"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 text-center h-8 sm:h-10 flex items-center justify-center px-2">Candid Platinum Transparency 2025</p>
                </a>
              </div>
              <div className="flex flex-col items-center w-full sm:w-auto max-w-[200px] mx-auto sm:mx-0">
                <a 
                  href="https://greatnonprofits.org/org/koenig-childhood-cancer-foundation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity flex flex-col items-center"
                >
                  <div className="h-[80px] sm:h-[100px] flex items-center justify-center mb-2">
                    <Image
                      src="/images/2025-top-rated-awards-badge-embed.png"
                      alt="GreatNonprofits Top-Rated Award 2025"
                      width={110}
                      height={80}
                      className="sm:w-[140px] sm:h-[100px]"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 text-center h-8 sm:h-10 flex items-center justify-center px-2">GreatNonprofits Top-Rated 2025</p>
                </a>
              </div>
              <div className="flex flex-col items-center w-full sm:w-auto max-w-[200px] mx-auto sm:mx-0">
                <a 
                  href="https://www.charitynavigator.org/ein/844892279" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity flex flex-col items-center"
                >
                  <div className="h-[80px] sm:h-[100px] flex items-center justify-center mb-2">
                    <Image
                      src="/images/4star-ratingbadge-2025.png"
                      alt="Charity Navigator 4-Star Rating Badge 2025"
                      width={80}
                      height={80}
                      className="sm:w-[100px] sm:h-[100px]"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 text-center h-8 sm:h-10 flex items-center justify-center px-2">Charity Navigator 4-Star Rating</p>
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
