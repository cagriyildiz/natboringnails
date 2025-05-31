import React from 'react';
import Image from "next/image";

interface BannerProps {
  img: string,
  title: string,
  subtitle: string
}

const Banner = ({img, title, subtitle}: BannerProps) => {
  return (
    <header className={`relative w-full py-20 md:py-32 text-center flex flex-col items-center justify-center`}>
      <Image
        src={img}
        alt="Banner Image"
        fill
        style={{ objectFit: 'cover' }}
        priority
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-kindred font-extrabold text-white mb-6 drop-shadow-lg animate-fade-in-up leading-relaxed">
          {title}
        </h1>
        <p className="text-xl md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
          {subtitle}
        </p>
      </div>
    </header>
  );
};

export default Banner;