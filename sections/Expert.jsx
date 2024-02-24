import Image from "next/image";
import React from "react";

const Expert = () => {
  return (
    <section className="w-screen p-10 bg-black text-purple-200">
      <div className='flex flex-col md:flex-row justify-evenly'>
        <div id='container' className="flex-col md:flex-row md:mx-[50px] lg:w-1/2">
          <h1 className="text-xl lg:text-2xl font-bold mb-2">Experienced developers</h1>
          <div className='text-base text lg:leading-loose mb-8 text-white/70'>
            <p>Earn by solving doubts</p>
            <p>Build reputation and Shine ✨</p>
            <p>Help others and earn rewards</p>
          </div>
        </div>
        <Image height={300} width={400} src="/Group 4.png" className="hidden md:block" alt="Video call"/>{" "}
      </div>
    </section>
  );
};

export default Expert;
// Experienced enough
// Share your knowledge
// Build reputation and Shine ✨
// Help others and earn rewards
