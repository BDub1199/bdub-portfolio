"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Music, Globe, Users, Star } from "lucide-react";

interface Project {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  accentColor: string;
  featured?: boolean;
  year: string;
  image?: string;
  imageBg?: string;
  fallbackIcon?: React.ElementType;
}

const projects: Project[] = [
  {
    id: 1,
    category: "Radio Station",
    title: "KDUB Radio",
    subtitle: "Founder, Program Director & Music Director",
    description:
      "Built and launched KDUB Radio from the ground up — a fully operational internet radio station with multi-genre programming spanning music, talk, and specialty shows. I direct all programming strategy, music scheduling, broadcast operations, and digital distribution. This is my flagship project and the heart of my media work.",
    tags: ["Radio Broadcasting", "Programming", "Music Direction", "Operations", "Leadership"],
    accentColor: "#D4A017",
    featured: true,
    year: "2016–Present",
    image: "https://galaxy-prod.tlcdn.com/view/user_3BLRcEFZkTX2JJjEhCKupVuXpi9/0bd01fe976ae402fa1d8b7c947ef34c4.jpg",
    imageBg: "#ffffff",
  },
  {
    id: 2,
    category: "Podcast",
    title: "The We Is Smart Podcast",
    subtitle: "Host & Producer",
    description:
      "A show built on creating conversations that inform, entertain, and inspire. I handle everything — concept, production, editing, distribution, and promotion — turning ideas into polished episodes that build an engaged audience.",
    tags: ["Podcast Hosting", "Audio Production", "Content Strategy", "Editing"],
    accentColor: "#3B82F6",
    year: "Ongoing",
    image: "https://galaxy-prod.tlcdn.com/view/user_3BLRcEFZkTX2JJjEhCKupVuXpi9/cf219127e6f245e9ae73e3a9fa5832a3.jpg",
    imageBg: "#0f2044",
  },
  {
    id: 3,
    category: "Content Series",
    title: "Clearing Out My Head",
    subtitle: "Creator & Host",
    description:
      "A content series dedicated to storytelling, reflection, and culture. Produced end-to-end — from concept to final cut — with a focus on authentic storytelling and visual narrative. You never know what's trapped up there.",
    tags: ["Video Production", "Storytelling", "Content Creation", "Editing"],
    accentColor: "#8B5CF6",
    year: "Ongoing",
    image: "https://galaxy-prod.tlcdn.com/view/user_3BLRcEFZkTX2JJjEhCKupVuXpi9/10845361e64c4a329e7f2498159ff8ff.jpg",
    imageBg: "#1e1b3a",
  },
  {
    id: 4,
    category: "Freelance",
    title: "Podcast Editing & Production",
    subtitle: "Freelance Audio Engineer",
    description:
      "Since 2021, providing professional post-production for podcast clients — editing for clarity, flow, and broadcast-quality sound. Delivering polished episodes along with show notes, metadata, and full publishing workflow management.",
    tags: ["Pro Tools", "Descript", "Post-Production", "Audio Mixing", "Publishing"],
    accentColor: "#10B981",
    year: "2021–Present",
    fallbackIcon: Music,
  },
  {
    id: 5,
    category: "Content Creation",
    title: "Social Media Content",
    subtitle: "Digital Content Creator",
    description:
      "Producing short-form multimedia content — Reels, Stories, and social video — optimized for engagement on Facebook and Instagram. Strategy-driven content with a structured calendar and platform-specific storytelling.",
    tags: ["Reels", "Stories", "Adobe Express", "SocialPilot", "Social Strategy"],
    accentColor: "#F59E0B",
    year: "2025–Present",
    fallbackIcon: Globe,
  },
  {
    id: 6,
    category: "Education",
    title: "Ohio Media School",
    subtitle: "Radio Broadcasting & Audio Production Instructor",
    description:
      "Developed and delivered curriculum for aspiring broadcasters, introducing modern production techniques and real-world workflows. Mentored students who have since entered professional media careers.",
    tags: ["Curriculum Design", "Instruction", "Mentorship", "Broadcasting"],
    accentColor: "#EC4899",
    year: "2018–2019",
    image: "https://galaxy-prod.tlcdn.com/view/user_3BLRcEFZkTX2JJjEhCKupVuXpi9/c9293333036741fba9baa578c3bc814e.png",
    imageBg: "#ffffff",
  },
];

