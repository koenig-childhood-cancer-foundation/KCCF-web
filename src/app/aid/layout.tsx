import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Family Aid: Emergency Help for Families | KCCF",
  description: "We cover co-pays, rent, lodging and travel while a child is in active cancer treatment. 4,800+ families helped so far. Apply in 3 steps.",
  keywords: ["KCCF", "family aid", "financial assistance", "medical bills", "cancer treatment", "childhood cancer help", "help paying medical bills", "cancer financial help", "childhood cancer assistance program", "nonprofit", "New York", "pediatric cancer", "housing assistance", "copays", "medical equipment", "mortgage assistance", "food assistance"],
  openGraph: {
    images: ["https://thekccf.org/og-image.jpg"],
    title: "Family Aid: Emergency Help for Families | KCCF",
    description: "We cover co-pays, rent, lodging and travel while a child is in active cancer treatment. 4,800+ families helped so far. Apply in 3 steps.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/aid` : "https://thekccf.org/aid",
  },
  alternates: {
    canonical: "https://thekccf.org/aid",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AidLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
