import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import { Coins } from "lucide-react";
import { Code } from "lucide-react";
import { BugPlay } from "lucide-react";
import { Cable } from "lucide-react";
import MonthGrid from "@/sections/component/MonthGrid";

const index = () => {

  const [user,setUser] = useState(null);

  useEffect(() => {

    const userData = localStorage.getItem("user");
    setUser(JSON.parse(userData));
    console.log(userData);
  }

  , []);







  return (
    <section className="relative w-screen h-screen bg-purple-50 ">
      <div className="absolute  w-[90%] h-[95%]  opacity-30 blur-[100px] bg-purple-500 "></div>

      <div className="mx-auto max-w-screen-2xl px-8 md:px-16 py-2">
        {/* main box */}
        <div className="flex flex-col lg:grid lg:grid-cols-4 grid:grid-rows-5 h-screen gap-4 py-12">
          {/* sidebar */}
          <div className="flex flex-col gap-4 rounded-xl p-4 border-purple-100 bg-purple-200   col-span-1 border row-span-5">
            {/* Profile Seection */}
            <div className="flex gap-4 ">
              <div>
                <Image
                  src="/Profile.png"
                  height={100}
                  width={100}
                  alt="profile picture"
                  className="rounded-2xl "
                />
              </div>

              <div>
                <h4 className="font-semibold text-lg">{ user?.name}</h4>
                <p className="font-medium text-sm">{user?.role}</p>

                <p className="mt-4">Level 0</p>
              </div>
            </div>
            <Button className="bg-purple-400 cursor-pointer  w-full">
              Edit Profile
            </Button>

            <div className="flex flex-col gap-4">
              <div className="flex gap-2 justify-start items-center">
                <MapPin />
                <p>Jalandhar</p>
              </div>
              <div className="flex gap-3 justify-start items-center">
                <Mail />
                <p>{ user?.email}</p>
              </div>

              <div className="flex gap-3 justify-start items-center">
                <Code />
                <p className="text-wrap">React.js , Node.js , MongoDB </p>
              </div>
            </div>
          </div>

          {/*  content */}
          <div className="flex flex-col lg:flex-row col-span-3 row-span-1 gap-4  bg-red-50">
            <div className="flex flex-col justify-around rounded-xl p-4 px-8 border-purple-100 bg-purple-200 border w-full lg:w-1/2">
              {/* coins */}
              <div className="flex justify-between">
                <div className="flex gap-2 font-medium">
                  <Coins className="h-8 w-8" />
                  <p className="text-lg">Doog Coins </p>
                </div>

                <h2 className="font-bold text-xl">56</h2>
              </div>

              {/* Solution */}
              <div className="flex justify-between">
                <div className="flex gap-2 font-medium">
                  <Cable className="h-8 w-8" />
                  <p className="text-lg">Solve Problem</p>
                </div>

                <h2 className="font-bold text-xl">56</h2>
              </div>

              {/* Promblem Solved */}
              <div className="flex justify-between">
                <div className="flex gap-2 font-medium">
                  <BugPlay className="h-8 w-8" />
                  <p className="text-lg">Ask Promblem</p>
                </div>

                <h2 className="font-bold text-xl">56</h2>
              </div>
            </div>

            <div className="flex flex-col justify-around rounded-xl p-4 border-purple-100 bg-purple-200 border w-full lg:w-1/2">
              <div>
                <h4 className="font-lg font-black/90">Badge</h4>
                <h2 className="-mt-1 text-4xl font-semibold">3</h2>
              </div>

              <div>
                <p className="mb-1 text-sm font-black/70">Streak Badges</p>
                <span className="  text-xl font-light bg-violet-400 p-1 px-4 rounded-2xl">
                  Doongo
                </span>
              </div>
            </div>
          </div>

          {/* streak */}
          <div className="flex flex-col rounded-xl p-4 border-purple-100 bg-purple-200 col-span-3 row-span-3 ">
            <h4 className="mb-8 text-3xl font-semibold text-black/80">
              Streak in 1 year
            </h4>
            <MonthGrid />
          </div>

          <div className="rounded-xl p-4 border-purple-100 bg-purple-200 flex col-span-3 row-span-1 ">
          <h4 className="mb-8 text-3xl font-semibold text-black/80">
             Your Reviews
            </h4>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
