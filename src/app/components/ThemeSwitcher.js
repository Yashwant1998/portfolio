"use client";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function ThemeSwitcher() {
  const { currentTheme, switchTheme, themes } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const themeOptions = [
    {
      key: themes.default,
      label: "Original",
      description: "Clean & Professional",
    },
    {
      key: themes.glassmorphism,
      label: "Glass",
      description: "Modern Transparency",
    },
    { key: themes.neomorphism, label: "Soft", description: "Subtle Depth" },
    { key: themes.cyberpunk, label: "Cyber", description: "Neon Future" },
    { key: themes.brutalist, label: "Bold", description: "High Contrast" },
    { key: themes.geometric, label: "Angular", description: "Creative Shapes" },
  ];

  const getCurrentThemeLabel = () => {
    return (
      themeOptions.find((theme) => theme.key === currentTheme)?.label ||
      "Original"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 overflow-hidden ${
          isExpanded ? "p-4" : "p-3"
        }`}
      >
        {/* Header with minimize/expand toggle */}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
            {isExpanded ? "Theme Selector" : getCurrentThemeLabel()}
          </h3>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="ml-3 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
          >
            <svg
              className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isExpanded ? "M19 9l-7 7-7-7" : "M5 15l7-7 7 7"}
              />
            </svg>
          </button>
        </div>

        {/* Theme options - only show when expanded */}
        <div
          className={`transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="grid grid-cols-2 gap-2">
            {themeOptions.map((theme) => (
              <button
                key={theme.key}
                onClick={() => switchTheme(theme.key)}
                className={`p-3 rounded-xl text-left transition-all duration-200 ${
                  currentTheme === theme.key
                    ? "bg-blue-100 dark:bg-blue-900/50 border-2 border-blue-500"
                    : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border-2 border-transparent"
                }`}
              >
                <div className="font-medium text-sm">{theme.label}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {theme.description}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Quick theme indicator when minimized */}
        {!isExpanded && (
          <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            Click to expand themes
          </div>
        )}
      </div>
    </div>
  );
}
