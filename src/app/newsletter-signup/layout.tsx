import type { Metadata } from 'next';
import { type ReactNode } from 'react';

// The newsletter sign-up is now a pop-up. The page forwards visitors to Home with it open; this tells Google the new address.
export const metadata: Metadata = {
  title: "Newsletter sign-up has moved | KCCF",
  description: "Sign up for the KCCF newsletter from any page: use Subscribe to Newsletter in the footer.",
  alternates: {
    canonical: "https://thekccf.org/",
  },
};

export default function NewsletterSignupLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
