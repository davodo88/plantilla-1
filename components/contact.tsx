import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faMapLocation, faPhone, faVoicemail,  } from "@fortawesome/free-solid-svg-icons";




function Contact () {
    return (
      <section className="inline-block justify-evenly md:flex w-screen bg-slate-100">
        <div className="w-screen md:w-1/3 inline-block px-24 py-10 my-10 md:m-10 bg-slate-200/50">
          <div className="flex mb-3 justify-start text-2xl text-black font-extrabold underline decoration-orange-500">
            Contact
          </div>
          <div className="flex mb-2 justify-start">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Iste commodi minus autem voluptates mollitia tenetur optio fugiat deserunt rem provident. 
          </div>
          <div className="flex mb-2 gap-5 font-sans ">
            <FontAwesomeIcon icon={faPhone} className="text-lg my-auto" />
            <p className="font-thin">+36 875 457 835</p>
          </div>
          <div className="flex mb-2 gap-5 font-sans ">
            <FontAwesomeIcon icon={faAt} className="text-lg my-auto" />
            <p className="font-thin">tucontacto@hotmail.com</p>
          </div>
          <div className="flex gap-5 font-sans">
            <FontAwesomeIcon icon={faMapLocation} className="text-lg my-auto" />
            <p className="font-thin">Santera Colomba, SN (Andorra)</p>
          </div>
          <div className=""></div>
        </div>
        <div className="w-screen md:w-1/2 py-10 px-8 md:px-24">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6995.88623529849!2d1.527265896353801!3d42.50414048981966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1652782886959!5m2!1ses!2ses"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </section>
    );
};

export default Contact;