import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { DonationModalProvider } from "@/contexts/DonationModalContext";
import DonationModal from "@/components/DonationModal";
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
import { Suspense } from "react";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
        <ThemeProvider>
          <CookieConsentProvider>
            <DonationModalProvider>
              <FormModalProvider>
                <ArticleModalProvider>
                  <SlideshowProvider>
                  <LoadingSpinner />
                  <Navigation />
                  <main className="min-h-screen">
                    {children}
                  </main>
                  <CookieConsentBanner />
                  <ConsentPreferencesModal />
                  <Footer />
                  <DonationModal />
                  <FormModal />
                  <ArticleModal />
                  <Suspense fallback={null}>
                    <SubmissionModal />
                  </Suspense>
                  </SlideshowProvider>
                </ArticleModalProvider>
              </FormModalProvider>
            </DonationModalProvider>
          </CookieConsentProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
