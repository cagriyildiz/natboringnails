import React from 'react';
import Location from "@/components/location/Location";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">

      <header
        className="relative w-full py-20 md:py-32 bg-[url('/bg9.png')] bg-cover bg-center bg-no-repeat text-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-kindred font-extrabold text-white mb-6 drop-shadow-lg animate-fade-in-up leading-relaxed">
            Let&apos;s Get In Touch
          </h1>
          <p className="text-xl md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
            I&apos;d love to hear from you! Reach out for appointments, custom designs, or any questions.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16 md:px-8">
        <ContactForm />
        <Location />
      </main>
    </div>
  );
}