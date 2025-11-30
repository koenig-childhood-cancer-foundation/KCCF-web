import type { Metadata } from 'next';
import HomeContent from './HomeContent';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "https://thekccf.org"),
  title: "Koenig Childhood Cancer Foundation - Life-saving financial and emotional support for children battling cancer",
  description: "Life-saving financial and emotional support for children battling cancer. Founded by 11-year-old cancer survivor Elana Koenig in 2020.",
  keywords: ["childhood cancer", "cancer foundation", "financial aid", "cancer support", "Elana Koenig", "KCCF"],
  openGraph: {
    title: "Koenig Childhood Cancer Foundation - Life-saving financial and emotional support for children battling cancer",
    description: "Life-saving financial and emotional support for children battling cancer. Founded by 11-year-old cancer survivor Elana Koenig in 2020.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "https://thekccf.org",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Koenig Childhood Cancer Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koenig Childhood Cancer Foundation - Life-saving financial and emotional support for children battling cancer",
    description: "Life-saving financial and emotional support for children battling cancer. Founded by 11-year-old cancer survivor Elana Koenig in 2020.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return <HomeContent />;
}
