import type { Metadata } from 'next';
import { type ReactNode } from 'react';

// Our Story moved to About Us. The page forwards visitors there; this tells Google the new address.
export const metadata: Metadata = {
  title: "Our Story has moved to About Us | KCCF",
  description: "Elana's story, our mission and the KCCF team are now on our About Us page.",
  alternates: {
    canonical: "https://thekccf.org/about-us",
  },
};

export default function OurStoryLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
