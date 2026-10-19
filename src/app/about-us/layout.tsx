import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "About Us: Elana's Story and Our Team | KCCF",
  description: "Diagnosed with cancer at 7, Elana started KCCF in 2020, at 11, with $900 from her piggy bank. Meet our board, advisers and honorary directors.",
  keywords: [
    "Elana Koenig", "KCCF", "about us", "our story", "KCCF team", "board of directors",
    "childhood cancer", "keynote speaker", "book Elana Koenig",
  ],
  openGraph: {
    images: ["https://thekccf.org/og-image.jpg"],
    title: "About Us: Elana's Story and Our Team | KCCF",
    description: "Diagnosed with cancer at 7, Elana started KCCF in 2020, at 11, with $900 from her piggy bank. Meet our board, advisers and honorary directors.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/about-us` : "https://thekccf.org/about-us",
  },
  alternates: {
    canonical: "https://thekccf.org/about-us",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
