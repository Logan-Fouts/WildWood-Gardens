"use client";
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import ContactSection from '@/components/Contact';

export default function BlogPost({ params }) {
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [slug, setSlug] = useState('');

    // Use React.use() to unwrap the params promise
    const unwrappedParams = React.use(params);

    useEffect(() => {
        setSlug(unwrappedParams?.slug || '');
    }, [unwrappedParams]);


    useEffect(() => {
        if (!slug) return;
        async function fetchPost() {
            try {
                const response = await fetch('/api/posts');
                const data = await response.json();
                const foundPost = data.posts.find(p => p.slug === slug);
                if (foundPost) {
                    setPost(foundPost);
                } else {
                    setError('Post not found');
                }
            } catch (err) {
                setError('Failed to load post');
                console.error('Error loading post:', err);
            } finally {
                setIsLoading(false);
            }
        }
        fetchPost();

    }, [slug]);

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#f3efe6] pb-10">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(132,104,73,0.08),transparent_18%,transparent_82%,rgba(132,104,73,0.08))]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:4px_4px]" />

            <Navbar />

            <div className="relative z-10 mx-auto flex w-full max-w-5xl justify-center px-4 pt-28 sm:px-8 lg:pt-32">
                    {isLoading ? (
                        <div className="flex items-center justify-center min-h-[60vh]">
                            <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-[#6b5238]"></div>
                        </div>
                    ) : error || !post ? (
                        <div className="flex items-center justify-center min-h-[60vh] text-red-500">
                            {error || 'Post not found'}
                        </div>
                    ) : (
                        <article className="relative z-10 w-full rounded-xl border border-[#d8cab8] bg-[#faf6ef] p-4 shadow-[0_8px_20px_rgba(56,42,28,0.1)] sm:p-6">
                            <Link href="/store-blog" className="text-base font-medium text-[#6b5238] hover:underline">
                                ← Back
                            </Link>
                            <div className="relative w-full h-0 pb-[56.25%] mb-8 mt-4">
                                <CldImage
                                    src={post.image}
                                    alt={post.title}
                                    className="absolute top-0 left-0 object-cover rounded-lg w-full h-full"
                                    width="500"
                                    height="500"
                                />
                            </div>
                            <h1 className="mb-4 text-3xl font-bold text-[#3e2f22]">{post.title}</h1>
                            <div className="mb-8 flex items-center text-[#7a6046]">
                                <span>By {post.author}</span>
                                <span className="mx-2">•</span>
                                <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                            {post.content.map((section, index) => (
                                <RenderContent key={index} content={section} />
                            ))}
                        </article>
                    )}
            </div>
            <ContactSection />
        </main>
    );
}

function RenderContent({ content }) {
    switch (content.type) {
        case 'paragraph':
            return <p className="mb-4 leading-relaxed text-[#564638]">{content.text}</p>;
        case 'subheading':
            return <h2 className="my-6 text-2xl font-bold text-[#3e2f22]">{content.text}</h2>;
        case 'image':
            return (
                <div className="my-8">
                    <div className="relative w-full h-0 pb-[56.25%]">
                        <CldImage
                            src={content.src}
                            alt={content.alt}
                            className="absolute top-0 left-0 object-cover rounded-lg w-full h-full"
                            width="500"
                            height="500"
                        />
                    </div>
                    {content.caption && (
                        <p className="mt-2 text-center text-sm italic text-[#7a6046]">
                            {content.caption}
                        </p>
                    )}
                </div>
            );
        case 'list':
            return (
                <ul className="list-disc list-inside mb-6 space-y-2">
                    {content.items.map((item, index) => (
                        <li key={index} className="text-[#564638]">
                            {item}
                        </li>
                    ))}
                </ul>
            );
        default:
            return null;
    }
}