import React from 'react';
import CategorySection from "@/components/inspiration/CategorySection";
import Banner from "@/components/banner/Banner";
import {categories} from "./data";

const InspirationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Banner
        img="/bg.png"
        title="Get Inspired"
        subtitle="Ready to *polish off* your look? As you scroll down, you'll embark on a journey from **simple chic** to **seriously stunning** nail art. Discover designs that are *just the tip* of the iceberg, all the way to **masterpieces that truly nail it!** Get ready to find your next obsession."
        opacity="70"
      />

      <main className="w-full">
        {categories.map((category) => (
          <CategorySection
            key={category.id}
            id={category.id}
            name={category.name}
            cards={category.cards}
          />
        ))}
      </main>
    </div>
  );
};

export default InspirationPage;