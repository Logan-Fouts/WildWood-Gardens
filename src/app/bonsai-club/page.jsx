// src/app/club/page.jsx
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/navbar';

export default function BonsaiClub() {
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
        <div className="w-screen min-h-screen bg-white relative">
            <Image
                src="/images/oldtree.png"
                alt="Background"
                width={670}
                height={500}
                className="absolute top-0 right-0 z-0"
                priority
            />

            <div className="relative px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 transition-all duration-300">
                <div className="w-full flex justify-center">
                    <Navbar />
                </div>

                <div className="container mx-auto mt-12 md:mt-24 px-4 sm:px-6 md:px-8">
                    <div className="relative z-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textblue mb-8">
                            Bonsai Club
                        </h1>

                        {isLoading ? (
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-textblue"></div>
                        ) : error ? (
                            <div className="text-red-500">{error}</div>
                        ) : event ? (
                            <div className="bg-white/90 rounded-lg p-8 shadow-lg">
                                <h2 className="text-3xl font-bold text-textblue mb-6">
                                    {event.title}
                                </h2>

                                {/* Date and Time */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold mb-2 text-slate-800">When</h3>
                                    <p className="text-gray-700">
                                        {new Date(event.date.start).toLocaleDateString()} - {new Date(event.date.end).toLocaleDateString()}
                                    </p>
                                    <p className="text-gray-700">
                                        {event.time.start} - {event.time.end}
                                    </p>
                                </div>

                                {/* Food */}
                                {event.food && (
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold mb-2 text-slate-800">Food</h3>
                                        <p className="text-gray-700">{event.food.description}</p>
                                    </div>
                                )}

                                {/* Pricing */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold mb-2 text-slate-800">Pricing</h3>
                                    <ul className="space-y-2">
                                        {event.pricing.map((price, index) => (
                                            <li key={index} className="text-gray-700">
                                                {price.discount ? (
                                                    `${price.discount}% off ${price.description}`
                                                ) : (
                                                    `$${price.price} ${price.description} ${price.unit || ''}`
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Location */}
                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold mb-2 text-slate-800">Location</h3>
                                    <address className="text-gray-700 not-italic">
                                        {event.location.address}<br />
                                        {event.location.city}, {event.location.state} {event.location.zipCode}<br />
                                        <a
                                            href={`tel:${event.location.phone}`}
                                            className="text-textblue hover:underline"
                                        >
                                            {event.location.phone}
                                        </a>
                                    </address>
                                </div>

                                {/* Map Button */}
                                <a
                                    href={`https://maps.google.com/?q=${encodeURIComponent(
                                        `${event.location.address}, ${event.location.city}, ${event.location.state} ${event.location.zipCode}`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-textblue text-white px-6 py-3 rounded-lg hover:bg-textblue/90 transition-colors"
                                >
                                    Get Directions
                                </a>
                            </div>
                        ) : (
                            <p className="text-gray-700">No upcoming events at this time.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}