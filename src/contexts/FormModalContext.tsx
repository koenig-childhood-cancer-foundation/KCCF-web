"use client"

import { createContext, useCallback, useContext, useState, ReactNode } from 'react'
import { trackEvent } from '@/lib/analytics'

export type FormType = 
  | 'camp-camper'
  | 'camp-counselor' 
  | 'crazy-socks-sponsor'
  | 'newsletter-signup'
  | 'book-elana'
  | 'volunteer'
  | 'contact'
  | 'aid-application'

interface FormConfig {
  title: string
  subtitle?: string
  // Show the subtitle only until the form has loaded
  subtitleWhileLoading?: boolean
  src: string
  height: string
  // Short forms: a small pop-up sized to the form (uses height) instead of the tall one
  compact?: boolean
  // Narrower pop-up (max-w-2xl instead of max-w-4xl)
  narrow?: boolean
  // Pixels of empty space to hide at the top of the embedded form
  trimTop?: number
}

export const FORM_CONFIGS: Record<FormType, FormConfig> = {
  'camp-camper': {
    title: 'Thank you for your interest in the KCCF Summer Camp 2026.',
    subtitle: 'It only takes a few minutes.',
    src: 'https://forms.monday.com/forms/embed/6d7260392d585e6fd7cb1b13795638ab?r=use1',
    height: '1550px'
  },
  'camp-counselor': {
    title: 'Thank you for your interest in becoming a camp volunteer!',
    subtitle: 'It only takes a few minutes.',
    src: 'https://forms.monday.com/forms/embed/87920448930e50b7a0554e414662d32b?r=use1',
    height: '1900px'
  },
  'crazy-socks-sponsor': {
    // Heading moved here from the Monday form (Rena, 11.5.26); subtitle reworded (Rena, 11.10.26)
    title: 'Let us plan your event together!',
    subtitle: 'Tell us a little about your team and we’ll reach out soon.',
    src: 'https://forms.monday.com/forms/embed/78b71c024990383d274ad455e744923a?r=use1',
    height: '2000px',
    narrow: true,
    trimTop: 24
  },
  'newsletter-signup': {
    title: 'Join Our Newsletter',
    // No line under the title: the round "Loading form..." spinner shows while Zeffy loads (Rena, 11.18.26).
    // Zeffy newsletter sign-up form "Join Our Newsletter" (Rena, 11.5.26; was Mailchimp).
    src: 'https://www.zeffy.com/en-US/embed/newsletter-form/join-our-newsletter-16',
    height: '310px',
    compact: true
  },
  'book-elana': {
    title: 'Book Elana to Speak',
    subtitle: 'Tell us about your event, and we’ll be in touch.',
    src: 'https://forms.monday.com/forms/embed/0caf48b3cfeede4c889e59ac52ce5fb1?r=use1',
    height: '1900px',
    narrow: true
  },
  'volunteer': {
    // Warmer title chosen by Rena (11.5.26); Monday heading to be removed after merge
    title: 'Join Our Volunteer Family',
    // No line under the title (Rena, 11.18.26)
    src: 'https://forms.monday.com/forms/embed/650d6c93433108a85097471c822b4cbf?r=use1',
    height: '3100px',
    narrow: true
  },
  'contact': {
    title: 'Send Us a Message',
    // No line under the title (Rena, 11.18.26)
    src: 'https://forms.monday.com/forms/embed/7d2a1baf81662443852a38886ac80dd4?r=use1',
    height: '1100px',
    narrow: true
  },
  'aid-application': {
    title: 'Apply for Family Aid',
    src: 'https://forms.monday.com/forms/embed/972de98e599d383218e348dd923eec38?r=use1',
    height: '2500px',
    narrow: true
  }
}

interface FormModalContextType {
  isOpen: boolean
  formType: FormType | null
  openModal: (type: FormType) => void
  closeModal: () => void
  warmUp: (type: FormType) => void
  // Forms already loading (hidden) in the pop-up, so they show at once when opened
  warmedForms: FormType[]
  warmProps: (type: FormType) => { onMouseEnter: () => void; onFocus: () => void; onTouchStart: () => void }
}

const FormModalContext = createContext<FormModalContextType | undefined>(undefined)

export function FormModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formType, setFormType] = useState<FormType | null>(null)

  // Start loading a monday.com or Zeffy form inside the (still hidden) pop-up when a visitor
  // points at or focuses its button, or a few seconds after the page loads (PreloadForms).
  // The pop-up keeps that same frame, so the click only shows a form that is already there.
  const [warmedForms, setWarmedForms] = useState<FormType[]>([])
  const warmUp = useCallback((type: FormType) => {
    const src = FORM_CONFIGS[type]?.src
    const host = src ? new URL(src).hostname : ''
    if (!src || !['forms.monday.com', 'www.zeffy.com'].includes(host)) return
    setWarmedForms(prev => (prev.includes(type) ? prev : [...prev, type]))
  }, [])

  const openModal = (type: FormType) => {
    warmUp(type)
    setFormType(type)
    setIsOpen(true)
    // GA4 events for Ad Grants conversions
    if (type === 'aid-application') trackEvent('aid_apply_open')
    if (type === 'crazy-socks-sponsor') trackEvent('sponsor_click')
  }

  // Spread on any button that opens a form: {...warmProps('book-elana')}
  const warmProps = useCallback((type: FormType) => ({
    onMouseEnter: () => warmUp(type),
    onFocus: () => warmUp(type),
    onTouchStart: () => warmUp(type),
  }), [warmUp])

  const closeModal = () => {
    setIsOpen(false)
    setFormType(null)
  }

  return (
    <FormModalContext.Provider
      value={{
        isOpen,
        formType,
        openModal,
        closeModal,
        warmUp,
        warmedForms,
        warmProps
      }}
    >
      {children}
    </FormModalContext.Provider>
  )
}

export function useFormModal() {
  const context = useContext(FormModalContext)
  if (context === undefined) {
    throw new Error('useFormModal must be used within a FormModalProvider')
  }
  return context
}
