import React from 'react';
import Image from 'next/image';

interface InspirationCardProps {
  frontImage: string;
  title: string;
  description: string;
}

const InspirationCard: React.FC<InspirationCardProps> = ({ frontImage, title, description }) => {
  return (
    <div
      className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full"
    >
      <div className="relative w-full h-72 md:h-80 lg:h-96 flex-shrink-0">
        <Image
          src={frontImage}
          alt={`Inspiration: ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          className="rounded-t-lg"
          priority
        />
      </div>

      <div className="p-4 flex-grow flex flex-col justify-between">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight mb-3">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-4">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InspirationCard;