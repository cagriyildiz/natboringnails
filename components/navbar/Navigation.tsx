import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

interface NavigationProps {
  ref?: React.RefObject<null>
}

export default function Navigation({ref}: NavigationProps) {
  return (
    <nav className="w-full py-4 top-0 border-b border-[#c4b0f6] border-opacity-50 z-1 shrink-0" ref={ref} aria-label="Primary Navigation">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <Link href="/" className="transition-opacity duration-200" aria-label="Natboringnails Home">
            <Image
              src="/logo-white.png"
              alt="Natboringnails Logo"
              width={80}
              height={40}
              priority
            />
          </Link>
        </div>
        <ul className="flex space-x-6 md:space-x-8">
          <li><Link href="/services"
                    className="text-white font-medium transition-colors duration-200">Services</Link>
          </li>
          <li><Link href="/gallery"
                    className="text-white font-medium transition-colors duration-200">Gallery</Link>
          </li>
          <li><Link href="/pricing"
                    className="text-white font-medium transition-colors duration-200">Pricing</Link>
          </li>
          <li><Link href="/about"
                    className="text-white font-medium transition-colors duration-200">About
            Me</Link></li>
          <li><Link href="/contact"
                    className="text-white font-medium transition-colors duration-200">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
