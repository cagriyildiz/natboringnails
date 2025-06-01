import React from 'react';
import Banner from "@/components/banner/Banner";
import ReactMarkdown from "react-markdown";
import Pricing from "@/components/pricing/Pricing";

const GelPolishServicePage: React.FC = () => {
  const gelPolishTypes = [
    {
      title: "Classic Manicure",
      description: "A traditional nail service focusing on meticulous nail shaping, expert cuticle care, gentle buffing, and a high-shine natural finish without gel polish. Perfect for maintaining natural nail health and a clean, elegant look.",
      price: 30,
    },
    {
      title: "Gel Polish Manicure",
      description: "Includes comprehensive nail preparation (shaping, cuticle care, buffing), application of a long-lasting gel base coat, two coats of your chosen vibrant gel polish color, and a chip-resistant, high-gloss gel top coat, all perfectly cured for weeks of flawless wear.",
      price: 45,
    },
  ];

  const pricingIntro = "Discover the perfect manicure to suit your style and needs. Our services are designed for lasting beauty and nail health.";

  const gelPolishProcessSteps = [
    {
      title: "1. Meticulous Preparation",
      description: "Your manicure begins with expert nail shaping, gentle cuticle care, and careful buffing of the nail plate. This essential step creates the perfect canvas for a flawless and long-lasting gel polish application, promoting healthy nail growth."
    },
    {
      title: "2. Precision Gel Application",
      description: "A high-quality gel base coat is applied and cured, followed by two coats of your chosen vibrant gel polish color. Each layer is meticulously applied and cured under a professional UV/LED lamp to ensure optimal adhesion, rich color payoff, and flexible durability."
    },
    {
      title: "3. Flawless Finish & Care",
      description: "The manicure is perfected with a high-shine, chip-resistant gel top coat, cured for maximum longevity. We conclude with a nourishing cuticle oil application, hydrating your nails and cuticles for a polished, healthy appearance that lasts for weeks."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Banner
        img="/bg2.png"
        title="Gel Polish Manicures"
        subtitle="Vibrant Color, Impeccable Shine, Lasting Wear"
        opacity="50"
      />

      <main className="w-full">
        <section className="py-16 bg-background-brand dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <h2 className="text-3xl font-kindred font-bold text-gray-900 dark:text-white mb-6 text-center">
              Experience Flawless, Long-Lasting Color
            </h2>
            <div className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto text-left">
              <ReactMarkdown>
                **Gel polish manicures** are renowned for their incredible durability, high-shine finish, and chip-free wear that can last for weeks. Unlike traditional nail polish, gel polish is cured under a UV/LED light, locking in a vibrant color and a protective, flexible layer that keeps your nails looking salon-perfect. Ideal for busy individuals or anyone seeking a manicure that stands the test of time, our gel polish services offer a beautiful and resilient solution for stunning nails.
              </ReactMarkdown>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <h2 className="text-3xl font-kindred font-bold text-primary-brand dark:text-primary-light-brand mb-8 text-center">
              The Gel Polish Manicure Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gelPolishProcessSteps.map((step, index) => (
                <div key={index} className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 text-left">
                  <h3 className="text-xl font-semibold text-primary-brand dark:text-primary-light-brand mb-3">{step.title}</h3>
                  <div className="text-gray-700 dark:text-gray-300">
                    <ReactMarkdown>{step.description}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Pricing
          title="Pricing"
          subtitle={pricingIntro}
          priceItems={gelPolishTypes}
        />
      </main>
    </div>
  );
};

export default GelPolishServicePage;