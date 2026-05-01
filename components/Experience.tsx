"use client";
import { experience, skills } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black mb-10 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-white">
            Technical Arsenal
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div 
                key={skill} 
                className="glass-panel px-6 py-4 flex items-center justify-between group hover:border-brand-blue transition-all"
              >
                <span className="text-sm font-bold group-hover:text-brand-blue">{skill}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-black mb-10 bg-clip-text text-transparent bg-gradient-to-r from-brand-green to-white">
            Work Experience
          </h2>
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l border-brand-green/20">
              <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-brand-green shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              <div className="mb-10">
                <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-brand-green text-sm font-medium">{exp.company}</span>
                  <span className="text-gray-500 text-xs font-mono">{exp.period}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}