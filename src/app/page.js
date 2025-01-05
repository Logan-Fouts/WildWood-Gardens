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
        width={970}
        height={500}
        className="absolute top-0 right-0 z-0 hidden sm:block"
      />

      <div className="relative px-4 sm:px-6 transition-all duration-300">
        <div className="w-full flex justify-center md:px-72">
          <Navbar />
        </div>

        <div className="container w-full mx-auto max-w-6xl sm:px-16 sm:mt-12 md:mt-48 md:pt-0 sm:pt-32 pt-12 sm:text-left text-center">
          <StoreInfo />
        </div>
      </div>
    </div>
  );
}

function StoreInfo() {
  return (
    <div className="sm:py-4 md:py-16">
      <div className="relative z-10">
        <H1 className="text-4xl md:text-5xl lg:text-6xl text-black">Wild</H1>
        <H1 className="-mt-4 md:-mt-6 text-4xl md:text-5xl lg:text-6xl text-black">Wood</H1>
        <H1 className="-mt-4 md:-mt-6 text-4xl md:text-5xl lg:text-6xl text-black">Gardens</H1>
        <h3 className="text-black text-md font-extralight mt-4 max-w-md md:max-w-lg lg:max-w-xl">
        </h3>
      </div>
      <div className="md:mt-52 mt-16 text-gray-700 text-left pb-8">
        <h1 className="text-4xl text-black pb-4">About us</h1>
        <p className="mb-4">
          Welcome to Wild Wood Gardens, your local bonsai store dedicated to the art and beauty of bonsai trees. We offer a wide variety of bonsai trees, tools, and accessories to help you create and maintain your own miniature masterpieces.
        </p>
        <p className="mb-4">
          Our journey began over 20 years ago with a passion for bonsai and a dream to share this ancient art form with our community. Over the years, we have grown from a small hobbyist shop to a full-fledged bonsai nursery, offering a diverse selection of bonsai trees and supplies.
        </p>
        <p className="mb-4">
          At Wild Wood Gardens, we believe in the therapeutic and meditative benefits of bonsai cultivation. Our mission is to provide a tranquil space where enthusiasts of all levels can explore, learn, and grow their bonsai skills.
        </p>
        <p className="mb-4">
          We host regular workshops and classes to help you learn the techniques and skills needed to care for your bonsai. Our knowledgeable staff is always here to assist you with any questions or needs you may have.
        </p>
        <p className="mb-4">
          Visit us today to explore our collection and discover the perfect bonsai tree for your home or garden. Whether you are a beginner looking to start your bonsai journey or an experienced enthusiast seeking rare and unique specimens, we have something for everyone.
        </p>
      </div>
    </div>
  );
}