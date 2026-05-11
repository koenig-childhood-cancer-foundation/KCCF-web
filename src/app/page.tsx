import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'https://thekccf.org',
  ),
  title:
    'Koenig Childhood Cancer Foundation - Financial and emotional support to families fighting pediatric cancer | KCCF',
  description:
    'Koenig Childhood Cancer Foundation — founded by cancer survivor Elana Koenig at age 11 with just $900 from her piggy bank. KCCF has supported 4,200+ families battling childhood cancer through financial aid, summer camp, and community programs, delivering over 105,000 gift bags — containing 315,000 items — to hospitalized children across the U.S. Featured on The Kelly Clarkson Show, People Magazine, ABC, NBC, CBS, and CNBC, as well as international media. Elana also sang the National Anthem at Citi Field during a New York Mets game.',
  keywords: [
    'childhood cancer foundation',
    'family run charity',
    'fast growing charity',
    'non profit helping children battling cancer',
    'financial suport',
    'emotional support',
    'healing summer camp for children battling cancer and their siblings',
    'child founder',
    'survivor founder',
    'CSR',
    'corporate partnership',
  ],
  openGraph: {
    title:
      'Koenig Childhood Cancer Foundation - Financial and emotional support to families fighting pediatric cancer | KCCF',
    description:
      'Koenig Childhood Cancer Foundation — founded by cancer survivor Elana Koenig at age 11 with just $900 from her piggy bank. KCCF has supported 4,200+ families battling childhood cancer through financial aid, summer camp, and community programs, delivering over 105,000 gift bags — containing 315,000 items — to hospitalized children across the U.S. Featured on The Kelly Clarkson Show, People Magazine, ABC, NBC, CBS, and CNBC, as well as international media. Elana also sang the National Anthem at Citi Field during a New York Mets game.',
    type: 'website',
    url: process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'https://thekccf.org',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Koenig Childhood Cancer Foundation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Koenig Childhood Cancer Foundation - Financial and emotional support to families fighting pediatric cancer | KCCF',
    description:
      'Koenig Childhood Cancer Foundation — founded by cancer survivor Elana Koenig at age 11 with just $900 from her piggy bank. KCCF has supported 4,200+ families battling childhood cancer through financial aid, summer camp, and community programs, delivering over 105,000 gift bags — containing 315,000 items — to hospitalized children across the U.S. Featured on The Kelly Clarkson Show, People Magazine, ABC, NBC, CBS, and CNBC, as well as international media. Elana also sang the National Anthem at Citi Field during a New York Mets game.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return <HomeContent />;
}
