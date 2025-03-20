// components/Footer.jsx
"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "../icons/icons";
import { Logo } from "@/app/components/icons/icons";
import { useDarkMode } from "@/app/components/component/useDarkMode";

const Footer = () => {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <footer className={`${darkMode ? "bg-bg" : "bg-n-200"}  w-full pb-12`}>
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6  lg:px-8">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 ${
            darkMode ? "border-t-[1px] border-n-950" : ""
          } border-0 `}
        >
          {/* Logo and Social Media */}
          <div className="space-y-6">
            <div>
              <Link href="/" className="text-3xl font-bold">
                <Logo dark={darkMode} />
              </Link>
            </div>
            <div>
              <p className="mb-4  ">Follow us</p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  className="bg-p-500  p-2 rounded-full"
                >
                  <Facebook />
                </a>
                <a href="https://x.com/" className="bg-p-500  p-2 rounded-full">
                  <Twitter />
                </a>
                <a
                  href="https://www.instagram.com/"
                  className="bg-p-500  p-2 rounded-full"
                >
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-xl font-semibold mb-6  ">Pages</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link href="#contact" className="transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#product" className=" transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className=" transition-colors">
                  Updates
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold   mb-6">Products</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/coming-soon" className="transition-colors">
                    Snapchat
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon" className="transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon" className="transition-colors">
                    Reddit
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon" className="transition-colors">
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon" className="transition-colors">
                    X
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon" className="transition-colors">
                    WhatsApp
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-8 sm:mt-0">
              <h3 className="text-xl font-semibold mb-6   sm:invisible">
                More
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/coming-soon" className="transition-colors">
                    GrindR
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon" className="transition-colors">
                    DA Swiper
                  </Link>
                </li>
                <li>
                  <Link href="/coming-soon" className=" transition-colors">
                    DA Chatter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-n-300 dark:border-n-950 flex justify-between">
          <p className="text-sm  ">© 2025 xBot | ALL RIGHTS RESERVED</p>
          <div>
            {" "}
            <Link href="/coming-soon" className=" mr-8">
              Privacy Policy
            </Link>
            <Link href="/coming-soon" className="transition-colors">
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
