import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "KCCF Family - Our Team | KCCF",
  description: "Meet the incredible team of people who have been driving and supporting our mission.",
  keywords: ["KCCF Leadership", "KCCF team", "KCCF Board Members"],
  openGraph: {
    title: "KCCF Family - Our Team | KCCF",
    description: "Meet the incredible team of people who have been driving and supporting our mission.",
    type: 'website',
    url: process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/kccf-family`
      : 'https://thekccf.org/kccf-family',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KCCFFamilyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
