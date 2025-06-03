import React from 'react';
import ServicesOverview from "@/components/services/ServicesOverview";
import ReadyToBook from "@/components/book/ReadyToBook";
import MyPromises from "@/components/promise/MyPromises";
import Banner from "@/components/banner/Banner";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Nail Services in Haarlem',
  description: 'Explore my full range of professional nail services in Haarlem, including BIAB for strength, vibrant Gel Polish manicures, and bespoke Nail Art designs. Find your perfect nail treatment.',
  openGraph: {
    title: 'All Nail Services | Natboringnails Haarlem',
    description: 'Discover comprehensive nail services offered by Natboringnails: BIAB, gel polish, and custom nail art, all designed for healthy, beautiful nails.',
    images: ['https://www.natboringnails.nl/treatments/level4/level4.2.jpeg'],
  },
  keywords: ['nail services Haarlem', 'manicure types Haarlem', 'BIAB', 'gel polish', 'nail art', 'nail salon services'],
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Banner
        img="/bg7.png"
        title="My Nail Artistry Services"
        subtitle="Explore a range of tailored nail services designed to bring your vision to life with precision and passion."/>
      <main>
        <ServicesOverview className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:px-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-t-2 border-gray-100 mt-[-40px] lg:mt-[-80px]" />
        <MyPromises />
        <ReadyToBook />
      </main>
    </div>
  );
}