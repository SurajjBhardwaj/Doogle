import Link from "next/link";
import React from "react";

const Expert = () => {
  return (
    <section className="relative w-screen p-10 bg-black text-purple-100">
      <div className="flex flex-col md:flex-row ">
        <div id="container" className="flex-col md:flex-row mx-[50px] w-1/2">
          <h1 className="text-5xl font-bold mb-4">Experienced enough</h1>
          <ul className="text-2xl text leading-loose mb-8">
            <li>Share your knowledge</li>
            <li>Build reputation and Shine ✨</li>
            <li>Help others and earn rewards</li>
          </ul>
        </div>
        <img id="expert-image" src=""></img>
      </div>
    </section>
  );
};

export default Expert;
