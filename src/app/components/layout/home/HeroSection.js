"use client";
import Link from "next/link";
import SectionTag from "../../component/sectionTag";
import { Arrow } from "../../icons/icons";
import {
  Reddit,
  Quora,
  Vevo,
  Zynga,
  BeReal,
  Patreon,
} from "../../icons/brands";
import StarryBackground from "../../component/StarryBackground";
import Image from "next/image";
import { useEffect, useRef, useState, useMemo } from "react";

export default function HeroSection({ windowWidth }) {
  const [scrollY, setScrollY] = useState(0);
  const [animatedStats, setAnimatedStats] = useState([
    { value: 0, valueText: "" },
    { value: 0, valueText: "x" },
    { value: 0, valueText: "" },
    { value: 0, valueText: "M+" },
  ]);
  const heroImageRef = useRef(null);
  const statsRef = useRef(null);
  const [isStatsVisible, setIsStatsVisible] = useState(false);

  // Use useMemo to prevent stats from being recreated on every render
  const stats = useMemo(
    () => [
      {
        title: "Platform integrations",
        value: 15,
        valueText: "",
      },
      {
        title: "Conversion compared to VAs",
        value: 4,
        valueText: "x",
      },
      {
        title: "Satisfied agencies",
        value: 712,
        valueText: "",
      },
      {
        title: "Subscribers funneled",
        value: 1.8,
        valueText: "M+",
      },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Check if stats section is visible
      if (statsRef.current) {
        const statsPosition = statsRef.current.getBoundingClientRect();
        if (statsPosition.top < window.innerHeight && !isStatsVisible) {
          setIsStatsVisible(true);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check if stats are visible
    if (statsRef.current) {
      const statsPosition = statsRef.current.getBoundingClientRect();
      if (statsPosition.top < window.innerHeight) {
        setIsStatsVisible(true);
      }
    }

    if (isStatsVisible) {
      const duration = 2500;
      const framesPerSecond = 60;
      const totalFrames = (duration / 1000) * framesPerSecond;
      let frame = 0;

      const animate = () => {
        if (frame < totalFrames) {
          const progress = frame / totalFrames;

          // Calculate current values based on progress
          const newAnimatedStats = stats.map((stat) => {
            // For decimal values
            if (Number.isInteger(stat.value)) {
              return {
                value: Math.round(progress * stat.value),
                valueText: stat.valueText,
              };
            } else {
              // For floating point, keep one decimal place
              return {
                value: parseFloat((progress * stat.value).toFixed(1)),
                valueText: stat.valueText,
              };
            }
          });

          setAnimatedStats(newAnimatedStats);
          frame++;
          requestAnimationFrame(animate);
        } else {
          // Ensure final values are exact
          setAnimatedStats(
            stats.map((stat) => ({
              value: stat.value,
              valueText: stat.valueText,
            }))
          );
        }
      };

      animate();
    }

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isStatsVisible, stats]);

  // Calculate rotation based on scroll position
  // Max rotation of 6 degrees when scrolled down 300px
  const calculateRotation = () => {
    const maxRotation = 6;
    const scrollThreshold = 300;
    const rotation = Math.min(
      (scrollY / scrollThreshold) * maxRotation,
      maxRotation
    );
    return rotation;
  };

  // Use useMemo for brands array since it depends on windowWidth
  const brands = useMemo(
    () => [
      <Reddit key="reddit" width={windowWidth <= 640 && 100} />,
      <Quora key="quora" width={windowWidth <= 640 && 100} />,
      <Vevo key="vevo" width={windowWidth <= 640 && 100} />,
      <Zynga key="zynga" width={windowWidth <= 640 && 100} />,
      <BeReal key="bereal" width={windowWidth <= 640 && 100} />,
      <Patreon key="patreon" width={windowWidth <= 640 && 100} />,
    ],
    [windowWidth]
  );

  return (
    <section className="w-full relative">
      <div className="w-full max-w-[1240px] mx-auto px-5 flex flex-col justify-center gap-12 py-16 md:py-24 relative">
        <StarryBackground />
        <div className="flex flex-col gap-8 items-center justify-center text-center">
          <SectionTag>The Best Conversation Chat</SectionTag>
          <div className="w-full md:w-[80%] flex flex-col gap-4">
            <h1>
              The{" "}
              <span className="text-p-400">Best Performing Conversations</span>{" "}
              for Funelling
            </h1>
            <p className="text-2xl">Stop wasting time on VAs</p>
          </div>
          <Link href="#">
            <button className="main-button-lg">
              Get Started Now{" "}
              <span>
                <Arrow />
              </span>
            </button>
          </Link>
        </div>
        <div className="relative">
          <div
            ref={heroImageRef}
            className="transition-transform duration-300 ease-out"
            style={{
              transform: `perspective(1000px) rotateX(${calculateRotation()}deg)`,
              transformOrigin: "center bottom",
            }}
          >
            <Image
              fetchPriority="high"
              className="w-full relative z-2"
              src="/image/hero2.png"
              width={500}
              height={500}
              alt="hero"
            />
          </div>
          {/* <Image
            fetchPriority="high"
            className="w-full absolute top-[-40px] sm:top-[-70px] z-1"
            src="/image/upperGlow.png"
            width={800}
            height={200}
            alt="hero"
          /> */}
        </div>

        <ul
          ref={statsRef}
          className="flex flex-wrap md:flex-nowrap justify-start md:justify-between border border-neutral-600 bg-alt-bg rounded-4xl px-8 pt-8 pb-2"
        >
          {stats.map((stat, idx) => {
            return (
              <li
                key={idx}
                className="flex flex-col justify-start items-center w-1/2 mb-6"
              >
                <p className="!text-[40px] md:!text-6xl text-center">
                  {/* Animated counter value */}
                  {animatedStats[idx].value}
                  {animatedStats[idx].valueText}
                </p>
                <p className="!text-n-500 text-center">{stat.title}</p>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col justify-center items-center gap-8">
          <h3 className="!text-neutral-500">Trusted by Top Agencies</h3>
          <ul className="flex justify-center gap-8 flex-wrap">
            {brands.map((brand, idx) => {
              return <li key={idx}>{brand}</li>;
            })}
          </ul>
        </div>
      </div>

      <Image
        className="w-screen h-[60%] absolute -z-1 top-[-84px]"
        fetchPriority="high"
        src="/image/background.png"
        width={500}
        height={500}
        alt="bg"
      />
    </section>
  );
}
