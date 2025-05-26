import Link from 'next/link';
import Image from 'next/image';

export default function ServicesOverview() {
  const services = [
    {
      title: 'BIAB & Nail Health',
      description: 'Strengthen and grow your natural nails for lasting beauty and health.',
      backgroundImage: '/treatments/biab1/biab1.2.png',
      link: '/services/biab',
    },
    {
      title: 'Nail Art',
      description: 'Unleash creativity with unique designs tailored to your personal style.',
      backgroundImage: '/treatments/level4/level4.3.jpeg',
      link: '/services/nail-art',
    },
    {
      title: 'Gel Polish Manicure',
      description: 'Experience flawless, long-lasting color for vibrant, chip-free nails.',
      backgroundImage: '/treatments/biab2/biab2.3.jpeg',
      link: '/services/gel-polish',
    },
  ];

  return (
    <section id="services-overview" className="py-16 px-6 md:px-8 bg-white max-w-7xl mx-auto my-32 relative z-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-kindred font-extrabold text-gray-900 mb-4">Your Nails, My Artistry</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          From strengthening BIAB foundations to breathtaking custom designs, each service is meticulously crafted to bring your unique vision to life.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden group"
            >
              <div className="relative h-96 w-full overflow-hidden rounded-lg cursor-pointer">
                <Image
                  src={service.backgroundImage}
                  alt={service.title + " example"}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 pt-6">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <Link href={service.link} className="inline-flex items-center text-secondary font-semibold hover:text-[#4a9658] transition-colors duration-200 pb-6 mt-auto">
                  Learn More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}