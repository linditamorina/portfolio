"use client";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Mail, Phone, X, Copy, Check, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const phoneNumber = "+383 45 883 994";
  // Linku i ri i LinkedIn
  const linkedinUrl = "https://www.linkedin.com/in/linditamorina/";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] cursor-pointer"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md z-[120]"
          >
            <div className="glass-panel p-8 bg-white/95 dark:bg-brand-darker/95 relative shadow-2xl border-white/20">
              {/* Close Button me cursor-pointer */}
              <button 
                onClick={onClose} 
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer p-1"
              >
                <X size={20} />
              </button>

              <div className="mb-8">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white">Let's Connect</h2>
                <p className="text-slate-500 text-sm font-medium">I'm usually available for a chat!</p>
              </div>
              
              <div className="space-y-4">
                {/* Email Section */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 group">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-brand-green/10 text-brand-green rounded-lg">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Email</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">{personalInfo.email}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(personalInfo.email, 'email')} 
                    className="text-slate-400 hover:text-brand-green transition-colors cursor-pointer p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={16} className="text-brand-green" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* LinkedIn Section */}
                <a 
                  href={linkedinUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-brand-blue/30 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-brand-blue/10 text-brand-blue rounded-lg group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" height="18" viewBox="0 0 24 24" fill="none" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">LinkedIn</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Lindita Morina</p>
                    </div>
                  </div>
                  <ExternalLink size={16} className="text-slate-400 group-hover:text-brand-blue" />
                </a>

                {/* Phone Section */}
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-black/5 dark:border-white/5 group">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-orange-500/10 text-orange-500 rounded-lg">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Phone</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">{phoneNumber}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => copyToClipboard(phoneNumber, 'phone')} 
                    className="text-slate-400 hover:text-orange-500 transition-colors cursor-pointer p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check size={16} className="text-brand-green" /> : <Copy size={16} />}
                  </button>
                </div>
              </div>

              <div className="mt-8 text-center border-t border-black/5 dark:border-white/5 pt-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">Kosovo • Remote • Hybrid</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}