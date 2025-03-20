"use client";
import { Logo } from "@/app/components/icons/icons";
import { useState, useRef, useEffect, use } from "react";
import Link from "next/link";
import { useDarkMode } from "@/app/components/component/useDarkMode";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(0);
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (menuRef.current && isMenuOpen) {
      setMenuHeight(menuRef.current.scrollHeight);
    } else {
      setMenuHeight(0);
    }
  }, [isMenuOpen, darkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" w-full max-w-[1240px]  mx-auto px-5 flex items-center justify-between  md:px-6 py-3 relative z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <span className="hidden sm:block">
            <Logo dark={darkMode} />
          </span>
          <span className="block sm:hidden">
            <Logo width={100} dark={darkMode} />
          </span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <Link
          href="/"
          className="text-white hover:text-p-500 transition-colors duration-300"
        >
          Home
        </Link>
        <Link
          href="#product"
          className="text-white hover:text-p-500 transition-colors duration-300"
        >
          Products
        </Link>
        <Link href="#contact" className="main-button-md">
          Contact Us
        </Link>
      </div>

      {/* Mobile Navigation Button */}
      <div className="flex md:hidden items-center">
        <Link href="#contact" className="main-button-md mr-3">
          Contact Us
        </Link>
        <button
          onClick={toggleMenu}
          className="text-n-950 dark:text-white focus:outline-none transition-transform duration-300"
          aria-label="Toggle menu"
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              isMenuOpen ? "rotate-90" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown with CSS Animation */}
      <div
        ref={menuRef}
        className={`md:hidden absolute top-16 left-0 right-0 z-40 overflow-hidden transition-all duration-300 ease-in-out`}
        style={{
          maxHeight: `${menuHeight}px`,
          opacity: isMenuOpen ? "1" : "0",
          visibility: menuHeight === 0 ? "hidden" : "visible",
        }}
      >
        <div className="flex flex-col px-4 py-2 bg-alt-bg mx-5 rounded-xl">
          <Link
            href="/"
            className={`!text-white py-2 border-b border-n-950 hover:text-p-500 block transition-all duration-300 transform ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-4 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#product"
            className={`!text-white py-2  hover:text-p-500 block transition-all duration-300 transform ${
              isMenuOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-4 opacity-0"
            }`}
            style={{ transitionDelay: "150ms" }}
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
}
