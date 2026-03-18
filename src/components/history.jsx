import React from 'react';
import Image from 'next/image';

const milestones = [
    {
        year: '1999',
        title: 'Awards and Recognition',
        imageSrc: '/images/about-us/awards.jpg',
        summary: 'Recognized by Korean National and Midwest bonsai associations for decades of teaching and craft.'
    },
    {
        year: '1979+',
        title: 'Ichiban Publishing',
        imageSrc: '/images/about-us/publishing.png',
        summary: 'Expanded bonsai education through books, video, and early digital publishing resources.'
    },
    {
        year: '1999-2006',
        title: 'Global Recognition',
        imageSrc: '/images/about-us/global.jpg',
        summary: 'Trees were selected in major international programs and recognized by leading bonsai groups.'
    },
    {
        year: '2001+',
        title: 'Education Leadership',
        imageSrc: '/images/about-us/magazine.png',
        summary: 'Pioneered online bonsai publishing and contributed to educational leadership across bonsai organizations.'
    }
];

export default function StoreHistory() {
    return (
        <section className="relative w-full py-14 sm:py-16">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#9d8161] to-transparent" />
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mb-14 text-center">
                    <h2 className="mb-4 text-4xl font-extrabold text-[#3e2f22] md:text-5xl">Our Story</h2>
                    <div className="mx-auto mb-8 h-1 w-24 bg-[#8b6a49]"></div>
                    <p className="mx-auto max-w-3xl text-lg text-[#5e4d3d]">
                        A family bonsai business built on Japanese tradition, expert care, and decades of teaching.
                    </p>
                </div>

                <div className="mb-10 grid grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-lg border border-[#dccdb8] bg-[#faf6ef] p-4 shadow-[0_4px_12px_rgba(56,42,28,0.08)]">
                        <p className="text-xs uppercase tracking-[0.18em] text-[#7a6046]">Founded</p>
                        <p className="mt-1 text-2xl font-bold text-[#3e2f22]">1946</p>
                        <p className="mt-2 text-sm text-[#564638]">Serving bonsai enthusiasts for multiple generations.</p>
                    </div>
                    <div className="rounded-lg border border-[#dccdb8] bg-[#faf6ef] p-4 shadow-[0_4px_12px_rgba(56,42,28,0.08)]">
                        <p className="text-xs uppercase tracking-[0.18em] text-[#7a6046]">Specialty</p>
                        <p className="mt-1 text-2xl font-bold text-[#3e2f22]">Saikei & Bonsai</p>
                        <p className="mt-2 text-sm text-[#564638]">Rock, forest, and single-tree styling with practical guidance.</p>
                    </div>
                    <div className="rounded-lg border border-[#dccdb8] bg-[#faf6ef] p-4 shadow-[0_4px_12px_rgba(56,42,28,0.08)] sm:col-span-2 lg:col-span-1">
                        <p className="text-xs uppercase tracking-[0.18em] text-[#7a6046]">Location</p>
                        <p className="mt-1 text-2xl font-bold text-[#3e2f22]">Chardon, Ohio</p>
                        <p className="mt-2 text-sm text-[#564638]">A local destination for trees, tools, and mentorship.</p>
                    </div>
                </div>
                
                <div className="mb-16 rounded-xl border border-[#d8cab8] bg-[#faf6ef] p-8 text-left shadow-[0_8px_20px_rgba(56,42,28,0.1)]">
                    <h3 className="text-xl font-semibold text-[#3e2f22]">Built Through Two Generations</h3>
                    <p className="mt-4 leading-relaxed text-[#564638]">
                        Wildwood Gardens was founded by Bonsai Master Anthony (Tony) Mihalic, who began growing and teaching bonsai in 1946. His work in rock and forest compositions helped shape the store&apos;s reputation for craft and authenticity.
                    </p>
                    <p className="mt-4 leading-relaxed text-[#564638]">
                        Today, the business continues through the next generation with a focus on healthy trees, refined design, and practical instruction for both newcomers and longtime collectors.
                    </p>
                </div>

                <div className="rounded-xl border border-[#d8cab8] bg-[#faf6ef] p-5 shadow-[0_8px_20px_rgba(56,42,28,0.1)] sm:p-7">
                    <div className="mb-6 text-left">
                        <h3 className="text-2xl font-semibold text-[#3e2f22]">Milestones</h3>
                        <p className="mt-2 text-sm text-[#5e4d3d] sm:text-base">
                            A concise look at major moments in Wildwood Gardens&apos; history.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {milestones.map((item) => (
                            <article key={item.title} className="group flex gap-4 rounded-lg border border-[#ddcfbc] bg-[#fdfaf4] p-4 transition-colors hover:bg-[#f8f1e4]">
                                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-[#d8cab8]">
                                    <Image
                                        src={item.imageSrc}
                                        alt={item.title}
                                        fill
                                        sizes="80px"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs uppercase tracking-[0.2em] text-[#7a6046]">{item.year}</p>
                                    <h4 className="mt-1 text-lg font-semibold text-[#3e2f22]">{item.title}</h4>
                                    <p className="mt-1 text-sm leading-relaxed text-[#564638]">{item.summary}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}