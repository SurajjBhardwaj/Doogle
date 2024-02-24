import React from "react";
import Image from "next/image";

const Intermediate = () => {
  return (
    <section className="w-screen p-10 bg-black ">
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="w-1/2">
        <Image height={300} width={400} src="/Group 3.png" className="hidden md:block ml-20" alt="Video call"/>{" "}
        </div>
        <div id="container" className="flex-col md:flex-row md:mx-[50px] lg:w-1/2 text-purple-200 lg:pl-40">
          <h1 className="text-xl lg:text-2xl font-bold mb-2">Skilled Developers</h1>
          <div className="text-base text lg:leading-loose mb-8 text-white/70">
            <p>learn from experts</p>
            <p>Collaborate with peers on complex problems</p>
            <p>Push your coding boundaries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intermediate;
