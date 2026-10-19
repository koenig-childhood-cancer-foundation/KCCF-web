import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Financials | KCCF",
  description: "90.6% of expenses went to programs (KCCF's 2025 Financial Review). Download our Financial Review, Form 990s, IRS letter and W-9.",
  keywords: ["KCCF financials", "Form 990", "financial review", "W-9", "501(c)(3)", "charity transparency", "Charity Navigator", "Candid", "childhood cancer foundation"],
  openGraph: {
    images: ["https://thekccf.org/og-image.jpg"],
    title: "Financials | KCCF",
    description: "90.6% of expenses went to programs (KCCF's 2025 Financial Review). Download our Financial Review, Form 990s, IRS letter and W-9.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/financials` : "https://thekccf.org/financials",
  },
  alternates: {
    canonical: "https://thekccf.org/financials",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FinancialsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
