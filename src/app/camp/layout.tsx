import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Corporate Team-Building Camp Volunteering - Children's Cancer Support | KCCF",
  description: "Corporate volunteering opportunities at our therapeutic camp for children with cancer. Employee engagement through camp counselor programs and team-building volunteer experiences in a meaningful cause.",
  keywords: ["corporate team-building", "camp volunteering", "employee engagement programs", "corporate social responsibility", "CSR", "therapeutic camp", "camp counselor volunteering", "team-building volunteer events", "corporate volunteer opportunities", "camp", "summer camp", "children with cancer", "camp counselor", "camper registration", "cancer support", "family camp"],
  openGraph: {
    title: "Corporate Team-Building Camp Volunteering - Children's Cancer Support | KCCF",
    description: "Corporate volunteering opportunities at our therapeutic camp for children with cancer. Employee engagement through camp counselor programs and team-building volunteer experiences in a meaningful cause.",
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
