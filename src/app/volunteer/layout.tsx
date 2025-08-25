import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Volunteer - Join Our Mission | Koenig Childhood Cancer Foundation",
  description: "Make a difference in the lives of children battling cancer. Volunteer with KCCF and help support families through various opportunities and programs.",
  keywords: ["volunteer", "volunteering", "help", "support", "childhood cancer", "community service", "make a difference"],
  openGraph: {
    title: "Volunteer - Join Our Mission | Koenig Childhood Cancer Foundation",
    description: "Make a difference in the lives of children battling cancer. Volunteer with KCCF and help support families through various opportunities and programs.",
    type: "website",
    url: process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/volunteer` : "https://thekccf.org/volunteer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function VolunteerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
