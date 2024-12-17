"use client"

import Image from "next/image";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export function Blog() {
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
        <div className="flex flex-wrap w-full sm:px-36 sm:mt-48">
            <h1 className="text-black text-4xl py-8">Latest Posts</h1>
            {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    );
}

function BlogCard({ post }) {
    return (
        <Link href={`/blog/${post.slug}`} className="w-full">
            <div className="bg-white rounded-lg shadow-md overflow-hidden
                transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer mb-8">
                <div className="relative h-48 md:h-56">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-inknut text-lg font-semibold text-textblue">
                            {post.title}
                        </h3>
                        <span className="text-sm text-gray-500">
                            {new Date(post.date).toLocaleDateString()}
                        </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">
                        {post.preview}
                    </p>
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                            By {post.author}
                        </span>
                        <span className="text-textblue hover:text-textblue/80 
                            transition-colors text-sm font-semibold">
                            Read More →
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}