import React from 'react';
import Image from 'next/image';

const ContentSection = ({ imageSrc, title, summary, highlights, imageOnRight = false }) => (
    <article className={`group mb-10 flex flex-col overflow-hidden rounded-xl border border-[#d9ccb9] bg-[#fbf8f1] shadow-[0_6px_16px_rgba(56,42,28,0.1)] transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(56,42,28,0.16)] ${imageOnRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className="relative h-64 md:h-auto md:w-2/5">
            <Image 
                src={imageSrc} 
                alt={title} 
                width={500}
                height={300}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
        </div>
        <div className="bg-[#fbf8f1] p-8 text-left md:w-3/5">
            <h2 className="mb-4 border-b border-[#dccdb8] pb-2 text-2xl font-bold text-[#3e2f22]">{title}</h2>
            <p className="text-base leading-relaxed text-[#564638]">{summary}</p>
            <ul className="mt-5 space-y-2 text-sm leading-relaxed text-[#4f4032] sm:text-base">
                {highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8b6a49]" />
                        <span>{highlight}</span>
                    </li>
                ))}
            </ul>
        </div>
    </article>
);

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

                <ContentSection
                    imageSrc="/images/about-us/awards.jpg"
                    title="Awards and Recognition"
                    summary="Wildwood has earned respected recognition across regional and international bonsai circles."
                    highlights={[
                        '1999: Recognized by Korean National and Midwest Bonsai associations.',
                        '2001: Received Bonsai Online Magazine\'s Spotlight Award.',
                        '2015: Marked 69 years of bonsai practice.'
                    ]}
                />

                <ContentSection
                    imageSrc="/images/about-us/publishing.png"
                    title="Ichiban Publishing"
                    summary="Frank Mihalic helped expand bonsai education through books, video, and early digital media."
                    highlights={[
                        'Founded Ichiban Publishing in 1979.',
                        'Released The Art of Bonsai in CD-ROM, video, and book formats.',
                        'Published early online bonsai content and youth learning resources.'
                    ]}
                    imageOnRight={true}
                />

                <ContentSection
                    imageSrc="/images/about-us/global.jpg"
                    title="Global Recognition"
                    summary="Wildwood trees have been selected and honored in major international bonsai programs."
                    highlights={[
                        'Top 100 world bonsai selections in 1999, 2001, and 2006.',
                        'Recognized by Japan Airlines, Nippon Bonsai Associations, and Korean growers.'
                    ]}
                />

                <ContentSection
                    imageSrc="/images/about-us/magazine.png"
                    title="Pioneering Bonsai Education"
                    summary="Education remains central to Wildwood, from early web publishing to beginner-friendly instruction."
                    highlights={[
                        'Launched one of the first internet bonsai magazines in 2001.',
                        'Created children\'s bonsai learning resources and served on major bonsai boards.'
                    ]}
                    imageOnRight={true}
                />
            </div>
        </section>
    );
}