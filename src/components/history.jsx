import Image from "next/image";

export default function StoreHistory() {
    return (
        <div className="flex-col -mt-16 md:pl-16 md:pr-16 p-0 w-full">
            <div className="p-4 pt-16 md:p-24 w-full max-w-6xl mx-auto">
                <div className="mt-12 text-gray-800 text-left pb-8">
                    <h1 className="text-5xl text-center text-green-800 md:pb-4 pb-8">Our Story</h1>
                    <div className="flex flex-col md:flex-row mb-4">
                        <p className="md:w-1/2 md:p-2 md:pb-0 pb-8">
                            Welcome to Wildwood Gardens, founded by Bonsai Master Anthony (Tony) Mihalic. Tony has been growing, teaching, and amazing audiences with his bonsai talents since 1946! He specializes in rock and forest styles of bonsai known as SAIKEI. With decades of experience, Tony has established himself as a master of these intricate Japanese horticultural art forms.
                        </p>
                        <p className="md:w-1/2 md:p-2">
                            Now entering its 69th year, Wildwood Gardens continues through two generations of bonsai expertise. Frank specializes in the single tree styles associated with bonsai in the United States and routinely travels Far East to perfect his skills with various bonsai masters and growers. Tony, Joann, and Frank remain dedicated to sharing their knowledge, always available to answer questions and provide expert advice in the art of bonsai.
                        </p>
                    </div>

                    <div className="flex flex-col mb-4 shadow-lg p-4  bg-green-50 bg-opacity-50">
                        <h2 className="text-3xl text-green-800 pb-4 md:text-left text-center">Awards and Recognition</h2>
                        <div className="flex flex-col md:flex-row place-items-center md:items-start">
                            <p className="md:mr-4 md:w-3/4 pb-4">
                                In 1999, Tony received an award from The Korean National Bonsai Association and the Midwest Bonsai Association for his 53 years of teaching and practicing the art of bonsai. In 2001, he was awarded the Bonsai Spotlight Award from Bonsai Online Magazine, honoring masters from around the world. In 2015, Tony celebrated his 69th year practicing the ancient art of bonsai.
                            </p>
                            <Image
                                src={"/images/about-us/awards.jpg"}
                                alt={"Awards"}
                                width={400}
                                height={400}
                                className="-lg"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mb-4 shadow-lg p-4 ">
                        <h2 className="text-3xl text-green-800 pb-4 md:text-left text-center">Ichiban Publishing</h2>
                        <div className="flex flex-col md:flex-row place-items-center md:items-start">
                            <Image
                                src={"/images/about-us/publishing.png"}
                                alt={"Ichiban Publishing"}
                                width={900}
                                height={300}
                                className="-lg md:mr-4 pb-4"
                            />
                            <p className="md:mr-4">
                                In 1979, Frank Mihalic founded “Ichiban Publishing,” a company dedicated to bonsai-related materials. He wrote and published “The Art of Bonsai-CD ROM” (the first CD on bonsai in the world!), “The Art of Bonsai-VHS Video & DVD,” “The Art of Bonsai-Book,” “Bonsai Screen Saver Computer CD ROM,” “Bonsai Online Magazine-Internet Magazine & Back Issue CD ROM” (the first internet bonsai magazine in the world!), and “Bonsai for Kids-Children's Instructional Bonsai Book” in multiple languages.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col mb-4 shadow-lg p-4  bg-green-50 bg-opacity-50">
                        <h2 className="text-3xl text-green-800 pb-4 md:text-left text-center">Global Recognition</h2>
                        <div className="flex flex-col md:flex-row">
                            <p className="md:mr-4 md:w-3/4 pb-4">
                                Frank's bonsai trees have been recognized globally, with his trees selected as one of the top one hundred bonsai trees in the world in 1999, 2001, and 2006 by Japan Airlines & the Nippon Bonsai Associations. In 2000, he was awarded a special membership in the Cheju Bonsai Growers Association in Korea.
                            </p>
                            <Image
                                src={"/images/about-us/global.jpg"}
                                alt={"Global Recognition"}
                                width={400}
                                height={300}
                                className="-lg"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col mb-4 shadow-lg p-4 ">
                        <h2 className="text-3xl text-green-800 pb-4 md:text-left text-center">Pioneering Bonsai Education</h2>
                        <div className="flex flex-col md:flex-row">
                            <Image
                                src={"/images/about-us/magazine.png"}
                                alt={"Bonsai Education"}
                                width={500}
                                height={300}
                                className="-lg md:mr-4 pb-4"
                            />
                            <p>
                                Frank also founded the first bonsai magazine on the internet in 2001 and published the first bonsai book and CD ROM for children. He has been elected to the Board of Directors of the American Bonsai Society and Bonsai Clubs International multiple times.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
