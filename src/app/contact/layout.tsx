import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Contact Us | KCCF",
  description: "Family aid, booking keynote speaker Elana, gift bag events, KCCF Camp and more: send us a message or email join@thekccf.org.",
  keywords: ["contact", "KCCF", "corporate partnerships", "CSR programs", "employee volunteering", "corporate social responsibility", "workplace giving", "nonprofit", "childhood cancer", "New York", "NYC", "support"],
  openGraph: {
    images: ["https://thekccf.org/og-image.jpg"],
    title: "Contact Us | KCCF",
    description: "Family aid, booking keynote speaker Elana, gift bag events, KCCF Camp and more: send us a message or email join@thekccf.org.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/contact` : "https://thekccf.org/contact",
  },
  alternates: {
    canonical: "https://thekccf.org/contact",
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
