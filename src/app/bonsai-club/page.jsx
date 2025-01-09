"use client";
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';

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
        <div className="w-screen min-h-screen bg-gray-50 relative">
            <div className="relative px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 transition-all duration-300">
                {showNavBar && (
                    <div className="w-full flex justify-center">
                        <Navbar />
                    </div>
                )}
                <div className="container mx-auto md:mt-24 sm:px-6 mt-24 pb-8 max-w-screen-xl">
                    <div className="relative z-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8">
                            Bonsai Club
                        </h1>

                        <div className="bg-white rounded-lg p-8 shadow-lg mb-8 flex flex-col md:flex-row items-center">
                            <div className="md:w-2/3 w-full md:pr-8">
                                <p className="text-gray-700 text-lg leading-relaxed text-center md:text-left">
                                    Your Gateway to Botanical Artistry
                                </p>
                                <p className="text-gray-600 mt-4">
                                    Join our vibrant Bonsai Club and immerse yourself in the world of miniature tree cultivation! Our upcoming events offer expert guidance, delicious food, and a welcoming community for bonsai enthusiasts of all skill levels. Whether you're a curious beginner or a seasoned cultivator, we provide hands-on workshops, expert advice, and a chance to connect with fellow tree lovers. Check out our current event details to discover exciting opportunities to grow your bonsai passion!
                                </p>
                            </div>
                            <div className="md:w-1/3 w-full mt-4 md:mt-0">
                                <img
                                    src="/images/club/wwgclub.jpg"
                                    alt="Bonsai Club"
                                    className="w-full h-auto rounded-lg shadow-lg"
                                />
                            </div>
                        </div>

                        {isLoading ? (
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-800"></div>
                        ) : error ? (
                            <div className="text-red-500">{error}</div>
                        ) : event ? (
                            <div className="bg-white rounded-lg p-8 shadow-lg">
                                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                    {event.title}
                                </h2>

                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">When</h3>
                                    <p className="text-gray-700">
                                        {new Date(event.date.start).toLocaleDateString()} - {new Date(event.date.end).toLocaleDateString()}
                                    </p>
                                    <p className="text-gray-700">
                                        {event.time.start} - {event.time.end}
                                    </p>
                                </div>

                                {event.food && (
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Food</h3>
                                        <p className="text-gray-700">{event.food}</p>
                                    </div>
                                )}

                                {event.pricing && (
                                    <div className="mb-6">
                                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Pricing</h3>
                                        <p className="text-gray-700">{event.pricing}</p>
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Location</h3>
                                    <address className="text-gray-700 not-italic">
                                        {event.location.address}<br />
                                        {event.location.city}, {event.location.state} {event.location.zipCode}<br />
                                        <a
                                            href={`tel:${event.location.phone}`}
                                            className="text-blue-600 hover:underline"
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
                                    className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
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