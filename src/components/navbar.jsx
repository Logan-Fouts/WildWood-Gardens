'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const closeOnResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', closeOnResize);
        return () => window.removeEventListener('resize', closeOnResize);
    }, []);

    return (
        <>
            <div className={`fixed left-1/2 z-50 w-[min(96%,76rem)] -translate-x-1/2 transition-all duration-300 ${scrolled ? 'top-3' : 'top-6'}`}>
                <div className={`h-auto rounded-xl border border-[#d7c9b5] bg-[#f8f3e8] px-4 py-2 shadow-[0_6px_18px_rgba(56,42,28,0.14)] transition-all duration-300 sm:px-6 ${scrolled ? 'shadow-[0_8px_22px_rgba(56,42,28,0.18)]' : ''}`}>
                    <div className="flex w-full items-center justify-between">
                    <LeftSide />
                    <div className="hidden w-8/12 items-center justify-between md:flex">
                        <Center />
                        <Right />
                    </div>
                    <button
                        className="flex items-center rounded-lg p-2 md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <div className="space-y-2">
                            <span className={`block h-0.5 w-8 bg-[#3f3325] transition-all duration-300 ${isMenuOpen ? 'translate-y-2.5 rotate-45' : ''}`}></span>
                            <span className={`block h-0.5 w-8 bg-[#3f3325] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block h-0.5 w-8 bg-[#3f3325] transition-all duration-300 ${isMenuOpen ? '-translate-y-2.5 -rotate-45' : ''}`}></span>
                        </div>
                    </button>
                </div>
                </div>

                {/* Mobile Menu */}
                <div className={`absolute mt-2 w-full rounded-xl border border-[#d7c9b5] bg-[#f8f3e8] p-2 shadow-[0_10px_24px_rgba(56,42,28,0.16)] transition-all duration-300 md:hidden ${isMenuOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'}`}>
                    <div className="flex flex-col p-4 space-y-4">
                        <Link href="/our-trees" className="text-left text-[#3f3325] transition-colors hover:text-[#6a5136]" onClick={() => setIsMenuOpen(false)}>
                            Our Trees
                        </Link>
                        <Link href="/bonsai-club" className="text-left text-[#3f3325] transition-colors hover:text-[#6a5136]" onClick={() => setIsMenuOpen(false)}>
                            Bonsai Club
                        </Link>
                        <Link href="/store-blog" className="text-left text-[#3f3325] transition-colors hover:text-[#6a5136]" onClick={() => setIsMenuOpen(false)}>
                            Blog
                        </Link>
                        <Link href={'/contact'}>
                            <button className='w-full rounded-lg bg-[#4f3f2e] px-3 py-2 text-white transition-colors hover:bg-[#3f3325]'>
                                Contact
                            </button>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    );
}

function LeftSide() {
    return (
        <Link href="/">
            <div className="flex items-center">
                <Image
                    src="/images/logo.png"
                    alt="Description"
                    width={50}
                    height={80}
                    className='mr-3'
                    priority
                    quality={75}
                />
                <div className="flex-col items-center justify-center text-center">
                    <h1 className="text-xl font-semibold tracking-tight text-[#34291d]">WildWood</h1>
                    <h3 className="-mt-1 font-semibold tracking-tight text-[#34291d]">Gardens</h3>
                </div>
            </div>
        </Link>
    );
}

function Center() {
    return (
        <div className="flex items-center justify-center space-x-10 text-[0.98rem] font-medium text-[#3f3325]">
            <Link href="/our-trees" className="transition-colors hover:text-[#6a5136]">Our Trees</Link>
            <Link href="/bonsai-club" className="transition-colors hover:text-[#6a5136]">Bonsai Club</Link>
            <Link href="/store-blog" className="transition-colors hover:text-[#6a5136]">Blog</Link>
        </div>
    );
}

function Right() {
    return (
        <div className="flex items-center justify-center">
            <Link href={'/contact'}>
                <button className='rounded-lg bg-[#4f3f2e] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#3f3325]'>
                    Contact
                </button>
            </Link>
        </div>
    );
}

export default Navbar;