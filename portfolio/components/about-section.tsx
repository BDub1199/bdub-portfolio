"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Download, Briefcase, Star } from "lucide-react";

const PROFILE_PHOTO =
  "https://galaxy-prod.tlcdn.com/view/user_3BLRcEFZkTX2JJjEhCKupVuXpi9/ebd0077fc8e24ed88481c9a01e859e93.jpg";
const SNHU_LOGO =
  "https://galaxy-prod.tlcdn.com/view/user_3BLRcEFZkTX2JJjEhCKupVuXpi9/12c34a475cb9461388b33f914259adeb.jpg";
const FULL_SAIL_LOGO =
  "https://galaxy-prod.tlcdn.com/view/user_3BLRcEFZkTX2JJjEhCKupVuXpi9/e0c1a00c630a4fc4aa7ef6c408de7461.png";

const skills = [
  "Podcast Production",
  "Audio Engineering",
  "Pro Tools",
  "Descript",
  "Radio Broadcasting",
  "Music Programming",
  "Adobe Express",
  "SocialPilot",
  "Content Strategy",
  "Social Media",
  "Post-Production",
  "Curriculum Design",
];

const highlights = [
  { icon: Star,        text: "M.S. Information Technology — GPA 3.92" },
  { icon: Star,        text: "B.S. Audio Production — GPA 3.87" },
  { icon: CheckCircle, text: "Founder & Program Director, KDUB Radio (2016–Present)" },
  { icon: CheckCircle, text: "Freelance Podcast Editor & Producer (2021–Present)" },
  { icon: CheckCircle, text: "Former Instructor, Ohio Media School" },
  { icon: Briefcase,   text: "Available for freelance & full-time opportunities" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A2B4A]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="block w-8 h-px bg-[#D4A017]" />
          <span className="text-[#D4A017] text-xs uppercase tracking-[0.3em] font-medium">About</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* ── Left column — photo + bio ── */}
          <div>
            {/* Profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-8 flex justify-start"
            >
              <div className="relative">
                {/* Gold ring */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#D4A017] via-[#D4A017]/40 to-transparent" />
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-[#0A0A0A]">
                  <Image
                    src={PROFILE_PHOTO}
                    alt="Brian Wagner — B-Dub"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 144px, 176px"
                  />
                </div>
                {/* Available badge */}
                <div className="absolute -bottom-1 -right-1 flex items-center gap-1.5 bg-[#111] border border-[#D4A017]/40 rounded-full px-2.5 py-1">
                  <div className="relative flex-shrink-0">
                    <div className="w-2 h-2 bg-[#D4A017] rounded-full" />
                    <div className="absolute inset-0 bg-[#D4A017] rounded-full animate-ping opacity-60" />
                  </div>
                  <span className="text-[#D4A017] text-[9px] font-black uppercase tracking-[0.1em]">
                    Available
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl font-black text-white leading-tight mb-6"
            >
              The voice
              <br />
              <span className="text-[#D4A017]">behind the mic.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-4 text-gray-400 text-base leading-relaxed mb-8"
            >
              <p>
                I&apos;m <span className="text-white font-semibold">Brian Wagner</span> — known to most as{" "}
                <span className="text-[#D4A017] font-semibold">B-Dub</span>. A digital content creator,
                audio engineer, and radio broadcaster based in Canal Winchester, OH, with over a decade of
                experience building and producing media that connects with audiences.
              </p>
              <p>
                In 2016 I co-founded{" "}
                <span className="text-white font-semibold">KDUB Radio</span>, a fully operational internet radio
                station where I serve as Program Director and Music Director. I&apos;m also the host of{" "}
                <span className="text-white font-semibold">The We Is Smart Podcast</span> and creator of{" "}
                <span className="text-white font-semibold">Clearing Out My Head</span>.
              </p>
              <p>
                What makes me different? A rare combination of{" "}
                <span className="text-white font-semibold">professional audio expertise</span> and a{" "}
                <span className="text-white font-semibold">Master&apos;s in Information Technology</span> — I
                don&apos;t just create great content, I understand the platforms and systems that get it heard.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-3 mb-8"
            >
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3">
                  <h.icon className="h-4 w-4 text-[#D4A017] flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{h.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Resume downloads */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a
                href="https://galaxy-prod.tlcdn.com/gen/user_3BLRcEFZkTX2JJjEhCKupVuXpi9/caa05c87-fd5f-4edb-9f52-42f95a9640b2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#D4A017] text-black font-black text-xs px-6 py-3 rounded uppercase tracking-[0.15em] hover:bg-[#E8B520] transition-all hover:scale-105 duration-200"
              >
                <Download className="h-4 w-4" />
                Resume (Media)
              </a>
              <a
                href="https://galaxy-prod.tlcdn.com/gen/user_3BLRcEFZkTX2JJjEhCKupVuXpi9/1f9682a4-8386-442a-96b0-a18d8dd125fa.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/15 text-white font-black text-xs px-6 py-3 rounded uppercase tracking-[0.15em] hover:border-[#D4A017] hover:text-[#D4A017] transition-all duration-200"
              >
                <Download className="h-4 w-4" />
                Resume (Tech)
              </a>
            </motion.div>
          </div>

          {/* ── Right column — skills + education ── */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-8"
            >
              <h3 className="text-white font-black text-lg mb-6 uppercase tracking-wider">
                Skills &amp; Tools
              </h3>
              <div className="flex flex-wrap gap-2 mb-10">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.04 }}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border border-[#D4A017]/30 text-[#D4A017] bg-[#D4A017]/5 hover:bg-[#D4A017]/10 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Education cards with logos */}
              <h3 className="text-white font-black text-sm uppercase tracking-wider mb-4">
                Education
              </h3>
              <div className="space-y-4">
                {/* SNHU */}
                <div className="border border-[#1A2B4A]/60 bg-[#1A2B4A]/10 rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex-shrink-0 flex items-center justify-center p-1">
                    <Image
                      src={SNHU_LOGO}
                      alt="SNHU"
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-sm leading-tight">M.S. Information Technology</p>
                    <p className="text-gray-500 text-xs mt-0.5">Southern New Hampshire University</p>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="text-gray-600 text-xs">2019–2022</span>
                      <span className="text-[#D4A017] text-xs font-black">GPA: 3.92</span>
                    </div>
                  </div>
                </div>

                {/* Full Sail */}
                <div className="border border-[#1A2B4A]/60 bg-[#1A2B4A]/10 rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-[#E85D10] flex items-center justify-center p-1">
                    <Image
                      src={FULL_SAIL_LOGO}
                      alt="Full Sail University"
                      width={44}
                      height={44}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-sm leading-tight">B.S. Audio Production</p>
                    <p className="text-gray-500 text-xs mt-0.5">Full Sail University</p>
                    <div className="flex items-center justify-between mt-1.5">
                      <span className="text-gray-600 text-xs">2015–2018</span>
                      <span className="text-[#D4A017] text-xs font-black">GPA: 3.87</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
