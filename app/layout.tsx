import type { Metadata } from "next";
import { Open_Sans, Amatic_SC } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-opens-sans",
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
    <html lang="en">
      <body
        className={`${openSans.variable} ${amaticSc.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
