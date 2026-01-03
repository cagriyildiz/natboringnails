"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Inspiration', href: '/inspiration' },
    { name: 'Pricing', href: '/price-list.pdf', external: true },
    { name: 'About Me', href: '/about' },
    { name: 'Contact', href: '/contact' },
    // Removed 'Book Now' from here as it will be a dedicated button in mobile only
  ];

  return (
    <nav className="w-full py-4 border-b border-[#c4b0f6] border-opacity-50 z-50 shrink-0" aria-label="Primary Navigation">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
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

        {/* Desktop Navigation Links */}
        {/* The desktop nav doesn't have a "Book Now" button by default here */}
        <ul className="hidden md:flex space-x-6 md:space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`transition-colors duration-200
                  ${pathname === link.href ? 'font-bold text-primary' : 'text-white font-medium'}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* If you want a desktop 'Book Now' button outside the mobile menu, you'd add it here */}
          {/* For example: */}
          {/* <li>
            <Link
              href="/booking"
              className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition duration-300"
            >
              Book Now
            </Link>
          </li> */}
        </ul>


        {/* Mobile Menu Button (Hamburger Icon) */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={toggleMobileMenu}
      >
        {/* Mobile Menu Drawer */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-secondary dark:bg-gray-700 z-50 shadow-lg p-6
            transform transition-transform ease-in-out duration-300
            ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-gray-800 dark:text-white focus:outline-none"
            aria-label="Close navigation menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <ul className="flex flex-col space-y-6 mt-12">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={toggleMobileMenu}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={`text-gray-800 dark:text-gray-100 text-xl hover:text-primary dark:hover:text-primary-light transition-colors duration-200
                    ${pathname === link.href ? 'font-bold text-primary dark:text-primary-light' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* Mobile-only "Book Now" Button */}
            <li className="">
              <Link
                href="https://www.fresha.com/book-now/natboringnails-oh8dausv/all-offer?share=true&pId=2556600"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMobileMenu} // Close menu when clicked
                className={`text-gray-800 dark:text-gray-100 text-xl hover:text-primary dark:hover:text-primary-light transition-colors duration-200
                    ${pathname === "/booking" ? 'font-bold text-primary dark:text-primary-light' : ''}`}
                aria-label="Book your appointment"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}