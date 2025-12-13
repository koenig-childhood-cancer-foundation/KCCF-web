'use client'

import { type ReactNode, createContext, useContext, useState } from 'react'

interface SlideshowContextType {
  currentIndex: number
  setCurrentIndex: (index: number) => void
}

const SlideshowContext = createContext<SlideshowContextType | undefined>(undefined)

export function SlideshowProvider({ children }: { children: ReactNode }) {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  return (
    <SlideshowContext.Provider value={{ currentIndex, setCurrentIndex }}>
      {children}
    </SlideshowContext.Provider>
  )
}

export function useSlideshow() {
  const context = useContext(SlideshowContext)
  if (context === undefined) {
    throw new Error('useSlideshow must be used within a SlideshowProvider')
  }
  return context
}


