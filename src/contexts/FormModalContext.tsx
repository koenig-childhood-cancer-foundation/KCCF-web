"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

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
  src: string
  height: string
}

export const FORM_CONFIGS: Record<FormType, FormConfig> = {
  'camp-camper': {
    title: 'Thank you for registering your child for camp!',
    subtitle: 'The form may take a few seconds to load.',
    src: 'https://forms.monday.com/forms/embed/41086441b740b6e179cbde8b574bd794?r=use1',
    height: '1550px'
  },
  'camp-counselor': {
    title: 'Thank you for your interest in becoming a camp counselor!',
    subtitle: 'The form may take a few seconds to load.',
    src: 'https://forms.monday.com/forms/embed/87920448930e50b7a0554e414662d32b?r=use1',
    height: '1900px'
  },
  'crazy-socks-sponsor': {
    title: 'Thank you for your initiative in sponsoring the gift bag event!',
    subtitle: 'The form may take a few seconds to load.',
    src: 'https://forms.monday.com/forms/embed/78b71c024990383d274ad455e744923a?r=use1',
    height: '2000px'
  },
  'newsletter-signup': {
    title: 'Thank you for your interest in our newsletter!',
    subtitle: 'The form may take a few seconds to load.',
    src: 'https://thekccf.us17.list-manage.com/subscribe?u=041a777be61cc7e1bc20e3517&id=8696f27783',
    height: '650px'
  },
  'book-elana': {
    title: 'Thank you for your interest in having Elana share her story!',
    subtitle: 'The form may take a few seconds to load.',
    src: 'https://forms.monday.com/forms/embed/0caf48b3cfeede4c889e59ac52ce5fb1?r=use1',
    height: '1900px'
  },
  'volunteer': {
    title: 'Thank you for your interest in becoming a volunteer!',
    subtitle: 'The form may take a few seconds to load.',
    src: 'https://forms.monday.com/forms/embed/650d6c93433108a85097471c822b4cbf?r=use1',
    height: '3100px'
  },
  'contact': {
    title: 'Thank you for reaching out - we\'re here to help!',
    subtitle: 'The form may take a few seconds to load.',
    src: 'https://forms.monday.com/forms/embed/7d2a1baf81662443852a38886ac80dd4?r=use1',
    height: '1100px'
  },
  'aid-application': {
    title: 'Apply for Financial Assistance',
    subtitle: 'We are grateful to be part of your challenging journey. This form may take a few minutes to load.',
    src: 'https://forms.monday.com/forms/embed/972de98e599d383218e348dd923eec38?r=use1',
    height: '2500px'
  }
}

interface FormModalContextType {
  isOpen: boolean
  formType: FormType | null
  openModal: (type: FormType) => void
  closeModal: () => void
}

const FormModalContext = createContext<FormModalContextType | undefined>(undefined)

export function FormModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [formType, setFormType] = useState<FormType | null>(null)

  const openModal = (type: FormType) => {
    setFormType(type)
    setIsOpen(true)
  }

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
        closeModal
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
