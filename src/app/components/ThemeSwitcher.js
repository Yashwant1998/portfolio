"use client";
import { useTheme } from "./ThemeProvider";

export default function ThemeSwitcher() {
  const { currentTheme, switchTheme, themes } = useTheme();

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

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-200 dark:border-gray-700">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
          Theme Selector
        </h3>
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
    </div>
  );
}
