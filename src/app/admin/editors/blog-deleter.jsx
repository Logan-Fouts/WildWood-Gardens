import { Blog } from "@/app/blog/page";
import { SignedOut } from "@clerk/nextjs";

// TODO: Implement Delete Functionality
export default function BlogDeleter() {
    return (
        <div>
            <SignedIn>
                <Blog />
            </SignedIn>
            <SignedOut>
                Unauthorized
            </SignedOut>
        </div>
    )
}