"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import ContactSection from '@/components/Contact';

export default function BonsaiClub({ showNavBar = true }) {
    const [event, setEvent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchEvent() {
            try {
                const response = await fetch('/api/events');
                const data = await response.json();
                const activeEvent = data.events.find(e => e.isActive);
                if (activeEvent) {
                    setEvent(activeEvent);
                }
            } catch (err) {
                setError('Failed to load event information');
                console.error('Error loading event:', err);
            } finally {
                setIsLoading(false);
            }
        }

        fetchEvent();
    }, []);

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#f3efe6]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(132,104,73,0.08),transparent_18%,transparent_82%,rgba(132,104,73,0.08))]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:4px_4px]" />

            {showNavBar && <Navbar />}

            <section className="relative z-10 mx-auto max-w-6xl px-4 pb-10 pt-28 sm:px-8 lg:pt-32">
                <div className="mb-8 text-left">
                    <p className="text-xs uppercase tracking-[0.22em] text-[#7a6046]">Community</p>
                    <h1 className="mt-3 text-4xl font-extrabold text-[#3e2f22] md:text-5xl lg:text-6xl">
                            Bonsai Club
                    </h1>
                </div>

                <div className="mb-8 grid gap-6 rounded-xl border border-[#d8cab8] bg-[#faf6ef] p-6 shadow-[0_8px_20px_rgba(56,42,28,0.1)] md:grid-cols-[1.3fr_0.7fr] md:p-8">
                    <div>
                        <p className="text-lg leading-relaxed text-[#4e3f31]">Your gateway to botanical artistry.</p>
                        <p className="mt-4 leading-relaxed text-[#564638]">
                            Join our Bonsai Club for hands-on workshops, expert guidance, and a welcoming community for all skill levels. Whether you are starting out or refining advanced techniques, our meetings offer practical help and shared inspiration.
                        </p>
                    </div>
                    <div className="relative min-h-56 overflow-hidden rounded-lg border border-[#d8cab8]">
                        <Image
                            src="/images/club/wwgclub.jpg"
                            alt="WildWood Bonsai Club"
                            fill
                            sizes="(max-width: 768px) 100vw, 360px"
                            className="object-cover"
                        />
                    </div>
                </div>

                        {isLoading ? (
                            <div className="flex items-center justify-center py-12">
                                <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-[#6b5238]"></div>
                            </div>
                        ) : error ? (
                            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700">{error}</div>
                        ) : event ? (
                            <div className="rounded-xl border border-[#d8cab8] bg-[#faf6ef] p-6 shadow-[0_8px_20px_rgba(56,42,28,0.1)] sm:p-8">
                                <h2 className="mb-6 text-3xl font-bold text-[#3e2f22]">
                                    {event.title}
                                </h2>

                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                    <div>
                                        <h3 className="mb-2 text-lg font-semibold text-[#3e2f22]">When</h3>
                                        <p className="text-[#564638]">
                                        Meeting 2nd sunday of each month.
                                    </p>
                                        <p className="text-[#564638]">
                                        {event.time.start} - {event.time.end}
                                    </p>
                                    </div>

                                    {event.food && (
                                        <div>
                                            <h3 className="mb-2 text-lg font-semibold text-[#3e2f22]">Food</h3>
                                            <p className="text-[#564638]">{event.food}</p>
                                        </div>
                                    )}

                                    {event.pricing && (
                                        <div>
                                            <h3 className="mb-2 text-lg font-semibold text-[#3e2f22]">Pricing</h3>
                                            <p className="text-[#564638]">{event.pricing}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="my-8 border-t border-[#d8cab8] pt-6">
                                    <h3 className="mb-2 text-lg font-semibold text-[#3e2f22]">Location</h3>
                                    <address className="not-italic text-[#564638]">
                                        {event.location.address}<br />
                                        {event.location.city}, {event.location.state} {event.location.zipCode}<br />
                                        <a
                                            href={`tel:${event.location.phone}`}
                                            className="font-medium text-[#6b5238] underline-offset-4 hover:underline"
                                        >
                                            {event.location.phone}
                                        </a>
                                    </address>
                                </div>

                                <a
                                    href={`https://maps.google.com/?q=${encodeURIComponent(
                                        `${event.location.address}, ${event.location.city}, ${event.location.state} ${event.location.zipCode}`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block rounded-md bg-[#4f3f2e] px-6 py-3 text-white transition-colors hover:bg-[#3f3325]"
                                >
                                    Get Directions
                                </a>
                            </div>
                        ) : (
                            <p className="rounded-lg border border-[#d8cab8] bg-[#faf6ef] px-4 py-3 text-[#564638]">No upcoming events at this time.</p>
                        )}
            </section>
            <ContactSection />
        </main>
    );
}