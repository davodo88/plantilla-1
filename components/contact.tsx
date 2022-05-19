import React from "react";
import Image from "next/image";
import Sello from '../images/contact/sello.png'
import Maps from '../images/contact/google-maps-icon.jpg'




function Contact () {
    return (
      <section className="bg-gray-100 w-screen block sm:flex sm:text-center p-3">
        <div className="block grow md:m-5 align-middle  ">
          <div
            id="contact"
            className="  text-orange-500 text-xs md:text-xl lg:text-2xl text-center "
          >
            CONTACT US
            <Image
              src={Sello}
              height={30}
              width={30}
              className="rotate-12"
            ></Image>
          </div>
          <div className="grid grid-cols-4 grid-rows-1 justify-around h-20 md:h-36">
            <div className="   ">
              <svg
                className=" mt-3 text-orange-500 "
                width="auto"
                height="auto"
                viewBox="0 0 20 40"
                stroke-width="1"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="" y1="21" x2="21" y2="21" />
                <path d="M5 21v-14l8 -4v18" /> <path d="M19 21v-10l-6 -4" />
                <line x1="9" y1="9" x2="9" y2="9.01" />{" "}
                <line x1="9" y1="12" x2="9" y2="12.01" />{" "}
                <line x1="9" y1="15" x2="9" y2="15.01" />{" "}
                <line x1="9" y1="18" x2="9" y2="18.01" />
              </svg>
            </div>
            <div className="  block text-center col-span-2 ">
              <div className=" mt-3 md:mt-auto md:p-4 flex md:space-x-4 justify-around">
                <span className="underline md:text-xl  text-xs lg:text-xl decoration-orange-500 ">
                  Email :
                </span>
                <span className="text-xs md:text-base lg:text-xl">
                  dsgarta@gmail.com
                </span>
              </div>
              <div className="mt-3  md:p-4 flex justify-around md:space-x-5 text-center ">
                <span className="underline md:text-xl decoration-orange-500 text-sm lg:text-xl text-right">
                  Phone :
                </span>
                <span className="text-xs md:text-base lg:text-xl">
                  +34 985 412 753
                </span>
              </div>
            </div>
            <div className="mr-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6995.88623529849!2d1.527265896353801!3d42.50414048981966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1652782886959!5m2!1ses!2ses"
                width="100%"
                height="100%"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Contact;