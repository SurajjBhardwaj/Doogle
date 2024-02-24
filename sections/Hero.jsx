import React from 'react'

const Hero = () => {
  return (
    <section className='w-screen h-screen'>
        <div className="mx-auto max-w-screen px-8 md:px-16 py-2">
        <div className="absolute left-1/2 top-1/2 -z-10  w-[300px] h-[400px] md:w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[100px] bg-purple-500 group-hover:bg-red-500">
      </div>

      {/* left section */}
      <div>
      <h1 className="mt-14 w-full  inline-flex flex-col justify-center gap-1 transition font-display text-4xl font-bold leading-none md:text-[5rem] bg-gradient-to-r from-20% bg-clip-text text-transparent from-white/80 to-purple-300 tracking-tigh">
      {/* <h1 className='text-4xl font-bold leading-none md:text-[5rem] text-white/70'> */}
            <span className="text-center">Connect with Developer</span>
            <span className="text-center">Anytime , Anywhere </span>
          </h1>

          <p className="text-center text-2xl mt-2 grow font-light text-white/60 xl:mx-4 text-nowrap">
                Platform-independent apps 
                  </p>
      </div>
     
        </div>
    </section>
  )
}

export default Hero
