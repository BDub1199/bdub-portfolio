"use client";

import { motion } from "framer-motion";
import { Mic, Music, Globe, Users, Zap, Video, CheckCircle, ArrowRight } from "lucide-react";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  deliverables: string[];
  color: string;
}

const services: Service[] = [
  {
    icon: Mic,
    title: "Podcast Production & Editing",
    description:
      "Full post-production for your podcast — from raw recording to publish-ready episode. Editing for clarity, flow, and broadcast-quality audio using Pro Tools and Descript.",
    deliverables: ["Audio editing & mixing", "Show notes & metadata", "Publishing & scheduling", "Promo clips"],
    color: "#D4A017",
  },
  {
    icon: Music,
    title: "Audio Engineering",
    description:
      "Professional audio engineering for any format — podcast, internet radio, voice-over, or branded content. Mixing, mastering, and post-production to industry standards.",
    deliverables: ["Mixing & mastering", "Noise reduction & cleanup", "Voice-over production", "Branded audio assets"],
    color: "#3B82F6",
  },
  {
    icon: Video,
    title: "Social Media Content Creation",
    description:
      "Short-form video and multimedia content designed for maximum engagement on Instagram and Facebook — Reels, Stories, carousels, and campaign assets.",
    deliverables: ["Reels & short-form video", "Stories & carousels", "Content calendar", "Caption copywriting"],
    color: "#8B5CF6",
  },
  {
    icon: Zap,
    title: "Radio & Programming Consultation",
    description:
      "Strategy and setup for internet radio stations, streaming platforms, and audio programming. From format development to music scheduling and audience growth.",
    deliverables: ["Station setup & launch", "Programming format design", "Music scheduling", "Audience growth strategy"],
    color: "#10B981",
  },
  {
    icon: Users,
    title: "Media Training & Instruction",
    description:
      "Workshops, curriculum, and one-on-one training for aspiring broadcasters, podcasters, and audio creators. Practical, hands-on learning for real-world results.",
    deliverables: ["Broadcast workshops", "Podcast launch training", "Audio software coaching", "Custom curriculum"],
    color: "#EC4899",
  },
  {
    icon: Globe,
    title: "Content Strategy & Planning",
    description:
      "Big-picture content strategy for creators and brands — editorial calendars, platform strategy, audience analysis, and cross-platform content planning.",
    deliverables: ["Editorial calendar", "Platform strategy", "Content audit", "Distribution plan"],
    color: "#F59E0B",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#D4A017]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="block w-8 h-px bg-[#D4A017]" />
          <span className="text-[#D4A017] text-xs uppercase tracking-[0.3em] font-medium">Services</span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white leading-tight"
          >
            Let&apos;s work
            <br />
            <span className="text-[#D4A017]">together.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm max-w-xs text-right hidden sm:block"
          >
            Professional media services built on a decade of real-world experience.
          </motion.p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.6 }}
              className="group bg-[#111111] border border-[#1F1F1F] rounded-2xl p-6 hover:border-white/10 transition-all duration-500 flex flex-col relative overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top left, ${service.color}08 0%, transparent 60%)`,
                }}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${service.color}12`,
                    border: `1px solid ${service.color}25`,
                  }}
                >
                  <service.icon className="h-6 w-6" style={{ color: service.color }} />
                </div>

                <h3 className="text-white font-black text-base mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{service.description}</p>

                {/* Deliverables */}
                <div className="space-y-2">
                  {service.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2">
                      <CheckCircle className="h-3.5 w-3.5 flex-shrink-0" style={{ color: service.color }} />
                      <span className="text-gray-500 text-xs">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative bg-gradient-to-r from-[#1A2B4A] to-[#0D0D0D] border border-[#1A2B4A] rounded-2xl p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4A017]/10 to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
                Ready to sound <span className="text-[#D4A017]">professional?</span>
              </h3>
              <p className="text-gray-400 text-base max-w-xl">
                Whether you need a podcast edited, a show launched, or content that actually gets seen —
                let&apos;s talk. I&apos;d love to hear about your project.
              </p>
            </div>
            <a
              href="#contact"
              className="flex-shrink-0 flex items-center gap-2 bg-[#D4A017] text-black font-black px-8 py-4 rounded-xl uppercase tracking-[0.15em] text-xs hover:bg-[#E8B520] transition-all hover:scale-105 duration-200 shadow-lg shadow-[#D4A017]/20 whitespace-nowrap"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
