import React from "react";
import Image from "next/image";
import VentanaNaranja from "../images/ventanaNaranja.jpg"


const Hero = () => {

    return (
      <section className="flex gap-3">
        <div className="flex flex-col mx-auto item-center justify-center   grow">
            <div className="p-2 sm:text-center text-xs lg:text-xl capitalize text-orange-500">architecture</div>
            <div className="p-2 sm:text-center text-3xl lg:text-5xl font-bold">New Way<br /> Of Living.</div>
            <div className="p-2 sm:text-center text-xs lg:text-xl font-extralight text-gray-700">Change the way yo life,<br /> closer to nature.</div>
            <button className="content-center border-2 border-state-100 bg-slate-100 active:bg-slate-200 text-xs p-3 ">Explore</button>           
        </div>
        <div className="flex mx-auto gap-1 lg:gap-5 justify-center p-2 grow">
            <div className="sm:inline"><Image src={VentanaNaranja} width={100} height={200}></Image></div>
            <div className="hidden sm:inline"><Image src={VentanaNaranja} width={100} height={160} ></Image></div>
            <div className="hidden sm:inline"><Image src={VentanaNaranja} width={100} height={125} ></Image></div>
        </div>
      </section>
    );
}
export default Hero;

