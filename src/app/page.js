"use client"

import Navbar from "@/components/navbar";
import StoreHistory from "@/components/history";
import HeroSection from "@/components/Hero";
import ContactSection from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3efe6] text-[#1f1b15]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(132,104,73,0.08),transparent_18%,transparent_82%,rgba(132,104,73,0.08))]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:4px_4px]" />
      <Navbar />
      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 sm:px-8 lg:px-10 lg:pt-28">
        <div className="text-center">
          <HeroSection />
          <StoreHistory />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}