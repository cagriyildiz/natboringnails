import React from 'react';
import CategorySection from "@/components/inspiration/CategorySection";
import Banner from "@/components/banner/Banner";
import {categories} from "./data";
import {Metadata} from "next";
import ReadyToBook from "@/components/book/ReadyToBook";

export const metadata: Metadata = {
  title: 'Nail Art Inspiration Gallery',
  description: 'Explore my extensive gallery of nail art designs, from elegant and subtle to bold and intricate. Find your perfect inspiration for your next manicure in Haarlem.',
  openGraph: {
    title: 'Nail Art Gallery & Ideas | Natboringnails Haarlem',
    description: 'Browse stunning nail art photos and design ideas by Natboringnails. Get inspired for your BIAB, gel polish, or custom nail art appointment.',
    images: ['https://www.natboringnails.nl/treatments/level2/level2.3.jpeg'],
  },
  keywords: ['nail art gallery', 'nail design ideas', 'manicure inspiration', 'Haarlem nail art', 'nail photo gallery', 'latest nail trends'],
};

const InspirationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Banner
        img="/bg4.png"
        title="Get Inspired"
        subtitle="Ready to *polish off* your look? As you scroll down, you'll embark on a journey from **simple chic** to **seriously stunning** nail art. Discover designs that are *just the tip* of the iceberg, all the way to **masterpieces that truly nail it!** Get ready to find your next obsession."
      />

      <main>
        {categories.map((category) => (
          <CategorySection
            key={category.id}
            id={category.id}
            name={category.name}
            cards={category.cards}
          />
        ))}
      </main>

      <ReadyToBook
        title="Inspired? Let's Make It Real!"
        subtitle="Your perfect nail design awaits. Click below to schedule your appointment and transform your inspiration into a stunning reality."
      />
    </div>
  );
};

export default InspirationPage;