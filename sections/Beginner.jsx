import React from 'react'
import Image from "next/image";

const Beginner = () => {
  return (
    <section className='w-screen p-10 bg-black text-purple-100'>
      <h1 className='text-5xl font-bold text-center my-12 mt-0' >There's something for everyone</h1>
      <div className='flex flex-col md:flex-row justify-evenly'>
        <div id='container' className="flex-col md:flex-row mx-[50px] w-1/2">
          <h1 className="text-3xl font-bold mb-4">Beginners in development</h1>
          <ul className='text-2xl text leading-loose mb-8'>
            <li>Get unstuck in minutes</li>
            <li>Get friendly guidance from experienced
              developers</li>
          </ul>
        </div>
        <Image height={300} width={400} src="/Group 2.png" />{" "}
      </div>
    </section>
  )
}

export default Beginner
