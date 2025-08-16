"use client";

import { motion } from "framer-motion";
import React from "react";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const handleOnClick = (e: React.FormEvent) => {
  window.location.href = `mailto:nathaljanebbeling@gmail.com?subject=Question - natboringnails.com`;
  e.preventDefault();
};

function Hero() {

  return (
    <div className="bg-linear-to-b from-primary to-secondary flex-1 pt-6 md:pt-0">
      <div className="max-w-7xl m-auto h-full m-auto">
        <motion.div className="flex flex-col justify-center gap-14 h-full text-center items-center" variants={textVariants} initial="initial" animate="animate">
          <motion.h1 className="text-4xl md:text-5xl font-semibold font-kindred" variants={textVariants}>Nail Art Studio</motion.h1>
          <motion.div className="flex flex-col md:flex-row gap-8 text-md" variants={textVariants}>
            <a href="https://www.fresha.com/book-now/natboringnails-oh8dausv/all-offer?share=true&pId=2556600">
              <button className="p-6 border border-white rounded-xl bg-white text-black cursor-pointer">Book Now</button>
            </a>
            <a href="#contact"><button onClick={handleOnClick} className="p-6 border border-white rounded-xl bg-transparent text-white cursor-pointer">Contact Me</button></a>
          </motion.div>
          <a href="#inspiration">
            <div className="mb-8 text-xl text-white font-bold">Scroll down for inspiration</div>
            <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round"
                 className="icon icon-tabler icons-tabler-outline icon-tabler-circle-arrow-down m-auto animate-bounce">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
              <path d="M8 12l4 4"/>
              <path d="M12 8v8"/>
              <path d="M16 12l-4 4"/>
            </svg>
          </a>
        </motion.div>
      </div>

    </div>
  )
}

export default Hero