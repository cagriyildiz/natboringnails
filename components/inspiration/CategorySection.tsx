"use client";

import React, {useEffect, useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; // Removed Navigation
import ReactMarkdown from "react-markdown";
import InspirationCard from "@/components/card/InspirationCard";
import { CardData } from "@/app/inspiration/data";

import 'swiper/css';
import 'swiper/css/pagination';

interface CategorySectionProps {
  id: string;
  name: string;
  description: string;
  cards: CardData[];
  shouldLoadImages: boolean;
}

const CategorySection: React.FC<CategorySectionProps> = ({ id, name, description, cards, shouldLoadImages }) => {
  return (
    <section
      id={id}
      className="relative z-10 max-w-7xl mx-auto py-10 category-container"
    >
      <div className="w-full max-w-full md:px-6">
        <div className="my-10 px-6">
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white text-center">
            {name}
          </h2>
          <div className="text-md max-w-3xl mx-auto text-center leading-relaxed mt-4">
            <ReactMarkdown>{description}</ReactMarkdown>
          </div>
        </div>

        {cards.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">No inspiration cards available for this
            category.</p>
        ) : (
          <div className="px-0">
            <Swiper
              modules={[Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              watchSlidesProgress
              grabCursor
              pagination={{
                clickable: true,
                dynamicBullets: true
              }}
              breakpoints={{
                1024: {
                  slidesPerView: 2.3,
                  spaceBetween: 20,
                },
              }}
              className="pb-10"
            >
              {cards.map((card, index) => (
                <SwiperSlide key={index}>
                  <InspirationCard {...card} shouldLoad={shouldLoadImages} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySection;