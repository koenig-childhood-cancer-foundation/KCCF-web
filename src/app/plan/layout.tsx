import type { Metadata } from 'next';
import { type ReactNode } from 'react';

// Short link only: kept out of Google, which is pointed at the real page. The preview (photo and text)
// matches the Crazy Socks page, so LinkedIn shows the same card under the short link.
export const metadata: Metadata = {
  title: "Crazy Socks Gift Making – Team-Building Event | KCCF",
  description: "A corporate team-building event for companies and groups: hear teen cancer survivor Elana's story, then pack gift bags for children fighting cancer in hospitals.",
  robots: { index: false, follow: true },
  openGraph: {
    images: ["https://thekccf.org/og-image.jpg"],
    title: "Crazy Socks Gift Making – Team-Building Event | KCCF",
    description: "A corporate team-building event for companies and groups: hear teen cancer survivor Elana's story, then pack gift bags for children fighting cancer in hospitals.",
    type: "website",
    url: "https://thekccf.org/plan",
  },
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
