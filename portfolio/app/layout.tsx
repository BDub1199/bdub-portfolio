import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Brian Wagner | B-Dub — Digital Content Creator & Audio Engineer",
  description:
    "Founder of KDUB Radio. Host of The We Is Smart Podcast. Audio Engineer, Digital Content Creator, and Radio Broadcaster based in Columbus, OH.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-[#0A0A0A] text-white antialiased font-sans">
        <Nav />
        {children}
      </body>
    </html>
  );
}
