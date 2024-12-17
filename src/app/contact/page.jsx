import Image from 'next/image';
import Navbar from '@/components/navbar';

export default function Contact() {
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

                <div className="container mx-auto mt-56 md:mt-24 px-4 sm:px-6 md:px-8">
                    <div className="relative z-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textblue mb-8">
                            Contact Us
                        </h1>

                        <div className="bg-white/90 rounded-lg p-8 shadow-lg max-w-2xl">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-xl font-semibold text-textblue mb-2">Address</h2>
                                    <address className="text-gray-700 not-italic break-words">
                                        14488 rock creek rd<br />
                                        Chardon, Ohio 44024
                                    </address>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-textblue mb-2">Phone</h2>
                                    <a
                                        href="tel:440-749-4252"
                                        className="text-gray-700 hover:text-textblue transition-colors break-words"
                                    >
                                        440-749-4252
                                    </a>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-textblue mb-2">Email</h2>
                                    <a
                                        href="mailto:frankmihalic56@58197349.mailchimpapp.com"
                                        className="text-gray-700 hover:text-textblue transition-colors break-words whitespace-normal overflow-wrap-normal"
                                    >
                                        frankmihalic56@58197349.mailchimpapp.com
                                    </a>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-textblue mb-2">Hours</h2>
                                    <div className="text-gray-700 break-words">
                                        <p>Monday - Friday: Closed</p>
                                        <p>Saturday: 10:00 am - 5:00 pm</p>
                                        <p>Sunday: 10:00 am - 5:00 pm</p>
                                    </div>
                                </div>

                                <div className="pt-4">
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
        </div>
    );
}