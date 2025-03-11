"use client";
import { useEffect, useState } from "react";
import HeroSection from "./components/layout/home/HeroSection";
import FeatureSection from "./components/layout/home/FeatureSection";
import CTASection from "./components/layout/home/CTASection";
import ContactSection from "./components/layout/home/ContactSection";

export default function Home() {
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
    </>
  );
}
