"use client";
import { projects } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const GithubIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 16 16"
    height="18"
    width="18"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
  </svg>
);

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-4 max-w-6xl mx-auto overflow-hidden"
    >
      <div className="flex flex-col items-center mb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-brand-blue"
        >
          Project Journey
        </motion.h2>
        <div className="h-1 w-24 bg-brand-green rounded-full opacity-50" />
      </div>

      <div className="relative">
        {/* Viza Qendrore (Timeline Line) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-brand-green/50 via-brand-blue/50 to-transparent hidden md:block" />

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex items-center justify-between w-full transition-all ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Card Container */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="w-full md:w-[45%] group"
              >
                <div className="relative p-8 glass-panel border-black/5 dark:border-white/5 hover:border-brand-green/40 transition-all duration-500 shadow-lg dark:shadow-2xl">
                  {/* Titulli: I zi në Light Mode, i Bardhë në Dark Mode */}
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-brand-green transition-colors">
                    {project.title}
                  </h3>

                  {/* Përshkrimi: Gri e errët në Light Mode për lexim më të mirë */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] uppercase font-bold px-2.5 py-1 rounded-md bg-brand-blue/10 text-brand-blue border border-brand-blue/20 dark:bg-brand-blue/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-5 border-t border-black/5 dark:border-white/5">
                    {/* GitHub Icon - duhet të jetë e errët në Light Mode */}
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all transform hover:scale-110"
                    >
                      <GithubIcon />
                    </a>

                    {project.title === "PostoAi" && (
                      <a
                        href="https://posto-ai-nine.vercel.app/"
                        target="_blank"
                        className="flex items-center gap-2 text-xs font-black text-brand-green hover:brightness-110 tracking-widest"
                      >
                        LIVE PREVIEW <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
              {/* Spacer for empty side */}
              <div className="hidden md:block w-[45%]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
