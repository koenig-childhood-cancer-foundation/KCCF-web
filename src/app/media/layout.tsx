import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Media: Elana in the News | KCCF",
  description: "Three times on The Kelly Clarkson Show, featured in People Magazine, honored by Nasdaq, and covered by national and international news.",
  keywords: ["media coverage", "news", "Elana Koenig", "Kelly Clarkson Show", "People Magazine", "Nasdaq", "press", "Elana interviews", "childhood cancer foundation", "nonprofit news", "New York", "KCCF", "cancer survivor story", "inspiration story", "ABC", "NBC", "CBS", "The Mets Game", "thekccf.org"],
  openGraph: {
    images: ["https://thekccf.org/og-image.jpg"],
    title: "Media: Elana in the News | KCCF",
    description: "Three times on The Kelly Clarkson Show, featured in People Magazine, honored by Nasdaq, and covered by national and international news.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/media` : "https://thekccf.org/media",
  },
  alternates: {
    canonical: "https://thekccf.org/media",
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
