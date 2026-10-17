import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Get Involved - Volunteer or Start a Fundraiser | KCCF",
  description: "Volunteer with Koenig Childhood Cancer Foundation (KCCF), start a fundraiser, sponsor a Crazy Socks gift bag event, or help at the KCCF International Camp.",
  keywords: [
    "get involved", "volunteer", "start a fundraiser", "peer-to-peer fundraising", "gift bag event",
    "KCCF", "childhood cancer", "New York", "nonprofit volunteer",
  ],
  openGraph: {
    title: "Get Involved - Volunteer or Start a Fundraiser | KCCF",
    description: "Volunteer with KCCF, start a fundraiser, sponsor a gift bag event, or help at the KCCF International Camp.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/get-involved` : "https://thekccf.org/get-involved",
  },
  // Not indexed until the menu points here and the old Volunteer / Fundraisers pages are retired
  robots: {
    index: false,
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
