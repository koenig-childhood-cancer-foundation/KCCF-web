import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { FormModalProvider } from "@/contexts/FormModalContext";
import FormModal from "@/components/FormModal";
import { ArticleModalProvider } from "@/contexts/ArticleModalContext";
import ArticleModal from "@/components/ArticleModal";
import { SlideshowProvider } from "@/contexts/SlideshowContext";
import LoadingSpinner from "@/components/LoadingSpinner";
import CookieConsentBanner from "@/components/CookieConsentBanner";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";
import ConsentPreferencesModal from "@/components/ConsentPreferencesModal";
import SubmissionModal from "@/components/SubmissionModal";
import GoogleTagManager from "@/components/GoogleTagManager";
import { Suspense, type ReactNode } from "react";
import { SearchModalProvider } from "@/contexts/SearchModalContext";
import SearchModal from "@/components/SearchModal";
import { DonationModalProvider } from "@/contexts/DonationModalContext";
import DonationModal from "@/components/DonationModal";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

// "About this charity" details for Google. Facts follow KCCF Current Facts – MASTER.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: "Koenig Childhood Cancer Foundation, Inc.",
  alternateName: "KCCF",
  url: "https://thekccf.org",
  logo: "https://thekccf.org/android-chrome-512x512.png",
  description:
    "KCCF provides life-saving financial and emotional support to children battling cancer and their families.",
  nonprofitStatus: "Nonprofit501c3",
  taxID: "84-4892279",
  foundingDate: "2020-02-21",
  founder: { "@type": "Person", name: "Elana Koenig" },
  email: "join@thekccf.org",
  telephone: "+1-917-765-6272",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1175 York Ave, Suite 15E",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10065",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.facebook.com/theKCCF",
    "https://x.com/TheKccf",
    "https://www.linkedin.com/company/thekccf/",
    "https://www.instagram.com/elanalailakoenig/",
    "https://www.tiktok.com/@kccfofficial",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'light';
                document.documentElement.classList.add(theme);
              } catch (e) {
                document.documentElement.classList.add('light');
              }
            `,
          }}
        />
      </head>
      <body
        className={`${openSans.variable} antialiased text-gray-900 dark:text-gray-100 transition-colors duration-200 overflow-x-hidden`}
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-violet-600 focus:px-5 focus:py-3 focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeProvider>
          <CookieConsentProvider>
            <GoogleTagManager />
            <SearchModalProvider>
              <DonationModalProvider>
                <FormModalProvider>
                  <ArticleModalProvider>
                    <SlideshowProvider>
                    <LoadingSpinner />
                    {/* Banner comes first in the Tab order; it stays pinned to the bottom of the screen */}
                    <CookieConsentBanner />
                    <Navigation />
                    <main id="main-content" tabIndex={-1} className="min-h-screen focus:outline-none">
                      {children}
                    </main>
                    <ConsentPreferencesModal />
                    <Footer />
                    <FormModal />
                    <ArticleModal />
                    <SearchModal />
                    <DonationModal />
                    <Suspense fallback={null}>
                      <SubmissionModal />
                    </Suspense>
                    </SlideshowProvider>
                  </ArticleModalProvider>
                </FormModalProvider>
              </DonationModalProvider>
            </SearchModalProvider>
          </CookieConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
