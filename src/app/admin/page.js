"use client";
import { useState, useEffect } from 'react';
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import { Blog } from "../blog/page";
import BonsaiClub from '../bonsai-club/page';
import ClubEditor from './editors/club-editor';
import { BlogEditor } from './editors/blog-editor';

export default function AdminPage() {
    const [showBlogEditor, setShowBlogEditor] = useState(false);
    const [showClubEditor, setShowClubEditor] = useState(false);

    return (
        <div className='bg-white w-screen min-h-screen'>
            {(!showBlogEditor && !showClubEditor) ? (
                // Main Admin Panel
                <div>
                    <header className="bg-gray-800 p-3 text-white flex justify-between">
                        <h1 className="text-2xl font-bold">Admin Panel</h1>
                        <SignOutButton />
                    </header>
                    <nav className="bg-gray-200 p-3">
                        <ul className="flex space-x-4">
                            <li>
                                <button
                                    onClick={() => setShowBlogEditor(true)}
                                    className="text-blue-500 hover:underline"
                                >
                                    Blog
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => setShowClubEditor(true)}
                                    className="text-blue-500 hover:underline"
                                >
                                    Bonsai Club
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            ) : showBlogEditor ? (
                // Blog Editor
                <div>
                    <header className="bg-gray-800 p-3 text-white flex items-center">
                        <button
                            onClick={() => setShowBlogEditor(false)}
                            className="text-blue-500 hover:underline mr-4"
                        >
                            &larr; Back
                        </button>
                        <h1 className="text-2xl font-bold">Blog Editor</h1>
                    </header>
                    <BlogEditor />
                </div>
            ) : (
                // Club Editor
                <div>
                    <header className="bg-gray-800 p-3 text-white flex items-center">
                        <button
                            onClick={() => setShowClubEditor(false)}
                            className="text-blue-500 hover:underline mr-4"
                        >
                            &larr; Back
                        </button>
                        <h1 className="text-2xl font-bold">Club Editor</h1>
                    </header>
                    <ClubEditor />
                </div>
            )}
        </div>
    );
}