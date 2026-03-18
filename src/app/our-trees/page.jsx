import Link from 'next/link';
import Navbar from '@/components/navbar';
import ContactSection from '@/components/Contact';

// TODO: Move to data file so user can update easily.
export default function OurTrees() {
    const trees = [
        {
            id: 1,
            name: "San Jose Juniper",
            image: "/images/trees/tree1.jpg",
            category: "Evergreen",
            description: "Classic evergreen bonsai with gnarled trunk and lush foliage"
        },
        {
            id: 2,
            name: "Pyracantha",
            image: "/images/trees/tree2.jpg",
            category: "Flowering",
            description: "Deciduous tree with white flowers and red berries, ideal for outdoor display"
        },
        {
            id: 3,
            name: "Myers Juniper",
            image: "/images/trees/tree3.jpg",
            category: "Evergreen",
            description: "Dwarf conifer with blue-green foliage and twisted branches"
        },
        {
            id: 4,
            name: "Chinese corkbark Elm",
            image: "/images/trees/tree4.jpg",
            category: "Deciduous",
            description: "Deciduous tree with corky bark and small leaves, suitable for beginners"
        },
        {
            id: 5,
            name: "Trident maple",
            image: "/images/trees/tree5.jpg",
            category: "Deciduous",
            description: "Deciduous tree with three-lobed leaves and striking fall color"
        },
        {
            id: 6,
            name: "Zelkova",
            image: "/images/trees/tree6.jpg",
            category: "Deciduous",
            description: "Deciduous tree with serrated leaves and attractive bark"
        },
        {
            id: 7,
            name: "Crytomeria tanzu",
            image: "/images/trees/tree7.jpg",
            category: "Conifer",
            description: "Evergreen tree with tiered branches and needle-like leaves"
        },
        {
            id: 8,
            name: "Crytomeria tanzu",
            image: "/images/trees/tree8.jpg",
            category: "Conifer",
            description: "Evergreen tree with tiered branches and needle-like leaves"
        },
        {
            id: 9,
            name: "Crytomeria tanzu",
            image: "/images/trees/tree9.jpg",
            category: "Conifer",
            description: "Evergreen tree with tiered branches and needle-like leaves"
        },
        {
            id: 10,
            name: "Japanese Black Pine",
            image: "/images/trees/tree10.jpg",
            category: "Pine",
            description: "Classic bonsai with dark green needles and rugged bark"
        },
        {
            id: 11,
            name: "Shiro-janome Japanese White Pine",
            image: "/images/trees/tree11.jpg",
            category: "Pine",
            description: "Dwarf conifer with white-tipped needles and compact growth habit"
        },
        {
            id: 12,
            name: "Japanese Wisteria",
            image: "/images/trees/tree12.jpg",
            category: "Flowering",
            description: "Deciduous tree with cascading branches and fragrant flowers"
        },
        {
            id: 13,
            name: "Trident Maple root over rock",
            image: "/images/trees/tree13.jpg",
            category: "Maple",
            description: "Deciduous tree with three-lobed leaves and striking fall color grown over a rock"
        },
        {
            id: 14,
            name: "Kotohime Maple",
            image: "/images/trees/tree14.jpg",
            category: "Maple",
            description: "Dwarf deciduous tree with small leaves and compact growth habit"
        },
        {
            id: 15,
            name: "Naruto-kaede Maple",
            image: "/images/trees/tree15.jpg",
            category: "Maple",
            description: "Deciduous tree with green curling leaves and striking red fall color"
        }
    ];

    const featuredIds = [1, 10, 13];
    const featuredTrees = trees.filter((tree) => featuredIds.includes(tree.id));
    const galleryTrees = trees.filter((tree) => !featuredIds.includes(tree.id));

    return (
        <main className="relative min-h-screen overflow-hidden bg-[#f3efe6]">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(132,104,73,0.08),transparent_18%,transparent_82%,rgba(132,104,73,0.08))]" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#000_1px,transparent_1px)] [background-size:4px_4px]" />
            <Navbar />

            <section className="relative z-10 mx-auto max-w-6xl px-4 pb-10 pt-28 text-left sm:px-8 lg:pt-32">
                <header className="mb-10 grid items-end gap-6 rounded-xl border border-[#d8cab8] bg-[#faf6ef] p-6 shadow-[0_8px_20px_rgba(56,42,28,0.1)] sm:p-8 lg:grid-cols-[1.15fr_0.85fr]">
                    <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-[#7a6046]">Collection</p>
                        <h1 className="mt-3 text-4xl font-extrabold text-[#3e2f22] md:text-5xl lg:text-6xl">Our Trees</h1>
                        <p className="mt-4 max-w-3xl leading-relaxed text-[#564638]">
                            WildWood Gardens maintains a living collection of indoor and outdoor bonsai, from Japanese maples to classic junipers and pines. Every tree is cultivated with long-term health, structure, and style in mind.
                        </p>
                    </div>
                    <div className="rounded-lg border border-[#dccdb8] bg-[#f7f0e4] p-5">
                        <p className="text-sm uppercase tracking-[0.18em] text-[#7a6046]">Need Help Choosing?</p>
                        <p className="mt-3 text-sm leading-relaxed text-[#564638]">
                            Tell us your experience level and space, and we can recommend suitable species and care plans.
                        </p>
                        <Link href="/contact" className="mt-4 inline-block rounded-md bg-[#4f3f2e] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#3f3325]">
                            Ask About Availability
                        </Link>
                    </div>
                </header>

                <section className="mb-10">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-[#3e2f22]">Featured Specimens</h2>
                        <p className="text-sm text-[#7a6046]">Seasonal highlights</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:auto-rows-[16rem] md:grid-cols-3">
                        {featuredTrees.map((tree, idx) => (
                            <FeaturedTreeCard key={tree.id} tree={tree} isLarge={idx === 0} priority={idx === 0} />
                        ))}
                    </div>
                </section>

                <section>
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-[#3e2f22]">Collection Gallery</h2>
                        <p className="text-sm text-[#7a6046]">Curated range</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {galleryTrees.map((tree, idx) => (
                            <TreeCard key={tree.id} tree={tree} large={idx % 5 === 0} priority={idx < 2} />
                        ))}
                    </div>
                </section>
            </section>
            <ContactSection />
        </main>
    );
}

function FeaturedTreeCard({ tree, isLarge = false, priority = false }) {
    return (
        <article className={`group relative overflow-hidden rounded-lg border border-[#d8cab8] shadow-[0_6px_16px_rgba(56,42,28,0.1)] ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}>
            <div className={`relative hidden w-full bg-[#efe6d6] md:block ${isLarge ? 'md:h-full' : 'md:h-full'}`}>
                <img
                    src={tree.image}
                    alt={tree.name}
                    loading={priority ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={priority ? 'high' : 'auto'}
                    sizes={isLarge ? '(max-width: 768px) 100vw, 66vw' : '(max-width: 768px) 100vw, 33vw'}
                    className="block h-full w-full object-contain object-top p-3 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1710]/85 via-[#1f1710]/20 to-transparent" />
                <div className="absolute bottom-0 w-full p-4 text-white sm:p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-[#e9d8bd]">{tree.category}</p>
                    <h3 className="mt-2 text-xl font-semibold sm:text-2xl">{tree.name}</h3>
                    <p className="mt-2 max-w-2xl text-sm text-[#f2e6d4] sm:text-base">{tree.description}</p>
                </div>
            </div>

            <div className="md:hidden">
                <div className="relative block h-[26rem] bg-[#efe6d6]">
                    <img
                        src={tree.image}
                        alt={tree.name}
                        loading={priority ? 'eager' : 'lazy'}
                        decoding="async"
                        fetchPriority={priority ? 'high' : 'auto'}
                        sizes="100vw"
                        className="block h-full w-full object-contain object-top p-3"
                    />
                </div>
                <div className="border-t border-[#d8cab8] bg-[#faf6ef] p-4 text-left">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#7a6046]">{tree.category}</p>
                    <h3 className="mt-2 text-lg font-semibold text-[#3e2f22]">{tree.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#564638]">{tree.description}</p>
                </div>
            </div>
        </article>
    );
}

function TreeCard({ tree, large = false, priority = false }) {
    return (
        <article className={`${large ? 'sm:col-span-2 lg:col-span-2' : ''} overflow-hidden rounded-lg border border-[#d8cab8] bg-[#faf6ef] shadow-[0_6px_16px_rgba(56,42,28,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(56,42,28,0.16)]`}>
            <div className={`relative hidden w-full bg-[#efe6d6] md:block ${large ? 'h-80' : 'h-64'}`}>
                <img
                    src={tree.image}
                    alt={tree.name}
                    loading={priority ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={priority ? 'high' : 'auto'}
                    sizes={large ? '(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 66vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
                    className="block h-full w-full object-contain object-top p-3"
                />
            </div>
            <div className="md:hidden">
                <div className={`relative block bg-[#efe6d6] ${large ? 'h-80' : 'h-64'}`}>
                    <img
                        src={tree.image}
                        alt={tree.name}
                        loading={priority ? 'eager' : 'lazy'}
                        decoding="async"
                        fetchPriority={priority ? 'high' : 'auto'}
                        sizes="100vw"
                        className="block h-full w-full object-contain object-top p-3"
                    />
                </div>
                <div className="border-t border-[#d8cab8] bg-[#faf6ef] p-4 text-left">
                    <p className="text-xs uppercase tracking-[0.18em] text-[#7a6046]">{tree.category}</p>
                    <h3 className="mt-2 text-lg font-semibold text-[#3e2f22]">{tree.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#564638]">{tree.description}</p>
                </div>
            </div>
            <div className="hidden p-4 text-left md:block">
                <p className="text-xs uppercase tracking-[0.18em] text-[#7a6046]">{tree.category}</p>
                <h3 className="text-lg font-semibold text-[#3e2f22]">{tree.name}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#564638]">{tree.description}</p>
            </div>
        </article>
    );
}