import React from 'react';
import Location from "@/components/location/Location";
import ContactForm from "@/components/contact/ContactForm";
import Banner from "@/components/banner/Banner";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Banner
        img="/bg9.png"
        title="Let&apos;s Get In Touch"
        subtitle="I&apos;d love to hear from you! Reach out for appointments, custom designs, or any questions."/>
      <main className="max-w-7xl mx-auto px-6 py-16 md:px-8">
        <ContactForm />
        <Location />
      </main>
    </div>
  );
}