"use client";
import { useState, useEffect } from 'react';
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import BonsaiClub from '../bonsai-club/page';
import ClubEditor from './editors/club-editor';
import { BlogEditor } from './editors/blog-editor';

export default function AdminPage() {
    const [showBlogEditor, setShowBlogEditor] = useState(false);
    const [showClubEditor, setShowClubEditor] = useState(false);

    return (
        <div className='bg-gray-100 w-screen min-h-screen'>
            {(!showBlogEditor && !showClubEditor) ? (
                // Main Management Dashboard
                <SignedIn>
                    <div>
                        <header className="bg-gradient-to-r from-emerald-800 to-emerald-600 px-8 py-5 text-white flex items-center justify-between shadow-lg">
                            <h1 className="text-3xl font-bold tracking-tight hover:text-emerald-100 transition-colors">
                                Wild Wood Gardens
                            </h1>
                            <SignOutButton className="bg-white text-emerald-800 px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition-colors" />
                        </header>

                        <main className="container mx-auto px-8 py-10">
                            <h2 className="text-3xl text-center font-bold text-gray-800 mb-8 border-b border-gray-200 pb-4">
                                Management Dashboard
                            </h2>

                            <nav className="bg-white rounded-xl shadow-lg border border-gray-200">
                                <ul className="flex justify-center gap-12 py-5">
                                    <li>
                                        <button
                                            onClick={() => setShowBlogEditor(true)}
                                            className="bg-emerald-600 text-white px-4 py-2 rounded-lg shadow hover:bg-emerald-700 transition-colors"
                                        >
                                            Edit Blog
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            onClick={() => setShowClubEditor(true)}
                                            className="bg-emerald-600 text-white px-4 py-2 rounded-lg shadow hover:bg-emerald-700 transition-colors"
                                        >
                                            Edit Club
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
                        <header className="bg-gradient-to-r from-blue-800 to-blue-600 px-8 py-5 text-white flex items-center justify-between shadow-lg">
                            <h1 className="text-3xl font-bold tracking-tight hover:text-blue-100 transition-colors">
                                Wild Wood Gardens
                            </h1>
                            <div className='flex space-x-4'>
                                <button
                                    onClick={() => setShowBlogEditor(false)}
                                    className="text-white hover:underline mr-4"
                                >
                                    Back
                                </button>
                                <SignOutButton className="bg-white text-blue-800 px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition-colors" />
                            </div>
                        </header>
                        <h2 className="text-3xl pt-10 text-center font-bold text-gray-800 mb-8 border-b border-gray-200 pb-4">
                            Blog Management
                        </h2>
                        <BlogEditor />
                    </div>
                </SignedIn>
            ) : (
                // Club Editor
                <SignedIn>
                    <div>
                        <header className="bg-gradient-to-r from-blue-800 to-blue-600 px-8 py-5 text-white flex items-center justify-between shadow-lg">
                            <h1 className="text-3xl font-bold tracking-tight hover:text-blue-100 transition-colors">
                                Wild Wood Gardens
                            </h1>
                            <div className='flex space-x-4'>
                                <button
                                    onClick={() => setShowClubEditor(false)}
                                    className="text-white hover:underline mr-4"
                                >
                                    Back
                                </button>
                                <SignOutButton className="bg-white text-blue-800 px-4 py-2 rounded-lg shadow hover:bg-gray-200 transition-colors" />
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
                <div className='flex items-center justify-center text-black text-center w-screen min-h-screen'>
                    <div>
                        <h1 className='text-4xl pb-12 text-green-700 font-bold'>Wild Wood Gardens Management Dashboard</h1>
                        <div className='space-x-4 p-4'>
                            <SignInButton className="underline text-emerald-600 hover:text-emerald-800 transition-colors" />
                            <a href='/' className='underline text-emerald-600 hover:text-emerald-800 transition-colors'>Go Home</a>
                        </div>
                    </div>
                </div>
            </SignedOut>
        </div>
    );
}