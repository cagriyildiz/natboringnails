import React from 'react';
import Link from "next/link";

const ReadyToBook = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:px-8 mt-32 mb-12 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl
                           bg-gradient-to-tr from-[var(--color-primary-light)]/20 to-[var(--color-primary)]/10 dark:from-[var(--color-primary)]/30 dark:to-[var(--color-primary)]/50">
      <div className="text-center">
        <h3 className="text-3xl md:text-4xl font-kindred font-bold text-gray-900 dark:text-white mb-6">Ready to Book
          Your Service?</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
          Click the button below to schedule your personalized nail artistry appointment in Haarlem, North Holland,
          Netherlands.
        </p>
        <Link href="/contact"
              className="inline-block px-10 py-5 bg-[var(--color-secondary)] text-white text-xl font-bold rounded-full shadow-lg
                             hover:bg-[var(--color-secondary-dark)] transition-colors duration-300 transform hover:scale-105">
          Book Now
        </Link>
      </div>
    </section>
  );
};

export default ReadyToBook;
