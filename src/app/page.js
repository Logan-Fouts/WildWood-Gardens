import Image from "next/image";
import Navbar from "@/components/navbar";
import H1 from "@/components/utils";
import { Blog } from "./blog/page";

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

      <div className="relative px-4 sm:px-6 md:px-48 transition-all duration-300">
        <div className="w-full flex justify-center md:px-72">
          <Navbar />
        </div>

        <div className="container mx-auto mt-12 md:mt-24 px-4 sm:px-6 md:px-8 md:pt-0 pt-32">
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
        <h3 className="text-textblue text-lg md:text-xl mt-4 max-w-md md:max-w-lg lg:max-w-xl">
          Whats happening here at WildWood Gardens?
        </h3>
      </div>
        <Blog />
    </div>
  );
}