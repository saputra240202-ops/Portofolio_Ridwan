"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "id";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("language") as Language;
    if (storedLang === "en" || storedLang === "id") {
      setLanguageState(storedLang);
    } else {
      // Default to English, or you could detect browser language here
      setLanguageState("en");
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const toggleLanguage = () => {
    const newLang = language === "en" ? "id" : "en";
    setLanguage(newLang);
  };

  if (!mounted) {
    // Return a hidden version of the app to avoid hydration mismatch 
    // or just return children. Since we use `suppressHydrationWarning`, 
    // returning children is generally fine, but we wrap it in context with default "en".
    return (
      <LanguageContext.Provider value={{ language: "en", toggleLanguage: () => {}, setLanguage: () => {} }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
