import Link from 'next/link';
import Image from 'next/image';
import React from "react";

interface ServicesOverviewProps {
  withHeader?: boolean
  className?: string | undefined;
}

export default function ServicesOverview({withHeader, className}: ServicesOverviewProps) {
  const services = [
    {
      title: 'BIAB & Nail Health',
      description: 'Strengthen and grow your natural nails for lasting beauty and health.',
      backgroundImage: '/treatments/biab1/biab1.2.png',
      link: '/services/biab',
    },
    {
      title: 'Nail Art',
      description: 'Unleash creativity with unique designs tailored to your personal style.',
      backgroundImage: '/treatments/level4/level4.3.jpeg',
      link: '/services/nail-art',
    },
    {
      title: 'Gel Polish Manicure',
      description: 'Experience flawless, long-lasting color for vibrant, chip-free nails.',
      backgroundImage: '/treatments/biab2/biab2.3.jpeg',
      link: '/services/gel-polish',
    },
  ];

  return (
    <section id="services-overview" className={`${className ? className : 'relative w-full overflow-hidden'}`}>
      <div className={`relative mx-auto${withHeader ? " z-10 max-w-7xl px-6 py-16 my-32 md:px-8 bg-gray-50 rounded-xl" : ""}`}>
        {withHeader && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900 mb-4">Your Nails, My Artistry</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From strengthening BIAB foundations to breathtaking custom designs, each service is meticulously crafted to
              bring your unique vision to life.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-xl overflow-hidden
                           flex flex-col transform transition-transform duration-300 hover:scale-[1.02]"
            >
              {service.backgroundImage && (
                <div className="relative w-full h-80">
                  <Image
                    src={service.backgroundImage}
                    alt={service.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed flex-grow mb-6">
                  {service.description}
                </p>
                <Link href={service.link}
                      className="mt-auto px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-full shadow-md
                                   hover:bg-[var(--color-primary-dark)] transition-colors duration-300
                                   inline-block self-start text-center">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}