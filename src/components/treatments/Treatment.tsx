"use client";

import {IconArrowLeft, IconArrowRight} from "@tabler/icons-react";
import {motion, AnimatePresence} from "framer-motion";
import {useCallback, useEffect, useState} from "react";
import {Item} from "./data.ts";

export const Treatment = ({
                            item,
                            autoplay = false,
                          }: {
  item: Item;
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % item.imgs.length);
  }, [item.imgs.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + item.imgs.length) % item.imgs.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => {
        clearInterval(interval);
      }
    }
  }, [autoplay, handleNext]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
            <div className="relative grid grid-cols-1 md:grid-cols-2  gap-20">
              <div className="group/carousel">
                <div className="relative h-80 w-full flex flex-col-reverse">
                  <AnimatePresence>
                    {item.imgs.map((i, index) => (
                      <div key={index}>
                        <motion.div
                          key={index}
                          initial={{
                            opacity: 0,
                            scale: 0.9,
                            z: -100,
                            rotate: randomRotateY(),
                          }}
                          animate={{
                            opacity: isActive(index) ? 1 : 0.7,
                            scale: isActive(index) ? 1 : 0.95,
                            z: isActive(index) ? 0 : -100,
                            rotate: isActive(index) ? 0 : randomRotateY(),
                            zIndex: isActive(index)
                              ? 999
                              : item.imgs.length + 2 - index,
                            y: isActive(index) ? [0, -80, 0] : 0,
                          }}
                          exit={{
                            opacity: 0,
                            scale: 0.9,
                            z: 100,
                            rotate: randomRotateY(),
                          }}
                          transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 origin-bottom"
                        >
                          <img
                            src={i}
                            alt={i}
                            width={500}
                            height={500}
                            draggable={false}
                            className="h-full w-full rounded-3xl object-cover object-center"
                          />

                        </motion.div>
                      </div>
                    ))}
                    {item.imgs.length > 1 ? (
                      <div
                        className="opacity-70 flex gap-4 pt-12 md:pt-0 justify-center relative group-hover/carousel:opacity-90"
                        style={{zIndex: 9999}}>
                        <button
                          onClick={handlePrev}
                          className="h-8 w-8 rounded-2xl bg-indigo-500 dark:bg-neutral-800 flex items-center justify-center group/button"
                        >
                          <IconArrowLeft
                            className="h-5 w-5 text-white dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300"/>
                        </button>
                        <button
                          onClick={handleNext}
                          className="h-8 w-8 rounded-2xl bg-indigo-500 dark:bg-neutral-800 flex items-center justify-center group/button"
                        >
                          <IconArrowRight
                            className="h-5 w-5 text-white dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300"/>
                        </button>
                      </div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </div>

              <div className="flex justify-between flex-col py-4">
                <div className="text">
                  <h2>{item.title} <span>{item.category}</span></h2>
                  <h3>{item.price}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
