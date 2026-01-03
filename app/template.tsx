import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import localFont from 'next/font/local'
import { Open_Sans, Amatic_SC } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import React from "react";
import Header from "@/components/header/Header";

const tanKindred = localFont({
  src: '../public/fonts/tankindred.ttf', // Crucial: path relative to template.tsx
  display: 'swap', // 'swap' is generally good for user experience
  variable: '--font-tan-kindred', // Define a CSS variable for Tailwind
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const amaticSc = Amatic_SC({
  variable: "--font-amatic-sc",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Natboringnails | Professional Nail Art Studio in Haarlem',
    template: '%s | Natboringnails',
  },
  description: "Discover high-quality nail art, strengthening BIAB nails, and professional manicures in Haarlem. Enjoy a detail-oriented experience and leave with beautiful nails. Book online today!",
  openGraph: {
    title: 'Natboringnails | Professional Nail Art Studio in Haarlem',
    description: 'Discover high-quality nail art, strengthening BIAB nails, and professional manicures in Haarlem. Enjoy a detail-oriented experience and leave with beautiful nails. Book online today!',
    url: 'https://www.natboringnails.nl',
    siteName: 'Natboringnails',
    images: [
      {
        url: 'https://www.natboringnails.nl/social-share-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Natboringnails - Professional Nail Salon in Haarlem',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Natboringnails | Professional Nail Art Studio in Haarlem',
    description: 'Discover high-quality nail art, strengthening BIAB nails, and professional manicures in Haarlem. Enjoy a detail-oriented experience and leave with beautiful nails. Book online today!',
    images: ['https://www.natboringnails.nl/social-share-image.jpg'],
  },
  // Other general metadata
  metadataBase: new URL('https://www.natboringnails.nl'),
  keywords: ['nails Haarlem', 'nail salon Haarlem', 'BIAB Haarlem', 'gel polish Haarlem', 'nail art Haarlem', 'manicure Haarlem'],
  authors: [{ name: 'Natboringnails' }],
  creator: 'Natboringnails',
  publisher: 'Natboringnails',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${amaticSc.variable} ${tanKindred.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer/>
      </body>
      <GoogleAnalytics gaId="AW-17086843336"/>
    </html>
  );
}
