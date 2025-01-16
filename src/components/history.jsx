import React from 'react';
import Image from 'next/image';

const ImageLeftSection = ({ imageSrc, title, text1, text2 }) => (
    <div className="flex flex-col md:flex-row mb-8 shadow-lg rounded-lg overflow-hidden bg-opacity-50 bg-green-50">
        <div className="md:w-1/3">
            <Image src={imageSrc} alt={title} width={300} height={300} className="object-cover w-full h-full" />
        </div>
        <div className="md:w-2/3 p-6">
            <h2 className="text-2xl text-green-800 font-bold mb-2">{title}</h2>
            <p className="text-gray-700 text-base leading-relaxed">{text1}</p>
            {text2 && <p className="text-gray-700 text-base leading-relaxed mt-2">{text2}</p>}
        </div>
    </div>
);

const ImageRightSection = ({ imageSrc, title, text1, text2 }) => (
    <div className="flex flex-col md:flex-row mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:w-1/3 order-2">
            <Image src={imageSrc} alt={title} width={300} height={300} className="object-cover w-full h-full" />
        </div>
        <div className="md:w-2/3 p-6 order-1">
            <h2 className="text-2xl text-green-800 font-bold mb-2">{title}</h2>
            <p className="text-gray-700 text-base leading-relaxed">{text1}</p>
            {text2 && <p className="text-gray-700 text-base leading-relaxed mt-2">{text2}</p>}
        </div>
    </div>
);

export default function StoreHistory() {
    return (
        <div className="flex-col -mt-16 md:pl-16 md:pr-16 p-0 w-full">
            <div className="p-4 pt-16 md:p-24 w-full max-w-6xl mx-auto">
                <div className="mt-12 text-gray-800 text-left pb-8">
                    <h1 className="text-5xl text-center text-green-800 md:pb-4 pb-8">Our Story</h1>
                    <div className="flex flex-col md:flex-row mb-12">
                        <p className="md:w-1/2 md:p-2 md:pb-0 pb-8">
                            Welcome to Wildwood Gardens, founded by Bonsai Master Anthony (Tony) Mihalic. Tony has been growing, teaching, and amazing audiences with his bonsai talents since 1946! He specializes in rock and forest styles of bonsai known as SAIKEI. With decades of experience, Tony has established himself as a master of these intricate Japanese horticultural art forms. Under the guidance of Frank, who served as president of Bonsai Clubs International from 2021-2023, Wildwood Gardens continues to uphold the highest standards of bonsai artistry.
                        </p>
                        <p className="md:w-1/2 md:p-2">
                            Now entering its 69th year, Wildwood Gardens continues through two generations of bonsai expertise. Frank specializes in the single tree styles associated with bonsai in the United States and routinely travels Far East to perfect his skills with various bonsai masters and growers. Tony, Joann, and Frank remain dedicated to sharing their knowledge, always available to answer questions and provide expert advice in the art of bonsai.
                        </p>
                    </div>

                    <ImageLeftSection
                        imageSrc="/images/about-us/awards.jpg"
                        title="Awards and Recognition"
                        text1="In 1999, Tony received an award from The Korean National Bonsai Association and the Midwest Bonsai Association for his 53 years of teaching and practicing the art of bonsai. In 2001, he was awarded the Bonsai Spotlight Award from Bonsai Online Magazine, honoring masters from around the world. In 2015, Tony celebrated his 69th year practicing the ancient art of bonsai."
                    />

                    <ImageRightSection
                        imageSrc="/images/about-us/publishing.png"
                        title="Ichiban Publishing"
                        text1="In 1979, Frank Mihalic founded “Ichiban Publishing,” a company dedicated to bonsai-related materials. He wrote and published “The Art of Bonsai-CD ROM” (the first CD on bonsai in the world!), “The Art of Bonsai-VHS Video & DVD,” “The Art of Bonsai-Book,” “Bonsai Screen Saver Computer CD ROM,” “Bonsai Online Magazine-Internet Magazine & Back Issue CD ROM” (the first internet bonsai magazine in the world!), and “Bonsai for Kids-Children's Instructional Bonsai Book” in multiple languages."
                    />

                    <ImageLeftSection
                        imageSrc="/images/about-us/global.jpg"
                        title="Global Recognition"
                        text1="Frank's bonsai trees have been recognized globally, with his trees selected as one of the top one hundred bonsai trees in the world in 1999, 2001, and 2006 by Japan Airlines & the Nippon Bonsai Associations. In 2000, he was awarded a special membership in the Cheju Bonsai Growers Association in Korea."
                    />

                    <ImageRightSection
                        imageSrc="/images/about-us/magazine.png"
                        title="Pioneering Bonsai Education"
                        text1="Frank also founded the first bonsai magazine on the internet in 2001 and published the first bonsai book and CD ROM for children. He has been elected to the Board of Directors of the American Bonsai Society and Bonsai Clubs International multiple times."
                    />
                </div>
            </div>
        </div>
    );
}
