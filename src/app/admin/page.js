"use client";
import { useState, useEffect } from 'react';
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import BonsaiClub from '../bonsai-club/page';
import ClubEditor from './editors/club-editor';
import { BlogEditor } from './editors/blog-editor';
import Navbar from '@/components/navbar';

export default function AdminPage() {
    const [showBlogEditor, setShowBlogEditor] = useState(false);
    const [showClubEditor, setShowClubEditor] = useState(false);

    return (
        <div className='bg-white w-screen min-h-screen'>
            {(!showBlogEditor && !showClubEditor) ? (
                // Main Admin Panel
                <SignedIn>
                    <div>
                        <header className="bg-gradient-to-r from-emerald-800 to-emerald-600 px-8 py-5 text-white flex items-center justify-between shadow-lg">
                            <h1 className="text-3xl font-bold tracking-tight hover:text-emerald-100 transition-colors">
                                Wild Wood Gardens
                            </h1>
                            <SignOutButton />
                        </header>

                        <main className="container mx-auto px-8 py-10">
                            <h2 className="text-3xl text-center font-bold text-gray-800 mb-8 border-b border-gray-200 pb-4">
                                Admin Panel
                            </h2>

                            <nav className="bg-white rounded-xl shadow-md border border-gray-100">
                                <ul className="flex justify-center gap-12 py-5">
                                    <li>
                                        <button
                                            onClick={() => setShowBlogEditor(true)}
                                            className="px-6 py-2 text-emerald-700 hover:text-emerald-900 font-medium 
                             transition-all duration-200 rounded-lg hover:bg-emerald-50 
                             focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                                        >
                                            Blog
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setShowClubEditor(true)}
                                            className="px-6 py-2 text-emerald-700 hover:text-emerald-900 font-medium 
                             transition-all duration-200 rounded-lg hover:bg-emerald-50 
                             focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                                        >
                                            Bonsai Club
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </main>
                    </div>
                </SignedIn>
            ) : showBlogEditor ? (
                // Blog Editor
                <SignedIn>
                    <div>
                        <header className="bg-blue-500 px-8 py-5 text-white flex items-center justify-between shadow-lg">
                            <h1 className="text-3xl font-bold tracking-tight hover:text-emerald-100 transition-colors">
                                Wild Wood Gardens
                            </h1>
                            <div className='flex space-x-4'>
                                <button
                                    onClick={() => setShowBlogEditor(false)}
                                    className="hover:underline mr-4"
                                >
                                    Back
                                </button>
                                <SignOutButton />
                            </div>
                        </header>
                        <h2 className="text-3xl py-10 text-center font-bold text-gray-800 mb-8 border-b border-gray-200 pb-4">
                            Blog Management
                        </h2>
                        <BlogEditor />
                    </div>
                </SignedIn>
            ) : (
                // Club Editor
                <SignedIn>
                    <div>
                        <header className="bg-blue-500 px-8 py-5 text-white flex items-center justify-between shadow-lg">
                            <h1 className="text-3xl font-bold tracking-tight hover:text-emerald-100 transition-colors">
                                Wild Wood Gardens
                            </h1>
                            <div className='flex space-x-4'>
                                <button
                                    onClick={() => setShowClubEditor(false)}
                                    className="text-blue-700 hover:underline mr-4"
                                >
                                    Back
                                </button>
                                <SignOutButton />
                            </div>
                        </header>
                        <h2 className="text-3xl py-10 text-center font-bold text-gray-800 mb-8 border-b border-gray-200 pb-4">
                            Edit Club Details
                        </h2>
                        <ClubEditor />
                    </div>
                </SignedIn>
            )}
            <SignedOut>
                <div className='place-content-center text-black text-center w-screen min-h-screen'>
                    <div>
                        <h1 className='text-4xl pb-12 text-green-700 font-bold'>Wild Wood Gardens Admin Panel</h1>
                        <div className='space-x-4 p-4'>
                            <SignInButton className="underline" />
                            <a href='/' className='underline'>Go Home</a>
                        </div>
                    </div>
                </div>
            </SignedOut>
        </div>
    );
}