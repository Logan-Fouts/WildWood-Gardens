"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { SignedIn } from "@clerk/nextjs";
import { CldImage } from "next-cloudinary";
import ContactSection from '@/components/Contact';

export default function Blog({ signedIn = false }) {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch('/api/posts');
                const data = await response.json();
                setPosts(data.posts || []);
            } catch (err) {
                setError('Failed to load blog posts');
                console.error('Error loading posts:', err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchPosts();
    }, []);

    if (isLoading) {
        return (
            <div className="flex w-full items-center justify-center mt-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex w-full items-center justify-center mt-20 text-red-500">
                {error}
            </div>
        );
    }

    return (
        <div className="w-full pt-6 sm:pt-8">
            {!signedIn && (
                <h2 className="py-6 text-left text-3xl font-bold text-[#3e2f22]">Latest Posts</h2>
            )}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {posts.map((post) => (
                    <BlogCard key={post.id} post={post} signedIn={signedIn} />
                ))}
            </div>
            <ContactSection />
        </div>
    );
}


function BlogCard({ post, signedIn }) {
    const [message, setMessage] = useState('');

    async function deletePost(title) {
        try {
            const response = await fetch('/api/posts', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title }),
            });
            const data = await response.json();
            if (response.ok) {
                setMessage("Post deleted successfully!");
                setTimeout(() => {
                    window.location.reload();
                }, 2000);
            } else {
                setMessage(data.error || "Failed to delete post");
            }
        } catch (error) {
            setMessage("Error deleting post");
        }
    }

    return (
        <div className="w-full">
            <SignedIn>
                {signedIn && (
                    <button onClick={() => deletePost(post.title)} className="rounded bg-red-500 p-1 mb-4 hover:ring">Delete</button>
                )}
            </SignedIn>
            {message && (
                <div className="text-center text-red-500 mb-4">
                    {message}
                </div>
            )}
            <Link href={`/blog/${post.slug}`} className="w-full">
                <article className="mb-2 cursor-pointer overflow-hidden rounded-lg border border-[#d8cab8] bg-[#faf6ef] shadow-[0_6px_16px_rgba(56,42,28,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(56,42,28,0.16)]">
                    <div className="relative h-48 md:h-56">
                        <CldImage
                            src={post.image}
                            alt={post.title}
                            className="object-cover w-full h-full"
                            width="500"
                            height="500"
                        />
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-semibold text-[#3e2f22]">
                                {post.title}
                            </h3>
                            <span className="text-sm text-[#7a6046]">
                                {new Date(post.date).toLocaleDateString()}
                            </span>
                        </div>
                        <p className="mb-2 text-sm text-[#564638]">
                            {post.preview}
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-[#7a6046]">
                                By {post.author}
                            </span>
                            <span className="text-sm font-semibold text-[#6b5238] transition-colors hover:text-[#4f3f2e]">
                                Read More →
                            </span>
                        </div>
                    </div>
                </article>
            </Link>
        </div>
    );
}