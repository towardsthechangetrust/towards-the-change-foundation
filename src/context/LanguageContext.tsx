"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, type Language, type TranslationKey } from "@/lib/translations";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
  t: (key) => translations.en[key] || "",
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("ttc_lang") as Language;
    if (saved === "en" || saved === "ta") {
      setLangState(saved);
    }
  }, []);

  function setLang(newLang: Language) {
    setLangState(newLang);
    try {
      localStorage.setItem("ttc_lang", newLang);
    } catch {
      // Ignore
    }
  }

  function toggleLang() {
    const next = lang === "en" ? "ta" : "en";
    setLang(next);
  }

  function t(key: TranslationKey): string {
    const dict = translations[lang] || translations.en;
    return dict[key] || translations.en[key] || "";
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
