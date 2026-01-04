"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Force the window to the top-left corner
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}