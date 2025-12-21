import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Contact Us - Corporate Partnerships & Family Support | KCCF",
  description: "Contact KCCF for corporate partnerships, CSR programs, employee volunteering opportunities, or family support. We help companies create meaningful community impact through childhood cancer support.",
  keywords: ["contact", "corporate partnerships", "CSR programs", "employee volunteering opportunities", "corporate social responsibility", "workplace giving", "nonprofit collaboration", "childhood cancer", "support", "help", "KCCF", "Elana Koenig", "cancer foundation"],
  openGraph: {
    title: "Contact Us - Corporate Partnerships & Family Support | KCCF",
    description: "Contact KCCF for corporate partnerships, CSR programs, employee volunteering opportunities, or family support. We help companies create meaningful community impact through childhood cancer support.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/contact` : "https://thekccf.org/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
