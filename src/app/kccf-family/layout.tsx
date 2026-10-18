import type { Metadata } from 'next';
import { type ReactNode } from 'react';

// KCCF Family moved to About Us. The page forwards visitors there; this tells Google the new address.
export const metadata: Metadata = {
  title: "KCCF Family has moved to About Us | KCCF",
  description: "Elana's story, our mission and the KCCF team are now on our About Us page.",
  alternates: {
    canonical: "https://thekccf.org/about-us",
  },
};

export default function KccfFamilyLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
