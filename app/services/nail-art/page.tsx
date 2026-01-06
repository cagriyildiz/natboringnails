import React from 'react';
import Banner from "@/components/banner/Banner";
import ReactMarkdown from "react-markdown";
import Pricing from "@/components/pricing/Pricing";
import {Metadata} from "next";
import ReadyToBook from "@/components/book/ReadyToBook";

export const metadata: Metadata = {
  title: 'Custom Nail Art Services in Haarlem',
  description: 'Express your unique style with bespoke nail art services in Haarlem. From minimalist chic to intricate designs, personalize your manicure.',
  openGraph: {
    title: 'Nail Art Haarlem | Bespoke Nail Designs',
    description: 'Get unique and creative nail art at Natboringnails in Haarlem. Explore levels from simple accents to complex hand-painted masterpieces.',
    images: ['https://www.natboringnails.nl/treatments/level3/level3.2.jpeg'],
  },
  keywords: ['nail art Haarlem', 'custom nails Haarlem', 'hand-painted nails', 'nail design Haarlem', 'nail art levels'],
};

const NailArtServicePage: React.FC = () => {
  const nailArtLevels = [
    {
      title: "Almost Boring",
      description: "Simple accents like single dots, lines, glitter fades, or a subtle design on 1-2 nails. Perfect for a touch of elegance.",
      price: 10,
    },
    {
      title: "Nat So Boring",
      description: "More detailed designs on 2-4 nails, including French tip variations, marbling, simple geometrics, or a single complex element.",
      price: 15,
    },
    {
      title: "Nat Boring",
      description: "Intricate designs across 4-6 nails, featuring complex patterns, detailed florals, layered effects, or chrome accents on multiple nails.",
      price: 20,
    },
    {
      title: "Definitely Nat Boring",
      description: "A full set of highly intricate, hand-painted designs, character art, advanced 3D elements, or a completely custom theme across all nails. Price quoted upon detailed consultation.",
      price: 30,
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Banner
        img="/bg9.png"
        title="Nail Art Services"
        subtitle="Express Your Unique Style & Personality"
        opacity="20"
      />

      <main className="w-full">
        <section className="py-16 bg-background-brand dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <h2 className="text-3xl font-kindred font-bold text-gray-900 dark:text-white mb-6 text-center">
              Elevate Your Manicure with Bespoke Nail Art
            </h2>
            <div className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-left">
              <ReactMarkdown>
                Nail art transforms your nails into miniature canvases, adding a touch of personality, elegance, or playful charm to your look. From subtle accents to intricate designs, our bespoke nail art services allow you to express your unique style and make a statement. Perfect as an add-on to your **BIAB** or **gel polish service**, nail art is the ultimate way to customize your manicure.
              </ReactMarkdown>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <h2 className="text-3xl font-kindred font-bold text-primary-brand dark:text-primary-light-brand mb-8 text-center">
              Your Nail Art Journey
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 text-lg text-gray-700 dark:text-gray-300 max-w-5xl mx-auto">
              <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 text-left">
                <h3 className="text-xl font-semibold text-primary-brand dark:text-primary-light-brand mb-3">1. Consultation & Inspiration</h3>
                <ReactMarkdown>
                  Every nail art design begins with a personalized consultation. We&apos;ll discuss your vision, inspiration photos, and the perfect level of detail to complement your base manicure. Whether you have a specific idea in mind or need creative guidance, I&apos;m here to bring your nail art dreams to life.
                </ReactMarkdown>
              </div>
              <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 text-left">
                <h3 className="text-xl font-semibold text-primary-brand dark:text-primary-light-brand mb-3">2. Expert Application</h3>
                <ReactMarkdown>
                  Once your base BIAB or gel polish is applied, your chosen nail art design will be meticulously hand-painted or applied with precision techniques. From delicate lines to complex patterns, every detail is crafted with care to ensure a flawless and stunning result that lasts.
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </section>

        <Pricing
          title="Pricing (Add-on)"
          subtitle="Elevate your base manicure with a personalized touch. Nail art is an add-on service, and the prices below are *in addition* to your base BIAB or gel polish treatment."
          priceItems={nailArtLevels}
          className="bg-white"
        />

        <ReadyToBook title="Excited to bring a unique vision to life?"
                     subtitle="I’m so excited to help you express your unique style through bespoke designs! Whether you have a specific vision in mind or want to collaborate on something completely new, let's create a tiny masterpiece that’s uniquely you."
                     button="Book Your Custom Nail Design"
                     className="bg-gray-50"/>

      </main>
    </div>
  );
};

export default NailArtServicePage;