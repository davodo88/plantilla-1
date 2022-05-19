import React from "react";
import Image from "next/image";
import ToldoNaranja from "../images/hero/toldoNaranja.jpg"


const Hero = () => {

    return (
      <div id="home">
        <section className="block sm:flex gap-3">
          <div className="flex flex-col mx-auto items-center  sm:justify-items-start   grow">
            <div className="p-2 sm:text-start text-4xl sm:text-xs lg:text-xl  capitalize text-orange-500">
              architecture
            </div>
            <div className="p-2 text-center sm:text-start text-6xl sm:text-3xl lg:text-8xl font-bold lg:font-light">
              New Way
              <br /> Of Living.
            </div>
            <div className="p-2 text-center sm:text-start text-xl sm:text-xs lg:text-base lg:text-center font-extralight text-gray-700">
              Change the way yo life,
              <br className="lg:hidden" /> closer to nature.
            </div>
            <button className=" mt-8 w-24 border-2 border-state-100 bg-slate-100 active:bg-slate-200 text-xs p-3 ">
              Explore
            </button>
          </div>
          <div className="flex justify-center gap-1 lg:gap-5  mt-2  p-2 grow">
            <div className="flex h-96 w-48 md:w-32 md:h-56 lg:w-44 lg:h-72">
              <Image src={ToldoNaranja} width={200} height={100}></Image>
            </div>
            <div className="hidden sm:flex md:h-44 md:w-28 lg:w-36 lg:h-64">
              <Image src={ToldoNaranja} width={200} height={100}></Image>
            </div>
            <div className="hidden sm:flex md:h-40 md:w-24 lg:w-36 lg:h-56">
              <Image src={ToldoNaranja} width={200} height={100}></Image>
            </div>
          </div>
        </section>
        <section className="w-full block mb-20 mt-16 md:grid sm:grid-cols-2 lg:flex sm:h-44  ">
          <div className="text-xs text-center m-4 sm:m-auto font-thin text-slate-700 ">
            01<span className="text-4xl sm:-mt-2">/</span>
            <span className="text-xs">
              Interior Design From
              <br /> The <span className="text-orange-500">India</span>
            </span>
          </div>
          <div className=" text-xs text-center m-4 sm:m-auto font-thin text-slate-700 ">
            02<span className="text-4xl sm:-mt-2">/</span>
            <span className="text-xs ">
              Interior Design From
              <br /> The <span className="text-orange-500">India</span>
            </span>
          </div>
          <div className=" text-xs text-center m-4 sm:m-auto font-thin text-slate-700 ">
            03<span className="text-4xl sm:-mt-2">/</span>
            <span className="text-xs ">
              Interior Design From
              <br /> The <span className="text-orange-500">India</span>
            </span>
          </div>
          <div className=" text-xs text-center m-4 sm:m-auto font-thin text-slate-700 ">
            04<span className="text-4xl ">/</span>
            <span className="text-xs ">
              Interior Design From
              <br /> The
              <span className="text-orange-500">India</span>
            </span>
          </div>
        </section>
      </div>
    );
}
export default Hero;

