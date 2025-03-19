import React from 'react';
import Image from 'next/image';

const ContentSection = ({ imageSrc, title, text1, imageOnRight = false }) => (
    <div className={`flex flex-col ${imageOnRight ? 'md:flex-row-reverse' : 'md:flex-row'} mb-16 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl`}>
        <div className="md:w-2/5 relative h-64 md:h-auto">
            <Image 
                src={imageSrc} 
                alt={title} 
                width={500}
                height={300}
                className="object-cover w-full h-full transform transition-transform duration-700 hover:scale-105" 
            />
        </div>
        <div className="md:w-3/5 p-8 bg-white">
            <h2 className="text-2xl text-green-800 font-bold mb-4 border-b border-green-200 pb-2">{title}</h2>
            <p className="text-gray-700 text-base leading-relaxed">{text1}</p>
        </div>
    </div>
);

export default function StoreHistory() {
    return (
        <div className="w-full bg-gradient-to-b from-gray-50 to-green-50 py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">Our Story</h1>
                    <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Cultivating the ancient art of bonsai for over 69 years
                    </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2">
                            <p className="text-gray-700 leading-relaxed">
                                Welcome to Wildwood Gardens, founded by Bonsai Master Anthony (Tony) Mihalic. Tony has been growing, teaching, and amazing audiences with his bonsai talents since 1946! He specializes in rock and forest styles of bonsai known as SAIKEI. With decades of experience, Tony has established himself as a master of these intricate Japanese horticultural art forms.
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <p className="text-gray-700 leading-relaxed">
                                Now entering its 69th year, Wildwood Gardens continues through two generations of bonsai expertise. Frank specializes in the single tree styles associated with bonsai in the United States and routinely travels to the Far East to perfect his skills with various bonsai masters and growers. Tony, Joann, and Frank remain dedicated to sharing their knowledge, always available to answer questions and provide expert advice in the art of bonsai.
                            </p>
                        </div>
                    </div>
                </div>

                <ContentSection
                    imageSrc="/images/about-us/awards.jpg"
                    title="Awards and Recognition"
                    text1="In 1999, Tony received an award from The Korean National Bonsai Association and the Midwest Bonsai Association for his 53 years of teaching and practicing the art of bonsai. In 2001, he was awarded the Bonsai Spotlight Award from Bonsai Online Magazine, honoring masters from around the world. In 2015, Tony celebrated his 69th year practicing the ancient art of bonsai."
                />

                <ContentSection
                    imageSrc="/images/about-us/publishing.png"
                    title="Ichiban Publishing"
                    text1="In 1979, Frank Mihalic founded Ichiban Publishing, a company dedicated to bonsai-related materials. He wrote and published The Art of Bonsai-CD ROM (the first CD on bonsai in the world!), The Art of Bonsai-VHS Video & DVD, The Art of Bonsai-Book, Bonsai Screen Saver Computer CD ROM, Bonsai Online Magazine-Internet Magazine & Back Issue CD ROM (the first internet bonsai magazine in the world!), and Bonsai for Kids-Childrens Instructional Bonsai Book in multiple languages."
                    imageOnRight={true}
                />

                <ContentSection
                    imageSrc="/images/about-us/global.jpg"
                    title="Global Recognition"
                    text1="Franks bonsai trees have been recognized globally, with his trees selected as one of the top one hundred bonsai trees in the world in 1999, 2001, and 2006 by Japan Airlines & the Nippon Bonsai Associations. In 2000, he was awarded a special membership in the Cheju Bonsai Growers Association in Korea."
                />

                <ContentSection
                    imageSrc="/images/about-us/magazine.png"
                    title="Pioneering Bonsai Education"
                    text1="Frank also founded the first bonsai magazine on the internet in 2001 and published the first bonsai book and CD ROM for children. He has been elected to the Board of Directors of the American Bonsai Society and Bonsai Clubs International multiple times."
                    imageOnRight={true}
                />
            </div>
        </div>
    );
}