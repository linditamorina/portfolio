"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20 z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex-1 space-y-8 text-center md:text-left order-2 md:order-1"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-green/20 bg-brand-green/5 text-brand-green text-[10px] font-bold uppercase tracking-widest">
              Software Engineer
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Lindita <span className="text-brand-green">Morina</span>
            </h1>
            <p className="max-w-lg text-base md:text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed mx-auto md:mx-0">
              {personalInfo.about}
            </p>
          </div>

          <div className="flex justify-center md:justify-start gap-10 pt-6">
            <div>
              <p className="text-xl font-bold text-slate-900 dark:text-white">Final Year</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">Education</p>
            </div>
            <div className="w-px h-10 bg-black/10 dark:bg-white/5" />
            <div>
              <p className="text-xl font-bold text-slate-900 dark:text-white">3+</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">Key Projects</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative order-1 md:order-2"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-brand-dark shadow-2xl">
            <Image 
              src="/profile.jpeg" 
              alt="Lindita Morina"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}