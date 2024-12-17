// components/BlogCard.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ post }) {
    return (
        <Link
            href={`/blog/${post.slug}`}
            className="block bg-white rounded-lg shadow-md overflow-hidden
        transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div className="relative h-48 md:h-56">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4">
                <h3 className="font-inknut text-lg text-textblue mb-2">
                    {post.title}
                </h3>
                <p className="text-gray-600 text-sm">
                    {post.preview}
                </p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-xs text-gray-500">
                        {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="text-textblue text-sm font-semibold">
                        Read More →
                    </span>
                </div>
            </div>
        </Link>
    );
}