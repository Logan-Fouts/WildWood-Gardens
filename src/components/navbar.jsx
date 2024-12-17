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

    return (
        <>
            <div className='mb-20'></div>
            <div className={`fixed w-full md:w-3/4 z-50 transition-all duration-300 ${scrolled ? 'top-0' : 'top-10'
                }`}>
                <div className={`w-full h-auto flex px-6 bg-offwhite shadow-lg rounded-md justify-between
                    transition-all duration-1 ${scrolled ? 'shadow-xl' : 'shadow-lg'
                    }`}>
                    <LeftSide />
                    <div className="hidden md:flex w-8/12 justify-between items-center">
                        <Center />
                        <Right />
                    </div>
                    <button
                        className="md:hidden flex items-center p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="space-y-2">
                            <span className={`block w-8 h-0.5 bg-textblue transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                            <span className={`block w-8 h-0.5 bg-textblue transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`block w-8 h-0.5 bg-textblue transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden absolute w-full bg-offwhite shadow-lg rounded-b-md transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                    }`}>
                    <div className="flex flex-col p-4 space-y-4">
                        <Link href="/our-trees" className="text-textblue hover:text-textblue/70 transition-colors">
                            Our Trees
                        </Link>
                        <Link href="/shop" className="text-textblue hover:text-textblue/70 transition-colors">
                            Shop
                        </Link>
                        <Link href="/bonsai-club" className="text-textblue hover:text-textblue/70 transition-colors">
                            Bonsai Club
                        </Link>
                        <button className='bg-textblue px-3 py-1 rounded-md text-white hover:bg-textblue/90 transition-colors w-full'>
                            Contact
                        </button>
                    </div>
                </div>
            </div>
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
                    <h1 className="text-textblue font-semibold text-xl">WildWood</h1>
                    <h3 className="text-textblue font-semibold -mt-1">Gardens</h3>
                </div>
            </div>
        </Link>
    );
}

function Center() {
    return (
        <div className="flex items-center text-textblue justify-center space-x-20 underline">
            <Link href="/our-trees">Our Trees</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/bonsai-club">Bonsai Club</Link>
        </div>
    );
}

function Right() {
    return (
        <div className="flex items-center justify-center">
            <button className='bg-textblue px-3 py-1 rounded-md text-white hover:bg-textblue/90 transition-colors'>
                Contact
            </button>
        </div>
    );
}

export default Navbar;