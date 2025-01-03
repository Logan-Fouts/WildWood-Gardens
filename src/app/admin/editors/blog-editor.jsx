"use client"
import { Blog } from "@/app/blog/page";
import { SignedIn, SignedOut } from "@clerk/nextjs";

// TODO
export function BlogEditor() {
    return (
        <main className="p-4">
            <SignedIn>
                <Blog />
            </SignedIn>
            <SignedOut>
                Unauthorized
            </SignedOut>
        </main>
    );
}
