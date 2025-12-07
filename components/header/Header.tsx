"use client";

import React from 'react';
import Image from "next/image";
import Navigation from "@/components/navbar/Navigation";
import HeroV2 from "@/components/herov2/HeroV2";
import {usePathname} from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <header className={`flex flex-col relative w-full ${isHomePage ? 'min-h-screen' : ''}`} role="banner">
      <div className="absolute inset-0 z-0"
           aria-hidden="true">
        <Image
          src="/background.png"
          alt="Abstract background image of nail art with soft colors"
          fill
          style={{ objectFit: 'cover' }}
          className="mix-blend-multiply"
        />
      </div>
      <Navigation />
      {isHomePage && (<HeroV2 />)}
    </header>
  );
};


export default Header;