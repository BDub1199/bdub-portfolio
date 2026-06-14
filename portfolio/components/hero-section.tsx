"use client";

import { motion } from "framer-motion";
import { Mic, Play, ArrowRight } from "lucide-react";

const stats = [
  { value: "10+",  label: "Years in Media" },
  { value: "2016", label: "KDUB Radio Est." },
  { value: "3+",   label: "Active Shows" },
  { value: "M.S.", label: "Info Technology" },
];

// Deterministic waveform heights — no Math.random() to avoid hydration mismatch
const WAVE_COUNT = 72;
function getWaveHeight(i: number): number {
  return 15 + Math.abs(Math.sin(i * 0.42)) * 50 + Math.abs(Math.cos(i * 0.73)) * 30;
}
function getWaveDelay(i: number): number {
  return (i * 0.07) % 2;
}
function getWaveDuration(i: number): number {
  return 1.2 + (i % 5) * 0.2;
}

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: "easeOut" },
});

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A2B4A]/25 via-transparent to-[#D4A017]/5" />

      {/* Radial glow behind title */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(212,160,23,0.07) 0%, transparent 70%)",
          animation: "glow-pulse 4s ease-in-out infinite",
        }}
      />

      {/* Waveform decoration */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center gap-[3px] opacity-[0.07] overflow-hidden h-52 px-2">
        {Array.from({ length: WAVE_COUNT }).map((_, i) => (
          <div
            key={i}
            className="bg-[#D4A017] w-[7px] rounded-t flex-shrink-0 origin-bottom"
            style={{
              height: `${getWaveHeight(i)}%`,
              animation: `wavebar ${getWaveDuration(i)}s ease-in-out ${getWaveDelay(i)}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 pt-16">
        {/* Eyebrow */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-[#D4A017] uppercase tracking-[0.3em] text-[11px] sm:text-xs mb-7 flex items-center justify-center gap-3 font-medium"
        >
          <span className="block w-10 h-px bg-[#D4A017]/60" />
          Digital Content Creator · Audio Engineer · Radio Broadcaster
          <span className="block w-10 h-px bg-[#D4A017]/60" />
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.9, ease: "easeOut" }}
          className="font-black leading-none tracking-tight text-white mb-3 select-none"
          style={{ fontSize: "clamp(5rem, 18vw, 13rem)" }}
        >
          B-DUB
        </motion.h1>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="h-[3px] bg-gradient-to-r from-transparent via-[#D4A017] to-transparent mx-auto w-72 mb-4"
        />

        {/* Subtitle name */}
        <motion.p
          {...fadeUp(0.85)}
          className="text-gray-500 text-sm sm:text-base tracking-[0.3em] uppercase mb-8 font-light"
        >
          Brian Wagner
        </motion.p>

        {/* Tagline */}
        <motion.p
          {...fadeUp(1.0)}
          className="text-gray-300 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Founder of{" "}
          <span className="text-[#D4A017] font-semibold">KDUB Radio</span>.
          Host of{" "}
          <span className="text-white font-semibold">The We Is Smart Podcast</span>.
          Crafting content that moves people.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(1.15)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#work"
            className="flex items-center gap-2 bg-[#D4A017] text-black font-black px-8 py-3 rounded uppercase tracking-[0.15em] text-xs hover:bg-[#E8B520] transition-all hover:scale-105 duration-200 shadow-lg shadow-[#D4A017]/20"
          >
            <Play className="h-4 w-4 fill-black" />
            View My Work
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border border-white/15 text-white font-black px-8 py-3 rounded uppercase tracking-[0.15em] text-xs hover:border-[#D4A017] hover:text-[#D4A017] transition-all duration-200"
          >
            <Mic className="h-4 w-4" />
            Work With Me
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.1 }}
              className="text-center p-4 border border-white/[0.06] rounded-lg bg-white/[0.02] backdrop-blur-sm hover:border-[#D4A017]/30 transition-colors duration-300"
            >
              <p className="text-3xl font-black text-[#D4A017] leading-none mb-1">
                {stat.value}
              </p>
              <p className="text-gray-500 text-[10px] uppercase tracking-[0.15em] font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-600 text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#D4A017] to-transparent"
        />
      </motion.div>
    </section>
  );
}
