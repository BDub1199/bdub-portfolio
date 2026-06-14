"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Globe, Send, CheckCircle, Mic } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type FormState = "idle" | "sending" | "sent";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  { icon: Mail,  label: "Email",    value: "wagner1199@live.com",                  href: "mailto:wagner1199@live.com" },
  { icon: Phone, label: "Phone",    value: "(614) 581-3398",                       href: "tel:6145813398" },
  { icon: Globe, label: "LinkedIn", value: "linkedin.com/in/brianwagnermedia",     href: "https://linkedin.com/in/brianwagnermedia" },
];

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", subject: "", message: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("sending");
    // Build mailto link
    const subject = encodeURIComponent(formData.subject || "Portfolio Inquiry");
    const body = encodeURIComponent(
      `Hi Brian,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nBest,\n${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:wagner1199@live.com?subject=${subject}&body=${body}`;
    setTimeout(() => setFormState("sent"), 800);
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#080808] relative overflow-hidden">
      {/* Decorative accents */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#1A2B4A]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#D4A017]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="block w-8 h-px bg-[#D4A017]" />
          <span className="text-[#D4A017] text-xs uppercase tracking-[0.3em] font-medium">Contact</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-black text-white leading-tight mb-12"
        >
          Start a
          <br />
          <span className="text-[#D4A017]">conversation.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2 space-y-8"
          >
            <p className="text-gray-400 text-base leading-relaxed">
              Have a project in mind? Want to book a podcast session, discuss a collaboration,
              or just connect? Fill out the form and I&apos;ll get back to you.
            </p>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.label === "LinkedIn" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[#111111] border border-[#1F1F1F] rounded-xl hover:border-[#D4A017]/30 hover:bg-[#111111] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#D4A017]/10 border border-[#D4A017]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#D4A017]/15 transition-colors">
                    <item.icon className="h-4 w-4 text-[#D4A017]" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-[10px] uppercase tracking-[0.15em] font-medium">{item.label}</p>
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="flex items-center gap-3 p-4 bg-[#D4A017]/5 border border-[#D4A017]/20 rounded-xl">
              <div className="relative flex-shrink-0">
                <div className="w-2.5 h-2.5 bg-[#D4A017] rounded-full" />
                <div className="absolute inset-0 bg-[#D4A017] rounded-full animate-ping opacity-50" />
              </div>
              <div>
                <p className="text-[#D4A017] text-xs font-black uppercase tracking-[0.15em]">Available</p>
                <p className="text-gray-500 text-xs">Open to freelance &amp; full-time opportunities</p>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            {formState === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 bg-[#111111] border border-[#1F1F1F] rounded-2xl"
              >
                <CheckCircle className="h-16 w-16 text-[#D4A017] mx-auto mb-4" />
                <h3 className="text-2xl font-black text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400 text-sm">
                  Your email client should open with the message. I&apos;ll be in touch soon!
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#111111] border border-[#1F1F1F] rounded-2xl p-6 sm:p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-400 text-xs uppercase tracking-[0.15em]">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-[#0A0A0A] border-[#2A2A2A] text-white placeholder:text-gray-600 focus:border-[#D4A017] focus:ring-[#D4A017]/20 rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-400 text-xs uppercase tracking-[0.15em]">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-[#0A0A0A] border-[#2A2A2A] text-white placeholder:text-gray-600 focus:border-[#D4A017] focus:ring-[#D4A017]/20 rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-400 text-xs uppercase tracking-[0.15em]">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Podcast editing, collaboration, hire..."
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-[#0A0A0A] border-[#2A2A2A] text-white placeholder:text-gray-600 focus:border-[#D4A017] focus:ring-[#D4A017]/20 rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-400 text-xs uppercase tracking-[0.15em]">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, timeline, and goals..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-[#0A0A0A] border-[#2A2A2A] text-white placeholder:text-gray-600 focus:border-[#D4A017] focus:ring-[#D4A017]/20 rounded-lg resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === "sending"}
                  className="w-full flex items-center justify-center gap-2 bg-[#D4A017] text-black font-black text-xs px-8 py-4 rounded-xl uppercase tracking-[0.2em] hover:bg-[#E8B520] transition-all hover:scale-[1.02] duration-200 shadow-lg shadow-[#D4A017]/20 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {formState === "sending" ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="h-4 w-4" /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-8 border-t border-white/[0.05]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Mic className="h-4 w-4 text-[#D4A017]" />
            <span className="text-white font-black tracking-widest text-sm">
              <span className="text-[#D4A017]">B</span>-DUB
            </span>
          </div>
          <p className="text-gray-600 text-xs text-center">
            © {new Date().getFullYear()} Brian Wagner · Canal Winchester, OH ·{" "}
            <span className="text-[#D4A017]">KDUB Radio</span>
          </p>
          <p className="text-gray-700 text-xs">
            Digital Content Creator · Audio Engineer
          </p>
        </div>
      </div>
    </section>
  );
}
