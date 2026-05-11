import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Volunteer - Help Children with Cancer | Individual & Community Volunteering | KCCF",
  description: "Join KCCF as an individual volunteer and make a direct difference in the lives of children battling cancer.",
  keywords: ["volunteer", "volunteering", "individual volunteer", "community service", "childhood cancer", "KCCF", "help children", "hospital volunteering", "New York", "nonprofit volunteer", "make a difference", "cancer support"],
  openGraph: {
    title: "Volunteer - Help Children with Cancer | Individual & Community Volunteering | KCCF",
    description: "Join KCCF as an individual volunteer and make a direct difference in the lives of children battling cancer.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/volunteer` : "https://thekccf.org/volunteer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function VolunteerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
