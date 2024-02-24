import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { CircleUserRound } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const Home = () => {
  return (
    <section className="w-screen h-screen bg-purple-100 ">
      <div className="mx-auto max-w-screen-2xl px-8 md:px-16 py-2">
        <header className="h-14 flex w-full justify-between py-4">
          <img src="/Doogle.svg" alt="logo" className=" self-start " />
         

    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link"> <Avatar  className='h-8 w-8'>
          
          <AvatarImage src="/Profile.png" alt="profile" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar></Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-60 bg-purple-50 border-purple-100">
        <div className="flex flex-col justify-between gap-2 text-black ">
          <h4>Jyoti KM</h4>
         
          <Button  variant='outline' className='rounded-xl '>View Profile</Button>
          <Button  variant='ghost' className='rounded-xl '>Sign Out</Button>
        </div>
      </HoverCardContent>
    </HoverCard>

    {/* <CircleUserRound  color="#6C2DBE" className="h-8 w-8" /> */}
        </header>

        <div className="my-40 flex items-center justify-center gap-16">
          <div class=" flex flex-col items-center justify-center">
            <span class=" text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <h1>Connect With Developer</h1>
              <h1>Anywhere , AnyTime</h1>
            </span>
            <p class="mt-6 text-left text-lg leading-8 text-gray-600">
              Elevate your coding journey with us. Let&apos;s connect and grow
              together!
            </p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <Button className="p-6 rounded-2xl text-base">
                Talk Instantly
              </Button>
              <Button className="p-6 rounded-2xl text-base" variant="secondary">
                Solve Ask Query
              </Button>
            </div>
          </div>
       
        <div className="">
        <div className="absolute  w-[600px] h-[500px]  opacity-30 blur-[100px] bg-purple-700 "></div>
          <Image src="/Home.png" height={400} width={700}  className="  drop-shadow-lg "/>
        </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
