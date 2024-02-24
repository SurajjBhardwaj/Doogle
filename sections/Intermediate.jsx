import React from "react";
import Image from "next/image";

const Intermediate = () => {
  return (
    <section className="w-screen p-10 bg-black text-purple-100">
      <div className='flex flex-col md:flex-row justify-evenly'>
        <div id='container' className="flex-col md:flex-row mx-[50px] w-1/2">
          <h1 className="text-3xl font-bold mb-4">Master New Skills!</h1>
          <ul className='text-2xl text leading-loose mb-8'>
            <li>learn from experts</li>
            <li>Collaborate with peers on complex problems</li>
            <li>Push your coding boundaries</li>
          </ul>
        </div>
        <Image height={300} width={400} src="/Group 3.png" />{" "}
      </div>
    </section>
  );
};

export default Intermediate;
