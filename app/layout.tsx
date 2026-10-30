import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_METADATA } from "@/data/site-content";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: SITE_METADATA.title,
    template: "%s | Air Powervision India",
  },
  description: SITE_METADATA.description,
  metadataBase: new URL(SITE_METADATA.siteUrl),
  keywords: [
    "Air Powervision India",
    "Energy Solutions India",
    "Renewable Energy",
    "Power Generation",
    "Industrial Captive Power",
    "Substations and Switchgear",
    "Energy Infrastructure Engineering",
    "Solar PV Engineering",
    "Harmonic Mitigation",
  ],
  authors: [{ name: "Air Powervision India" }],
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen flex flex-col font-sans bg-white text-body selection:bg-steel-600 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

