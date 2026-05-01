"use client";
import { motion } from "framer-motion";
import { navLinks } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";
import ContactModal from "./ContactModal";
import { useState, useEffect } from "react";
import Image from "next/image"; // Importojmë Image për logon

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-[100] px-6 py-5 pointer-events-none"
      >
        <nav className={`
          max-w-4xl mx-auto flex items-center justify-between px-6 py-2.5
          transition-all duration-500 pointer-events-auto rounded-2xl border
          ${scrolled 
            ? "bg-white/90 dark:bg-brand-darker/80 backdrop-blur-xl border-black/5 dark:border-white/10 shadow-lg" 
            : "bg-transparent border-transparent"}
        `}>
          
          {/* Logo si Imazh në vend të tekstit L.M */}
          <a href="#home" className="flex items-center group">
            <Image 
              src="/logo-portfolio.png" // Sigurohu që emri i skedarit të jetë i saktë në dosjen public
              alt="Lindita Morina Logo"
              width={100} 
              height={100}
              className="object-contain transition-transform group-hover:scale-110"
            />
          </a>
          
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

          <div className="pl-4 border-l border-black/10 dark:border-white/10 flex items-center">
            <ThemeToggle />
          </div>
        </nav>
      </motion.header>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}