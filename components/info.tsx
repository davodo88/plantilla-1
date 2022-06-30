import React from "react";
import Image from "next/image";
import EscalerasBlancas from "../images/informacion/escalerasBlancas.jpg"
import concreteCorner from "../images/informacion/concreteCorner.jpg"
import pasillo from "../images/informacion/pasillo.jpg"
import modernBuilding from "../images/informacion/edificioGris.jpg" 

function Info () {
    return (
      <section id="informacion">
        <div className="block sm:flex">
          <div className="grow sm:ml-10 sm:mb-10 text-center ">
            <div className="block sm:hidden">
              <span className="text-orange-500 text-sm ">
                ARCHITECTURE FIRM
              </span>
              <br />
              <span className="text-5xl">
                Our <br />
                <span className="underline underline-offset-2 sm:underline-offset-4 decoration-orange-500">
                  Architecture
                </span>{" "}
                <br />
                Projects
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="text-orange-500 text-sm">ARCHITECTURE FIRM</span>
              <br />
              <span className="text-5xl">
                Our{" "}
                <span className="underline underline-offset-2 sm:underline-offset-4 decoration-orange-500">
                  Architecture
                </span>{" "}
                Projects
              </span>
            </div>
          </div>
          <div className="grow  sm:-ml-10 text-center mt-10 sm:m-auto">
            <h4 className="text-gray-500 font-thin justify-self-center m-3">
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Rerum, mollitia omnis.
            </h4>
            <button className="border-2 border-slate-300 text-xs p-2 m-3 sm:mr-0">
              View All
            </button>
          </div>
        </div>
        <div className="block sm:grid grid-cols-2 gap-3 ">
          <div className="block my-4 sm:ml-7 justify-self-center">
            <Image src={modernBuilding} width={800} height={250}
            className="object-cover" ></Image>
            <div className="text-center sm:text-left">
              <span className="text-orange-500 ">Residential</span>
              <br />
              <span>Gomez Vazquez International</span>
            </div>
          </div>
          <div className=" block my-4 sm:mr-7 justify-self-center ">
            <Image src={EscalerasBlancas} width={800} height={250}
            className="object-cover" ></Image>
            <div className="text-center sm:text-left">
              <span className="text-orange-500">Residential</span>
              <br />
              <span>Space Matrix</span>
            </div>
          </div>
          <div className=" block my-4  sm:ml-7 justify-self-center">
            <Image src={pasillo} width={800} height={250}
            className="object-cover" ></Image>
            <div className="text-center sm:text-left">
              <span className="text-orange-500">Residential</span>
              <br />
              <span>Ryder</span>
            </div>
          </div>
          <div className=" sm:block my-4 sm:mr-7 justify-self-center">
            <Image src={concreteCorner} width={800} height={250}
            className="object-cover"></Image>
            <div className="text-center sm:text-left">
              <span className="text-orange-500">Residential</span>
              <br />
              <span>Progetto</span>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Info;
