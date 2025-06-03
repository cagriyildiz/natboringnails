import React from 'react';
import Banner from "@/components/banner/Banner";
import Link from "next/link";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Book Your Nail Appointment in Haarlem',
  description: 'Easily schedule your next nail appointment at Natboringnails in Haarlem through my secure online booking system powered by Salonized.',
  openGraph: {
    title: 'Book Nail Appointment Haarlem | Natboringnails Salonized',
    description: 'Book your BIAB, gel polish, or nail art appointment online with Natboringnails, your trusted nail salon in Haarlem.',
    images: ['https://www.natboringnails.nl/treatments/level4/level4.1.jpeg'],
  },
  keywords: ['book nail appointment Haarlem', 'nail salon booking', 'online booking nails', 'Salonized booking'],
};

export default function BookingPage() {
  const salonizedEmbedUrl = "https://natboringnails.salonized.com/widget_bookings/new";

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex flex-col">
      <Banner
        img="/bg5.png"
        title="Book Your Appointment"
        subtitle="Schedule your perfect nail treatment"
        opacity="70"
      />

      <main className="flex-grow w-full py-8 md:py-12 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-kindred font-bold text-primary-brand dark:text-primary-light-brand mb-6">
            Secure Your Spot
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Easily book your next nail appointment through my secure online booking system powered by Salonized. Choose
            your desired service, date, and time.
          </p>

          <div className="relative w-full overflow-hidden rounded-lg shadow-xl aspect-video md:aspect-[3/1]"
               style={{height: '700px'}}>
            <iframe
              src={salonizedEmbedUrl}
              title="Salonized Online Booking Form"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </main>

      <section className="py-16 bg-background-brand dark:bg-gray-800 text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-kindred font-bold text-gray-900 dark:text-white mb-6">
            Need Some Inspiration?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Still deciding on your perfect nail design? Explore the gallery of my work for a wealth of ideas, from subtle elegance to bold artistry!
          </p>
          <Link
            href="/inspiration"
            className="px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-md hover:bg-primary-dark transition duration-300 inline-block"
            aria-label="Visit inspiration gallery"
          >
            Explore Designs
          </Link>
        </div>
      </section>
    </div>
  );
}