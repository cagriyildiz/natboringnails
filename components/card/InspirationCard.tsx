import React from 'react';
import Image from 'next/image';

interface InspirationCardProps {
  frontImage: string;
  title: string;
  isPriority?: boolean;
}

const InspirationCard: React.FC<InspirationCardProps> = ({ frontImage, title, isPriority }) => {
  return (
    <div
      className="w-full bg-white dark:bg-gray-800 md:rounded-lg shadow-md overflow-hidden flex flex-col h-full"
    >
      <div className="relative w-full aspect-[4/5] md:aspect-square overflow-hidden">
        <Image
          src={frontImage}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={isPriority}
          loading={isPriority ? "eager" : "lazy"}
        />
      </div>
    </div>
  );
};

export default InspirationCard;