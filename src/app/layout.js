import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Navigation from "./components/Navigation";

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
          <Navigation />
          <div className="pt-16">{children}</div>
          <ThemeSwitcher />
        </ThemeProvider>
      </body>
    </html>
  );
}
