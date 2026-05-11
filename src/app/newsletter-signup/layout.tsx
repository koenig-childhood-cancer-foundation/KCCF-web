import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Newsletter Signup - Stay Connected | KCCF",
  description: "Stay updated with the latest news, events, and impact stories from Koenig Childhood Cancer Foundation. Join our newsletter to be part of Elana Koenig's mission to support children battling cancer.",
  keywords: ["newsletter", "signup", "KCCF updates", "cancer foundation newsletter", "Elana Koenig", "childhood cancer", "news", "events", "subscribe", "children fighting cancer stories", "KCCF"],
  openGraph: {
    title: "Newsletter Signup - Stay Connected | KCCF",
    description: "Stay updated with the latest news, events, and impact stories from Koenig Childhood Cancer Foundation. Join our newsletter to be part of Elana Koenig's mission to support children battling cancer.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/newsletter-signup` : "https://thekccf.org/newsletter-signup",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function NewsletterSignupLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
