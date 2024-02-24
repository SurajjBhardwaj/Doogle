import React from 'react'

const Beginner = () => {
  return (
    <section className='w-screen p-10 bg-black text-purple-100'>
      <div className='flex flex-col md:flex-row '>
        <div id='container' className="flex-col md:flex-row mx-[50px]">
          <h1 className="text-5xl font-bold mb-4">You are on early stage in development</h1>
          <ul className='text-2xl text leading-loose mb-8'>
            <li>Get unstuck in minutes</li>
            <li>Get friendly guidance from experienced
              developers</li>
          </ul>
        </div>
        <img id="beginner-image" src=""></img>
      </div>
    </section>
  )
}

export default Beginner
