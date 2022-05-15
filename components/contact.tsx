import React from "react";
import Image from "next/image";
import Sello from '../images/contact/sello.png'




function Contact () {
    return (
      <section className="bg-gray-100 w-screen p-3">
        <div className="block m-5">
            <div className="m-4 text-orange-500 text-xs text-center">
                CONTACT US
                <Image src={Sello} height={30} width={30} className="rotate-12">
                </Image>
            </div>
            <div className="text-center text-2xl">
                Free <span className="underline decoration-orange-500">Consulation</span>
            </div>
        </div>
        <div className="grow  sm:-ml-10 text-center mt-10 sm:m-auto">
            <h4 className="text-gray-500 font-thin justify-self-center m-3">
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
              Rerum, mollitia omnis.
            </h4>
            <button className="border-2 border-slate-300 text-xs p-2 m-3 sm:mr-0">
              Contact
            </button>
        </div>
      </section>
    );
};

export default Contact;