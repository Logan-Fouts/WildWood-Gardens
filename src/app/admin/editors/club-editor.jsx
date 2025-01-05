import { useState, useEffect } from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function ClubEditor() {
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // Fetch event on component mount
    useEffect(() => {
        fetchEvent();
    }, []);

    const fetchEvent = async () => {
        try {
            const response = await fetch('/api/events');
            const data = await response.json();
            setEvent(data.events[0] || null); // Get the first (and only) event
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch event');
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/events', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ events: [event] }),
            });

            if (!response.ok) throw new Error('Failed to save event');

            setSuccess(true);
            setTimeout(() => setSuccess(false), 3000); // Clear success message after 3 seconds
        } catch (err) {
            setError('Failed to save event');
            setTimeout(() => setError(null), 3000); // Clear error message after 3 seconds
        }
    };

    if (loading) return <div>Loading...</div>;
    if (!event) return <div>No event found</div>;

    return (
        <main className="p-4 max-w-2xl mx-auto text-black">
            <SignedIn>
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                        Event updated successfully!
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
                    {/* Title */}
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            value={event.title}
                            onChange={e => setEvent({ ...event, title: e.target.value })}
                            className="w-full border p-2 rounded text-gray-600"
                        />
                    </div>

                    {/* Date */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Start Date</label>
                            <input
                                type="date"
                                value={event.date.start}
                                onChange={e => setEvent({
                                    ...event,
                                    date: { ...event.date, start: e.target.value }
                                })}
                                className="w-full border p-2 rounded text-gray-600"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">End Date</label>
                            <input
                                type="date"
                                value={event.date.end}
                                onChange={e => setEvent({
                                    ...event,
                                    date: { ...event.date, end: e.target.value }
                                })}
                                className="w-full border p-2 rounded text-gray-600"
                            />
                        </div>
                    </div>

                    {/* Time */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Start Time</label>
                            <input
                                type="time"
                                value={event.time.start}
                                onChange={e => setEvent({
                                    ...event,
                                    time: { ...event.time, start: e.target.value }
                                })}
                                className="w-full border p-2 rounded text-gray-600"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">End Time</label>
                            <input
                                type="time"
                                value={event.time.end}
                                onChange={e => setEvent({
                                    ...event,
                                    time: { ...event.time, end: e.target.value }
                                })}
                                className="w-full border p-2 rounded text-gray-600"
                            />
                        </div>
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                        <h3 className="font-bold text-gray-700">Location</h3>
                        <input
                            type="text"
                            placeholder="Address"
                            value={event.location.address}
                            onChange={e => setEvent({
                                ...event,
                                location: { ...event.location, address: e.target.value }
                            })}
                            className="w-full border p-2 rounded text-gray-600"
                        />
                        <div className="grid grid-cols-3 gap-2">
                            <input
                                type="text"
                                placeholder="City"
                                value={event.location.city}
                                onChange={e => setEvent({
                                    ...event,
                                    location: { ...event.location, city: e.target.value }
                                })}
                                className="border p-2 rounded text-gray-600"
                            />
                            <input
                                type="text"
                                placeholder="State"
                                value={event.location.state}
                                onChange={e => setEvent({
                                    ...event,
                                    location: { ...event.location, state: e.target.value }
                                })}
                                className="border p-2 rounded text-gray-600"
                            />
                            <input
                                type="text"
                                placeholder="Zip Code"
                                value={event.location.zipCode}
                                onChange={e => setEvent({
                                    ...event,
                                    location: { ...event.location, zipCode: e.target.value }
                                })}
                                className="border p-2 rounded text-gray-600"
                            />
                        </div>
                        <input
                            type="tel"
                            placeholder="Phone"
                            value={event.location.phone}
                            onChange={e => setEvent({
                                ...event,
                                location: { ...event.location, phone: e.target.value }
                            })}
                            className="w-full border p-2 rounded text-gray-600"
                        />
                    </div>

                    {/* Food */}
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Food</label>
                        <textarea
                            value={event.food}
                            onChange={e => setEvent({ ...event, food: e.target.value })}
                            className="w-full border p-2 rounded text-gray-600"
                        />
                    </div>

                    {/* Pricing */}
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Pricing</label>
                        <textarea
                            value={event.pricing}
                            onChange={e => setEvent({ ...event, pricing: e.target.value })}
                            className="w-full border p-2 rounded text-gray-600"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </SignedIn>
            <SignedOut>
                <div className="text-red-500 font-bold">
                    Unauthorized
                </div>
            </SignedOut>
        </main>
    );
}