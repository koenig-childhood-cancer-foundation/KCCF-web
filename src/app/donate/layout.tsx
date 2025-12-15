import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Corporate Donations & Workplace Giving - Support Childhood Cancer Families | KCCF",
  description: "Corporate Social Responsibility (CSR) donations and workplace giving programs. Support families battling childhood cancer through corporate matching gifts, employee fundraising, and philanthropy partnerships.",
  keywords: ["corporate donations", "workplace giving programs", "CSR donations", "corporate social responsibility", "employee fundraising", "corporate matching gifts", "philanthropy partnerships", "nonprofit collaboration", "corporate giving", "donate", "childhood cancer", "cancer foundation", "charity", "donation", "help families", "medical bills"],
  openGraph: {
    title: "Corporate Donations & Workplace Giving - Support Childhood Cancer Families | KCCF",
    description: "Corporate Social Responsibility (CSR) donations and workplace giving programs. Support families battling childhood cancer through corporate matching gifts, employee fundraising, and philanthropy partnerships.",
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
