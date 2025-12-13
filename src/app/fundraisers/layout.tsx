import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Fundraisers - Support Our Mission | Koenig Childhood Cancer Foundation",
  description: "Join our peer-to-peer fundraising campaigns and help support families battling childhood cancer. Start your own fundraiser or contribute to existing ones.",
  keywords: ["fundraisers", "fundraising", "peer-to-peer", "donations", "childhood cancer", "support", "charity", "campaigns"],
  openGraph: {
    title: "Fundraisers - Support Our Mission | Koenig Childhood Cancer Foundation",
    description: "Join our peer-to-peer fundraising campaigns and help support families battling childhood cancer. Start your own fundraiser or contribute to existing ones.",
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
