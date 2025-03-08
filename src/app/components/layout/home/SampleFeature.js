"use client";
import Link from "next/link";
import React from "react"
import { useEffect, useRef, useState } from "react";
import SectionTag from "@/app/components/component/sectionTag";
import { Diamond, Check, Triangle } from "@/app/components/icons/icons";
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

import Image from "next/image";

export default function HeroSection() {
  const features = [
    {
      title: "Snapchat Bot",
      feature: ["AI Chatting", "Live Snaps", "Story Scheduling"],
      background: <SnapchatBot />,
    },
    {
      title: "Instagram Bot",
      feature: ["AI Chatting", "Live Photos", "Account Management"],
      background: <InstagramBot />,
    },
    {
      title: "Reddit Bot",
      feature: ["AI Chatting", "Live Photos", "Commenting"],
      background: <RedditBot />,
    },
    {
      title: "Telegram Bot",
      feature: ["AI Chatting", "Live Photos", "Account Management"],
      background: <TelegramBot />,
    },
    {
      title: "X Bot",
      feature: ["AI Chatting", "Live Photos", "Account Management"],
      background: <TwitterBot />,
    },
    {
      title: "WhatsApp Bot",
      feature: ["AI Chatting", "Live Photos", "Account Management"],
      background: <WhatsAppBot />,
    },
    {
      title: "GrindR Bot",
      feature: ["AI Chatting", "Live Photos", "Account Management"],
      background: <GrindrBot />,
    },
    {
      title: "Dating App Bot",
      feature: ["AI Chatting", "Smart Unmatching", "AI Swiping"],
      background: <DatingBot />,
    },
  ];

  // Add state for image slideshow
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const upper = useRef();
  const [curHeight, setCurHeight] = useState(0);
  const featureImages = [
    "/image/feature1.png",
    "/image/feature2.png",
    "/image/feature3.png",
    "/image/feature4.png",
    "/image/feature5.png",
  ];

  // New state for card opacities
  const [cardOpacities, setCardOpacities] = useState(
    new Array(features.length).fill(0)
  );
  const cardRefs = useRef(features.map(() => React.createRef()));

  useEffect(() => {
    const observers = cardRefs.current.map((cardRef, index) => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            // Calculate opacity based on the position in the viewport
            const rect = entry.boundingClientRect;
            const parentRect = entry.rootBounds;
            
            // Calculate vertical position relative to viewport
            const verticalPosition = rect.top / parentRect.height;
            
            // Opacity calculation (smooth transition)
            let opacity;
            if (verticalPosition < 0.5) {
              // Coming from bottom, increase opacity
              opacity = 1 - Math.abs(verticalPosition - 0.5) * 2;
            } else {
              // Going to top, decrease opacity
              opacity = 1 - (verticalPosition - 0.5) * 2;
            }
            
            // Ensure opacity is between 0 and 1
            opacity = Math.max(0, Math.min(1, opacity));
            
            // Update opacities state
            setCardOpacities((prev) => {
              const newOpacities = [...prev];
              newOpacities[index] = opacity;
              return newOpacities;
            });
          }
        },
        {
          root: null,
          threshold: 0.1, // Trigger when at least 10% of the element is visible
        }
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return observer;
    });

    // Cleanup observers on unmount
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  useEffect(() => {
    setCurHeight(upper.current.offsetHeight);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === featureImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-bg">
      <div className="w-full relative max-w-[1240px] mx-auto px-5 flex flex-col justify-center gap-12 py-16 md:py-24 ">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* upper */}
          <div className="lg:col-span-2 pb-8" ref={upper}>
            <div className="w-full md:w-[60%] ">
              <SectionTag>Our Features</SectionTag>
              <h2 className="mt-8 mb-4">
                Engage, Convert, and Manage{" "}
                <span className="text-p-400">All with One Bot</span>
              </h2>
              <p className="text-xl">
                Automate conversations, send live photos, and manage accounts
                effortlessly with xBot's AI-driven chatbots keep your audience
                engaged while you focus on growth.
              </p>
            </div>
          </div>

          {/* images */}
          <div className=" flex justify-center">
            <div className="relative">
              <div className=" relative lg:sticky top-0 lg:top-[100px]">
                {featureImages.map((src, index) => (
                  <div
                    key={index}
                    className={` transition-opacity duration-500 ${
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
                      className="absolute top-[-50px] transform translateX-[-50%] left-[20px] lg:left-[39px] z-0 w-max-[80%] lg:w-full"
                      src="/image/upperGlow.png"
                      width={584}
                      height={470}
                      alt="glow-effect"
                    /> 
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/*  */}
          <div className="flex flex-col gap-8 relative">
            {features.map((feature, idx) => {
              return (
                // cards
                <div
                  ref={cardRefs.current[idx]}
                  className="flex gap-[58px] sticky lg:relative top-[20px] lg:top-0"
                  key={idx}
                  style={{
                    opacity: cardOpacities[idx],
                    transition: 'opacity 0.3s ease-in-out',
                  }}
                >
                  <div className="hidden sm:flex items-center w-fit relative z-1">
                    <Diamond />
                  </div>
                  <div className="w-full flex gap-[-24px] items-center relative overflow-hidden md:overflow-visible">
                    <div className="hidden sm:block absolute left-[-22px] z-2">
                      <Triangle />
                    </div>
                    <div className="flex flex-col gap-5 border border-neutral-600 bg-alt-bg rounded-[32px] py-8 px-8 w-full relative">
                      <h3>{feature.title}</h3>
                      <ul>
                        {feature.feature.map((feat, idx) => {
                          return (
                            <li key={idx} className="flex gap-4 items-center">
                              <span>
                                <Check />
                              </span>
                              {feat}
                            </li>
                          );
                        })}
                      </ul>
                      <Link href="#">
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
              );
            })}
            <div className="h-[100%] w-[2px] absolute z-0 left-[31.5px] py-26 hidden sm:block">
              <div className=" bg-[linear-gradient(180deg,_rgba(92,43,187,0)_0%,_rgba(92,43,187,0.5)_50%,_rgba(92,43,187,0.75)_75%,_#5C2BBB_100%)] h-[600px] sticky top-[1px] rounded-3xl bg-gradient-to-left"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}