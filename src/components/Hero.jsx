"use client"

import Image from "next/image";
import Link from 'next/link';
import { useState, useEffect } from "react";

export default function HeroSection() {
    const images = [
        "/images/hero-images/hero1.jpg",
        "/images/hero-images/hero2.jpg",
        "/images/hero-images/hero3.jpg",
        "/images/hero-images/hero4.jpg",
        "/images/hero-images/hero5.jpg",
        "/images/hero-images/hero6.jpg",
    ];
    const [currentImage, setCurrentImage] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentImage((prevImage) => (prevImage + 1) % images.length);
                setFade(true);
            }, 500);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative mb-16 overflow-hidden rounded-2xl border border-[#d7c9b5] text-white shadow-[0_12px_30px_rgba(56,42,28,0.24)] sm:mb-20">
            <div className="absolute inset-0">
                <Image
                    src={images[currentImage]}
                    alt="WildWood Gardens bonsai collection"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className={`object-cover transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-90'}`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(23,17,12,0.86)_16%,rgba(44,32,21,0.76)_52%,rgba(64,45,29,0.52)_100%)]"></div>
                <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(90deg,transparent_0,transparent_18px,rgba(255,255,255,0.3)_18px,rgba(255,255,255,0.3)_19px)] [background-size:22px_100%]"></div>
            </div>

            <div className="relative z-10 grid min-h-[70vh] items-end px-6 pb-10 pt-28 sm:px-10 sm:pt-32 lg:grid-cols-[1.25fr_0.75fr] lg:gap-8 lg:px-12 lg:pb-14">
                <div className="text-left">
                    <p className="inline-flex rounded-sm border border-[#d6c3a4] bg-[#efe2cc]/20 px-4 py-1 text-xs uppercase tracking-[0.24em] text-[#f3e8d7] sm:text-sm">
                        Ohio Bonsai Specialists Since 1946
                    </p>
                    <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] text-[#f8f1e5] sm:text-5xl lg:text-7xl">
                        WildWood Gardens
                    </h1>
                    <p className="mt-1 text-base uppercase tracking-[0.22em] text-[#dcc8a5] sm:text-lg">
                        Rooted in Japanese Bonsai Tradition
                    </p>
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#f2e7d4] sm:text-lg lg:text-xl">
                        A family store shaped by decades of practice, patient teaching, and deep respect for the living art of bonsai.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                        <Link href="/our-trees" className="rounded-md bg-[#ead8ba] px-6 py-3 text-sm font-semibold text-[#2d2419] shadow-md transition-colors hover:bg-[#f2e4cd] sm:text-base">
                            View Bonsai Collection
                        </Link>
                        <Link href="/bonsai-club" className="rounded-md border border-[#e3d2b6] bg-[#5d4730]/45 px-6 py-3 text-sm font-semibold text-[#f9efdf] transition-colors hover:bg-[#705437]/60 sm:text-base">
                            Join Bonsai Club
                        </Link>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-[#d8c8ad] bg-[#f6ecdb]/18 p-5 text-left sm:p-6 lg:mt-0">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#e8d7bb]">Our Approach</p>
                    <p className="mt-3 text-2xl font-semibold text-[#f6eddf] sm:text-3xl">Patience, balance, and form.</p>
                    <p className="mt-4 text-sm leading-relaxed text-[#efe1ca] sm:text-base">
                        We focus on thoughtful design, healthy growth, and guidance that honors both Japanese methods and your personal style.
                    </p>
                </div>
            </div>
        </section>
    );
}