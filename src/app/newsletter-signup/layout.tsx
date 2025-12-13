import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Newsletter Signup - Stay Connected with KCCF | Koenig Childhood Cancer Foundation",
  description: "Stay updated with the latest news, events, and impact stories from the Koenig Childhood Cancer Foundation. Join our newsletter to be part of our mission.",
  keywords: ["newsletter", "signup", "updates", "news", "events", "KCCF", "childhood cancer", "subscribe"],
  openGraph: {
    title: "Newsletter Signup - Stay Connected with KCCF | Koenig Childhood Cancer Foundation",
    description: "Stay updated with the latest news, events, and impact stories from the Koenig Childhood Cancer Foundation. Join our newsletter to be part of our mission.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/newsletter-signup` : "https://thekccf.org/newsletter-signup",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NewsletterSignupLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
