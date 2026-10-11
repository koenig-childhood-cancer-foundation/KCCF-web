import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Family Aid - Emergency Financial Aid for Childhood Cancer Families | KCCF",
  description: "Apply for financial assistance to help cover medical bills, transportation, lodging, housing, and daily expenses during your child's cancer treatment. KCCF has supported 4,200+ families. Help paying medical bills starts here.",
  keywords: ["KCCF", "family aid", "financial assistance", "medical bills", "cancer treatment", "childhood cancer help", "help paying medical bills", "cancer financial help", "childhood cancer assistance program", "nonprofit", "New York", "pediatric cancer", "housing assistance", "copays", "medical equipment", "mortgage assistance", "food assistance"],
  openGraph: {
    title: "Family Aid - Emergency Financial Aid for Childhood Cancer Families | KCCF",
    description: "Apply for financial assistance to help cover medical bills, transportation, lodging, housing, and daily expenses during your child's cancer treatment. KCCF has supported 4,200+ families. Help paying medical bills starts here.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/aid` : "https://thekccf.org/aid",
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
