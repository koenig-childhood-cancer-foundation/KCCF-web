import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - Koenig Childhood Cancer Foundation",
  description: "Get in touch with the Koenig Childhood Cancer Foundation. We're here to help families battling childhood cancer and answer your questions about our programs.",
  keywords: ["contact", "childhood cancer", "support", "help", "KCCF", "Elana Koenig", "cancer foundation"],
  openGraph: {
    title: "Contact Us - Koenig Childhood Cancer Foundation",
    description: "Get in touch with the Koenig Childhood Cancer Foundation. We're here to help families battling childhood cancer and answer your questions about our programs.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/contact` : "https://thekccf.org/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
