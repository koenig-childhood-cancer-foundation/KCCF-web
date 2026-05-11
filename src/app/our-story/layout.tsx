import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Our Story - Founder, Survivor Elana Koenig | KCCF",
  description: "Discover the inspiring story of how Elana Koenig founded KCCF at age 11 with $900 from her piggy bank — becoming one of the youngest nonprofit founders in the world. Now 17 and Cornell-bound, Elana has turned her cancer survival story into a global mission. Book Elana Koenig - Keynote Speaker for your graduation events, company gatherings, galas, etc.",
  keywords: [
    "Elana Koenig", "KCCF", "our story", "KCCF history", "mission", "cancer survivor", "childhood cancer",
    "founded at age 11", "piggy bank", "youngest nonprofit founder", "10 years cancer free", "family run",
    "Gen Z", "youth changemaker", "teen leader", "inspiring speaker", "keynote speaker", "motivational speaker",
    "book Elana Koenig", "female speaker", "CSR impact", "Kelly Clarkson Show", "People Magazine", "Cornell",
    "childhood cancer advocate"
  ],
  openGraph: {
    title: "Our Story - Founder, Survivor Elana Koenig | KCCF",
    description: "Discover the inspiring story of how Elana Koenig founded KCCF at age 11 with $900 from her piggy bank — becoming one of the youngest nonprofit founders in the world. Now 17 and Cornell-bound, Elana has turned her cancer survival story into a global mission. Book Elana Koenig - Keynote Speaker for your graduation events, company gatherings, galas, etc.",
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
