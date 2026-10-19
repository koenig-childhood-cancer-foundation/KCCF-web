export interface SearchItem {
  title: string
  description: string
  href: string
  keywords: string[]
  category: string
}

export const searchData: SearchItem[] = [
  {
    title: 'Home',
    description: 'Welcome to Koenig Childhood Cancer Foundation (KCCF)',
    href: '/',
    keywords: ['home', 'welcome', 'kccf', 'foundation', 'childhood cancer'],
    category: 'Pages'
  },
  {
    title: 'About Us',
    description: "Elana's story, our mission and the KCCF team",
    href: '/about-us',
    keywords: ['about', 'about us', 'story', 'our story', 'mission', 'elana', 'koenig', 'history', 'founder', 'team', 'board', 'kccf family', 'speaker'],
    category: 'About'
  },
  {
    title: 'Family Aid',
    description: 'Financial and emotional support for families fighting childhood cancer',
    href: '/aid',
    keywords: ['aid', 'assistance', 'financial', 'help', 'support', 'apply', 'families'],
    category: 'Programs'
  },
  {
    title: 'Crazy Socks',
    description: 'Gift bag making events for children in the hospital',
    href: '/crazy-socks',
    keywords: ['crazy socks', 'gift bags', 'corporate', 'csr', 'team building', 'employee volunteering', 'volunteer day', 'sponsor', 'company event'],
    category: 'Programs'
  },
  {
    title: 'KCCF Camp',
    description: 'Emotional healing for children with cancer and their siblings, free for families',
    href: '/camp',
    keywords: ['camp', 'summer', 'kids', 'children', 'activities', 'recreation'],
    category: 'Programs'
  },
  {
    title: 'Contact Us',
    description: 'Get in touch with the KCCF team',
    href: '/contact',
    keywords: ['contact', 'reach', 'email', 'phone', 'message', 'questions'],
    category: 'Contact'
  },
  {
    title: 'Get Involved',
    description: 'Start a fundraiser, sponsor a gift bag event, book Elana to speak, help build our camp or volunteer',
    href: '/get-involved',
    keywords: ['volunteer', 'help', 'join', 'team', 'contribute', 'service', 'corporate', 'company', 'csr', 'team building'],
    category: 'Contact'
  },
  {
    title: 'Media',
    description: 'Press coverage, videos, and media resources',
    href: '/media',
    keywords: ['media', 'press', 'news', 'videos', 'coverage', 'articles'],
    category: 'Pages'
  },
  {
    title: 'Start a Fundraiser',
    description: 'Start your own peer-to-peer fundraiser for children with cancer',
    href: '/get-involved#fundraisers',
    keywords: ['fundraisers', 'events', 'donate', 'charity', 'upcoming'],
    category: 'Pages'
  },
  {
    title: 'Donate',
    description: 'Make a donation to support children fighting cancer',
    href: '/donate',
    keywords: ['donate', 'donation', 'give', 'support', 'contribute', 'help', 'matching gift', 'workplace giving', 'benevity', 'employee giving'],
    category: 'Pages'
  },
  {
    title: 'Financials',
    description: 'Where every gift goes, plus our Financial Review, Form 990s, IRS letter and W-9',
    href: '/financials',
    keywords: ['financials', 'financial review', '990', 'form 990', 'w-9', 'w9', 'irs', '501c3', 'annual report', 'ratings', 'charity navigator', 'candid', 'transparency'],
    category: 'About'
  },
  {
    title: 'Privacy Policy',
    description: 'Our privacy policy and data protection practices',
    href: '/privacy',
    keywords: ['privacy', 'policy', 'data', 'protection', 'terms'],
    category: 'Pages'
  }
]
