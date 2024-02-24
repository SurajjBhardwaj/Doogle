import Image from "next/image";
import React from "react";

const Expert = () => {
  return (
    <section className="w-screen p-10 bg-black text-purple-100">
      <div className='flex flex-col md:flex-row justify-evenly'>
        <div id='container' className="flex-col md:flex-row mx-[50px] w-1/2">
          <h1 className="text-3xl font-bold mb-4">Experienced developers</h1>
          <ul className='text-2xl text leading-loose mb-8'>
            <li>Earn by solving doubts</li>
            <li>Build reputation and Shine ✨</li>
            <li>Help others and earn rewards</li>
          </ul>
        </div>
        <Image height={300} width={400} src="/Group 3.png" />{" "}
      </div>
    </section>
  );
};

export default Expert;
// Experienced enough
// Share your knowledge
// Build reputation and Shine ✨
// Help others and earn rewards
