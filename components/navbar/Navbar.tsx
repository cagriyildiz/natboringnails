"use client";

import { motion } from 'framer-motion'
import { IconMenu2 } from '@tabler/icons-react';
import Image from "next/image";
import React, {useState} from "react";
import {DrawerContent, HeaderDrawer} from "@/components/navbar/drawer";
import Link from "next/link";
import {useMediaQuery} from "@/lib/hooks";

const handleOnClick = (e: React.FormEvent) => {
  window.location.href = `mailto:nathaljanebbeling@gmail.com?subject=Question - natboringnails.com`;
  e.preventDefault();
};

function Navbar() {
  const [headerOpen, setHeaderOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <div className="bg-primary py-2 px-8 text-md h-30">
      <div className="h-full max-w-7xl m-auto flex items-center justify-between">
        <motion.span
          className="font-bold w-18 md:w-fit md:block"
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
            />
          </div>
        </motion.span>
        <div className="flex gap-4 md:gap-6">
          {!isDesktop && <HeaderDrawer
            open={headerOpen}
            setOpen={setHeaderOpen}
            drawerBtn={() => {
              return (
                <button>
                  <IconMenu2 />
                </button>
              );
            }}
          >
            <DrawerContent>
              <div className='flex justify-center w-full absolute bottom-1 left-0'>
                <div className=' w-16 h-[0.30rem] rounded-full bg-gray-600' />
              </div>
              <div className='container mx-auto gap-4'>
                <div className='flex justify-between items-center mb-4'>
                  <Image
                    height="100"
                    width="100"
                    sizes="50vw"
                    src="/logo-white.png"
                    alt="natboringnails logo"
                    className="w-24 mx-auto"
                  />
                </div>
                <div className='flex justify-center py-2'>
                  <nav className='flex gap-8'>
                    <ul className='text-center items-center xl:text-2xl text-lg space-y-2 xl:space-y-4 font-semibold'>
                      <li className="flex flex-col gap-2">
                        <Link href='/'>Home</Link>
                        <Link href='/price-list.pdf'>Price List</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </DrawerContent>
          </HeaderDrawer>}
          {isDesktop && <>
            <a href="/price-list.pdf" className="text-secondary!">Price List</a>
            <a href="#about">About</a>
            <a href="#contact" onClick={handleOnClick}>Contact</a>
            <a href="#location">Location</a>
          </>}

        </div>
      </div>
    </div>
  )
}

export default Navbar