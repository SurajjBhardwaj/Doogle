import { Tally3, X } from "lucide-react";
import React, { useState } from "react";

const list =[
 { id:0,
  name:'Home',
  link:'#hero'
},
 { id:1,
  name:'Reward',
  link:'#invest'
},
 { id:2,
  name:'FAQ',
  link:'#blog'
},
 { id:3,
  name:'Regulation',
  link:'#testimonial'
},
 { id:4,
  name:'contact',
  link:'#footer'
},
  
]

const Navbar = () => {
  const [show , setShow] = useState(false)
  return (
    <header className="relative inset-0 z-50  bg-black/95 backdrop-blur transition will-change-auto ">
      <div className="mx-auto max-w-screen px-8 md:px-16 py-2">
        <div className="flex items-center justify-between">
          {/* brand name  */}
          <div className="flex">
            <img src="/Doogle.svg" alt='logo' className="h-12 w-18 md:h-2/3 md:w-2/3 lg:h-full lg:w-full" />
          </div>

          {/* navbar */}
          <nav className="z-50 col-span-4 lg:flex w-full items-center justify-end hidden">
            <ul
              data-orientation="horizontal"
              className="flex items-center"
              dir="ltr"
            >
              {list.map((data, index) => (
                <li
                  key={data.id}
                  className="flex text-white/80 select-none items-center gap-0.5 rounded-md px-4 py-2 opacity-60 hover:opacity-100 hover:cursor-pointer hover:text-white/80"
                >
                  <a href={data.link} className="relative group">
                    <div className="absolute w-1/3 h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform -mt-1  "></div>
                    {data.name}
                  </a>
                </li>
              ))}
              <li
                className="flex select-none items-center gap-0.5 rounded-full px-4 py-2 opacity-60 hover:bg-white/5 hover:opacity-100"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </li>
            </ul>
          </nav>

          <Tally3 strokeWidth={1} className="lg:hidden rotate-90" onClick={()=>setShow(!show)}/>
          {
            show &&<div className="  absolute top-0 right-0 w-full min-h-screen z-100 bg-[#282624]  py-6 overflow-hidden">
           
              <ul className="flex mt-16 flex-col justify-center items-center">
              {list.map((data, index) => (
                <li
                  key={data.id}
                  className="flex select-none items-center gap-0.5 rounded-md px-4 py-2 opacity-60 group-hover:opacity-100 hover:cursor-pointer"
                >
                  <a href={data.link} className="relative group" onClick={()=>setShow(false)}>
                  
                    {data.name}
                  </a>
                </li>
              ))}
              <button className="" onClick={()=>setShow(false)}>
            <X />
            </button>
              </ul>
            </div>
          }
        </div>
      </div>
    </header>
  );
};

export default Navbar;