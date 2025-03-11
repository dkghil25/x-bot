// context/DarkModeContext.js
"use client";
import { createContext, useContext, useState, useEffect } from "react";

// Create the context
const DarkModeContext = createContext();

// Provider component
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  // Run once on mount to initialize from localStorage/system preference
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check localStorage first
    const storedDarkMode = localStorage.getItem("darkMode");

    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode === "true");
    } else {
      // Check system preference as fallback
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
    }
  }, []);

  // Update HTML class and localStorage when darkMode changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    localStorage.setItem("darkMode", darkMode.toString());

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // The value that will be provided to consumers
  const value = {
    darkMode,
    setDarkMode,
    toggleDarkMode: () => setDarkMode((prev) => !prev),
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
}

// Custom hook for using the dark mode context
export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
}
