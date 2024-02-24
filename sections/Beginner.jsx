import React from 'react'
import Image from "next/image";

const Beginner = () => {
  return (
    <section className='w-screen p-10 bg-black text-purple-200 '>
      <h1 className='text-2xl lg:text-5xl font-bold text-center my-12 mt-0 md:mb-20' >There's something for everyone</h1>
      <div className='flex flex-col md:flex-row justify-evenly'>
        <div id='container' className="flex-col md:flex-row md:mx-[50px] lg:w-1/2">
          <h1 className="text-xl lg:text-2xl font-bold mb-2">Beginners in development</h1>
          <div className='text-base lg:leading-loose mb-8 text-white/70'>
            <p>Get unstuck in minutes</p>
            <p>Get friendly guidance from experienced
              developers</p>
          </div>
        </div>
        <Image height={300} width={400} src="/Group 2.png" className="hidden md:block" alt="Video call"/>{" "}
      </div>
    </section>
  )
}

export default Beginner
