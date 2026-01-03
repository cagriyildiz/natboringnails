import React from 'react';
import Banner from "@/components/banner/Banner";
import Image from 'next/image';
import ReactMarkdown, {Components} from "react-markdown";
import Pricing from "@/components/pricing/Pricing";
import {Metadata} from "next";

export const metadata: Metadata = {
  title: 'BIAB Manicure in Haarlem',
  description: 'Strengthen and enhance your natural nails with professional BIAB manicure services in Haarlem. Durable, beautiful, and promotes healthy growth.',
  openGraph: {
    title: 'BIAB Nails Haarlem | Builder in a Bottle Service',
    description: 'Discover the benefits of BIAB for strong, flexible, and healthy nails in Haarlem. Expert application by Natboringnails.',
    images: ['https://www.natboringnails.nl/treatments/biab2/biab2.3.jpeg'],
  },
  keywords: ['BIAB Haarlem', 'Builder in a Bottle Haarlem', 'strong nails Haarlem', 'natural nail enhancement', 'BIAB treatment'],
};

const BiabServicePage: React.FC = () => {
  const biabPrices = [
    {
      title: "BIAB Natural",
      description: "A clear or subtle nude BIAB application that focuses solely on strengthening and enhancing your natural nails. Perfect for a clean, understated look.",
      price: 60,
    },
    {
      title: "BIAB + Gel Polish",
      description: "Combine the exceptional strength of BIAB with your choice of a stunning gel polish color. Enjoy a durable and vibrant manicure that lasts.",
      price: 75,
    },
  ];

  const productImages = [
    { imageSrc: "/biab-product.png", imageAlt: "The GelBottle BIAB Product" },
    { imageSrc: "/biab-product2.jpg", imageAlt: "Anole Rubber Corrector Product" }
  ];

  const productsBenefits = [
    "**Superior Strength & Durability:** Both products provide a robust, protective layer that guards your nails against daily wear and tear, reducing chips and breaks.",
    "**Natural Flexibility & Comfort:** Their unique formulas move with your natural nail, ensuring comfort and minimizing the risk of lifting or damage.",
    "**Nail-Friendly Formulation:** Designed to be gentle, promoting healthy natural nail growth without causing thinning or weakness.",
    "**Flawless Finish & Versatility:** Known for their self-leveling properties, they create a smooth, even surface, perfect for a natural look or as a base for vibrant gel colors.",
    "**Exceptional Adhesion & Longevity:** Each product is selected for its strong bond, minimizing lifting and ensuring a long-lasting, durable manicure every time."
  ];

  const listParagraphRenderer: Components = {
    p: ({ children }) => {
      return <>{children}</>;
    },
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Banner
        img="/bg8.png"
        title="BIAB: Builder in a Bottle"
        subtitle="Strengthen, protect, and enhance your natural nails."
        opacity="20"
      />

      <main className="w-full">
        <section className="py-16 bg-background-brand dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-8 text-center">
            <h2 className="text-3xl font-kindred font-bold text-gray-900 dark:text-white mb-6">
              What is BIAB?
            </h2>
            <div className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              <ReactMarkdown>
                **BIAB, or Builder in a Bottle**, is a revolutionary gel product designed to add strength, flexibility,
                and a beautiful natural look to your nails. It&apos;s perfect for those looking to grow their natural nails,
                prevent breakages, or simply enjoy a long-lasting, durable manicure. Unlike traditional gel polish, BIAB
                provides structural integrity, making your nails less prone to bending and snapping.
              </ReactMarkdown>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <h2
              className="text-3xl font-kindred font-bold text-primary-brand dark:text-primary-light-brand mb-8 text-center">
              Application Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
                <h3 className="text-xl font-semibold text-primary-brand dark:text-primary-light-brand mb-3">1. Expert
                  Nail Preparation</h3>
                <div className="text-gray-700 dark:text-gray-300">
                  <ReactMarkdown>
                    I start with **meticulous nail preparation**, which includes gently filing your nails to your
                    desired shape, expert cuticle care, and carefully buffing the nail plate. This crucial step ensures
                    optimal adhesion for the BIAB and promotes overall nail health.
                  </ReactMarkdown>
                </div>
              </div>
              <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
                <h3 className="text-xl font-semibold text-primary-brand dark:text-primary-light-brand mb-3">2. Precision
                  BIAB Application</h3>
                <div className="text-gray-700 dark:text-gray-300">
                  <ReactMarkdown>
                    Next, a thin base layer of BIAB is applied and cured. Then, I carefully build a second layer,
                    creating the **perfect apex (the strongest part of the nail)** and precisely sculpting the gel to
                    achieve a smooth, natural-looking shape. Each layer is cured under a professional UV/LED light to
                    ensure maximum strength and durability.
                  </ReactMarkdown>
                </div>
              </div>
              <div className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
                <h3 className="text-xl font-semibold text-primary-brand dark:text-primary-light-brand mb-3">3. Flawless
                  Finish & Care</h3>
                <div className="text-gray-700 dark:text-gray-300">
                  <ReactMarkdown>
                    After curing, I **refine the nails** with gentle filing to perfect the shape and smoothness. The
                    service is completed with a high-shine, chip-resistant top coat (cured for longevity) and a
                    nourishing cuticle oil application to hydrate and protect your nails and cuticles.
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background-brand dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-8 text-center">
            <h2 className="text-3xl font-kindred font-bold text-gray-900 dark:text-white mb-8">
              Products I Trust
            </h2>

            <div
              className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-6 mb-10">
              {productImages.map((product, index) => (
                <div key={index}
                     className="w-full max-w-[350px] h-[350px] relative overflow-hidden rounded-lg shadow-md">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="object-cover"
                    priority
                  />
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 text-left">
              <div className="mb-6">
                <ReactMarkdown>
                  I&apos;m committed to the **health and integrity of your natural nails**, which is why I meticulously select and exclusively use **premium BIAB products** that deliver exceptional results and nurture your nails. My trusted selection includes **The GelBottle BIAB** and **Anole Rubber Corrector**, both renowned in the industry for their superior quality and nail-friendly formulas.
                </ReactMarkdown>
              </div>

              <ul className="list-disc list-inside space-y-2 text-left mx-auto mb-6">
                {productsBenefits.map((benefit, bIndex) => (
                  <li key={bIndex}>
                    <ReactMarkdown components={listParagraphRenderer}>{benefit}</ReactMarkdown>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Pricing
          title="Pricing"
          subtitle="Discover the investment in stronger, more beautiful nails. All prices include meticulous preparation and a flawless finish."
          priceItems={biabPrices}
        />
      </main>
    </div>
  );
};

export default BiabServicePage;