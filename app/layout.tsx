import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import localFont from 'next/font/local'
import { Open_Sans, Amatic_SC } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/Footer";

const tanKindred = localFont({
  src: '../public/fonts/tankindred.ttf', // Crucial: path relative to layout.tsx
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
  title: "Natboringnails - Nagelstudio Haarlem",
  description: "Discover high-quality nail art, strengthening BIAB nails, and professional manicures in Haarlem. Enjoy a detail-oriented experience and leave with beautiful nails. Book online today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${amaticSc.variable} ${tanKindred.variable}`}>
      <body
        className="antialiased"
      >
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="AW-17086843336" />
    </html>
  );
}
