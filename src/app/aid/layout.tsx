import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Family Assistance - Koenig Childhood Cancer Foundation",
  description: "Apply for financial assistance to help with medical bills, transportation, lodging, and other expenses during your child's cancer treatment.",
  keywords: ["cancer aid", "financial assistance", "medical bills", "cancer treatment", "family support", "childhood cancer help"],
  openGraph: {
    title: "Family Assistance - Koenig Childhood Cancer Foundation",
    description: "Apply for financial assistance to help with medical bills, transportation, lodging, and other expenses during your child's cancer treatment.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/aid` : "https://thekccf.org/aid",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AidLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
