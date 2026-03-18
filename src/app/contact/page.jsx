import Navbar from '@/components/navbar';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaFacebookF } from 'react-icons/fa';

export default function Contact() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-[#f3efe6]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(132,104,73,0.08),transparent_18%,transparent_82%,rgba(132,104,73,0.08))]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:4px_4px]" />

            <Navbar />

            <section className="relative z-10 mx-auto max-w-6xl px-4 pb-14 pt-28 sm:px-8 lg:pt-32">
                <header className="mx-auto max-w-3xl text-center">
                    <p className="text-xs uppercase tracking-[0.22em] text-[#7a6046]">Visit or Call</p>
                    <h1 className="mt-3 text-4xl font-extrabold text-[#3e2f22] md:text-5xl">Contact WildWood Gardens</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#564638]">
                        We are a working bonsai nursery and teaching space. For the best experience, weekday visits are by appointment.
                    </p>
                </header>

                <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <a href="tel:440-749-4252" className="rounded-lg border border-[#dccdb8] bg-[#faf6ef] p-5 text-left shadow-[0_4px_12px_rgba(56,42,28,0.08)] transition-colors hover:bg-[#f6efe3]">
                        <div className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-[#6b5238]" />
                            <p className="text-sm uppercase tracking-[0.18em] text-[#7a6046]">Call</p>
                        </div>
                        <p className="mt-3 text-xl font-semibold text-[#3e2f22]">440-749-4252</p>
                    </a>

                    <a href="mailto:Wildwoodgardens@myyahoo.com" className="rounded-lg border border-[#dccdb8] bg-[#faf6ef] p-5 text-left shadow-[0_4px_12px_rgba(56,42,28,0.08)] transition-colors hover:bg-[#f6efe3]">
                        <div className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-[#6b5238]" />
                            <p className="text-sm uppercase tracking-[0.18em] text-[#7a6046]">Email</p>
                        </div>
                        <p className="mt-3 break-all text-lg font-semibold text-[#3e2f22]">Wildwoodgardens@myyahoo.com</p>
                    </a>

                    <a
                        href={`https://maps.google.com/?q=${encodeURIComponent('14488 rock creek rd, Chardon, Ohio 44024')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg border border-[#dccdb8] bg-[#faf6ef] p-5 text-left shadow-[0_4px_12px_rgba(56,42,28,0.08)] transition-colors hover:bg-[#f6efe3]"
                    >
                        <div className="flex items-center gap-3">
                            <MapPin className="h-5 w-5 text-[#6b5238]" />
                            <p className="text-sm uppercase tracking-[0.18em] text-[#7a6046]">Directions</p>
                        </div>
                        <p className="mt-3 text-lg font-semibold text-[#3e2f22]">Open in Google Maps</p>
                    </a>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                    <article className="rounded-xl border border-[#d8cab8] bg-[#faf6ef] p-6 text-left shadow-[0_8px_20px_rgba(56,42,28,0.1)] sm:p-8">
                        <h2 className="text-2xl font-bold text-[#3e2f22]">Visit Information</h2>
                        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="flex items-start gap-3">
                                <MapPin className="mt-1 h-5 w-5 text-[#6b5238]" />
                                <div>
                                    <p className="text-sm uppercase tracking-[0.15em] text-[#7a6046]">Address</p>
                                    <address className="mt-2 not-italic leading-relaxed text-[#564638]">
                                        14488 Rock Creek Rd
                                        <br />
                                        Chardon, Ohio 44024
                                    </address>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Clock className="mt-1 h-5 w-5 text-[#6b5238]" />
                                <div>
                                    <p className="text-sm uppercase tracking-[0.15em] text-[#7a6046]">Hours</p>
                                    <ul className="mt-2 space-y-1 text-[#564638]">
                                        <li>Mon-Fri: By appointment</li>
                                        <li>Sat-Sun: 10am - 5pm</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 rounded-lg border border-[#dccdb8] bg-[#f7f0e4] p-4">
                            <p className="text-sm leading-relaxed text-[#564638]">
                                Planning to visit during the week? Please call ahead so we can make sure someone is available to help you with tree selection, styling, or care questions.
                            </p>
                        </div>
                    </article>

                    <aside className="rounded-xl border border-[#d8cab8] bg-[#faf6ef] p-6 text-left shadow-[0_8px_20px_rgba(56,42,28,0.1)] sm:p-8">
                        <h2 className="text-2xl font-bold text-[#3e2f22]">Stay Connected</h2>
                        <p className="mt-3 leading-relaxed text-[#564638]">
                            Follow along for updates, new trees, and seasonal availability.
                        </p>

                        <a
                            href="https://www.facebook.com/profile.php?id=100063578321835"
                            className="mt-6 inline-flex items-center gap-3 rounded-lg border border-[#dccdb8] bg-[#f7f0e4] px-4 py-3 text-[#3e2f22] transition-colors hover:bg-[#efe4d3]"
                            aria-label="Facebook"
                        >
                            <FaFacebookF className="h-4 w-4" />
                            <span className="font-medium">WildWood Gardens on Facebook</span>
                        </a>

                        <div className="mt-8 border-t border-[#dccdb8] pt-6">
                            <a
                                href={`https://maps.google.com/?q=${encodeURIComponent('14488 rock creek rd, Chardon, Ohio 44024')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-md bg-[#4f3f2e] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#3f3325]"
                            >
                                <MapPin className="mr-2 h-4 w-4" />
                                Get Directions
                            </a>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
}
