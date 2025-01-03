import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";

export default function AdminPage() {
    return (
        <>
            <SignedIn>
                <h1 className="text-black bg-white">Welcome To Admin Panel</h1>
                <SignOutButton />
            </SignedIn>
            <SignedOut>
                <SignInButton />
            </SignedOut>
        </>
    );
}