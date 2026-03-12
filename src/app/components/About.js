"use client";
import { useTheme } from "./ThemeProvider";

export default function About() {
  const { currentTheme } = useTheme();

  const getSectionClasses = () => {
    switch (currentTheme) {
      case "glassmorphism":
        return "py-20 relative";
      case "neomorphism":
        return "py-20 bg-gradient-to-br from-gray-200 to-gray-300";
      case "cyberpunk":
        return "py-20 bg-gradient-to-r from-black via-gray-900 to-black relative overflow-hidden";
      case "brutalist":
        return "py-20 bg-yellow-400 relative";
      case "geometric":
        return "py-20 relative";
      default:
        return "py-20 bg-white dark:bg-gray-800";
    }
  };

  const getContainerClasses = () => {
    switch (currentTheme) {
      case "glassmorphism":
        return "max-w-6xl mx-auto px-6 glass-effect rounded-3xl p-12 text-white";
      case "neomorphism":
        return "max-w-6xl mx-auto px-6 neu-outset rounded-3xl p-12";
      case "cyberpunk":
        return "max-w-6xl mx-auto px-6 cyber-border rounded-xl p-12 relative z-10";
      case "brutalist":
        return "max-w-6xl mx-auto px-6 brutal-card p-12 transform -rotate-1";
      case "geometric":
        return "max-w-6xl mx-auto px-6 geo-card rounded-3xl p-12 text-white";
      default:
        return "max-w-6xl mx-auto px-6";
    }
  };

  const getTitleClasses = () => {
    switch (currentTheme) {
      case "glassmorphism":
        return "text-4xl md:text-5xl font-bold text-white mb-4";
      case "neomorphism":
        return "text-4xl md:text-5xl font-bold text-gray-800 mb-4";
      case "cyberpunk":
        return "text-4xl md:text-5xl font-bold cyber-text mb-4";
      case "brutalist":
        return "text-4xl md:text-5xl font-black text-black mb-4 transform rotate-2";
      case "geometric":
        return "text-4xl md:text-5xl font-bold text-white mb-4";
      default:
        return "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4";
    }
  };

  const getAccentClasses = () => {
    switch (currentTheme) {
      case "glassmorphism":
        return "w-24 h-1 bg-white/50 mx-auto mb-8";
      case "neomorphism":
        return "w-24 h-1 neu-inset mx-auto mb-8 rounded-full";
      case "cyberpunk":
        return "w-24 h-1 bg-gradient-to-r from-green-400 to-pink-500 mx-auto mb-8 cyber-glow";
      case "brutalist":
        return "w-24 h-2 bg-red-600 mx-auto mb-8 transform rotate-1";
      case "geometric":
        return "w-24 h-1 bg-white/70 mx-auto mb-8 geo-triangle";
      default:
        return "w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8";
    }
  };

  return (
    <section id="about" className={getSectionClasses()}>
      {currentTheme === "glassmorphism" && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-pink-500/20"></div>
      )}

      {currentTheme === "cyberpunk" && (
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 border border-green-400 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-pink-500 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-cyan-400 animate-bounce"></div>
        </div>
      )}

      <div className={getContainerClasses()}>
        <div className="text-center mb-16">
          <h2 className={getTitleClasses()}>About Me</h2>
          <div className={getAccentClasses()}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3
              className={`text-2xl font-bold mb-4 ${
                currentTheme === "glassmorphism"
                  ? "text-white"
                  : currentTheme === "neomorphism"
                    ? "text-gray-800"
                    : currentTheme === "cyberpunk"
                      ? "cyber-text"
                      : currentTheme === "brutalist"
                        ? "text-black font-black transform -rotate-1"
                        : currentTheme === "geometric"
                          ? "text-white"
                          : "text-gray-900 dark:text-white"
              }`}
            >
              Hello! I'm Yashwant, a passionate frontend developer who loves
              crafting exceptional user experiences.
            </h3>
            <p
              className={`text-lg leading-relaxed ${
                currentTheme === "glassmorphism"
                  ? "text-white/90"
                  : currentTheme === "neomorphism"
                    ? "text-gray-700"
                    : currentTheme === "cyberpunk"
                      ? "text-green-300"
                      : currentTheme === "brutalist"
                        ? "text-black font-bold"
                        : currentTheme === "geometric"
                          ? "text-white/90"
                          : "text-gray-600 dark:text-gray-300"
              }`}
            >
              With over 5 years of experience in web development, I specialize
              in creating robust, scalable applications using modern
              technologies. I'm passionate about clean code, user experience,
              and continuous learning.
            </p>
            <p
              className={`text-lg leading-relaxed ${
                currentTheme === "glassmorphism"
                  ? "text-white/90"
                  : currentTheme === "neomorphism"
                    ? "text-gray-700"
                    : currentTheme === "cyberpunk"
                      ? "text-green-300"
                      : currentTheme === "brutalist"
                        ? "text-black font-bold"
                        : currentTheme === "geometric"
                          ? "text-white/90"
                          : "text-gray-600 dark:text-gray-300"
              }`}
            >
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source projects, or mentoring aspiring
              developers. I believe in the power of technology to solve
              real-world problems and create meaningful impact.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    currentTheme === "brutalist"
                      ? "bg-red-600 transform rotate-45"
                      : currentTheme === "cyberpunk"
                        ? "bg-green-500 cyber-glow"
                        : "bg-green-500"
                  }`}
                ></div>
                <span
                  className={`${
                    currentTheme === "glassmorphism"
                      ? "text-white/90"
                      : currentTheme === "neomorphism"
                        ? "text-gray-700"
                        : currentTheme === "cyberpunk"
                          ? "cyber-text"
                          : currentTheme === "brutalist"
                            ? "text-black font-bold"
                            : currentTheme === "geometric"
                              ? "text-white/90"
                              : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Available for freelance
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    currentTheme === "brutalist"
                      ? "bg-yellow-600 transform -rotate-45"
                      : currentTheme === "cyberpunk"
                        ? "bg-blue-500 cyber-glow"
                        : "bg-blue-500"
                  }`}
                ></div>
                <span
                  className={`${
                    currentTheme === "glassmorphism"
                      ? "text-white/90"
                      : currentTheme === "neomorphism"
                        ? "text-gray-700"
                        : currentTheme === "cyberpunk"
                          ? "cyber-text"
                          : currentTheme === "brutalist"
                            ? "text-black font-bold"
                            : currentTheme === "geometric"
                              ? "text-white/90"
                              : "text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Remote friendly
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className={`rounded-2xl p-8 text-white ${
                currentTheme === "glassmorphism"
                  ? "glass-card"
                  : currentTheme === "neomorphism"
                    ? "neu-outset bg-gradient-to-br from-blue-500 to-purple-600"
                    : currentTheme === "cyberpunk"
                      ? "bg-black border-2 border-green-400 cyber-glow"
                      : currentTheme === "brutalist"
                        ? "bg-red-600 border-4 border-black brutal-card transform rotate-2"
                        : currentTheme === "geometric"
                          ? "geo-card"
                          : "bg-gradient-to-br from-blue-500 to-purple-600"
              }`}
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div
                    className={`text-3xl font-bold ${currentTheme === "brutalist" ? "font-black" : ""}`}
                  >
                    5+
                  </div>
                  <div
                    className={`${
                      currentTheme === "glassmorphism"
                        ? "text-white/80"
                        : currentTheme === "cyberpunk"
                          ? "text-green-300"
                          : currentTheme === "brutalist"
                            ? "text-black"
                            : "text-blue-100"
                    }`}
                  >
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className={`text-3xl font-bold ${currentTheme === "brutalist" ? "font-black" : ""}`}
                  >
                    120+
                  </div>
                  <div
                    className={`${
                      currentTheme === "glassmorphism"
                        ? "text-white/80"
                        : currentTheme === "cyberpunk"
                          ? "text-green-300"
                          : currentTheme === "brutalist"
                            ? "text-black"
                            : "text-blue-100"
                    }`}
                  >
                    LeetCode Problems
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className={`text-3xl font-bold ${currentTheme === "brutalist" ? "font-black" : ""}`}
                  >
                    50+
                  </div>
                  <div
                    className={`${
                      currentTheme === "glassmorphism"
                        ? "text-white/80"
                        : currentTheme === "cyberpunk"
                          ? "text-green-300"
                          : currentTheme === "brutalist"
                            ? "text-black"
                            : "text-blue-100"
                    }`}
                  >
                    Developers Mentored
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className={`text-3xl font-bold ${currentTheme === "brutalist" ? "font-black" : ""}`}
                  >
                    3
                  </div>
                  <div
                    className={`${
                      currentTheme === "glassmorphism"
                        ? "text-white/80"
                        : currentTheme === "cyberpunk"
                          ? "text-green-300"
                          : currentTheme === "brutalist"
                            ? "text-black"
                            : "text-blue-100"
                    }`}
                  >
                    Major Companies
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
