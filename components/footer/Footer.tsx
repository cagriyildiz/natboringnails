// components/Footer.tsx
import Link from 'next/link';
import Image from 'next/image'; // If you have a logo image
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaMapMarkerAlt, // For address
  FaPhone, // For phone number
  FaEnvelope, // For email
} from 'react-icons/fa'; // Example: Using react-icons for social and contact icons. Install: npm install react-icons

import { footerNavLinks, socialLinks, contactInfo } from './data'; // Adjust path as needed

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Map icon names to actual components
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'facebook':
        return <FaFacebookF className="h-5 w-5" />;
      case 'instagram':
        return <FaInstagram className="h-5 w-5" />;
      case 'tiktok':
        return <FaTiktok className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

          {/* Section 1: Logo and Short Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Replace with your logo if you have one */}
            <Link href="/" className="mb-4">
              <Image
                src="/logo-white.png"
                alt="Natboringnails Logo"
                width={150}
                height={50}
                className="filter invert" // Example: if your logo is dark, invert it for light background
              />
            </Link>
            <p className="text-sm max-w-xs mb-4">
              Where artistry meets nails. Expect bespoke designs and lasting beauty, meticulously created just for you.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerNavLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Me</h3>
            <div className="space-y-2">
              <p className="flex items-center justify-center md:justify-start">
                <FaMapMarkerAlt className="mr-2 flex-shrink-0" /> {contactInfo.address}
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <FaPhone className="mr-2 flex-shrink-0" /> {contactInfo.phone}
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2 flex-shrink-0" /> {contactInfo.email}
              </p>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold text-white mb-2">Opening Hours:</h4>
              {contactInfo.openingHours.map((hour, idx) => (
                <p key={idx} className="text-sm">{hour}</p>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {currentYear} Natboringnails. All rights reserved.</p>
          <p>Made with ❤️ in Haarlem, NL</p> {/* A nice personal touch */}
        </div>
      </div>
    </footer>
  );
}