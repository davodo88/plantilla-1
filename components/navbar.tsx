import React from 'react';
import Link from 'next/link'
import { useState }  from 'react';

const responsiveMenu = [
  { name: "Home", target: "#home" },
  { name: "Pages", target: "#pages" },
  { name: "Portfolio", target: "#informacion" },
  { name: "Blog", target: "#blog" },
  { name: "Contac", target: "#contact" },
];
 function Navbar() {

  const [menu, setMenu] = useState(false);

  const handleNavbar = () => {
    menu ? setMenu(false) : setMenu(true);
  };
  

  return (
    <nav className="relative flex  justify-between items-center  w-full  bg-slate-50">
      <div className="flex">
        <svg
          className=" h-6 w-6 z-20 text-orange-500 ml-5"
          width="10"
          height="10"
          viewBox="5 -8 30 30"
          stroke-width="2"
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
      <div className=" hidden sm:flex  ">
        <ul className="flex mt-2  text-xs font-light font-serif">
          <li className="mx-1.5">
            <Link href="#home">
              <a className=" hover:text-orange-500 ">HOME</a>
            </Link>
          </li>
          <li className="mx-1.5">
            <Link href="">
              <a className=" hover:text-orange-500 ">PAGES</a>
            </Link>
          </li>
          <li className="mx-1.5">
            <Link href="#informacion">
              <a className=" hover:text-orange-500 ">PORTFOLIO</a>
            </Link>
          </li>
          <li className="mx-1.5">
            <Link href="">
              <a className=" hover:text-orange-500 ">BLOG</a>
            </Link>
          </li>
          <li className="mx-1.5">
            <Link href="#contact">
              <a className=" hover:text-orange-500 ">CONTACT</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden sm:flex">
        <svg
          id="#lupa"
          className="h-5 w-5 text-black-500 mt-2"
          width="10"
          height="10"
          viewBox="0 0 40 30"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          {" "}
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <circle cx="10" cy="10" r="7" />{" "}
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </div>

      {menu && (
        <div className="flex absolute top-8  justify-center bg-zinc-800/75 text-white rounded text-xl z-40 w-full p-5 h-64 ">
          <ul>
            {responsiveMenu.map((etiqueta, index) => {
              return (
                <li key={index} className="p-2 hover:text-orange-500">
                  <a href={etiqueta.target}>{etiqueta.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <button id="busqueda" onClick={handleNavbar} className="sm:hidden flex">
        <div className="flex mr-5 ">
          <svg
            id="#lupa"
            className=" h-5 w-5 text-black-500 mt-2 flex"
            width="10"
            height="10"
            viewBox="0 0 40 30"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <circle cx="10" cy="10" r="7" />{" "}
            <line x1="21" y1="21" x2="15" y2="15" />
          </svg>
          <svg
            id="#lineas"
            className="h-5 w-5 text-orange-500 flex"
            width="24"
            height="24"
            viewBox="10 -2 15 20"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1="6" y1="8" x2="20" y2="8" />{" "}
            <line x1="12" y1="16" x2="20" y2="16" />
          </svg>
        </div>
      </button>
    </nav>
  );
}

export default Navbar;