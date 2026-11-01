"use client"

import { createContext, useCallback, useContext, useRef, useState, ReactNode } from 'react'
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
}

export const FORM_CONFIGS: Record<FormType, FormConfig> = {
  'camp-camper': {
    title: 'Thank you for your interest in the KCCF Summer Camp 2026.',
    subtitle: 'The form may take a few seconds to load.',
    src: 'https://forms.monday.com/forms/embed/6d7260392d585e6fd7cb1b13795638ab?r=use1',
    height: '1550px'
  },
  'camp-counselor': {
    title: 'Thank you for your interest in becoming a camp volunteer!',
    subtitle: 'The form may take a few seconds to load.',
    src: 'https://forms.monday.com/forms/embed/87920448930e50b7a0554e414662d32b?r=use1',
    height: '1900px'
  },
  'crazy-socks-sponsor': {
    title: 'Plan a Gift Bag Event',
    subtitle: 'Thank you for your interest! The form takes a few seconds to load.',
    subtitleWhileLoading: true,
    src: 'https://forms.monday.com/forms/embed/78b71c024990383d274ad455e744923a?r=use1',
    height: '2000px'
  },
  'newsletter-signup': {
    title: 'Join Our Newsletter',
    subtitle: 'Thank you for your interest! The form takes a few seconds to load.',
    src: 'https://thekccf.us17.list-manage.com/subscribe?u=041a777be61cc7e1bc20e3517&id=8696f27783',
    height: '650px'
  },
  'book-elana': {
    title: 'Book Elana to Speak',
    subtitle: 'Thank you for your interest! The form takes a few seconds to load.',
    src: 'https://forms.monday.com/forms/embed/0caf48b3cfeede4c889e59ac52ce5fb1?r=use1',
    height: '1900px'
  },
  'volunteer': {
    title: 'Apply to Volunteer',
    subtitle: 'Thank you for your interest! The form takes a few seconds to load.',
    src: 'https://forms.monday.com/forms/embed/650d6c93433108a85097471c822b4cbf?r=use1',
    height: '3100px'
  },
  'contact': {
    title: 'Send Us a Message',
    subtitle: 'We\'re here to help. The form takes a few seconds to load.',
    src: 'https://forms.monday.com/forms/embed/7d2a1baf81662443852a38886ac80dd4?r=use1',
    height: '1100px'
  },
  'aid-application': {
    title: 'Apply for Family Aid',
    subtitle: 'We are grateful to be part of your journey. The form may take a minute to load.',
    src: 'https://forms.monday.com/forms/embed/972de98e599d383218e348dd923eec38?r=use1',
    height: '2500px'
  }
}

interface FormModalContextType {
  isOpen: boolean
  formType: FormType | null
  openModal: (type: FormType) => void
  closeModal: () => void
  warmUp: (type: FormType) => void
  warmProps: (type: FormType) => { onMouseEnter: () => void; onFocus: () => void; onTouchStart: () => void }
}

const FormModalContext = createContext<FormModalContextType | undefined>(undefined)

export function FormModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formType, setFormType] = useState<FormType | null>(null)

  const openModal = (type: FormType) => {
    setFormType(type)
    setIsOpen(true)
    // GA4 events for Ad Grants conversions
    if (type === 'aid-application') trackEvent('aid_apply_open')
    if (type === 'crazy-socks-sponsor') trackEvent('sponsor_click')
  }

  // Start loading a monday.com form in a hidden frame when a visitor points at
  // or focuses its button, so its files are cached before the click
  const warmed = useRef(new Set<string>())
  const warmUp = useCallback((type: FormType) => {
    const src = FORM_CONFIGS[type]?.src
    if (!src || new URL(src).hostname !== 'forms.monday.com' || warmed.current.has(src)) return
    warmed.current.add(src)
    const frame = document.createElement('iframe')
    frame.src = src
    frame.title = ''
    frame.tabIndex = -1
    frame.setAttribute('aria-hidden', 'true')
    frame.style.cssText = 'position:fixed;left:-9999px;top:0;width:1px;height:1px;border:0;opacity:0;pointer-events:none'
    document.body.appendChild(frame)
  }, [])

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
