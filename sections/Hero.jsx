import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full pb-12 bg-[#09090B]">
      <div className="max-w-screen px-8 md:px-16 py-auto">
        <div className="absolute left-1/2 top-1/2 -z-10  w-[300px] h-[400px] md:w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[100px] bg-purple-700 "></div>

        <div  className="flex flex-col lg:flex-row lg:pt-[8%] gap-12 h-full w-full justify-center items-center">
          {/* left section */}
          <div className="text-purple-100 max-w-2xl my-10 px-10 w-4xl">
            <h1 className="text-3xl font-bold tracking-tight text-purple-100 sm:text-6xl">
              Connect with Developers, anytime anywhere
            </h1>

            <h2 className="my-3 opacity-60 text-black-100 text-3xl font-light font-['Inter']">
              Get instant help from fellow developers,share expertise,and level
              up your skills with Doogle
            </h2>
            <button className="w-40 h-10 rounded-[25px] bg-purple-800">
              Get Started
            </button>
          </div>
          {/* right image */}
          <div>
            <Image height={300} width={400} src="/Home.png" />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
