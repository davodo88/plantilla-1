import {useState} from "react"
const responsiveMenu = [
  { name: "Empresa", target: "#empresa" },
  { name: "Informacion", target: "#info" },
];

export default function Navres() {
  const [menu, setMenu] = useState(false);

  const handleNavbar = () => {
    menu ? setMenu(false) : setMenu(true);
  };

  return (
    
    <nav className="flex justify-between h-8 bg-amber-500 py-2 w-full relative">
      
      <button onClick={handleNavbar} className="block sm:hidden">
        Responsive
      </button>
      
      <div className="hidden sm:block  items-center justify-between w-full px-8 ">
        <span>Contacto</span>
        <span>Informacion</span>
        <span>Empresa</span>
      </div>
      {menu && (
        <div className="absolute top-10 right-4 w-24 h-64 bg-red-700">
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

