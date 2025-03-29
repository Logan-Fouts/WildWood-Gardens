import Image from 'next/image';
import Navbar from '@/components/navbar';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className="w-screen min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 relative">
            <div className="relative px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 transition-all duration-300">
                <div className="w-full flex justify-center">
                    <Navbar />
                </div>

                <div className="container mx-auto mt-16 md:mt-24 px-4 sm:px-6 md:px-8">
                    {/* Hero Section */}
                    <div className="relative z-10 pb-8">
                        <h1 className="text-4xl text-center md:text-5xl lg:text-6xl font-bold text-textblue mb-4">
                            Contact Us
                        </h1>
                        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                            We're here to help with all your gardening needs. Reach out to us through any of the methods below.
                        </p>

                        {/* Contact Card */}
                        <div className="bg-white rounded-2xl mx-auto p-8 md:p-12 shadow-xl max-w-3xl space-y-10 border border-gray-100">
                            {/* Contact Info Grid */}
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
                                {/* Location */}
                                <div className="flex items-start space-x-4 group">
                                    <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                                        <MapPin className="text-textblue w-6 h-6 flex-shrink-0" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-xl font-semibold text-textblue mb-2">Address</h2>
                                        <address className="text-gray-700 not-italic">
                                            14488 Rock Creek Rd<br />
                                            Chardon, Ohio 44024
                                        </address>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start space-x-4 group">
                                    <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                                        <Phone className="text-textblue w-6 h-6 flex-shrink-0" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-xl font-semibold text-textblue mb-2">Phone</h2>
                                        <a
                                            href="tel:440-749-4252"
                                            className="text-gray-700 hover:text-textblue transition-colors"
                                        >
                                            440-749-4252
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start space-x-4 group">
                                    <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                                        <Mail className="text-textblue w-6 h-6 flex-shrink-0" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-xl font-semibold text-textblue mb-2">Email</h2>
                                        <a
                                            href="mailto:Wildwoodgardens@myyahoo.com"
                                            className="text-gray-700 hover:text-textblue transition-colors break-all"
                                        >
                                            Wildwoodgardens@myyahoo.com
                                        </a>
                                    </div>
                                </div>

                                {/* Hours */}
                                <div className="flex items-start space-x-4 group">
                                    <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                                        <Clock className="text-textblue w-6 h-6 flex-shrink-0" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-xl font-semibold text-textblue mb-2">Hours</h2>
                                        <table className="text-gray-700 w-full">
                                            <tbody>
                                                <tr>
                                                    <td className="pr-3 py-1 font-extrabold">Mon-Fri:</td>
                                                    <td>By appointment</td>
                                                </tr>
                                                <tr>
                                                    <td className="pr-3 py-1 font-extrabold">Sat-Sun:</td>
                                                    <td>10am - 5pm</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-gray-200 my-6"></div>

                            {/* Social Media */}
                            <div className="text-center">
                                <h2 className="text-xl font-semibold text-textblue mb-6">Connect With Us</h2>
                                <div className="flex justify-center space-x-6">
                                    <a
                                        href="https://www.facebook.com/profile.php?id=100063578321835"
                                        className="bg-blue-50 p-4 rounded-full hover:bg-blue-100 transition-colors"
                                        aria-label="Facebook"
                                    >
                                        <FaFacebookF size={24} className="text-textblue" />
                                    </a>
                                    {/* Uncomment when you have these social accounts
                                    <a 
                                        href="#" 
                                        className="bg-blue-50 p-4 rounded-full hover:bg-blue-100 transition-colors"
                                        aria-label="Twitter"
                                    >
                                        <FaTwitter size={24} className="text-textblue" />
                                    </a>
                                    <a 
                                        href="#" 
                                        className="bg-blue-50 p-4 rounded-full hover:bg-blue-100 transition-colors"
                                        aria-label="Instagram"
                                    >
                                        <FaInstagram size={24} className="text-textblue" />
                                    </a>
                                    */}
                                </div>
                            </div>

                            {/* Get Directions Button */}
                            <div className="pt-6 flex justify-center">
                                <a
                                    href={`https://maps.google.com/?q=${encodeURIComponent(
                                        '14488 rock creek rd, Chardon, Ohio 44024'
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-textblue text-white px-8 py-4 rounded-lg hover:bg-textblue/90 transition-colors shadow-md hover:shadow-lg"
                                >
                                    <MapPin className="w-5 h-5 mr-2" />
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
