"use client";

import Link from 'next/link';
import Image from 'next/image';
import React, { useRef } from 'react';

import type { Swiper as SwiperCore } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, EffectCreative, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

export default function InspirationPreview() {
  const galleryImages = [
    { src: '/treatments/level4/level4.1.jpeg', alt: 'Elegant floral nail art' },
    { src: '/treatments/level3/level3.5.jpeg', alt: 'Abstract geometric nails' },
    { src: '/treatments/level2/level2.3.jpeg', alt: 'Vibrant glitter gel nails' },
    { src: '/treatments/level2/level2.5.jpeg', alt: 'Minimalist BIAB design' },
    { src: '/treatments/level3/level3.2.jpeg', alt: 'Hand-painted character nails' },
    { src: '/treatments/level1/level1.1.jpeg', alt: 'Matte finish dark nails' },
  ];

  const autoplayDelay = 3500;
  const zoomDuration = autoplayDelay * 2;

  const swiperRef = useRef<SwiperCore | null>(null);

  const handleSlideChange = (swiper: SwiperCore) => {
    swiper.slides.forEach(slide => {
      const wrapper = slide.querySelector('.image-zoom-wrapper');
      if (wrapper) {
        (wrapper as HTMLElement).style.transition = 'none';
        (wrapper as HTMLElement).style.transform = 'scale(1)';
      }
    });

    const activeSlideEl = swiper.slides[swiper.activeIndex];
    const activeWrapper = activeSlideEl.querySelector('.image-zoom-wrapper');

    if (activeWrapper) {
      (activeWrapper as HTMLElement).style.transition = `transform ${zoomDuration / 1000}s ease-out`;
      (activeWrapper as HTMLElement).style.transform = 'scale(1.08)';
    }
  };

  const handleSwiperInit = (swiper: SwiperCore) => {
    swiperRef.current = swiper;
    handleSlideChange(swiper);
  };

  return (
    <section id="gallery-hero" className="relative w-screen h-screen overflow-hidden">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        effect={'creative'}
        speed={1000}
        creativeEffect={{
          prev: {
            translate: ['-100%', 0, 0],
          },
          next: {
            translate: [0, 0, -1],
            scale: 1.5,
          },
        }}
        modules={[Autoplay, Pagination, EffectCreative]}
        className="absolute inset-0 z-10 w-full h-full"
        onSwiper={handleSwiperInit}
        onSlideChangeTransitionEnd={handleSlideChange}
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full overflow-hidden rounded-lg image-zoom-wrapper">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 bg-black/70 z-20 pointer-events-none">
        <h2 className="font-kindred text-6xl font-light leading-relaxed mb-4 text-center drop-shadow-lg pointer-events-auto">Nail Art. My Passion.</h2>
        <p className="text-lg md:text-xl text-center max-w-3xl mb-8 drop-shadow-md pointer-events-auto font-light">
          Ready to add a little flair to your everyday? I&apos;m here to make finding your <b>perfect design easy and fun</b>, ensuring every look brings a smile to your face.
        </p>
        <Link href="/inspiration" className="px-8 py-4 bg-primary text-white font-semibold text-lg rounded-full shadow-lg hover:bg-[#521c9a] transition-all duration-300 transform hover:scale-105 pointer-events-auto">
          Get Inspired
        </Link>
      </div>

      <style jsx global>{`
          .swiper-pagination-bullet {
              background-color: rgba(255, 255, 255, 0.5) !important;
              opacity: 1 !important;
              width: 10px;
              height: 10px;
          }
          .swiper-pagination-bullet-active {
              background-color: #ffffff !important;
          }
          .swiper-pagination {
              background-color: #C8C8C840 !important;
              backdrop-filter: blur(16px);
              width: fit-content !important;
              padding: 16px !important;
              margin: auto !important;
              position: sticky;
              border-radius: 999px;
          }

          .image-zoom-wrapper {
              transition: transform 0s ease-out;
              will-change: transform;
          }

          .image-zoom-wrapper img {
              transform: none;
              transition: none;
          }
      `}</style>
    </section>
  );
}
