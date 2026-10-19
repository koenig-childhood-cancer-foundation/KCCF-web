"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { trackEvent } from '@/lib/analytics'

interface DonationModalContextType {
  isOpen: boolean
  // True once the donation form has started loading (kept loaded after closing)
  isWarm: boolean
  warmUp: () => void
  campaign: string | null
  openModal: (campaign?: string) => void
  closeModal: () => void
}

const DonationModalContext = createContext<DonationModalContextType | undefined>(undefined)

export function DonationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isWarm, setIsWarm] = useState(false)
  const [campaign, setCampaign] = useState<string | null>(null)

  // Start loading the Zeffy form early, when the mouse reaches a Donate button
  const warmUp = useCallback(() => setIsWarm(true), [])

  const openModal = useCallback((campaignName?: string) => {
    setCampaign(campaignName || null)
    setIsWarm(true)
    setIsOpen(true)
    trackEvent('donate_open', { campaign: campaignName || 'general' })
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    setCampaign(null)
    // Restore body scroll
    document.body.style.overflow = ''
  }, [])

  return (
    <DonationModalContext.Provider value={{ isOpen, isWarm, warmUp, campaign, openModal, closeModal }}>
      {children}
    </DonationModalContext.Provider>
  )
}

export function useDonationModal() {
  const context = useContext(DonationModalContext)
  if (context === undefined) {
    throw new Error('useDonationModal must be used within a DonationModalProvider')
  }
  return context
}
