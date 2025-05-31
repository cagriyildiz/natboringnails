import React from 'react';
import ReactMarkdown from "react-markdown";

const promisesData = [
  {
    id: 1,
    icon: '⏳',
    title: 'Unrushed Service',
    description: 'Your appointment is dedicated to you. I take the time needed for meticulous care, artistic precision, and a truly relaxing experience.',
  },
  {
    id: 2,
    icon: '💅',
    title: 'Nail Health Focus',
    description: 'Prioritizing the integrity and strength of your natural nails with gentle techniques and nourishing products.',
  },
  {
    id: 3,
    icon: '💖',
    title: 'Personalized Designs',
    description: 'Collaborating closely with you to create unique, custom nail art that truly expresses your individual style.',
  },
  {
    id: 4,
    icon: '💪',
    title: 'Lasting Quality',
    description: 'Ensuring durable, chip-resistant manicures that stand the test of time, keeping your nails perfect for weeks.',
  },
  {
    id: 5,
    icon: '💎',
    title: 'Premium Products',
    description: 'Using only professional-grade, high-quality, and often vegan/cruelty-free products for optimal longevity and vibrant results.',
  },
];

const MyPromises = () => {
  return (
    <section
      className="max-w-7xl mx-auto px-6 py-20 md:px-8 mt-32 dark:bg-gray-800 rounded-lg shadow-lg border-t-2 border-gray-100 bg-[url('/bg3.png')]">
      <h2
        className="text-center text-4xl sm:text-5xl font-kindred font-extrabold mb-6 drop-shadow-lg">
        My Promise
      </h2>
      <div className="text-center text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
        <ReactMarkdown>
          When you choose my nail artistry, you&apos;re not just getting a service; you&apos;re investing in
          **quality**, **precision**, and **lasting beauty**.
        </ReactMarkdown>
      </div>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {promisesData.map((p) => (
          <div
            key={p.id}
            className="p-6 dark:bg-gray-700 rounded-lg shadow-lg text-center
                           transform transition-transform duration-300 hover:scale-105 hover:shadow-xl
                           w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] max-w-sm"
          >
            <div className="text-5xl text-[var(--color-secondary)] mb-4">
              {p.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {p.title}
            </h3>
            <p className="text-md text-gray-700 dark:text-gray-300">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyPromises;