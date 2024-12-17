import Image from 'next/image';
import Navbar from '@/components/navbar';
import H1 from '@/components/utils';

export default function OurTrees() {
    // TODO: Move to data file so user can update easily.
    const trees = [
        {
            id: 1,
            name: "Japanese Maple",
            image: "/images/trees/tree1.jpg",
            description: "A beautiful deciduous tree known for its delicate leaves and vibrant autumn colors"
        },
        {
            id: 2,
            name: "Chinese Elm",
            image: "/images/trees/tree2.jpg",
            description: "Elegant tree with small leaves, perfect for indoor bonsai cultivation"
        },
        {
            id: 3,
            name: "Juniper Procumbens",
            image: "/images/trees/tree3.jpg",
            description: "Classic evergreen bonsai with cascading branches and blue-green foliage"
        },
        {
            id: 4,
            name: "Trident Maple",
            image: "/images/trees/tree4.jpg",
            description: "Vigorous grower with distinctive three-pointed leaves and attractive bark"
        },
        {
            id: 5,
            name: "Ficus Retusa",
            image: "/images/trees/tree5.jpg",
            description: "Tropical tree with glossy leaves and aerial roots, ideal for indoor environments"
        },
        {
            id: 6,
            name: "Pine White",
            image: "/images/trees/tree6.jpg",
            description: "Majestic conifer with long needles and dramatic branch structure"
        },
        {
            id: 7,
            name: "Azalea Satsuki",
            image: "/images/trees/tree7.jpg",
            description: "Flowering bonsai known for its spectacular spring blooms in various colors"
        },
        {
            id: 8,
            name: "Weeping Willow",
            image: "/images/trees/tree8.jpg",
            description: "Graceful tree with cascading branches and delicate foliage"
        },
        {
            id: 9,
            name: "Bougainvillea",
            image: "/images/trees/tree9.jpg",
            description: "Tropical beauty with vibrant bracts and thorny branches"
        },
        {
            id: 10,
            name: "Olive Tree",
            image: "/images/trees/tree10.jpg",
            description: "Mediterranean classic with silvery-green leaves and gnarled trunk"
        },
        {
            id: 11,
            name: "Fukien Tea",
            image: "/images/trees/tree11.jpg",
            description: "Compact tree with small white flowers and distinctive dark bark"
        },
        {
            id: 12,
            name: "Jade Plant",
            image: "/images/trees/tree12.jpg",
            description: "Succulent tree with thick trunk and oval-shaped leaves"
        }
    ];

    return (
        <div className="px-4 sm:px-8 md:px-12 lg:px-48 bg-white flex flex-col items-center min-h-screen pb-12">
            <Navbar />
            <div className='flex flex-col items-center max-w-4xl text-center mb-12 px-4'>
                <H1 className="font-inknut text-3xl sm:text-4xl md:text-5xl mb-8 text-textblue mt-12">
                    Our Trees
                </H1>
                <p className='text-textblue leading-relaxed md:w-10/12 w-full'>
                    Here at WildWood Gardens, we nurture a diverse collection of both indoor and outdoor bonsai trees,
                    each with its own unique character and story. From delicate Japanese Maples to robust Junipers,
                    our carefully curated selection spans species from across the globe. Whether you're drawn to the
                    cascading branches of a Weeping Willow or the elegant simplicity of a Jade Plant, our trees represent
                    years of patient cultivation and artistic vision. We take pride in maintaining these living artworks
                    in our specialized nursery, where each tree receives individual attention to thrive in both traditional
                    outdoor settings and carefully controlled indoor environments.
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full max-w-7xl">
                {trees.map((tree) => (
                    <TreeCard key={tree.id} tree={tree} />
                ))}
            </div>
        </div>
    );
}

function TreeCard({ tree }) {
    return (
        <div className="flex-shrink-0 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
            <div className="group relative overflow-hidden rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="relative h-80 w-full">
                    <Image
                        src={tree.image}
                        alt={tree.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
                        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h3 className="text-white font-inknut text-xl mb-2">{tree.name}</h3>
                            <p className="text-white text-center px-4">{tree.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}