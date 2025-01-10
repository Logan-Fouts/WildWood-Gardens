"use client";

import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import { useState } from "react";
import { BlogEditor } from "./editors/blog-editor";
import ClubEditor from "./editors/club-editor";

export default function AdminPage() {
    const [activeTab, setActiveTab] = useState("blog");

    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
            <SignedIn>
                <div className="flex flex-col w-full md:w-64 bg-white shadow-md">
                    <header className="px-8 py-4 text-gray-800 flex items-center justify-between border-b border-gray-200">
                        <h1 className="text-xl font-semibold">
                            Admin Dashboard
                        </h1>
                        <SignOutButton className="bg-gray-800 p-2 md:p-1 text-white rounded-md shadow hover:bg-gray-700 transition-colors" />
                    </header>
                    <nav className="flex flex-col p-4 space-y-2">
                        <button
                            onClick={() => setActiveTab("blog")}
                            className={`text-left px-4 py-2 rounded-md ${activeTab === "blog" ? "bg-gray-200 text-gray-800" : "text-gray-600 hover:bg-gray-100"}`}
                        >
                            Blog
                        </button>
                        <button
                            onClick={() => setActiveTab("club")}
                            className={`text-left px-4 py-2 rounded-md ${activeTab === "club" ? "bg-gray-200 text-gray-800" : "text-gray-600 hover:bg-gray-100"}`}
                        >
                            Club Event
                        </button>
                    </nav>
                </div>
                <main className="flex-1 p-4 md:p-8">
                    <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4 md:mb-6 border-b border-gray-200 pb-2 text-center">
                            {activeTab === "blog" ? "Blog Management" : "Edit Club Details"}
                        </h2>
                        {activeTab === "blog" ? <BlogEditor /> : <ClubEditor />}
                    </div>
                </main>
            </SignedIn>
            <SignedOut>
                <div className="flex items-center justify-center text-gray-800 text-center w-screen min-h-screen">
                    <div>
                        <h1 className="text-3xl pb-8 font-bold">Wild Wood Gardens Management Dashboard</h1>
                        <div className="space-x-4 p-4">
                            <SignInButton className="underline text-gray-800 hover:text-gray-600 transition-colors" />
                            <a href="/" className="underline text-gray-800 hover:text-gray-600 transition-colors">Go Home</a>
                        </div>
                    </div>
                </div>
            </SignedOut>
        </div>
    );
}