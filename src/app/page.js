"use client";
import { useState, useEffect } from "react";
import HeroSection from "./components/layout/home/HeroSection";
import FeatureSection from "./components/layout/home/FeatureSection";
import CTASection from "./components/layout/home/CTASection";
import ContactSection from "./components/layout/home/ContactSection";
import { DarkModeToggle } from "@/app/components/component/DarkModeToggle";
import { useDarkMode } from "@/app/components/component/useDarkMode";

export default function Home() {
  const { darkMode, setDarkMode } = useDarkMode();
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setWindowWidth(window.outerWidth); //1023
    });
  }, []);
  return (
    <>
      <HeroSection windowWidth={windowWidth} />
      <FeatureSection windowWidth={windowWidth} />
      <CTASection />
      <ContactSection />
      <div className=" fixed  bottom-[2%] right-[2%] z-10 hidden sm:block ">
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </>
  );
}
