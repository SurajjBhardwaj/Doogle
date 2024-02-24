import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight, CircleUserRound, Code } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

const Home = () => {
  return (
    <section className="w-screen h-screen bg-purple-100 ">
      <div className="mx-auto max-w-screen-2xl px-8 md:px-16 py-2">
        <header className="h-14 flex w-full justify-between py-4">
          <img src="/Doogle.svg" alt="logo" className=" self-start " />

          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">
                {" "}
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/Profile.png" alt="profile" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-60 bg-purple-50 border-purple-100">
              <div className="flex flex-col justify-between gap-2 text-black ">
                <h4>Jyoti KM</h4>

                <Button variant="outline" className="rounded-xl ">
                  <Link href="/profile">View Profile</Link>
                </Button>
                <Button className="rounded-xl ">Sign Out</Button>
              </div>
            </HoverCardContent>
          </HoverCard>

          {/* <CircleUserRound  color="#6C2DBE" className="h-8 w-8" /> */}
        </header>

        <div className="my-40 flex items-center justify-center gap-16">
          <div class=" flex flex-col  justify-center">
            <span class=" text-4xl font-extrabold tracking-tight text-gray-800 sm:text-6xl">
              <h1>Connect with Developer</h1>
              <h1>Anywhere, Anytime</h1>
            </span>
            <p className="mt-6 px-4 text-left text-lg  text-gray-600">
              Elevate your coding journey with  developers .
               
            </p>
            <p className="px-4 text-left text-lg  text-gray-600">
            Let&apos;s connect and grow
              together!
            </p>
            <div class="mt-10 flex items-center gap-x-4">
           
  

              <Button className=" p-6 px-16 rounded-full space-x-1">
             
                <p className="text-xl font-light ">
                Talk Instantly 
                </p>
                <ArrowUpRight strokeWidth={1.5} />
              </Button>
              <Button className="space-x-3 p-6 px-24 rounded-full " variant="secondary">
              <p className="text-xl font-light ">
              Match 
              </p>
                <Code strokeWidth={1.5} />
              </Button>
            </div>
          </div>

          <div className="">
            <div className="absolute  w-[600px] h-[500px]  opacity-30 blur-[100px] bg-purple-700 "></div>
            <Image
              src="/Home.png"
              height={400}
              width={700}
              className="  drop-shadow-lg "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
