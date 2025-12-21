import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Corporate Gift Bag Volunteering - Crazy Socks for Hospitalized Children | KCCF",
  description: "Corporate Social Responsibility (CSR) volunteering opportunities in NYC. Employee engagement through gift bag assembly for children battling cancer. Turnkey team-building volunteer events with measurable community impact.",
  keywords: ["corporate social responsibility", "CSR", "employee volunteering", "corporate volunteering opportunities", "volunteer days", "volunteer time off", "VTO", "workplace giving programs", "employee engagement programs", "team-building volunteer events", "turnkey volunteering opportunities", "volunteering in NYC", "giving back", "volunteering for children battling cancer", "employee giving back", "scalable CSR partnerships", "measurable community impact", "community impact", "philanthropy partnerships", "nonprofit collaboration", "children's health wellbeing", "cancer support programs", "social impact volunteering", "hands-on volunteering", "fun corporate volunteering", "gift bags hospitalized children", "crazy socks day", "fundraising", "childhood cancer", "awareness", "KCCF"],
  openGraph: {
    title: "Corporate Gift Bag Volunteering - Crazy Socks for Hospitalized Children | KCCF",
    description: "Corporate Social Responsibility (CSR) volunteering opportunities in NYC. Employee engagement through gift bag assembly for children battling cancer. Turnkey team-building volunteer events with measurable community impact.",
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
