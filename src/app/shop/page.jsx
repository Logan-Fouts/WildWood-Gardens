import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Shop() {
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

                <div className="container md:mt-36 px-4 sm:px-6 md:px-8 mt-56 pb-8">
                    <div className="relative z-10 flex flex-col w-3/4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-textblue mb-6">
                            Shop Coming Soon
                        </h1>

                        <div className="bg-white/90 rounded-lg p-8 shadow-lg max-w-2xl">
                            <p className="text-gray-700 text-lg mb-4">
                                Our online shop is currently under construction.
                            </p>
                            <p className="text-gray-700">
                                In the meantime, please visit us at our physical location:
                            </p>

                            <address className="mt-6 text-gray-700 not-italic">
                                14488 rock creek rd<br />
                                Chardon, Ohio 44024
                            </address>

                            <div className="mt-6">
                                <a
                                    href="tel:440-749-4252"
                                    className="text-textblue hover:underline"
                                >
                                    440-749-4252
                                </a>
                            </div>

                            <div className="mt-8">
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