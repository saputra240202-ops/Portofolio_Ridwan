"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Languages } from "lucide-react";
import { navLinks, personalInfo } from "@/data/portfolio-data";
import { useLanguage } from "@/components/providers/LanguageContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const handleNavClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-light dark:glass shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex-shrink-0 cursor-pointer"
          >
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-600">
              {personalInfo.firstName}
            </span>
            <span className="text-2xl font-bold text-slate-700 dark:text-slate-300">
              .Dev
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks[language].map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-full transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">
            {mounted && (
              <>
                <button
                  onClick={toggleLanguage}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                  aria-label="Toggle language"
                >
                  <Languages className="w-4 h-4" />
                  {language}
                </button>
                <button
                  onClick={toggleTheme}
                  className="p-2.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-slate-600" />
                  )}
                </button>
              </>
            )}
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              {language === "en" ? "Hire Me" : "Rekrut Saya"}
            </button>
          </div>

          {/* Mobile Button */}
          <div className="flex md:hidden items-center gap-2">
            {mounted && (
              <>
                <button
                  onClick={toggleLanguage}
                  className="px-2 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Toggle language"
                >
                  {language}
                </button>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-slate-600" />
                  )}
                </button>
              </>
            )}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-light dark:glass border-t border-slate-200/50 dark:border-slate-700/50 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks[language].map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium hover:bg-indigo-50 dark:hover:bg-slate-800 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-3 px-4">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold text-sm hover:shadow-lg transition-all"
                >
                  {language === "en" ? "Hire Me" : "Rekrut Saya"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
