import type { Metadata } from 'next';
import { type ReactNode } from 'react';

export const metadata: Metadata = {
  title: "Corporate Volunteer Opportunities - Employee Engagement Programs | KCCF",
  description: "Corporate Social Responsibility (CSR) and employee volunteering opportunities. Join workplace giving programs, volunteer days, and team-building events supporting children battling cancer in NYC.",
  keywords: ["corporate volunteering opportunities", "employee volunteering", "CSR", "corporate social responsibility", "employee engagement programs", "volunteer days", "volunteer time off", "VTO", "workplace giving programs", "team-building volunteer events", "volunteering in NYC", "employee giving back", "corporate volunteer programs", "volunteer", "volunteering", "help", "support", "childhood cancer", "community service", "make a difference"],
  openGraph: {
    title: "Corporate Volunteer Opportunities - Employee Engagement Programs | KCCF",
    description: "Corporate Social Responsibility (CSR) and employee volunteering opportunities. Join workplace giving programs, volunteer days, and team-building events supporting children battling cancer in NYC.",
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
  children: ReactNode;
}) {
  return children;
}
