"use client";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";
import ContactModal from "./ContactModal";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLanguage, Language } from "./LanguageContext";

function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "sq", label: "AL" },
    { code: "tr", label: "TR" },
  ];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-gray-400 hover:text-brand-green transition-colors cursor-pointer"
      >
        <Globe size={13} />
        <span>{language}</span>
        <ChevronDown size={10} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <motion.div 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-0 mt-2 w-20 rounded-xl bg-white/95 dark:bg-brand-darker/95 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-xl z-50 overflow-hidden"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-[11px] font-bold uppercase transition-colors hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer ${
                  language === lang.code ? "text-brand-green" : "text-slate-600 dark:text-gray-400"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </motion.div>
        </>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, t } = useLanguage(); 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const setIsOpen = (open: boolean) => setIsModalOpen(open);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-[100] px-4 md:px-6 py-5 pointer-events-none"
      >
        <nav
          className={`
          max-w-4xl mx-auto flex items-center justify-between px-5 py-2.5
          transition-all duration-500 pointer-events-auto rounded-2xl border
          ${
            scrolled || isMobileMenuOpen
              ? "bg-white/95 dark:bg-brand-darker/90 backdrop-blur-xl border-black/5 dark:border-white/10 shadow-lg"
              : "bg-transparent border-transparent"
          }
        `}
        >
          {/* Logo */}
          <a href="#home" className="flex items-center group z-50">
            <Image
              src="/logo-portfolio.png"
              alt="Logo"
              width={100}
              height={100}
              className="object-contain transition-all duration-300 group-hover:scale-110 
    filter grayscale(1) brightness(0) sepia(1) hue-rotate-[1deg] saturate(180%) contrast(1.1)
    drop-shadow-[0_0_3px_rgba(0,100,255,0.1)]
    dark:filter-none dark:drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]"
            />
          </a>

          {/* Desktop Links & Contact Button */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-600 dark:text-gray-400 hover:text-brand-green transition-all"
                >
                  {link.name[language]}
                </a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="px-5 py-2 rounded-xl bg-brand-green text-black text-[11px] font-black uppercase tracking-wider shadow-lg shadow-brand-green/20 cursor-pointer"
            >
              {t("connect_title")}
            </motion.button>
          </div>

          {/* Right Side: Language Toggle, Theme Toggle & Hamburger */}
          <div className="flex items-center gap-2 md:gap-4">
            <LanguageToggle />

            <div className="pl-3 border-l border-black/10 dark:border-white/10 flex items-center h-6">
              <ThemeToggle />
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden p-2 text-slate-900 dark:text-white cursor-pointer"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden max-w-4xl mx-auto mt-2 bg-white/95 dark:bg-brand-darker/95 backdrop-blur-2xl rounded-2xl border border-black/5 dark:border-white/10 shadow-2xl overflow-hidden pointer-events-auto"
            >
              <div className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={toggleMobileMenu}
                    className="text-xs uppercase tracking-[0.2em] font-bold text-slate-600 dark:text-gray-400 hover:text-brand-green border-b border-black/5 dark:border-white/5 pb-2"
                  >
                    {link.name[language]}
                  </a>
                ))}
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setIsModalOpen(true);
                    toggleMobileMenu();
                  }}
                  className="w-full py-4 rounded-xl bg-brand-green text-black text-xs font-black uppercase tracking-wider shadow-lg"
                >
                  {t("contact")}
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}