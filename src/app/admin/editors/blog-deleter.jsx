"use client"
import { Blog } from "@/app/blog/page";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function BlogDeleter() {
    return (
        <div className="container mx-auto p-4">
            <SignedIn>
                <Blog signedIn={true} />
            </SignedIn>
            <SignedOut>
                <div className="text-red-500 font-bold">
                    Unauthorized
                </div>
            </SignedOut>
        </div>
    )
}