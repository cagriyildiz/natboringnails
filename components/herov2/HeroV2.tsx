import React from "react";
import Image from 'next/image';
import Link from "next/link";

export default function HeroV2() {
  return (
    <header className="min-h-screen flex flex-col relative bg-stone-50" role="banner">
      <div className="absolute inset-0 z-0"
           aria-hidden="true">
        <Image
          src="/background.png"
          alt="Abstract background image of nail art with soft colors"
          layout="fill"
          objectFit="fill"
          className="mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <nav className="w-full py-4 top-0 border-b border-[#c4b0f6] border-opacity-50" aria-label="Primary Navigation">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              <Link href="/" className="transition-opacity duration-200" aria-label="Natboringnails Home">
                <Image
                  src="/logo-white.png"
                  alt="Natboringnails Logo"
                  width={80}
                  height={40}
                  priority
                />
              </Link>
            </div>
            <ul className="flex space-x-6 md:space-x-8">
              <li><Link href="/services"
                        className="text-white hover:text-pink-200 font-medium transition-colors duration-200">Services</Link>
              </li>
              <li><Link href="/gallery"
                        className="text-white hover:text-pink-200 font-medium transition-colors duration-200">Gallery</Link>
              </li>
              <li><Link href="/pricing"
                        className="text-white hover:text-pink-200 font-medium transition-colors duration-200">Pricing</Link>
              </li>
              <li><Link href="/about"
                        className="text-white hover:text-pink-200 font-medium transition-colors duration-200">About
                Me</Link></li>
              <li><Link href="/contact"
                        className="text-white hover:text-pink-200 font-medium transition-colors duration-200">Contact</Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="px-4 py-2 bg-primary text-white font-semibold rounded-full hover:bg-opacity-80 transition-opacity duration-200 whitespace-nowrap"
                  aria-label="Book a nail appointment now"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <section
          className="flex flex-col md:flex-row flex-grow w-full max-w-7xl mx-auto items-center py-8 md:py-16 px-6 md:px-8 gap-8 overflow-hidden"
          aria-labelledby="hero-heading">
          <div
            className="relative flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left p-4 md:p-8 animate-fade-in-up">
            <h1 id="hero-heading"
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              Anything But Boring
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl">
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
            className="flex-1 flex justify-center items-center relative w-full h-96 md:h-[min(500px,65vh)] animate-fade-in-up delay-200">
            {/* Inner div to control the image's width within the column */}
            <div className="relative h-full w-2/3 overflow-hidden rounded-xl border-4 border-[#c4b0f6]">
              <Image
                src="/treatments/level1/level1.6.png"
                alt="Close-up of elegant nail art design"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>


        </section>
      </div>
    </header>
  );
}