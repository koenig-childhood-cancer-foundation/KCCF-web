import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy - GDPR & California Privacy | KCCF",
  description: "Learn about how Koenig Childhood Cancer Foundation collects, uses, and protects your personal information. Our privacy policy covers GDPR compliance, California Consumer Privacy Act (CCPA) rights, and cookie usage.",
  keywords: ["privacy policy", "GDPR", "California privacy", "CCPA", "cookie policy", "data protection", "personal information", "KCCF", "childhood cancer foundation"],
  openGraph: {
    title: "Privacy Policy - GDPR & California Privacy | KCCF",
    description: "Learn about how Koenig Childhood Cancer Foundation collects, uses, and protects your personal information. Our privacy policy covers GDPR compliance, California Consumer Privacy Act (CCPA) rights, and cookie usage.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/privacy` : "https://thekccf.org/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
