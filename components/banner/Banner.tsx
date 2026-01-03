import React from 'react';
import Image from "next/image";
import ReactMarkdown from "react-markdown";

interface BannerProps {
  img: string,
  title: string,
  subtitle: string,
  className?: string,
  opacity?: string
}

const Banner = ({img, title, subtitle, className, opacity = "50"}: BannerProps) => {
  return (
    <header className={`relative w-full py-20 md:py-32 text-center flex flex-col items-center justify-center ${className}`}>
      <Image
        src={img}
        alt="Banner Image"
        fill
        style={{ objectFit: 'cover' }}
        priority
        className="absolute inset-0 z-0"
      />
      <div className={`absolute inset-0 bg-black/${opacity}`}></div>
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-kindred font-extrabold text-white mb-6 drop-shadow-lg animate-fade-in-up leading-relaxed">
          {title}
        </h1>
        <div className="text-xl md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
          <ReactMarkdown>{subtitle}</ReactMarkdown>
        </div>
      </div>
    </header>
  );
};

export default Banner;