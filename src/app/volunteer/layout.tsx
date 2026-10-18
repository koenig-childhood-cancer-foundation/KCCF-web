import type { Metadata } from 'next';
import { type ReactNode } from 'react';

// Volunteer moved to Get Involved. The page forwards visitors there; this tells Google the new address.
export const metadata: Metadata = {
  title: "Volunteer has moved to Get Involved | KCCF",
  description: "Volunteering with KCCF is now on our Get Involved page.",
  alternates: {
    canonical: "https://thekccf.org/get-involved",
  },
};

export default function VolunteerLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
