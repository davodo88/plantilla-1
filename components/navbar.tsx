import React from 'react';
import Link from 'next/link'
import { useState }  from 'react';

const responsiveMenu = [
  { name: "Home", target: "#home" },
  { name: "Pages", target: "#pages" },
  { name: "Portfolio", target: "#portfolio" },
  { name: "Blog", target: "#blog" },
  { name: "Contac", target: "#contact" },
];
 function Navbar() {

  const [menu, setMenu] = useState(false);

  const handleNavbar = () => {
    menu ? setMenu(false) : setMenu(true);
  };
  

  return (
    <nav className="flex justify-between  my-auto p-1  bg-slate-50">
      <div>
        <svg
          className="flex h-6 w-6 text-orange-500 ml-5"
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
      <div className="  justify-center  sm:inline">
        <ul className=" hidden sm:flex mt-2  text-xs font-light font-serif">
          <li className="mx-1.5">
            <Link href="">
              <a className=" hover:text-orange-500 ">HOME</a>
            </Link>
          </li>
          <li className="mx-1.5">
            <Link href="">
              <a className=" hover:text-orange-500 ">PAGES</a>
            </Link>
          </li>
          <li className="mx-1.5">
            <Link href="">
              <a className=" hover:text-orange-500 ">PORTFOLIO</a>
            </Link>
          </li>
          <li className="mx-1.5">
            <Link href="">
              <a className=" hover:text-orange-500 ">BLOG</a>
            </Link>
          </li>
          <li className="mx-1.5">
            <Link href="">
              <a className=" hover:text-orange-500 ">CONTACT</a>
            </Link>
          </li>
        </ul>
      </div>
      <button id="busqueda" 
        onClick={handleNavbar}
        className="">
        <div className="flex">
          <svg
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
          <svg
            className="h-5 w-5 text-orange-500"
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
      {menu && (
        <div className="absolute flex justify-center right-40 w-20 h-30 bg-slate-200">
          <ul>
            {responsiveMenu.map((etiqueta, index) => {
              return (
                <li key={index}>
                  <a href={etiqueta.target}>{etiqueta.name}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;