import Image from "next/image";
import Navbar from "@/components/navbar";
import H1 from "@/components/utils";

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-white relative">
      <Image
        src="/images/oldtree.png"
        alt="Background"
        width={670}
        height={500}
        className="absolute top-0 right-0 z-0"
      />
      
      <div className="relative 
        px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 
        transition-all duration-300">
        <div className="w-full flex justify-center">
          <Navbar />
        </div>

        <div className="container 
          mx-auto 
          mt-12 md:mt-24 
          px-4 sm:px-6 md:px-8 md:pt-0 pt-32">
          <BonsaiBlog />
        </div>
      </div>
    </div>
  );
}

function BonsaiBlog() {
  return (
    <div className="py-4 md:py-8">
      <div className="relative z-10">
        <H1 className="text-4xl md:text-5xl lg:text-6xl">Bonsai</H1>
        <H1 className="-mt-4 md:-mt-6 text-4xl md:text-5xl lg:text-6xl">blog</H1>
        <h3 className="text-textblue text-lg md:text-xl mt-4
          max-w-md md:max-w-lg lg:max-w-xl">
          Whats happening here at WildWood Gardens
        </h3>
      </div>

      {/* <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div> */}
    </div>
  );
}

function BlogCard() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden
      transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 md:h-56">
        <Image
          src="/images/pruning.jpg"
          alt="Blog Post"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-inknut text-lg text-textblue mb-2">
          Blog Post Title
        </h3>
        <p className="text-gray-600 text-sm">
          Preview of blog post content...
        </p>
        <button className="mt-4 text-textblue hover:text-textblue/80 
          transition-colors text-sm font-semibold">
          Read More →
        </button>
      </div>
    </div>
  );
}