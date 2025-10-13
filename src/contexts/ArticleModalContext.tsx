"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

export type ArticleType = 'people-magazine'

interface ArticleConfig {
  title: string
  subtitle?: string
  publication: string
  content: string
  imageUrl?: string
  externalUrl?: string
}

export const ARTICLE_CONFIGS: Record<ArticleType, ArticleConfig> = {
  'people-magazine': {
    title: 'Teen Cancer Survivor Turns Her Pain Into Purpose',
    subtitle: 'Elana Koenig founded the Koenig Childhood Cancer Foundation to help families facing childhood cancer',
    publication: 'People Magazine',
    content: `At just 14 years old, Elana Koenig has already made an indelible mark on the world of philanthropy. After battling cancer herself, Elana founded the Koenig Childhood Cancer Foundation (KCCF) to support other families navigating the challenging journey of childhood cancer.

"I remember how difficult it was for my family during treatment," Elana shares. "I wanted to make sure other families didn't have to face those same struggles alone."

Through KCCF, Elana has organized gift bag events, provided financial assistance to families, and created a summer camp program for children affected by cancer. Her foundation has already helped hundreds of families and raised awareness about the unique challenges faced by children with cancer.

Elana's story has inspired people across the nation, and she continues to be a powerful advocate for childhood cancer awareness and support.`,
    externalUrl: 'https://www.youtube.com/watch?v=Bgisln8H59w'
  }
}

interface ArticleModalContextType {
  isOpen: boolean
  articleType: ArticleType | null
  openModal: (type: ArticleType) => void
  closeModal: () => void
}

const ArticleModalContext = createContext<ArticleModalContextType | undefined>(undefined)

export function ArticleModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [articleType, setArticleType] = useState<ArticleType | null>(null)

  const openModal = (type: ArticleType) => {
    setArticleType(type)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setArticleType(null)
  }

  return (
    <ArticleModalContext.Provider
      value={{
        isOpen,
        articleType,
        openModal,
        closeModal
      }}
    >
      {children}
    </ArticleModalContext.Provider>
  )
}

export function useArticleModal() {
  const context = useContext(ArticleModalContext)
  if (context === undefined) {
    throw new Error('useArticleModal must be used within an ArticleModalProvider')
  }
  return context
}
