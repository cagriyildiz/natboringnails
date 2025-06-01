import React from 'react';
import ReactMarkdown from 'react-markdown';

interface PriceItem {
  title: string;
  description: string;
  price: number;
}

interface PricingSectionProps {
  title: string;
  subtitle?: string;
  priceItems: PriceItem[];
  disclaimerText?: string;
}

const Pricing: React.FC<PricingSectionProps> = (
  {
    title,
    subtitle,
    priceItems,
    disclaimerText,
  }) => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-kindred font-bold text-gray-900 dark:text-white mb-8 text-center">
          {title}
        </h2>
        {subtitle && (
          <div className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-center mb-10">
            <ReactMarkdown>{subtitle}</ReactMarkdown>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {priceItems.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-lg shadow-md bg-white dark:bg-gray-800 text-center flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-primary-brand dark:text-primary-light-brand mb-4">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {item.description}
                </p>
              </div>
              <p className="text-5xl font-bold text-secondary-brand dark:text-secondary-brand">
                €{item.price}
              </p>
            </div>
          ))}
        </div>
        {disclaimerText && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-10 text-center">
            <ReactMarkdown>{disclaimerText}</ReactMarkdown>
          </p>
        )}
      </div>
    </section>
  );
};

export default Pricing;