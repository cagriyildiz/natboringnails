import React from 'react';
import Location from "@/components/location/Location";
import ContactForm from "@/components/contact/ContactForm";
import Banner from "@/components/banner/Banner";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'Contact Natboringnails | Nail Salon in Haarlem',
  description: 'Get in touch with Natboringnails for appointments, questions about BIAB, gel polish, or nail art. Find my studio location in Haarlem, North Holland.',
  openGraph: {
    title: 'Contact Me - Natboringnails Haarlem',
    description: 'Reach out to Natboringnails for all your nail service inquiries and booking needs in Haarlem. I look forward to hearing from you!',
    images: ['https://www.natboringnails.nl/treatments/level3/level3.1.jpeg'],
  },
  keywords: ['contact nail salon Haarlem', 'Natboringnails contact', 'Haarlem nail studio address', 'book nail appointment Haarlem', 'nail questions Haarlem'],
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Banner
        img="/bg10.png"
        title="Let&apos;s Get In Touch"
        subtitle="I&apos;d love to hear from you! Reach out for appointments, custom designs, or any questions."
        opacity="20"
      />
      <main className="max-w-7xl mx-auto px-6 py-16 md:px-8">
        <ContactForm />
        <Location />
      </main>
    </div>
  );
}