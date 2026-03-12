"use client";
import { useTheme } from "./ThemeProvider";

export default function Hero() {
  const { currentTheme } = useTheme();

  const getHeroClasses = () => {
    switch (currentTheme) {
      case "glassmorphism":
        return "min-h-screen flex items-center justify-center relative overflow-hidden";
      case "neomorphism":
        return "min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300";
      case "cyberpunk":
        return "min-h-screen flex items-center justify-center relative overflow-hidden cyber-scan";
      case "brutalist":
        return "min-h-screen flex items-center justify-center bg-black";
      case "geometric":
        return "min-h-screen flex items-center justify-center relative overflow-hidden";
      default:
        return "min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900";
    }
  };

  const getContentClasses = () => {
    switch (currentTheme) {
      case "glassmorphism":
        return "max-w-4xl mx-auto px-6 text-center glass-effect rounded-3xl p-12 text-white";
      case "neomorphism":
        return "max-w-4xl mx-auto px-6 text-center neu-outset rounded-3xl p-12";
      case "cyberpunk":
        return "max-w-4xl mx-auto px-6 text-center cyber-border rounded-xl p-12 bg-black/50";
      case "brutalist":
        return "max-w-4xl mx-auto px-6 text-center brutal-card p-12 transform rotate-2";
      case "geometric":
        return "max-w-4xl mx-auto px-6 text-center geo-card p-12 text-white";
      default:
        return "max-w-4xl mx-auto px-6 text-center";
    }
  };

  const getAvatarClasses = () => {
    switch (currentTheme) {
      case "glassmorphism":
        return "w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl font-bold text-white shadow-xl border border-white/30 animate-float";
      case "neomorphism":
        return "w-32 h-32 mx-auto mb-6 rounded-full neu-inset flex items-center justify-center text-4xl font-bold text-gray-700 animate-float";
      case "cyberpunk":
        return "w-32 h-32 mx-auto mb-6 rounded-full bg-black border-2 border-green-400 cyber-glow flex items-center justify-center text-4xl font-bold cyber-text animate-float";
      case "brutalist":
        return "w-32 h-32 mx-auto mb-6 bg-yellow-400 border-4 border-black box-shadow-[8px_8px_0px_#000] flex items-center justify-center text-4xl font-bold text-black transform rotate-12";
      case "geometric":
        return "w-32 h-32 mx-auto mb-6 geo-diamond flex items-center justify-center text-4xl font-bold text-white transform rotate-45 animate-float";
      default:
        return "w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-4xl font-bold text-white shadow-xl";
    }
  };

  const getTitleClasses = () => {
    switch (currentTheme) {
      case "glassmorphism":
        return "text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight animate-fade-in-up";
      case "neomorphism":
        return "text-5xl md:text-7xl font-bold text-gray-800 mb-4 tracking-tight animate-fade-in-up";
      case "cyberpunk":
        return "text-5xl md:text-7xl font-bold cyber-text mb-4 tracking-tight animate-fade-in-up";
      case "brutalist":
        return "text-5xl md:text-7xl font-black text-black mb-4 tracking-tight transform -rotate-1 animate-fade-in-up";
      case "geometric":
        return "text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight animate-fade-in-up";
      default:
        return "text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight";
    }
  };

  const getSubtitleClasses = () => {
    switch (currentTheme) {
      case "glassmorphism":
        return "text-2xl md:text-3xl text-white/90 font-semibold mb-6 animate-fade-in-up";
      case "neomorphism":
        return "text-2xl md:text-3xl text-blue-600 font-semibold mb-6 animate-fade-in-up";
      case "cyberpunk":
        return "text-2xl md:text-3xl cyber-accent font-semibold mb-6 animate-fade-in-up";
      case "brutalist":
        return "text-2xl md:text-3xl text-red-600 font-black mb-6 transform rotate-1 animate-fade-in-up";
      case "geometric":
        return "text-2xl md:text-3xl text-white/90 font-semibold mb-6 animate-fade-in-up";
      default:
        return "text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-semibold mb-6";
    }
  };

  const getDescriptionClasses = () => {
    switch (currentTheme) {
      case "glassmorphism":
        return "text-xl text-white/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up";
      case "neomorphism":
        return "text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed animate-fade-in-up";
      case "cyberpunk":
        return "text-xl text-green-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-up";
      case "brutalist":
        return "text-xl text-black font-bold max-w-2xl mx-auto leading-relaxed animate-fade-in-up";
      case "geometric":
        return "text-xl text-white/90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up";
      default:
        return "text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed";
    }
  };

  const getButtonClasses = () => {
    switch (currentTheme) {
      case "glassmorphism":
        return "px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105";
      case "neomorphism":
        return "px-8 py-4 neu-outset hover:neu-pressed text-blue-600 font-semibold rounded-xl transition-all duration-200";
      case "cyberpunk":
        return "px-8 py-4 bg-transparent border-2 border-green-400 cyber-glow hover:bg-green-400/10 cyber-text font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1";
      case "brutalist":
        return "brutal-button px-8 py-4 rounded-none text-lg transform -rotate-1 hover:rotate-1";
      case "geometric":
        return "px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-white font-semibold geo-hexagon transition-all duration-300 transform hover:scale-105";
      default:
        return "px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1";
    }
  };

  return (
    <section className={getHeroClasses()}>
      {currentTheme === "glassmorphism" && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-400/20"></div>
      )}

      <div className={getContentClasses()}>
        <div className="mb-8">
          <div className={getAvatarClasses()}>
            <span
              className={
                currentTheme === "geometric" ? "transform -rotate-45" : ""
              }
            >
              YK
            </span>
          </div>
          <h1 className={getTitleClasses()}>Yashwant Kumar</h1>
          <h2 className={getSubtitleClasses()}>Senior Frontend Developer</h2>
          <p className={getDescriptionClasses()}>
            Passionate frontend developer with 5+ years of experience
            specializing in React, TypeScript, and modern web technologies.
            Expert in building scalable applications and AI-driven workflows.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="#contact" className={getButtonClasses()}>
            Get In Touch
          </a>
          <a
            href="#about"
            className={`px-8 py-4 ${
              currentTheme === "brutalist"
                ? "border-4 border-black bg-white text-black font-black transform rotate-1 hover:-rotate-1"
                : currentTheme === "cyberpunk"
                  ? "border-2 border-pink-500 text-pink-500 hover:bg-pink-500/10 cyber-glow"
                  : currentTheme === "glassmorphism"
                    ? "border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm"
                    : currentTheme === "neomorphism"
                      ? "neu-outset text-gray-700"
                      : currentTheme === "geometric"
                        ? "border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm geo-triangle"
                        : "border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white"
            } font-semibold rounded-lg transition-all duration-300`}
          >
            Learn More
          </a>
        </div>

        {currentTheme !== "brutalist" && (
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/yashwant-kumar-6a9aa5160/"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-8 h-8 transition-colors ${
                currentTheme === "cyberpunk"
                  ? "text-green-400 hover:text-pink-500"
                  : currentTheme === "glassmorphism" ||
                      currentTheme === "geometric"
                    ? "text-white/80 hover:text-white"
                    : currentTheme === "neomorphism"
                      ? "text-gray-600 hover:text-blue-600"
                      : "text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              }`}
            >
              <svg
                className="w-full h-full"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/Yashwant1998"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-8 h-8 transition-colors ${
                currentTheme === "cyberpunk"
                  ? "text-green-400 hover:text-pink-500"
                  : currentTheme === "glassmorphism" ||
                      currentTheme === "geometric"
                    ? "text-white/80 hover:text-white"
                    : currentTheme === "neomorphism"
                      ? "text-gray-600 hover:text-blue-600"
                      : "text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              }`}
            >
              <svg
                className="w-full h-full"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://leetcode.com/u/user8166lq/"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-8 h-8 transition-colors ${
                currentTheme === "cyberpunk"
                  ? "text-green-400 hover:text-pink-500"
                  : currentTheme === "glassmorphism" ||
                      currentTheme === "geometric"
                    ? "text-white/80 hover:text-white"
                    : currentTheme === "neomorphism"
                      ? "text-gray-600 hover:text-blue-600"
                      : "text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
              }`}
            >
              <svg
                className="w-full h-full"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.778 2.133 7.95-.072 2.172-2.205 2.133-5.656-.1-7.7l-4.308-4.221a1.29 1.29 0 1 0-1.81 1.84l4.308 4.221c.704.690.704 1.793 0 2.484-.704.690-1.843.69-2.547 0l-4.308-4.221a.464.464 0 0 1-.14-.322.464.464 0 0 1 .14-.322l4.308-4.221c.704-.69 1.843-.69 2.547 0 .704.691.704 1.794 0 2.484l-4.308 4.221a1.29 1.29 0 1 0 1.81 1.84l4.308-4.221c2.172-2.133 2.172-5.656 0-7.861-2.172-2.205-5.702-2.237-7.95-.072z" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
