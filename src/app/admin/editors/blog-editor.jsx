"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { BlogCreater } from "./blog-creater";
import { useState } from "react";
import BlogDeleter from "./blog-deleter";

export function BlogEditor() {
    const [showCreatePost, setShowCreatePost] = useState(false);
    const [showDeletePost, setShowDeletePost] = useState(false);

    return (
        <main className="text-black bg-gray-100 min-h-screen">
            <SignedIn>
                <nav className="bg-white rounded-xl shadow-md border border-gray-200 mb-12">
                    <ul className="flex justify-center gap-12 py-5">
                        <li>
                            <button
                                onClick={() => setShowCreatePost(true)}
                                className="px-6 py-2 text-emerald-700 hover:text-emerald-900 font-medium transition-all duration-200 rounded-lg hover:bg-emerald-50 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                            >
                                New Post
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setShowDeletePost(true)}
                                className="px-6 py-2 text-emerald-700 hover:text-emerald-900 font-medium transition-all duration-200 rounded-lg hover:bg-emerald-50 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                            >
                                Delete Posts
                            </button>
                        </li>
                    </ul>
                </nav>
                {showCreatePost && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto m-4">
                            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                                <h2 className="text-2xl font-bold">Create New Post</h2>
                                <button
                                    onClick={() => setShowCreatePost(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="p-6">
                                <BlogCreater onClose={() => setShowCreatePost(false)} />
                            </div>
                        </div>
                    </div>
                )}
                {showDeletePost && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto m-4">
                            <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                                <h2 className="text-2xl font-bold">Delete Post</h2>
                                <button
                                    onClick={() => setShowDeletePost(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="p-6 overflow-hidden">
                                <BlogDeleter onClose={() => setShowDeletePost(false)} />
                            </div>
                        </div>
                    </div>
                )}
            </SignedIn>
            <SignedOut>
                <div className="flex items-center justify-center text-gray-800 text-center w-screen min-h-screen">
                    <div>
                        <h1 className="text-3xl pb-8 font-bold">Please sign in to manage blog posts.</h1>
                    </div>
                </div>
            </SignedOut>
        </main>
    );
}
