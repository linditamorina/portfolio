"use client";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";
import ContactModal from "./ContactModal";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Importojmë ikonat për hamburger

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mbyll menunë mobile kur klikohet një link
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

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
    /* Light Mode: E kaltër profesionale dhe e matur */
    filter grayscale(1) brightness(0) sepia(1) hue-rotate-[1deg] saturate(180%) contrast(1.1)
    drop-shadow-[0_0_3px_rgba(0,100,255,0.1)]
    /* Dark Mode: Origjinale neon */
    dark:filter-none dark:drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]"
            />
          </a>

          {/* Desktop Links & Contact Button */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-600 dark:text-gray-400 hover:text-brand-green transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2 rounded-xl bg-brand-green text-black text-[11px] font-black uppercase tracking-wider shadow-lg shadow-brand-green/20 cursor-pointer"
            >
              Contact Me
            </motion.button>
          </div>

          {/* Right Side: Theme Toggle & Hamburger */}
          <div className="flex items-center gap-4">
            <div className="pl-4 border-l border-black/10 dark:border-white/10 flex items-center h-6">
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
                    key={link.name}
                    href={link.href}
                    onClick={toggleMobileMenu}
                    className="text-xs uppercase tracking-[0.2em] font-bold text-slate-600 dark:text-gray-400 hover:text-brand-green border-b border-black/5 dark:border-white/5 pb-2"
                  >
                    {link.name}
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
                  Contact Me
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
