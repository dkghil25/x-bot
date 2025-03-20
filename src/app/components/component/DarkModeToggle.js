"use client";

import { useState, useEffect } from "react";
import { Dark, Light } from "@/app/components/icons/icons";
export const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  // Initialize theme from localStorage or system preference
  // useEffect(() => {
  //   // Check if theme preference exists in localStorage
  //   const savedTheme = localStorage.getItem("theme");

  //   if (savedTheme) {
  //     setDarkMode(savedTheme === "dark");
  //   } else {
  //     // Check system preference
  //     setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  //   }
  // }, []);

  // Apply theme change
  // useEffect(() => {
  //   const root = window.document;
  //   if (darkMode) {
  //     root.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     root.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-10 w-22 items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-p-500 p-1 shadow-lg transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:from-indigo-900 dark:to-purple-900"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div className="absolute inset-0 rounded-full opacity-20 blur-sm bg-gradient-to-r from-sky-300 to-indigo-300 dark:from-indigo-700 dark:to-p-700" />

      <div
        className={`absolute left-[0.2px] h-10 w-10 transform rounded-full bg-white shadow-md transition-transform duration-500 ease-in-out flex items-center justify-center ${
          darkMode ? "translate-x-12" : "translate-x-0"
        }`}
      >
        {darkMode ? <Dark /> : <Light />}
      </div>

      <span
        className={`ml-12 font-medium text-xs text-white transition-opacity duration-200 ${
          darkMode ? "opacity-100" : "opacity-0"
        }`}
      >
        DARK
      </span>
      <span
        className={`mr-12 font-medium text-xs text-white transition-opacity duration-200 ${
          !darkMode ? "opacity-100" : "opacity-0"
        }`}
      >
        LIGHT
      </span>
    </button>
  );
};
