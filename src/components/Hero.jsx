"use client"

import Image from "next/image";
import H1 from "@/components/utils";
import Link from 'next/link';
import { useState, useEffect } from "react";

export default function HeroSection() {
    const images = [
        "/images/trees/tree1.jpg",
        "/images/trees/tree2.jpg",
        "/images/trees/tree3.jpg",
        "/images/trees/tree4.jpg",
        "/images/trees/tree5.jpg",
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
        <div className="relative py-28 m-0 text-white w-screen">
            <div className="inset-0">
                <Image
                    src={images[currentImage]}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className={`rounded-lg transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-80'}`}
                />
                <div className="absolute inset-0 bg-green-900 opacity-70"></div>
            </div>
            <div className="relative z-10 text-center">
                <H1 className="text-5xl md:text-6xl lg:text-7xl text-white pt-16">Welcome to Wild Wood Gardens</H1>
                <p className="mt-4 text-lg md:text-xl lg:text-2xl ml-8 mr-8">
                    Your local bonsai store dedicated to the art and beauty of bonsai trees.
                </p>
                <Link href="/our-trees">
                    <button className="mt-8 px-6 py-3 bg-white text-green-800 rounded-lg shadow hover:bg-gray-200 transition-colors">
                        Explore Our Collection
                    </button>
                </Link>
            </div>
        </div>
    );
}