export function WorkSection() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="py-24 lg:py-32 bg-[#080808] relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4A017]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="block w-8 h-px bg-[#D4A017]" />
          <span className="text-[#D4A017] text-xs uppercase tracking-[0.3em] font-medium">Work</span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-white leading-tight"
          >
            What I&apos;ve
            <br />
            <span className="text-[#D4A017]">built &amp; made.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm max-w-xs text-right hidden sm:block"
          >
            From live radio to podcasts to social content — a decade of media that moves.
          </motion.p>
        </div>

        {/* ── Featured KDUB Radio card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="group relative bg-[#111111] border border-[#1F1F1F] rounded-2xl p-8 md:p-10 mb-6 overflow-hidden hover:border-[#D4A017]/30 transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4A017]/5 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-4 right-4">
            <span className="flex items-center gap-1.5 bg-[#D4A017]/10 border border-[#D4A017]/30 text-[#D4A017] text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
              <Star className="h-3 w-3 fill-[#D4A017]" /> Featured
            </span>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            {/* Logo */}
            <div
              className="w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center flex-shrink-0 border border-white/10"
              style={{ background: featured.imageBg }}
            >
              {featured.image ? (
                <Image
                  src={featured.image}
                  alt={featured.title}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              ) : null}
            </div>

            <div className="flex-1">
              <p className="text-[10px] uppercase tracking-[0.25em] font-medium mb-1" style={{ color: featured.accentColor }}>
                {featured.category} · {featured.year}
              </p>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-1">{featured.title}</h3>
              <p className="text-gray-500 text-sm mb-4 font-medium">{featured.subtitle}</p>
              <p className="text-gray-400 text-base leading-relaxed mb-6 max-w-3xl">{featured.description}</p>
              <div className="flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium px-3 py-1 rounded-full border border-[#D4A017]/20 text-[#D4A017]/80 bg-[#D4A017]/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Grid of remaining projects ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project, i) => {
            const FallbackIcon = project.fallbackIcon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.6 }}
                className="group relative bg-[#111111] border border-[#1F1F1F] rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500 flex flex-col"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at top left, ${project.accentColor}08 0%, transparent 60%)`,
                  }}
                />

                {/* Image / logo area */}
                {project.image ? (
                  <div
                    className="relative w-full h-40 overflow-hidden flex-shrink-0"
                    style={{ background: project.imageBg }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Gradient fade at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#111111] to-transparent" />
                  </div>
                ) : FallbackIcon ? (
                  <div
                    className="w-full h-28 flex items-center justify-center flex-shrink-0"
                    style={{ background: `${project.accentColor}0A` }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `${project.accentColor}15`,
                        border: `1px solid ${project.accentColor}25`,
                      }}
                    >
                      <FallbackIcon className="h-7 w-7" style={{ color: project.accentColor }} />
                    </div>
                  </div>
                ) : null}

                {/* Card body */}
                <div className="relative z-10 flex flex-col flex-1 p-6">
                  <p
                    className="text-[10px] uppercase tracking-[0.25em] font-medium mb-1"
                    style={{ color: project.accentColor }}
                  >
                    {project.category} · {project.year}
                  </p>
                  <h3 className="text-lg font-black text-white mb-1">{project.title}</h3>
                  <p className="text-gray-500 text-xs mb-3 font-medium">{project.subtitle}</p>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-medium px-2.5 py-1 rounded-full bg-white/[0.04] text-gray-400 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
