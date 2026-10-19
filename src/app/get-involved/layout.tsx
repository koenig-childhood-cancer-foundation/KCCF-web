import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Get Involved: Fundraise, Volunteer, Sponsor | KCCF",
  description: "Turn a birthday or school event into a fundraiser, bring a gift bag event to your company, or book Elana to speak. KCCF is 100% volunteer-run.",
  keywords: [
    "get involved", "volunteer", "start a fundraiser", "peer-to-peer fundraising", "gift bag event",
    "KCCF", "childhood cancer", "New York", "nonprofit volunteer",
  ],
  openGraph: {
    images: ["https://thekccf.org/og-image.jpg"],
    title: "Get Involved: Fundraise, Volunteer, Sponsor | KCCF",
    description: "Turn a birthday or school event into a fundraiser, bring a gift bag event to your company, or book Elana to speak. KCCF is 100% volunteer-run.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/get-involved` : "https://thekccf.org/get-involved",
  },
  alternates: {
    canonical: "https://thekccf.org/get-involved",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GetInvolvedLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
