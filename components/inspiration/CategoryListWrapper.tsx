"use client";

import React, { useState, useEffect } from 'react';
import CategorySection from "./CategorySection";
import { categories } from "@/app/inspiration/data";

export default function CategoryListWrapper() {
  const [loadedSections, setLoadedSections] = useState<string[]>(['level1', 'level2']);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setLoadedSections((prev) =>
              prev.includes(id) ? prev : [...prev, id]
            );
          }
        });
      },
      { rootMargin: '0px 0px 600px 0px' }
    );

    categories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [categories]);

  return (
    <>
      {categories.map((category) => (
        <CategorySection
          key={category.id}
          id={category.id}
          name={category.name}
          description={category.description}
          cards={category.cards}
          shouldLoadImages={loadedSections.includes(category.id)}
        />
      ))}
    </>
  );
}