import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { FormModalProvider } from "@/contexts/FormModalContext";
import FormModal from "@/components/FormModal";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* Open the connection to Zeffy early so the donation pop-up loads faster */}
        <link rel="preconnect" href="https://www.zeffy.com" />
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
        <ThemeProvider>
          <CookieConsentProvider>
            <GoogleTagManager />
            <SearchModalProvider>
              <DonationModalProvider>
                <FormModalProvider>
                    <SlideshowProvider>
                    <LoadingSpinner />
                    <Navigation />
                    <main className="min-h-screen">
                      {children}
                    </main>
                    <CookieConsentBanner />
                    <ConsentPreferencesModal />
                    <Footer />
                    <FormModal />
                    <SearchModal />
                    <DonationModal />
                    <Suspense fallback={null}>
                      <SubmissionModal />
                    </Suspense>
                    </SlideshowProvider>
                </FormModalProvider>
              </DonationModalProvider>
            </SearchModalProvider>
          </CookieConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
