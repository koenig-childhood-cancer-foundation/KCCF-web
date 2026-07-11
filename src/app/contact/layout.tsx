import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Contact Us | KCCF",
  description: "Contact KCCF for partnerships, CSR programs, volunteering, applying for financial support, and beyond.",
  keywords: ["contact", "KCCF", "corporate partnerships", "CSR programs", "employee volunteering", "corporate social responsibility", "workplace giving", "nonprofit", "childhood cancer", "New York", "NYC", "support"],
  openGraph: {
    title: "Contact Us | KCCF",
    description: "Contact KCCF for partnerships, CSR programs, volunteering, applying for financial support, and beyond.",
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
