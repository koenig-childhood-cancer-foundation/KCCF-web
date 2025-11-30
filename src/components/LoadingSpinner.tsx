'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Spinner from '@/components/Spinner'

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    // Handle initial page load
    if (isInitialLoad) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
        setIsInitialLoad(false)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [isInitialLoad])

  useEffect(() => {
    // Handle route changes
    if (!isInitialLoad) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [pathname, isInitialLoad])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out">
      <Spinner />
    </div>
  )
}
