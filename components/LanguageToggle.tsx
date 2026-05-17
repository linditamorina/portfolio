"use client";
import { useLanguage } from "./LanguageContext";
import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: "sq", label: "AL" },
    { code: "en", label: "EN" },
    { code: "tr", label: "TR" },
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-gray-400 hover:text-brand-green cursor-pointer"
      >
        <Globe size={14} />
        <span>{language}</span>
        <ChevronDown size={10} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-20 rounded-xl bg-white dark:bg-brand-darker border border-black/5 dark:border-white/10 shadow-xl z-20 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code as any);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-[11px] font-bold uppercase transition-colors hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer ${
                  language === lang.code ? "text-brand-green" : "text-slate-600 dark:text-gray-400"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}