"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { gtmEvent } from '@/lib/gtm'

interface DonationModalContextType {
  isOpen: boolean
  campaign: string | null
  openModal: (campaign?: string) => void
  closeModal: () => void
}

const DonationModalContext = createContext<DonationModalContextType | undefined>(undefined)

export function DonationModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [campaign, setCampaign] = useState<string | null>(null)

  const openModal = useCallback((campaignName?: string) => {
    setCampaign(campaignName || null)
    setIsOpen(true)
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    // Donate-intent conversion signal (stopgap until Zeffy completion is tracked).
    // Every Donate entry point flows through here, so this is the single choke point.
    gtmEvent('donate_intent', { campaign: campaignName || '(none)' })
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    setCampaign(null)
    // Restore body scroll
    document.body.style.overflow = ''
  }, [])

  return (
    <DonationModalContext.Provider value={{ isOpen, campaign, openModal, closeModal }}>
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
