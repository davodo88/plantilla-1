import Link from 'next/link'


const Navbar  = () => {
  return (
    <nav className="flex justify-between  my-auto p-1  bg-slate-50">
      <div>
        <svg
          className="h-6 w-6 text-orange-500 ml-5"
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
          <path d="M5 21v-14l8 -4v18" />{" "}
          <path d="M19 21v-10l-6 -4" /> 
          <line x1="9" y1="9" x2="9" y2="9.01" />{" "}
          <line x1="9" y1="12" x2="9" y2="12.01" />{" "}
          <line x1="9" y1="15" x2="9" y2="15.01" />{" "}
          <line x1="9" y1="18" x2="9" y2="18.01" />
        </svg>
      </div>
      <div className="  justify-center  sm:inline">
        <ul className=" flex sm:flex mt-2  text-xs font-light font-serif">
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
      <div className='flex'>
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
    </nav>
  );
}
export default Navbar;