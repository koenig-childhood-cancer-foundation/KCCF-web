import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Donate: Help a Child Beat Cancer | KCCF",
  description: "90.6% of expenses went to programs (KCCF's 2025 Financial Review). Give online, by check, stock, crypto or DAF. Every gift is tax-deductible.",
  keywords: ["donate", "childhood cancer", "cancer foundation", "charity", "donation", "help families", "tax deductible donation", "501c3", "end of year giving", "giving tuesday", "corporate donations", "workplace giving", "CSR donations", "corporate matching gifts", "KCCF", "nonprofit", "New York", "benevity", "bonaterra"],
  openGraph: {
    images: ["https://thekccf.org/og-image.jpg"],
    title: "Donate: Help a Child Beat Cancer | KCCF",
    description: "90.6% of expenses went to programs (KCCF's 2025 Financial Review). Give online, by check, stock, crypto or DAF. Every gift is tax-deductible.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/donate` : "https://thekccf.org/donate",
  },
  alternates: {
    canonical: "https://thekccf.org/donate",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DonateLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
