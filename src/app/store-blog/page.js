import Image from "next/image";
import Navbar from "@/components/navbar";
import H1 from "@/components/utils";
import Blog from "../blog/page";

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-white relative">
      <Image
        src="/images/oldtree.png"
        alt="Background"
        width={970}
        height={500}
        className="absolute top-0 right-0 z-0 hidden sm:block"
      />

      <div className="relative px-4 sm:px-6 transition-all duration-300">
        <div className="w-full flex justify-center md:px-72">
          <Navbar />
        </div>

        <div className="container w-full mx-auto max-w-6xl sm:px-16 sm:mt-12 md:mt-48 md:pt-0 sm:pt-32 pt-12 sm:text-left text-center">
          <BonsaiBlog />
        </div>
      </div>
    </div>
  );
}

function BonsaiBlog() {
  return (
    <div className="sm:py-4 md:py-16">
      <div className="relative z-10">
        <H1 className="text-4xl md:text-5xl lg:text-6xl text-black">Bonsai</H1>
        <H1 className="-mt-4 md:-mt-6 text-4xl md:text-5xl lg:text-6xl text-black">journal</H1>
        <h3 className="text-black text-md font-extralight mt-4 max-w-md md:max-w-lg lg:max-w-xl">
          <p className="inline text-black">Whats happening </p>here at WildWood Gardens?
        </h3>
      </div>
      <Blog />
    </div>
  );
}