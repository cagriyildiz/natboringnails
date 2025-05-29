import React from "react";
import Image from 'next/image';
import Link from "next/link";

export default function HeroV2() {
  return (
    <div className="flex-grow relative z-10 flex flex-col">
      <section
        className="flex flex-col md:flex-row flex-grow w-full max-w-7xl mx-auto items-center py-8 md:py-16 px-6 md:px-8 gap-8 overflow-hidden"
        aria-labelledby="hero-heading">
        <div
          className="md:flex-[4] flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left p-4 md:p-8 animate-fade-in-up">
          <h1 id="hero-heading"
              className="font-kindred text-4xl md:text-5xl lg:text-6xl font-extrabold leading-relaxed mb-4">
            Anything But Boring
          </h1>
          <p className="text-lg mb-8 max-w-xl">
            This is Natboringnails in Haarlem. Expect exceptional artistry, innovative techniques, and nails that are
            anything but dull.
          </p>
          <Link
            href="/"
            className="px-8 py-4 bg-secondary text-white font-semibold text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </Link>
        </div>

        <div
          className="md:flex-[6] flex justify-center items-center relative w-full h-96 md:h-[min(500px,65vh)] animate-fade-in-up delay-200">
          <div className="relative h-full w-full md:w-2/3 overflow-hidden rounded-xl border-4 border-[#c4b0f6]">
            <Image
              src="/treatments/level4/level4.6.png"
              alt="Close-up of elegant nail art design"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </div>
  );
}