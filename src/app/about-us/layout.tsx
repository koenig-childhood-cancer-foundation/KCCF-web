import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "About Us - Our Story and Team | KCCF",
  description: "How Elana Koenig founded Koenig Childhood Cancer Foundation (KCCF) in 2020, at age 11, with the $900 in her piggy bank, and the team behind KCCF today. Book Elana as a keynote speaker.",
  keywords: [
    "Elana Koenig", "KCCF", "about us", "our story", "KCCF team", "board of directors",
    "childhood cancer", "keynote speaker", "book Elana Koenig",
  ],
  openGraph: {
    title: "About Us - Our Story and Team | KCCF",
    description: "How Elana Koenig founded KCCF in 2020, at age 11, with the $900 in her piggy bank, and the team behind KCCF today.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/about-us` : "https://thekccf.org/about-us",
  },
  // Not indexed until the menu points here and the old Our Story / KCCF Family pages are retired
  robots: {
    index: false,
    follow: true,
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
