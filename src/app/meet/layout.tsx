import type { Metadata } from 'next';
import { type ReactNode } from 'react';

// Short link only: keep it out of Google.
export const metadata: Metadata = {
  title: "Book a call | KCCF",
  robots: { index: false, follow: false },
};

export default function MeetLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
