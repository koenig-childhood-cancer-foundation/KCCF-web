import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Crazy Socks Gift Bags: Sponsor an Event | KCCF",
  description: "A corporate team-building event with heart: your team packs gift bags for children in the hospital while Elana shares her story.",
  keywords: ["Corporate social responsibility", "CSR", "employee volunteering", "corporate volunteering NYC", "volunteer days", "VTO", "workplace giving", "employee engagement", "team-building", "childhood cancer", "crazy socks", "gift bags", "care packages", "hospitalized children", "KCCF"],
  openGraph: {
    images: ["https://thekccf.org/og-image.jpg"],
    title: "Crazy Socks Gift Bags: Sponsor an Event | KCCF",
    description: "A corporate team-building event with heart: your team packs gift bags for children in the hospital while Elana shares her story.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/crazy-socks` : "https://thekccf.org/crazy-socks",
  },
  alternates: {
    canonical: "https://thekccf.org/crazy-socks",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CrazySocksLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
