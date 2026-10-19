import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Privacy Policy | KCCF",
  description: "How we collect, use and protect your information, and how to manage your cookie choices.",
  keywords: ["privacy policy", "GDPR", "California privacy", "CCPA", "cookie policy", "data protection", "personal information", "KCCF", "childhood cancer foundation"],
  openGraph: {
    images: ["https://thekccf.org/og-image.jpg"],
    title: "Privacy Policy | KCCF",
    description: "How we collect, use and protect your information, and how to manage your cookie choices.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/privacy` : "https://thekccf.org/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
