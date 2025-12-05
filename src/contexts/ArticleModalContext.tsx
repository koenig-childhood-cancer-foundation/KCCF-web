"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

export type ArticleType = 'people-magazine' | 'abc-news' | 'nbc-today-show' | 'forbes'

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
  },
  'abc-news': {
    title: '11-Year-Old Cancer Survivor Creates Foundation to Help Other Children',
    subtitle: 'Elana Koenig\'s inspiring journey from cancer patient to foundation founder is making waves across the nation',
    publication: 'ABC News',
    content: `Elana Koenig's story is one of resilience and compassion. At just 11 years old, after surviving cancer, she founded the Koenig Childhood Cancer Foundation (KCCF) to help other children and families going through similar challenges.

Her journey began when she was diagnosed with cancer at a young age. During her treatment, Elana witnessed firsthand the struggles that families face - from financial burdens to emotional challenges. This experience sparked her determination to make a difference.

"I wanted to give back to the community that supported me during my treatment," Elana explains. "Every child deserves to have hope and support during their cancer journey."

The foundation has grown rapidly, providing gift bags, financial assistance, and emotional support to families across the nation. Elana's dedication has inspired countless others to join the cause.`
  },
  'nbc-today-show': {
    title: 'Crazy Socks Day: How One Girl\'s Idea is Changing Lives',
    subtitle: 'The annual Crazy Socks Day event has raised over $2 million for families battling childhood cancer',
    publication: 'NBC Today Show',
    content: `What started as a simple idea has turned into a nationwide movement. Crazy Socks Day, created by Elana Koenig and her foundation, encourages people to wear their craziest socks and donate to support families battling childhood cancer.

The event has become an annual tradition in schools and businesses across the country. Participants wear colorful, mismatched, or themed socks to raise awareness about childhood cancer while raising funds for affected families.

"Socks might seem like a small thing, but they represent something bigger," says Elana. "They're a reminder that it's okay to be different, to stand out, and to support each other."

Since its inception, Crazy Socks Day has raised over $2 million and has helped hundreds of families with medical expenses, housing costs, and other necessities during their cancer journey.`
  },
  'forbes': {
    title: 'Young Philanthropist of the Year: Elana Koenig',
    subtitle: 'At just 14 years old, Elana Koenig has already made an indelible mark on the world of philanthropy',
    publication: 'Forbes',
    content: `At an age when most teenagers are focused on school and friends, Elana Koenig has built a foundation that has touched the lives of hundreds of families battling childhood cancer.

Forbes recognizes Elana Koenig as one of the youngest and most impactful philanthropists of the year. Her Koenig Childhood Cancer Foundation (KCCF) has become a beacon of hope for families navigating the challenging journey of childhood cancer treatment.

"Elana's ability to turn her personal experience into a force for good is remarkable," notes the Forbes selection committee. "Her leadership skills and dedication to her cause are an inspiration to philanthropists of all ages."

Under Elana's leadership, KCCF has expanded its programs to include summer camps, gift bag events, financial assistance programs, and advocacy initiatives. The foundation continues to grow, driven by Elana's unwavering commitment to helping others.`
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
