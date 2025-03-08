"use client";
import { useEffect, useState } from "react";
export function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setWindowWidth(window.outerWidth); //1023
    });
  }, []);
  return { windowWidth };
}
