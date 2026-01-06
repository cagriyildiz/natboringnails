"use client"; // Must be a client component to track clicks

import React from 'react';
import Link from "next/link";
import { sendGAEvent } from '@next/third-parties/google';

interface ReadyToBookProps {
  title?: string,
  subtitle?: string,
  button?: string,
  className?: string;
}

const ReadyToBook = (
  {
    title = 'Reserve Your Appointment',
    subtitle = 'Click the button below to schedule your personalized nail artistry appointment in Haarlem, North Holland, Netherlands.',
    button = 'Book Now',
    className,
  }: ReadyToBookProps) => {
  const bookingUrl = "https://www.fresha.com/book-now/natboringnails-oh8dausv/all-offer?share=true&pId=2556600";

  // This function sends the data to Google Analytics
  const trackBookingClick = () => {
    sendGAEvent('event', 'click_booking_cta', {
      event_category: 'Conversion',
      event_label: button,
      page_path: window.location.pathname,
    });
  };

  return (
    <section className={`${className} py-16 md:px-8 dark:bg-gray-800 text-center mt-12`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-kindred font-bold text-gray-900 dark:text-white mb-6">
          {title}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          {subtitle}
        </p>
        <Link
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackBookingClick}
          className="px-8 py-3 bg-primary text-white font-semibold rounded-full shadow-md hover:bg-primary-dark transition duration-300 inline-block"
          aria-label={button}
        >
          {button}
        </Link>
      </div>
    </section>
  );
};

export default ReadyToBook;
