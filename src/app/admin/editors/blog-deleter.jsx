"use client"
import { Blog } from "@/app/blog/page";
import { SignedIn, SignedOut } from "@clerk/nextjs";

// TODO: Implement Delete Functionality
export default function BlogDeleter() {
    return (
        <div>
            <SignedIn>
                <Blog signedIn={true} />
            </SignedIn>
            <SignedOut>
                Unauthorized
            </SignedOut>
        </div>
    )
}