import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Crazy Socks - Corporate Volunteering & Care Package Assembly Events for Children with Cancer",
  description: "Sponsor and host a Corporate Social Responsibility (CSR) event. Engage your team through gift bag assembly for children battling cancer — a turnkey, measurable, and meaningful employee volunteer event. We bring the event to you.",
  keywords: ["Corporate social responsibility", "CSR", "employee volunteering", "corporate volunteering NYC", "volunteer days", "VTO", "workplace giving", "employee engagement", "team-building", "childhood cancer", "crazy socks", "gift bags", "care packages", "hospitalized children", "KCCF"],
  openGraph: {
    title: "Crazy Socks - Corporate Volunteering & Care Package Assembly Events for Children with Cancer",
    description: "Sponsor and host a Corporate Social Responsibility (CSR) event. Engage your team through gift bag assembly for children battling cancer — a turnkey, measurable, and meaningful employee volunteer event. We bring the event to you.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/crazy-socks` : "https://thekccf.org/crazy-socks",
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
