'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  useEffect(() => {
    // GitHub Pages trailing slash redirect
    const path = window.location.pathname
    // If path ends with trailing slash (except root), redirect to version without trailing slash
    if (path !== '/' && path.endsWith('/')) {
      const pathWithoutSlash = path.slice(0, -1)
      window.location.replace(window.location.origin + pathWithoutSlash + window.location.search + window.location.hash)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-platinum-50 via-white to-platinum-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-100/30 via-transparent to-orange-100/30 dark:from-violet-900/20 dark:via-transparent dark:to-orange-900/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-violet-200/50 dark:bg-violet-800/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-200/50 dark:bg-orange-800/30 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200/50 dark:bg-blue-800/30 rounded-full blur-xl animate-pulse delay-500"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/images/cropped-Koenig-Foundation-Logo-01.png"
              alt="Koenig Foundation Logo"
              width={200}
              height={80}
              className="mx-auto"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>

          {/* 404 Content */}
          <div className="mb-12">
            <h1 className="text-8xl md:text-9xl font-bold text-violet-600 dark:text-violet-400 mb-4">
              404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Oops! Page Not Found
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              The page you're looking for seems to have wandered off. Don't worry though - 
              there are plenty of other ways to explore our mission and get involved!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link 
              href="/" 
              className="group bg-violet-500 hover:bg-violet-600 text-white py-4 px-8 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              <span>Go Home</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <Link 
              href="/contact" 
              className="group bg-orange-500 hover:bg-orange-600 text-white py-4 px-8 rounded-full transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
            >
              <span>Contact Us</span>
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link 
              href="/our-story" 
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="text-violet-600 dark:text-violet-400 mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                Our Story
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Learn about our mission and the families we serve
              </p>
            </Link>

            <Link 
              href="/aid" 
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="text-orange-500 dark:text-orange-400 mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">
                Family Assistance
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Get support for your family during difficult times
              </p>
            </Link>

            <Link 
              href="/donate" 
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="text-green-600 dark:text-green-400 mb-3">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                Make a Donation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Help us continue supporting families in need
              </p>
            </Link>
          </div>

          {/* Search Suggestion */}
          <div className="mt-12 p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
              Looking for something specific?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Try these popular pages or use your browser's back button to return to where you were.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {['Crazy Socks', 'Media', 'Volunteer', 'KCCF Family', 'Contact'].map((page) => (
                <Link
                  key={page}
                  href={`/${page.toLowerCase().replace(' ', '-')}`}
                  className="px-4 py-2 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-sm font-medium hover:bg-violet-200 dark:hover:bg-violet-900/50 transition-colors"
                >
                  {page}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
