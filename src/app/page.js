"use client"

import Navbar from "@/components/navbar";
import StoreHistory from "@/components/history";
import HeroSection from "@/components/Hero";
import ContactSection from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-gray-50 relative flex items-center justify-center overflow-hidden">
      <Navbar />
      <div className="relative px-4 sm:px-6 transition-all duration-300">
        <div className="w-screen text-center">
          <HeroSection />
          <StoreHistory />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}