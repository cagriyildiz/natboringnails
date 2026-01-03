import type { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import ReactMarkdown from "react-markdown";
import Banner from "@/components/banner/Banner";
import ReadyToBook from "@/components/book/ReadyToBook";

export const metadata: Metadata = {
  title: 'About Natboringnails | Your Nail Artist in Haarlem',
  description: "Learn more about Natboringnails – my passion for nail artistry, my unique approach to nail health and design, and what inspires my work as a solo nail artist in Haarlem.",
  openGraph: {
    title: 'About Me - Natboringnails | Haarlem Nail Artist',
    description: 'Discover my story, my dedication to nail health, and my journey in creating beautiful, personalized manicures.',
    images: ['https://www.natboringnails.nl/nathal.png'],
  },
  keywords: ['about me nail salon', 'nail artist Haarlem', 'Natboringnails story', 'my approach nails', 'solo nail technician Haarlem', 'Lakwerk Nailschool', 'Happy Toko'],
};

export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex flex-col">
      <Banner
        img="/bg6.png"
        title="A Little About Me"
        subtitle="My Story, My Passion"
        opacity="20"
      />
      <main className="">
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:px-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-[-40px] lg:mt-[-80px]">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="w-full flex-shrink-0 mb-8 md:mb-0 md:mr-8 md:w-1/3">
              <div className="relative w-full aspect-square max-w-[350px] mx-auto rounded-full overflow-hidden border-4 border-primary-brand dark:border-primary-light-brand shadow-md">
                <Image
                  src="/nathal.png"
                  alt="Nathalja - Your Nail Artist at Natboringnails"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>
            </div>
            <div className="md:w-2/3 text-left">
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
                Hey there, I&apos;m Nathalja!
              </h2>
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <ReactMarkdown>
                  Let me share a bit of my journey with you. Nails have been my passion since I was knee-high! After graduating from **Lakwerk Nailschool**, I dove straight into the world of nail artistry by joining their team. For a solid 1.5 years, I honed my skills and soaked up every bit of knowledge and experience I could.
                </ReactMarkdown>
              </div>
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                <ReactMarkdown>
                  Then came a change of scenery—I spent half a year at **Happy Toko**, where I continued to refine my craft and explore new techniques. But the call of independence and creativity beckoned, leading me to make the bold move to **Haarlem**, where I opened up my own salon right in the comfort of my home.
                </ReactMarkdown>
              </div>
              <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                <ReactMarkdown>
                  Here, surrounded by the things I love and the music that fuels my creativity, I&apos;ve found my true niche. So, step into my world, where years of experience meet boundless creativity. Let&apos;s make your nails shine!
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>

        <ReadyToBook
          title="Ready for Nat-Boring Nails?"
          subtitle="Ready to experience the Natboringnails difference? Reserve your personalized nail artistry appointment in Haarlem today."
        />
      </main>
    </div>
  );
}