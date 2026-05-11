import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Fundraisers - Create Your Own Peer-to-Peer Fundraiser | KCCF",
  description: "Join KCCF's peer-to-peer fundraising campaigns to support families battling childhood cancer. Start your own fundraiser, join an existing campaign, or host an event — every dollar reaches a child in need.",
  keywords: ["fundraisers", "peer-to-peer fundraising", "childhood cancer fundraiser", "KCCF", "Elana Koenig", "cancer awareness", "New York", "charity campaigns", "donate", "support families", "fundraising campaigns"],
  openGraph: {
    title: "Fundraisers - Create Your Own Peer-to-Peer Fundraiser | KCCF",
    description: "Join KCCF's peer-to-peer fundraising campaigns to support families battling childhood cancer. Start your own fundraiser, join an existing campaign, or host an event — every dollar reaches a child in need.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/fundraisers` : "https://thekccf.org/fundraisers",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FundraisersLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
