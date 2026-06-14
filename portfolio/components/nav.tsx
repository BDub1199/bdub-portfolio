"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home",     label: "Home" },
  { href: "#about",    label: "About" },
  { href: "#work",     label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#contact",  label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/50"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="text-xl font-black tracking-widest select-none">
            <span className="text-[#D4A017]">B</span>
            <span className="text-white">-DUB</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-gray-400 hover:text-[#D4A017] transition-colors duration-200 uppercase tracking-[0.15em] font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#D4A017] text-black text-xs font-black px-5 py-2 rounded tracking-[0.15em] uppercase hover:bg-[#E8B520] transition-all hover:scale-105 duration-200"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#0D0D0D] border-b border-white/5"
          >
            <div className="px-4 pb-4 pt-2 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-gray-400 hover:text-[#D4A017] transition-colors border-b border-white/5 last:border-0 uppercase tracking-[0.15em]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block mt-4 text-center bg-[#D4A017] text-black text-xs font-black px-5 py-2 rounded tracking-[0.15em] uppercase"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
