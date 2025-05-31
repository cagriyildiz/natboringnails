import React from 'react';
import ServicesOverview from "@/components/services/ServicesOverview";
import ReadyToBook from "@/components/book/ReadyToBook";
import MyPromises from "@/components/promise/MyPromises";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">

      <header className="relative w-full py-20 md:py-32 bg-[url('/bg7.png')] bg-cover bg-center bg-no-repeat text-center flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-kindred font-extrabold text-white mb-6 drop-shadow-lg animate-fade-in-up leading-relaxed">
            My Nail Artistry Services
          </h1>
          <p className="text-xl md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-200">
            Explore a range of tailored nail services designed to bring your vision to life with precision and passion.
          </p>
        </div>
      </header>

      <main>
        <ServicesOverview className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:px-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg border-t-2 border-gray-100 mt-[-40px] lg:mt-[-80px]" />
        <MyPromises />
        <ReadyToBook />
      </main>
    </div>
  );
}