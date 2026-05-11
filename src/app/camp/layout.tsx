import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "KCCF Camp - International Summer Camp for Children with Cancer & Siblings | KCCF",
  description: "An international summer camp experience in Azerbaijan for children diagnosed with cancer and their siblings. KCCF Healing Camp fosters confidence, joy, and emotional healing — giving kids the chance to simply be kids again.",
  keywords: ["KCCF camp", "KCCF Healing Camp", "summer camp Azerbaijan", "children with cancer", "siblings of cancer patients", "pediatric cancer camp", "cancer support", "healing camp", "camp counselor volunteering", "corporate volunteering", "CSR", "therapeutic camp", "employee engagement", "international camp", "Azerbaijan"],
  openGraph: {
    title: "KCCF Camp - International Summer Camp for Children with Cancer & Siblings | KCCF",
    description: "An international summer camp experience in Azerbaijan for children diagnosed with cancer and their siblings. KCCF Healing Camp fosters confidence, joy, and emotional healing — giving kids the chance to simply be kids again.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/camp` : "https://thekccf.org/camp",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CampLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
