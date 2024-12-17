import Image from 'next/image';
import Navbar from '@/components/navbar';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <div className="w-screen min-h-screen bg-white relative">
            <div className="relative px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 transition-all duration-300">
                <div className="w-full flex justify-center">
                    <Navbar />
                </div>
                <div className="container mx-auto mt-56 md:mt-24 px-4 sm:px-6 md:px-8">
                    <div className="relative z-10 pb-8">
                        <h1 className="text-4xl text-center md:text-5xl lg:text-6xl font-bold text-black mb-8">
                            Contact Us
                        </h1>
                        <div className="bg-white/90 rounded-2xl mx-auto p-8 md:p-12 shadow-xl max-w-3xl space-y-8">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Location */}
                                <div className="flex items-start space-x-4">
                                    <MapPin className="text-textblue w-8 h-8 mt-1 flex-shrink-0" />
                                    <div>
                                        <h2 className="text-xl font-semibold text-textblue mb-2">Address</h2>
                                        <address className="text-gray-700 not-italic break-words">
                                            14488 Rock Creek Rd<br />
                                            Chardon, Ohio 44024
                                        </address>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start space-x-4">
                                    <Phone className="text-textblue w-8 h-8 mt-1 flex-shrink-0" />
                                    <div>
                                        <h2 className="text-xl font-semibold text-textblue mb-2">Phone</h2>
                                        <a
                                            href="tel:440-749-4252"
                                            className="text-gray-700 hover:text-textblue transition-colors break-words"
                                        >
                                            440-749-4252
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Email */}
                                <div className="flex items-start space-x-4">
                                    <Mail className="text-textblue w-8 h-8 mt-1 flex-shrink-0" />
                                    <div>
                                        <h2 className="text-xl font-semibold text-textblue mb-2">Email</h2>
                                        <a
                                            href="mailto:frankmihalic56@58197349.mailchimpapp.com"
                                            className="text-gray-700 hover:text-textblue transition-colors break-words truncate max-w-[200px]"
                                        >
                                            frank@mailchimpapp.com
                                        </a>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-start space-x-4">
                                    <Clock className="text-textblue w-8 h-8 mt-1 flex-shrink-0" />
                                    <div>
                                        <h2 className="text-xl font-semibold text-textblue mb-2">Hours</h2>
                                        <div className="text-gray-700 break-words">
                                            <p>Monday - Friday: Closed</p>
                                            <p>Saturday: 10:00 am - 5:00 pm</p>
                                            <p>Sunday: 10:00 am - 5:00 pm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 flex justify-center md:justify-start">
                                <a
                                    href={`https://maps.google.com/?q=${encodeURIComponent(
                                        '14488 rock creek rd, Chardon, Ohio 44024'
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-textblue text-white px-6 py-3 rounded-lg hover:bg-textblue/90 transition-colors"
                                >
                                    Get Directions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}