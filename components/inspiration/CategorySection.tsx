import React from 'react';
import InspirationCard from "@/components/card/InspirationCard";
import {CardData} from "@/app/inspiration/data";

interface CategorySectionProps {
  id: string;
  name: string;
  cards: CardData[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ id, name, cards }) => {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col py-16
                 bg-gray-100 dark:bg-gray-800"
    >
      <div className="w-full max-w-full px-6 py-8">
        <h2 className="text-4xl font-kindred font-bold text-gray-900 dark:text-white mb-8 text-center">
          {name}
        </h2>
        {cards.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">No inspiration cards available for this category.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <InspirationCard key={index} {...card} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySection;