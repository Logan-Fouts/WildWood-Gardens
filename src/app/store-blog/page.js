"use client"

import Navbar from "@/components/navbar";
import Blog  from "../blog/page";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3efe6]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(132,104,73,0.08),transparent_18%,transparent_82%,rgba(132,104,73,0.08))]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:4px_4px]" />

      <Navbar />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-10 pt-28 sm:px-8 lg:pt-32">
        <BonsaiBlog />
      </div>
    </main>
  );
}

function BonsaiBlog() {
  return (
    <div className="py-4 md:py-10">
      <div className="relative z-10 text-left">
        <p className="text-xs uppercase tracking-[0.22em] text-[#7a6046]">WildWood Journal</p>
        <h1 className="mt-3 text-4xl font-extrabold text-[#3e2f22] md:text-5xl lg:text-6xl">Bonsai Journal</h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-[#564638]">
          What is happening here at WildWood Gardens.
        </p>
      </div>
      <Blog />
    </div>
  );
}