import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Our Story - Elana Koenig's Journey | Koenig Childhood Cancer Foundation",
  description: "Discover the inspiring story of Elana Koenig, an 11-year-old cancer survivor who founded KCCF to help families battling childhood cancer. Learn about our mission and impact.",
  keywords: [
    "Elana Koenig", "our story", "founder", "cancer survivor", "childhood cancer", "KCCF history", "mission",
    "teen motivational speaker", "cancer survivor story", "youth changemaker", "inspiring GenZ", "hope and healing",
    "from pain to purpose", "nonprofit founder", "CSR impact", "keynote speaker", "teen leader", "female speaker",
    "graduation speaker", "impact story", "book a speaker", "media spotlight"
  ],
  openGraph: {
    title: "Our Story - Elana Koenig's Journey | Koenig Childhood Cancer Foundation",
    description: "Discover the inspiring story of Elana Koenig, an 11-year-old cancer survivor who founded KCCF to help families battling childhood cancer. Learn about our mission and impact.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/our-story` : "https://thekccf.org/our-story",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OurStoryLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
