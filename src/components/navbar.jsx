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
            <div className={`fixed w-full max-w-6xl md:w-full z-50 transition-all duration-300 ${scrolled ? 'top-0' : 'top-10'
                }`}>
                <div className={`w-full h-auto flex px-6 py-2 bg-white shadow-lg rounded-md justify-between
                    transition-all duration-1 ${scrolled ? 'shadow-xl py-0' : 'shadow-lg'
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
                        <Link href="/bonsai-club" className="text-textblue hover:text-textblue/70 transition-colors">
                            Bonsai Club
                        </Link>
                        <Link href="/store-blog" className="text-textblue hover:text-textblue/70 transition-colors">
                            Blog
                        </Link>
                        <Link href={'/contact'}>
                            <button className='bg-textblue px-3 py-1 rounded-md text-white hover:bg-textblue/90 transition-colors w-full'>
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
                    <h1 className="text-black font-semibold text-xl">WildWood</h1>
                    <h3 className="text-black font-semibold -mt-1">Gardens</h3>
                </div>
            </div>
        </Link>
    );
}

function Center() {
    return (
        <div className="flex items-center text-black justify-center space-x-12 font-extralight">
            <Link href="/our-trees">Our Trees</Link>
            <Link href="/bonsai-club">Bonsai Club</Link>
            <Link href="/store-blog">Blog</Link>
        </div>
    );
}

function Right() {
    return (
        <div className="flex items-center justify-center">
            <Link href={'/contact'}>
                <button className='bg-green-500 px-3 py-1 rounded-md text-white hover:bg-textblue/90 transition-colors'>
                    Contact
                </button>
            </Link>
        </div>
    );
}

export default Navbar;