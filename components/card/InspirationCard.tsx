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


    </div>
  );
};

export default InspirationCard;