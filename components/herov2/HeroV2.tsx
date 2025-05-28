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
                        className="text-white font-medium transition-colors duration-200">Services</Link>
              </li>
              <li><Link href="/gallery"
                        className="text-white font-medium transition-colors duration-200">Gallery</Link>
              </li>
              <li><Link href="/pricing"
                        className="text-white font-medium transition-colors duration-200">Pricing</Link>
              </li>
              <li><Link href="/about"
                        className="text-white font-medium transition-colors duration-200">About
                Me</Link></li>
              <li><Link href="/contact"
                        className="text-white font-medium transition-colors duration-200">Contact</Link>
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
            className="flex-[4] flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left p-4 md:p-8 animate-fade-in-up">
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
            className="flex-[6] flex justify-center items-center relative w-full h-96 md:h-[min(500px,65vh)] animate-fade-in-up delay-200">
            <div className="relative h-full w-2/3 overflow-hidden rounded-xl border-4 border-[#c4b0f6]">
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

        <div className="custom-shape-divider-bottom-1748187659">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25" className="shape-fill"></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5" className="shape-fill"></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"></path>
          </svg>
        </div>

      </div>
    </header>
  );
}