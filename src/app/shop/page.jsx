import Navbar from "@/components/navbar";
import Image from "next/image";
import ContactSection from "@/components/Contact";

export default function Shop() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#f3efe6]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(132,104,73,0.08),transparent_18%,transparent_82%,rgba(132,104,73,0.08))]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:4px_4px]" />

            <Navbar />

            <section className="relative z-10 mx-auto max-w-5xl px-4 pb-10 pt-28 sm:px-8 lg:pt-32">
                <header className="text-left">
                    <p className="text-xs uppercase tracking-[0.22em] text-[#7a6046]">Online Store</p>
                    <h1 className="mt-3 text-4xl font-extrabold text-[#3e2f22] md:text-5xl lg:text-6xl">
                        Shop Coming Soon
                    </h1>
                </header>

                <article className="mt-8 rounded-xl border border-[#d8cab8] bg-[#faf6ef] p-6 shadow-[0_8px_20px_rgba(56,42,28,0.1)] sm:p-8">
                    <p className="text-lg leading-relaxed text-[#564638]">
                        Our online shop is currently under construction.
                    </p>
                    <p className="mt-3 leading-relaxed text-[#564638]">
                        In the meantime, please visit us at our Chardon location or call for current inventory.
                    </p>

                    <address className="mt-6 not-italic text-[#564638]">
                        14488 Rock Creek Rd
                        <br />
                        Chardon, Ohio 44024
                    </address>

                    <div className="mt-5">
                        <a href="tel:440-749-4252" className="font-medium text-[#6b5238] underline-offset-4 hover:underline">
                            440-749-4252
                        </a>
                    </div>

                    <div className="mt-8">
                        <a
                            href={`https://maps.google.com/?q=${encodeURIComponent('14488 rock creek rd, Chardon, Ohio 44024')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block rounded-md bg-[#4f3f2e] px-6 py-3 text-white transition-colors hover:bg-[#3f3325]"
                        >
                            Get Directions
                        </a>
                    </div>
                </article>
            </section>

            <ContactSection />
        </main>
    );
}