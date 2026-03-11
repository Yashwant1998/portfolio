"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const THEMES = {
  default: "default",
  glassmorphism: "glassmorphism",
  neomorphism: "neomorphism",
  cyberpunk: "cyberpunk",
  brutalist: "brutalist",
  geometric: "geometric",
};

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(THEMES.default);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme && Object.values(THEMES).includes(savedTheme)) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("portfolio-theme", currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  const switchTheme = (theme) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{ currentTheme, switchTheme, themes: THEMES }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
