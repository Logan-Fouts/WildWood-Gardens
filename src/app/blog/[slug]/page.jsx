"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/navbar';

export default function BlogPost({ params }) {
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [slug, setSlug] = useState('');

    useEffect(() => {
        setSlug(params?.slug || '');
    }, [params]);


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
        <div className="w-screen min-h-screen bg-white relative -mt-12 pb-8">
            <div className="relative px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 transition-all duration-300">
                <div className="w-full flex justify-center">
                    <Navbar />
                </div>
                <div className="container mx-auto mt-12 md:mt-24 px-4 sm:px-6 md:px-8">
                    {isLoading ? (
                        <div className="flex items-center justify-center min-h-[60vh]">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-textblue"></div>
                        </div>
                    ) : error || !post ? (
                        <div className="flex items-center justify-center min-h-[60vh] text-red-500">
                            {error || 'Post not found'}
                        </div>
                    ) : (
                        <article className="relative z-10 bg-white/90 rounded-lg p-6 shadow-lg">
                            <div className="relative w-full h-[400px] mb-8">
                                <ImageWithFallback
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover rounded-lg"
                                    priority
                                />
                            </div>
                            <h1 className="text-3xl font-bold mb-4 text-textblue">{post.title}</h1>
                            <div className="flex items-center text-gray-600 mb-8">
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
            </div>
        </div>
    );
}

function RenderContent({ content }) {
    switch (content.type) {
        case 'paragraph':
            return <p className="mb-4 text-gray-600 leading-relaxed">{content.text}</p>;
        case 'subheading':
            return <h2 className="text-2xl font-bold my-6 text-textblue">{content.text}</h2>;
        case 'image':
            return (
                <div className="my-8">
                    <div className="relative w-full h-[300px]">
                        <ImageWithFallback
                            src={content.src}
                            alt={content.alt}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    {content.caption && (
                        <p className="text-center text-gray-600 mt-2 text-sm italic">
                            {content.caption}
                        </p>
                    )}
                </div>
            );
        case 'list':
            return (
                <ul className="list-disc list-inside mb-6 space-y-2">
                    {content.items.map((item, index) => (
                        <li key={index} className="text-gray-600">
                            {item}
                        </li>
                    ))}
                </ul>
            );
        default:
            return null;
    }
}

function ImageWithFallback({ src, alt, ...props }) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    return (
        <div className="relative w-full h-full">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-textblue"></div>
                </div>
            )}
            <Image
                src={error ? '/images/placeholder.jpg' : src}
                alt={alt}
                {...props}
                onLoadingComplete={() => setIsLoading(false)}
                onError={() => {
                    setError(true);
                    setIsLoading(false);
                }}
            />
        </div>
    );
}