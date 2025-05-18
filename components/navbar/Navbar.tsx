"use client";

import { motion } from 'framer-motion'
import Image from "next/image";
import React from "react";

const handleOnClick = (e: React.FormEvent) => {
  window.location.href = `mailto:nathaljanebbeling@gmail.com?subject=Question - natboringnails.com`;
  e.preventDefault();
};

function Navbar() {

  return (
    <div className="bg-primary py-2 px-8 text-3xl h-30">
      <div className="h-full max-w-7xl m-auto flex items-center justify-center md:justify-between">
        <motion.span
          className="font-bold hidden md:block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <div className="m-auto">
            <Image
              height="100"
              width="100"
              sizes="50vw"
              src="/logo-white.png"
              alt="natboringnails logo"
              className="w-24"
            />
          </div>
        </motion.span>
        <div className="flex gap-4 md:gap-8">
          <a href="/price-list.pdf" className="font-bold text-secondary!">Price List</a>
          <a href="#about">About</a>
          <a href="#contact" onClick={handleOnClick}>Contact</a>
          <a href="#location">Location</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar