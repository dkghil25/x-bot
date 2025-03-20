"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionTag } from "@/app/components/component/sectionTag";
import { Diamond, Check, Triangle } from "@/app/components/icons/icons";
import { useDarkMode } from "@/app/components/component/useDarkMode";
import {
  SnapchatBot,
  InstagramBot,
  RedditBot,
  TelegramBot,
  TwitterBot,
  WhatsAppBot,
  GrindrBot,
  DatingBot,
} from "@/app/components/icons/featureIcon";

export default function HeroSection({ windowWidth }) {
  const { darkMode } = useDarkMode();

  const features = useMemo(
    () => [
      {
        title: "Snapchat Bot",
        feature: ["AI Chatting", "Live Snaps", "Story Scheduling"],
        background: <SnapchatBot dark={darkMode} />,
      },
      {
        title: "Instagram Bot",
        feature: ["AI Chatting", "Live Photos", "Account Management"],
        background: <InstagramBot dark={darkMode} />,
      },
      {
        title: "Reddit Bot",
        feature: ["AI Chatting", "Live Photos", "Commenting"],
        background: <RedditBot dark={darkMode} />,
      },
      {
        title: "Telegram Bot",
        feature: ["AI Chatting", "Live Photos", "Account Management"],
        background: <TelegramBot dark={darkMode} />,
      },
      {
        title: "X Bot",
        feature: ["AI Chatting", "Live Photos", "Account Management"],
        background: <TwitterBot dark={darkMode} />,
      },
      {
        title: "WhatsApp Bot",
        feature: ["AI Chatting", "Live Photos", "Account Management"],
        background: <WhatsAppBot dark={darkMode} />,
      },
      {
        title: "GrindR Bot",
        feature: ["AI Chatting", "Live Photos", "Account Management"],
        background: <GrindrBot dark={darkMode} />,
      },
      {
        title: "Dating App Bot",
        feature: ["AI Chatting", "Smart Unmatching", "AI Swiping"],
        background: <DatingBot dark={darkMode} />,
      },
    ],
    [darkMode]
  );

  const featureImages = useMemo(
    () => [
      "/image/feature1.png",
      "/image/feature2.png",
      "/image/feature3.png",
      "/image/feature4.png",
      "/image/feature5.png",
    ],
    []
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const upper = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef(features.map(() => React.createRef()));
  const [cardOpacities, setCardOpacities] = useState(
    new Array(features.length).fill(0)
  );
  const [scrollDir, setScrollDir] = useState("up");

  useEffect(() => {
    // Scroll direction detection
    let lastScrollY = window.scrollY;

    const handleScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDir("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDir("up");
      }
      lastScrollY = currentScrollY;
    };

    const handleScrollOpacity = () => {
      if (!cardsContainerRef.current) return;

      const containerRect = cardsContainerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const newOpacities = features.map((_, index) => {
        const cardRef = cardRefs.current[index];
        if (!cardRef.current) return 0;

        const cardRect = cardRef.current.getBoundingClientRect();

        const cardTop = cardRect.top;
        const cardBottom = cardRect.bottom;

        const topThreshold = viewportHeight * 0.25;
        const bottomThreshold = viewportHeight * 0.75;

        let opacity = 0;
        if (cardTop < bottomThreshold && cardBottom > topThreshold) {
          if (cardTop < topThreshold) {
            opacity = 1 - Math.abs(cardTop - topThreshold) / topThreshold;
          } else if (cardBottom > bottomThreshold) {
            opacity =
              1 -
              Math.abs(cardBottom - bottomThreshold) /
                (viewportHeight - bottomThreshold);
          } else {
            opacity = 1;
          }
        }

        return Math.max(0, Math.min(1, opacity));
      });

      setCardOpacities(newOpacities);
    };

    // Image slideshow
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === featureImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    // Combined scroll event listener
    const handleCombinedScroll = () => {
      handleScrollDirection();
      handleScrollOpacity();
    };

    window.addEventListener("scroll", handleCombinedScroll);

    handleScrollOpacity();

    return () => {
      window.removeEventListener("scroll", handleCombinedScroll);
      clearInterval(interval);
    };
  }, [
    featureImages.length,
    features.length,
    features,
    featureImages,
    darkMode,
  ]);

  return (
    <section className="w-full" id="product">
      <div className="w-full relative max-w-[1240px] mx-auto px-5 flex flex-col justify-center gap-12 py-16 md:py-24">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Header */}
          <div className="lg:col-span-2 pb-8" ref={upper}>
            <div className="w-full md:w-[60%]">
              <SectionTag dark={darkMode}>Our Features</SectionTag>
              <h2 className="mt-8 mb-4">
                Engage, Convert, and Manage{" "}
                <span className="text-p-400">All with One Bot</span>
              </h2>
              <p className="text-xl">
                Automate conversations, send live photos, and manage accounts
                effortlessly with xBots AI-driven chatbots keep your audience
                engaged while you focus on growth.
              </p>
            </div>
          </div>

          {/* Images */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="relative lg:sticky top-0 lg:top-[20vh]">
                {featureImages.map((src, index) => (
                  <div
                    key={index}
                    className={`transition-opacity duration-500 ${
                      index === currentImageIndex
                        ? "opacity-100"
                        : "opacity-0 absolute top-0 left-0"
                    }`}
                  >
                    <Image
                      className="relative z-4 "
                      src={src}
                      width={584}
                      height={470}
                      alt={`feature-${index + 1}`}
                    />
                    <Image
                      className="absolute top-[-50px] transform translateX-[-50%] left-[20px] lg:left-[39px] z-0 w-max-[80%] lg:w-full "
                      src="/image/upperGlow.png"
                      width={584}
                      height={467}
                      alt="glow-effect"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cards */}
          <div ref={cardsContainerRef} className="flex flex-col gap-8 relative">
            {features.map((feature, idx) => (
              <div
                ref={cardRefs.current[idx]}
                className="flex gap-[58px] sticky lg:relative top-[20px] lg:top-0"
                key={idx + darkMode}
                style={{
                  opacity: windowWidth <= 1023 ? "1" : cardOpacities[idx],
                  transition: "opacity 0.3s ease-in-out",
                }}
              >
                <div className="hidden sm:flex items-center w-fit relative z-2 diamond">
                  {/* {Diamond} */}
                  <Diamond fill={`${!darkMode && "white"}`} />
                </div>
                <div className="w-full flex gap-[-24px] items-center relative overflow-hidden md:overflow-visible">
                  <div className="hidden md:block absolute left-[-22px] z-4">
                    <Triangle
                      fill={`${!darkMode ? "#fafafa" : "#181818"}`}
                      border={`${!darkMode ? "#DCDCDC" : "#656565"}`}
                    />
                  </div>
                  <div className="flex flex-col gap-5 border border-neutral-200 dark:border-neutral-600 bg-alt-bg-light dark:bg-alt-bg rounded-[32px] py-8 px-8 w-full relative">
                    <h3>{feature.title}</h3>
                    <ul>
                      {feature.feature.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex gap-4 items-center text-n-50"
                        >
                          <span>
                            <Check />
                          </span>
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <Link href="/coming-soon">
                      <button className="main-button-md w-fit relative z-1">
                        Learn More
                      </button>
                    </Link>
                  </div>
                  <div className="absolute right-0 w-[80%] z-0">
                    {feature.background}
                  </div>
                </div>
              </div>
            ))}
            {/* {line} */}
            <div className="h-[100%] w-[2px] absolute z-0 left-[30.5px] py-26 hidden sm:block">
              <div
                className={`${
                  scrollDir === "up" ? "rotate-180 " : ""
                } bg-[linear-gradient(180deg,_rgba(92,43,187,0)_0%,_rgba(92,43,187,0.5)_50%,_rgba(92,43,187,0.75)_75%,_#5C2BBB_100%)] h-[300px] sticky ${
                  scrollDir === "up" ? "top-[40vh]" : "top-[20vh]"
                } rounded-3xl bg-gradient-to-left`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
