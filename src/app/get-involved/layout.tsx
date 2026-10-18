import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Get Involved - Start a Fundraiser or Volunteer | KCCF",
  description: "Start a peer-to-peer fundraiser for Koenig Childhood Cancer Foundation (KCCF), bring a Crazy Socks gift bag event to your company, help build the KCCF International Camp, or volunteer your skills.",
  keywords: [
    "get involved", "volunteer", "start a fundraiser", "peer-to-peer fundraising", "gift bag event",
    "KCCF", "childhood cancer", "New York", "nonprofit volunteer",
  ],
  openGraph: {
    title: "Get Involved - Start a Fundraiser or Volunteer | KCCF",
    description: "Start a fundraiser for KCCF, bring a Crazy Socks gift bag event to your company, help build our camp, or volunteer your skills.",
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
