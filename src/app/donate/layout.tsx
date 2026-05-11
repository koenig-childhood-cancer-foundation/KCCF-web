import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Donate - Support Children Battling Cancer | KCCF",
  description: "Support families battling childhood cancer. Your tax-deductible donation goes directly to children in need. Individual donations, corporate matching gifts, and workplace giving programs all accepted. Every gift makes a difference — donate today.",
  keywords: ["donate", "childhood cancer", "cancer foundation", "charity", "donation", "help families", "tax deductible donation", "501c3", "end of year giving", "giving tuesday", "corporate donations", "workplace giving", "CSR donations", "corporate matching gifts", "KCCF", "nonprofit", "New York", "benevity", "bonaterra"],
  openGraph: {
    title: "Donate - Support Children Battling Cancer | KCCF",
    description: "Support families battling childhood cancer. Your tax-deductible donation goes directly to children in need. Individual donations, corporate matching gifts, and workplace giving programs all accepted. Every gift makes a difference — donate today.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/donate` : "https://thekccf.org/donate",
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
