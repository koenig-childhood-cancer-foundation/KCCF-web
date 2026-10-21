import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "International Camp in Azerbaijan | KCCF Camp",
  description: "For children with cancer and their siblings, 100% free for families. 120 children hosted so far. Volunteer, or hear when registration opens.",
  keywords: ["KCCF camp", "KCCF International Camp", "summer camp Azerbaijan", "children with cancer", "siblings of cancer patients", "pediatric cancer camp", "cancer support", "healing camp", "camp counselor volunteering", "corporate volunteering", "CSR", "therapeutic camp", "employee engagement", "international camp", "Azerbaijan"],
  openGraph: {
    images: ["https://thekccf.org/og-image.jpg"],
    title: "International Camp in Azerbaijan | KCCF Camp",
    description: "For children with cancer and their siblings, 100% free for families. 120 children hosted so far. Volunteer, or hear when registration opens.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/camp` : "https://thekccf.org/camp",
  },
  alternates: {
    canonical: "https://thekccf.org/camp",
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
