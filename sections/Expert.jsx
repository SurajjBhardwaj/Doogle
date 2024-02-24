import Link from 'next/link'
import React from 'react'

const Expert = () => {
  return (
    <section className='relative w-screen h-screen'>
        <div className="mx-auto max-w-screen-2xl px-8 md:px-16 py-2">
   Expert
   <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 h-[150px] w-4/5 md:h-[400px] rounded-[100%] bg-purple-500 blur-[90px] pointer-events-none opacity-10"></div>
   <div class="mt-8 grid gap-2 md:mt-16 lg:grid-cols-3 ">
   
            <div className=" relative flex flex-col items-center p-6 md:p-8 cursor-default bg-purple-400 bg-opacity-10 backdrop-blur transition rounded-xl lg:rounded-tl-[3rem] lg:rounded-bl-[3rem] hover:scale-[1.02] hover:bg-purple-600  hover:bg-opacity-10">
              <Link href="/" className="absolute inset-0 z-10"></Link>
              {/* <TabletSmartphone strokeWidth={1} className='h-12 w-12 stroke-green-600 m-1 group-hover:stroke-red-500'/> */}
                <h3 className="flex items-center gap-1 text-zinc-50 font-display text-xl font-medium leading-none md:text-2xl ">
                  <span>Mobile Services</span>
                  
                </h3>
                <p className="text-base mt-2 grow opacity-60 xl:mx-4 text-nowrap">
                Platform-independent apps 
                  </p>
                <p className="text-base mt-1 grow opacity-60 xl:mx-4 text-nowrap">
                Modern, attractive UI/UX design 
                  </p>
                <p className="text-base mt-1 grow opacity-60 xl:mx-4 text-nowrap">
                Progressive Web App (PWA) </p>
                <p className="text-base mt-1 mb-2 grow opacity-60 xl:mx-4 text-nowrap">
                 Lightweight, secure, and fast
                  </p>
                <Link href='/' className=" cursor-pointer items-center transition gap-1 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-emerald-400 hover:text-emerald-950 disabled:bg-white/5 disabled:text-zinc-50 mt-4 hidden md:inline-flex bg-zinc-50 text-zinc-950 
                group-hover:bg-red-500 group-hover:text-white group-hover:font-light
                ">
                <span>Check Works</span>
                <svg xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="1em" height="1em" class="inline-flex shrink-0 text-xl ml-auto opacity-60" role="icon"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </Link>
              
            </div>
            <div className=" relative flex flex-col items-center p-6 md:p-8 cursor-default bg-white/5 backdrop-blur transition rounded-xl  hover:scale-[1.02] hover:bg-white/10">
              <Link href="/" className="absolute inset-0 z-10"></Link>
              {/* <MonitorSmartphone strokeWidth={1} className='h-12 w-12 stroke-green-600 m-1'/> */}
                <h3 className="flex items-center gap-1 text-zinc-50 font-display text-xl font-medium leading-none md:text-2xl">
                  <span>Web Services</span>
                
                  
                </h3>
               
                <p className="text-base mt-2 grow opacity-60 xl:mx-4 text-nowrap">
                Stunning UI/UX design 
                  </p>
                  <p className="text-base mt-1 grow opacity-60 xl:mx-4 text-nowrap">
                  Fully responsive across all devices</p>
                  <p className="text-base mt-1 grow opacity-60 xl:mx-4 text-nowrap">
                  SEO optimization
                  </p>
               
                <p className="text-base mt-1 mb-2 grow opacity-60 xl:mx-4 text-nowrap">
                Fast loading 
                  </p>
                <Link href='/' className=" cursor-pointer items-center transition gap-1 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-emerald-400 hover:text-emerald-950 disabled:bg-white/5 disabled:text-zinc-50 mt-4 hidden md:inline-flex bg-zinc-50 text-zinc-950
                group-hover:bg-white/5     group-hover:text-white group-hover:font-light">
                <span>Check Works</span>
                <svg xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="1em" height="1em" class="inline-flex shrink-0 text-xl ml-auto opacity-60" role="icon"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </Link>
              
            </div>
            <div className=" relative flex flex-col items-center p-6 md:p-8 cursor-default bg-white/5 backdrop-blur transition rounded-xl lg:rounded-tr-[3rem] lg:rounded-br-[3rem] hover:scale-[1.02] hover:bg-white/10">
              <Link href="/" className="absolute inset-0 z-10"></Link>
              {/* <MonitorCheck strokeWidth={1} className='h-12 w-12 stroke-green-600 m-1'/> */}
                <h3 className="flex items-center gap-1 text-zinc-50 font-display text-xl font-medium leading-none md:text-2xl">
                  <span>Desktop Services</span>
                  
                </h3>
                <p className="text-base mt-2 grow opacity-60 xl:mx-4 text-nowrap">
                Cross-platform apps 
                  </p>
                <p className="text-base mt-1 grow opacity-60 xl:mx-4 text-nowrap">
                clean UI/UX design 
                  </p>
                <p className="text-base mt-1 grow opacity-60 xl:mx-4 text-nowrap">
                Seamless functionality</p>
                <p className="text-base mt-1 mb-2 grow opacity-60 xl:mx-4 text-nowrap">
                 Lightweight, secure, and fast
                  </p>
                <Link href='/' className=" cursor-pointer items-center transition gap-1 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-emerald-400 hover:text-emerald-950 disabled:bg-white/5 disabled:text-zinc-50 mt-4 hidden md:inline-flex bg-zinc-50 text-zinc-950 
                group-hover:bg-white/5  group-hover:text-white group-hover:font-light">
                <span>Check Works</span>
                <svg xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="1em" height="1em" class="inline-flex shrink-0 text-xl ml-auto opacity-60" role="icon"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </Link>
              
            </div>
           
         
            
          </div>
    </div>

   
    </section>
  )
}

export default Expert
