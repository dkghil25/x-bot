"use client";
import HeroSection from "./components/layout/home/HeroSection";
import FeatureSection from "./components/layout/home/FeatureSection";
import CTASection from "./components/layout/home/CTASection";
import ContactSection from "./components/layout/home/ContactSection";
import { useWindowWidth } from "./components/hooks/useWindowWidth";

export default function Home() {
  const { windowWidth } = useWindowWidth();
  return (
    <>
      <HeroSection windowWidth={windowWidth} />
      <FeatureSection windowWidth={windowWidth} />
      <CTASection />
      <ContactSection />
    </>
  );
}
