import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Media Coverage - Koenig Childhood Cancer Foundation in the News",
  description: "See KCCF and founder Elana Koenig featured in major media outlets including The Kelly Clarkson Show, People Magazine, Nasdaq, and more. Discover our impact through media coverage.",
  keywords: ["media coverage", "news", "Elana Koenig", "Kelly Clarkson Show", "People Magazine", "Nasdaq", "press", "interviews"],
  openGraph: {
    title: "Media Coverage - Koenig Childhood Cancer Foundation in the News",
    description: "See KCCF and founder Elana Koenig featured in major media outlets including The Kelly Clarkson Show, People Magazine, Nasdaq, and more. Discover our impact through media coverage.",
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
