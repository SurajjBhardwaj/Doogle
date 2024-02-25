"use State";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowUpRight, CircleUserRound, Code } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import QueryForm from "./QueryForm";
import { useRouter } from "next/router";

const Home = () => {
  const linkId = "i7y24hf" || Math.random().toString(36).slice(2);
  const router = useRouter();
  const [isloading, setIsLoading] = useState();

  async function handleConnect() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push(`/newRoom/${linkId}`);
    }, 7700);
  }

  return (
    <section className="w-screen h-screen bg-purple-100 ">
      <div className="mx-auto max-w-screen-2xl px-8 md:px-16 py-2">
        <header className=" h-14 flex w-full justify-between py-4">
          <Image
            height={100}
            width={200}
            src="/Doogle.svg"
            alt="logo"
            className="  self-start h-12 w-[6rem] lg:h-16 lg:w-32"
          />
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link">
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
                <Button className="rounded-xl ">
                <Link href='/landingpage'>
                Sign Out
                </Link>
                
                </Button>
              </div>
            </HoverCardContent>
          </HoverCard>

          {/* <CircleUserRound  color="#6C2DBE" className="h-8 w-8" /> */}
        </header>

        <div className="my-20 lg:my-40 flex flex-col lg:flex-row items-center justify-center gap-16">
          <div class=" flex flex-col  justify-center">
            <span class="text-center text-3xl text-nowrap lg:text-left lg:text-6xl font-extrabold tracking-tight text-gray-900 ">
              <h1>Connect with Developer</h1>
              <h1>Anywhere, Anytime</h1>
            </span>
            <p className=" text-center lg:text-left  mt-6 px-4 text-sm lg:text-xl  text-gray-600">
              Elevate your coding journey with developers .
            </p>
            <p className=" text-center lg:text-left  px-4 text-sm lg:text-xl  text-gray-600">
              Let&apos;s connect and grow together!
            </p>
            <div class="mt-10 flex flex-col gap-y-4 lg:flex-row items-center lg:gap-x-4">
              <Button
                className="p-5 lg:p-6 px-7 lg:px-16 rounded-full space-x-1 w-4/5"
                onClick={handleConnect}
              >
                {isloading ? (
                  "Loading..."
                ) : (
                  <div className="flex gap-3">
                    <p className="text-base lg:text-xl font-light ">
                      Talk Instantly
                    </p>
                    <ArrowUpRight strokeWidth={1.5} />
                  </div>
                )}
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="p-5 lg:p-6 px-7 lg:px-16  space-x-3  rounded-full  w-4/5 bg-white"
                    variant="secondary"
                  >
                    <p className="text-base lg:text-xl font-light ">Match</p>
                    <Code strokeWidth={1.5} />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Select Following option</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <QueryForm />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <div className="">
            <div className="absolute top-[10%] w-[90%] h-[80%] lg:w-[600px] lg:h-[500px]  opacity-30 blur-[100px] bg-purple-600 lg:bg-purple-700 "></div>
            <Image
              src="/Home.png"
              height={400}
              width={700}
              className="drop-shadow-lg"
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
