import type { Metadata } from 'next';
import { type ReactNode } from 'react';

// Short link only: keep it out of Google and point search engines at the real page.
export const metadata: Metadata = {
  title: "Plan a Crazy Socks event | KCCF",
  robots: { index: false, follow: true },
  alternates: {
    canonical: "https://thekccf.org/crazy-socks",
  },
};

export default function PlanLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
