"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "al" | "tr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string; // U shtua funksioni i përkthimit
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Fjalori i përkthimeve për Navbar (mund të shtosh fjalë të tjera këtu për pjesët e tjera të faqes)
const translations: Record<Language, Record<string, string>> = {
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    experience: "Experience",
    connect_title: "Let's Connect",
    connect_subtitle: "I'm usually available for a chat!",
    phone: "Phone",
    location_modes: "Kosovo • Remote • Hybrid",
    software_engineer: "Software Engineer",
    final_year: "Final Year",
    education: "Education",
    key_projects: "Key Projects",
    technical_arsenal: "Technical Arsenal",
    work_experience: "Work Experience",
  },
  al: {
    home: "Ballina",
    about: "Rreth meje",
    projects: "Projektet",
    experience: "Eksperienca",
    connect_title: "Le të Lidhemi",
    connect_subtitle: "Zakonisht jam e disponueshme për një bisedë!",
    phone: "Telefon",
    location_modes: "Kosovë • Remote • Hybrid",
    software_engineer: "Inxhiniere Softuerike",
    final_year: "Viti i Fundit",
    education: "Edukimi",
    key_projects: "Projekte Kryesore",
    technical_arsenal: "Arsenali Teknik",
    work_experience: "Eksperienca e Punës",
  },
  tr: {
    home: "Anasayfa",
    about: "Hakkımda",
    projects: "Projeler",
    experience: "Deneyim",
    connect_title: "İletişime Geçelim",
    connect_subtitle: "Genellikle sohbet için müsaitim!",
    phone: "Telefon",
    location_modes: "Kosova • Uzaktan • Hibrit",
    software_engineer: "Yazılım Mühendisi",
    final_year: "Son Sınıf",
    education: "Eğitim",
    key_projects: "Önemli Projeler",
    technical_arsenal: "Teknik Arsenal",
    work_experience: "İş Deneyimi",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("al");

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio-lang") as Language;
    if (savedLang && ["sq", "en", "tr"].includes(savedLang)) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio-lang", lang);
  };

  // Funksioni që merr çelësin dhe kthen fjalën e përkthyer
  const t = (key: string) => {
    const lowerKey = key.toLowerCase();
    return translations[language]?.[lowerKey] || translations["al"]?.[lowerKey] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}