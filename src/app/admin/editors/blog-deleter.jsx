"use client";
import { Blog } from "@/app/blog/page";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function BlogDeleter() {
    return (
        <div className="container mx-auto p-6 bg-white rounded-xl shadow-md">
            <SignedIn>
                <div className="md:-mt-56">
                    <Blog signedIn={true}/>
                </div>
            </SignedIn>
            <SignedOut>
                <div className="text-red-500 font-bold text-center">
                    Unauthorized
                </div>
            </SignedOut>
        </div>
    );
}