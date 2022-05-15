import React from "react";
import Image from "next/image";
import ToldoNaranja from "../images/hero/toldoNaranja.jpg"


const Hero = () => {

    return (
      <div id="#home">
        <section className="block sm:flex gap-3">
          <div className="flex flex-col mx-auto items-center  sm:justify-items-start   grow">
            <div className="p-2 sm:text-start text-4xl sm:text-xs lg:text-base lg:-ml-24 capitalize text-orange-500">
              architecture
            </div>
            <div className="p-2 text-center sm:text-start text-6xl sm:text-3xl lg:text-5xl font-bold lg:font-light">
              New Way<br /> Of Living.
            </div>
            <div className="p-2 text-center sm:text-start text-xl sm:text-xs lg:text-xs lg:text-center font-extralight text-gray-700">
              Change the way yo life,
              <br className="lg:hidden" /> closer to nature.
            </div>
            <button className=" lg:-ml-28 w-24 border-2 border-state-100 bg-slate-100 active:bg-slate-200 text-xs p-3 ">
              Explore
            </button>
          </div>
          <div className="flex mx-auto gap-1 lg:gap-5 justify-center p-2 grow">
            <div className="flex mt-5 ">
              <Image src={ToldoNaranja} width={150} height={250}></Image>
            </div>
            <div className="hidden mt-5  sm:flex">
              <Image src={ToldoNaranja} width={120} height={180}></Image>
            </div>
            <div className="hidden mt-5  sm:flex">
              <Image src={ToldoNaranja} width={110} height={140}></Image>
            </div>
          </div>
        </section>
        <section className="w-full h-28 flex justify-around  mt-16">
          <div className="text-xs text-center font-thin text-slate-700 flex">
            01<span className="text-4xl -mt-2">/</span>
            <span className="text-xs text-left">
              Interior Design From
              <br /> The <span className="text-orange-500">India</span>
            </span>
          </div>
          <div className=" text-xs text-center font-thin text-slate-700 hidden sm:flex">
            02<span className="text-4xl -mt-2">/</span>
            <span className="text-xs text-left">
              Interior Design From
              <br /> The <span className="text-orange-500">India</span>
            </span>
          </div>
          <div className=" text-xs text-center font-thin text-slate-700 hidden sm:flex">
            03<span className="text-4xl -mt-2">/</span>
            <span className="text-xs text-left">
              Interior Design From
              <br /> The <span className="text-orange-500">India</span>
            </span>
          </div>
          <div className=" text-xs text-center font-thin text-slate-700 hidden sm:flex">
            04<span className="text-4xl -mt-2">/</span>
            <span className="text-xs text-left">
              Interior Design From<br /> The 
              <span className="text-orange-500">India</span>
            </span>
          </div>
        </section>
      </div>
    );
}
export default Hero;

