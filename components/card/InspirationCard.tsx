import React from 'react';
import Image from 'next/image';

interface InspirationCardProps {
  frontImage: string;
  title: string;
  shouldLoad?: boolean;
}

const InspirationCard: React.FC<InspirationCardProps> = ({ frontImage, title, shouldLoad }) => {
  return (
    <div
      className="w-full bg-white dark:bg-gray-800 md:rounded-lg shadow-md overflow-hidden flex flex-col h-full"
    >
      <div className="relative w-full aspect-[4/5] bg-gray-200 md:aspect-square overflow-hidden">
        {shouldLoad && (
          <Image
            src={frontImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            loading="eager" // Load quickly once shouldLoad is true
          />
        )}
      </div>
    </div>
  );
};

export default InspirationCard;