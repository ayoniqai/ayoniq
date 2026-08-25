import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/core/components/navigation/navbar";
import Footer from "@/core/components/layout/footer";
import CookieConsent from "@/core/components/layout/cookie-consent";

const inter = Inter({ subsets: ["latin"], display: "swap" });
import { BRAND_CORE_STATEMENT, BRAND_MISSION } from "@/core/constants/brand";

export const metadata: Metadata = {
  title: {
    default: "AYONIQ — Artificial Intelligence & Emerging Technology",
    template: "%s | AYONIQ",
  },
  description: `${BRAND_CORE_STATEMENT} ${BRAND_MISSION}`,
  keywords: ["AYONIQ", "Artificial Intelligence", "Research", "Emerging Technology"],
  metadataBase: new URL("https://ayoniq.org"),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "AYONIQ — Artificial Intelligence & Emerging Technology",
    description: `${BRAND_CORE_STATEMENT} ${BRAND_MISSION}`,
    url: "https://ayoniq.org",
    siteName: "AYONIQ",
    locale: "en_US",
    type: "website",
    images: ["https://ayoniq.org/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AYONIQ — Artificial Intelligence & Emerging Technology",
    description: `${BRAND_CORE_STATEMENT} ${BRAND_MISSION}`,
    images: ["https://ayoniq.org/og-image.png"],
  },
  manifest: "/icons/site.webmanifest",
  icons: {
    icon: [
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon.ico" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AYONIQ",
    url: "https://ayoniq.org",
    logo: "https://ayoniq.org/icons/android-chrome-512x512.png",
    sameAs: [
      "https://github.com/ayoniq",
      "https://linkedin.com/company/ayoniq",
      "https://twitter.com/ayoniq",
    ],
  };

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#050505] text-white antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}