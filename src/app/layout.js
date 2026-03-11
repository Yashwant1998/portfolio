import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeSwitcher from "./components/ThemeSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Yashwant Kumar - Senior Frontend Developer Portfolio",
  description:
    "Portfolio of Yashwant Kumar - Senior Frontend Developer specializing in React, TypeScript, and modern web technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center justify-between h-16">
                <Link
                  href="/"
                  className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  Yashwant Kumar
                </Link>

                <div className="hidden md:flex space-x-8">
                  <a
                    href="#about"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#skills"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    Skills
                  </a>
                  <a
                    href="#projects"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    Projects
                  </a>
                  <a
                    href="#experience"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    Experience
                  </a>
                  <a
                    href="#education"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    Education
                  </a>
                  <a
                    href="#contact"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    Contact
                  </a>
                </div>

                {/* Mobile menu button */}
                <button className="md:hidden p-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
          <div className="pt-16">{children}</div>
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
