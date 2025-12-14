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
    description: 'Welcome to the Koenig Childhood Cancer Foundation',
    href: '/',
    keywords: ['home', 'welcome', 'kccf', 'foundation', 'childhood cancer'],
    category: 'Pages'
  },
  {
    title: 'Our Story',
    description: 'Learn about our mission and the story behind KCCF',
    href: '/our-story',
    keywords: ['story', 'mission', 'about', 'elana', 'koenig', 'history', 'founder'],
    category: 'About'
  },
  {
    title: 'KCCF Family',
    description: 'Meet the families we have helped',
    href: '/kccf-family',
    keywords: ['family', 'families', 'helped', 'support', 'children', 'kids'],
    category: 'About'
  },
  {
    title: 'Family Assistance',
    description: 'Financial and emotional support for families fighting childhood cancer',
    href: '/aid',
    keywords: ['aid', 'assistance', 'financial', 'help', 'support', 'apply', 'families'],
    category: 'Programs'
  },
  {
    title: 'Crazy Socks',
    description: 'Our signature fundraising program with fun, colorful socks',
    href: '/crazy-socks',
    keywords: ['crazy', 'socks', 'fundraising', 'merchandise', 'buy', 'sponsor'],
    category: 'Programs'
  },
  {
    title: 'Camp',
    description: 'Camp programs for children affected by cancer',
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
    title: 'Volunteer',
    description: 'Join our team of volunteers and make a difference',
    href: '/volunteer',
    keywords: ['volunteer', 'help', 'join', 'team', 'contribute', 'service'],
    category: 'Contact'
  },
  {
    title: 'Newsletter Signup',
    description: 'Stay updated with our latest news and events',
    href: '/newsletter-signup',
    keywords: ['newsletter', 'signup', 'email', 'updates', 'news', 'subscribe'],
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
    title: 'Fundraisers',
    description: 'Upcoming and past fundraising events',
    href: '/fundraisers',
    keywords: ['fundraisers', 'events', 'donate', 'charity', 'upcoming'],
    category: 'Pages'
  },
  {
    title: 'Donate',
    description: 'Make a donation to support children fighting cancer',
    href: '/donate',
    keywords: ['donate', 'donation', 'give', 'support', 'contribute', 'help'],
    category: 'Pages'
  },
  {
    title: 'Privacy Policy',
    description: 'Our privacy policy and data protection practices',
    href: '/privacy',
    keywords: ['privacy', 'policy', 'data', 'protection', 'terms'],
    category: 'Pages'
  }
]
