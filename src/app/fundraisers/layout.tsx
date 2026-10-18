import type { Metadata } from 'next';
import { type ReactNode } from 'react';

// Fundraisers moved to Get Involved. The page forwards visitors there; this tells Google the new address.
export const metadata: Metadata = {
  title: "Fundraisers has moved to Get Involved | KCCF",
  description: "Starting a fundraiser for KCCF is now on our Get Involved page.",
  alternates: {
    canonical: "https://thekccf.org/get-involved",
  },
};

export default function FundraisersLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
