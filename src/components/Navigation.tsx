'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle'
import { useTheme } from '@/contexts/ThemeContext'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpandedItems, setMobileExpandedItems] = useState<string[]>([])
  const [isScrolled, setIsScrolled] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)
  const { theme } = useTheme()
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true)
      return
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const navItems = [
    { name: 'HOME', href: '/' },
    { 
      name: 'ABOUT', 
      href: '/our-story',
      dropdown: [
        { name: 'Our Story', href: '/our-story' },
        { name: 'KCCF Family', href: '/kccf-family' },
      ]
    },
    { 
      name: 'PROGRAMS',
      href: '/aid',
      dropdown: [
        { name: 'Family Assistance', href: '/aid' },
        { name: 'Crazy Socks Gift Bags', href: '/crazy-socks' },
        { name: 'KCCF Camp', href: '/camp' },
      ]
    },
    { 
      name: 'CONTACT', 
      href: '/contact',
      dropdown: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Volunteer', href: '/volunteer' },
        { name: 'Sponsor Crazy Socks', href: '/crazy-socks/#sponsorform' },
        { name: 'Book Elana to Speak', href: '/our-story/#bookelanaformsection' },
        { name: 'Newsletter Signup', href: '/newsletter-signup' },
      ]
    },
    { name: 'MEDIA', href: '/media' },
    { name: 'FUNDRAISERS', href: '/fundraisers' },
  ]

  const handleMouseEnter = (itemName: string) => {
    if (itemName === 'ABOUT' || itemName === 'PROGRAMS' || itemName === 'CONTACT') {
      // Clear any existing timeout
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout)
        setDropdownTimeout(null)
      }
      setActiveDropdown(itemName)
    }
  }

  const handleMouseLeave = () => {
    // Add a small delay before closing the dropdown
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // 150ms delay
    setDropdownTimeout(timeout)
  }

  const handleKeyDown = (e: React.KeyboardEvent, itemName: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (itemName === 'ABOUT' || itemName === 'PROGRAMS' || itemName === 'CONTACT') {
        if (activeDropdown === itemName) {
          setActiveDropdown(null)
        } else {
          setActiveDropdown(itemName)
        }
      }
    } else if (e.key === 'Escape') {
      setActiveDropdown(null)
    }
  }

  const toggleMobileItem = (itemName: string) => {
    setMobileExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(item => item !== itemName)
        : [...prev, itemName]
    )
  }

  const navBackgroundClass = isHomePage 
    ? (isScrolled ? 'bg-white dark:bg-gray-900 shadow-sm' : 'bg-transparent')
    : 'bg-white dark:bg-gray-900 shadow-sm'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBackgroundClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center h-24">
              <Image
                src={!isScrolled 
                  ? "/kccf_logo_light.png"   // White logo for hero image
                  : theme === 'dark'
                    ? "/kccf_logo_light.png"  // White logo for dark nav background
                    : "/kccf_logo_dark.png"  // Full color logo for light nav background
                }
                alt="Koenig Childhood Cancer Foundation"
                width={180}
                height={56}
                className={`h-20 md:h-24 w-auto transition-all duration-300 ${
                  !isScrolled
                    ? "drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
                    : "drop-shadow-none"
                }`}
                priority
                draggable={false}
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  aria-haspopup={item.dropdown ? "true" : undefined}
                  aria-expanded={item.dropdown && activeDropdown === item.name ? "true" : undefined}
                  onFocus={() => {
                    if (item.dropdown && (item.name === 'ABOUT' || item.name === 'PROGRAMS' || item.name === 'CONTACT')) {
                      handleMouseEnter(item.name)
                    }
                  }}
                  onKeyDown={(e) => {
                    if (item.dropdown && (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')) {
                      e.preventDefault()
                      handleKeyDown(e, item.name)
                    }
                  }}
                  className={`group relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:rounded-lg ${
                    isScrolled 
                      ? 'text-violet-600 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800' 
                      : 'text-white drop-shadow-[0_0_4px_rgba(0,0,0,0.6)] hover:bg-white/10'
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <svg 
                      className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''} group-hover:rotate-180`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div 
                    role="menu"
                    className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50"
                    onMouseEnter={() => {
                      // Clear timeout when entering dropdown
                      if (dropdownTimeout) {
                        clearTimeout(dropdownTimeout)
                        setDropdownTimeout(null)
                      }
                    }}
                    onMouseLeave={handleMouseLeave}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        setActiveDropdown(null)
                      }
                    }}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        role="menuitem"
                        className="block px-4 py-3 text-sm transition-colors duration-150 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-inset focus:bg-gray-50 dark:focus:bg-gray-700"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side - Donate button and Theme Toggle (Desktop Only) */}
          <div className="hidden lg:flex items-center space-x-16">
            <Link
              href="/donate"
              className={`px-6 py-2 rounded-full text-sm font-semibold leading-none transition-all duration-200 hover:opacity-90 hover:shadow-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:rounded-full ${
                isScrolled 
                  ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                  : 'bg-orange-600 hover:bg-orange-700 text-white shadow-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]'
              }`}
            >
              DONATE
            </Link>
            <ThemeToggle className={
              !isScrolled 
                ? "p-2 rounded-full border border-white/30 bg-white/20 hover:bg-white/30 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:rounded-full drop-shadow-[0_0_4px_rgba(0,0,0,0.6)] [&_svg]:text-white" 
                : "p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:rounded-full [&_svg]:text-gray-700 dark:[&_svg]:text-gray-300"
            } />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className={`p-2 rounded-lg transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 ${
                isScrolled 
                  ? 'text-violet-600 dark:text-white' 
                  : 'text-white drop-shadow-[0_0_4px_rgba(0,0,0,0.6)]'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Slide-out menu */}
        <div className={`absolute top-0 right-0 h-full w-72 max-w-[80vw] transform transition-all duration-300 ease-out bg-white dark:bg-gray-900 shadow-2xl overflow-hidden ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Menu</h2>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 rounded-lg text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation Items */}
            <div className="flex-1 p-4 space-y-2 overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleMobileItem(item.name)}
                        className="flex items-center justify-between w-full px-4 py-4 rounded-lg text-base font-medium transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white touch-manipulation"
                      >
                        {item.name}
                        <svg 
                          className={`h-5 w-5 transition-transform duration-200 ${
                            mobileExpandedItems.includes(item.name) ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileExpandedItems.includes(item.name) && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              className="block px-4 py-3 text-sm rounded-lg transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 touch-manipulation"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-4 rounded-lg text-base font-medium transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white touch-manipulation"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Donate Button */}
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/donate"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full px-4 py-4 rounded-lg text-base font-semibold transition-all duration-200 hover:opacity-90 text-center bg-orange-600 hover:bg-orange-700 text-white cursor-pointer touch-manipulation"
                >
                  DONATE
                </Link>
              </div>

              {/* Theme Toggle (Mobile) */}
              <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between px-4 py-3">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
                  <ThemeToggle className="p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 [&_svg]:text-gray-700 dark:[&_svg]:text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
