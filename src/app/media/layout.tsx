import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Media Coverage - KCCF and Elana, Founder, In The News | KCCF",
  description: "See KCCF and founder Elana Koenig featured in major media outlets, including The Kelly Clarkson Show, People Magazine, ABC, NBC, CBS, CNBC, and more. Discover our impact through national and international media coverage.",
  keywords: ["media coverage", "news", "Elana Koenig", "Kelly Clarkson Show", "People Magazine", "Nasdaq", "press", "Elana interviews", "childhood cancer foundation", "nonprofit news", "New York", "KCCF", "cancer survivor story", "inspiration story", "ABC", "NBC", "CBS", "The Mets Game", "thekccf.org"],
  openGraph: {
    title: "Media Coverage - KCCF and Elana, Founder, In The News | KCCF",
    description: "See KCCF and founder Elana Koenig featured in major media outlets, including The Kelly Clarkson Show, People Magazine, ABC, NBC, CBS, CNBC, and more. Discover our impact through national and international media coverage.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/media` : "https://thekccf.org/media",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MediaLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
