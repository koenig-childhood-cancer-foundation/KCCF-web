import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'https://thekccf.org',
  ),
  title:
    "Helping Children Beat Cancer | Koenig Childhood Cancer Foundation",
  description:
    "KCCF \u2014 founded by cancer survivor Elana Koenig at age 11 \u2014 has helped 4,800+ families and delivered 135,000+ gift bags to children in the hospital.",
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
      "Helping Children Beat Cancer | Koenig Childhood Cancer Foundation",
    description:
      "KCCF \u2014 founded by cancer survivor Elana Koenig at age 11 \u2014 has helped 4,800+ families and delivered 135,000+ gift bags to children in the hospital.",
    type: 'website',
    url: process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'https://thekccf.org',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Elana Koenig with a child in the hospital, and the words Helping Children Beat Cancer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Helping Children Beat Cancer | Koenig Childhood Cancer Foundation",
    description:
      "KCCF \u2014 founded by cancer survivor Elana Koenig at age 11 \u2014 has helped 4,800+ families and delivered 135,000+ gift bags to children in the hospital.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://thekccf.org/',
  },
};

export default function Home() {
  return <HomeContent />;
}
