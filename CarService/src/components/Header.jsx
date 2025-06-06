import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Cierra el menú al navegar
  React.useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-900/90 via-blue-700/80 to-indigo-800/90 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/Logo/logoBlanco.png"
            alt="CarService Popeye"
            className="h-16 w-auto drop-shadow-xl transition-transform duration-300 hover:scale-110"
            style={{ filter: "drop-shadow(0 0 10px #a3a3a3)" }} // gris
          />
          <span className="text-2xl md:text-3xl font-extrabold text-gray-200 tracking-wide">
            CarService Popeye
          </span>
        </Link>
        <nav className={`flex-col md:flex-row md:flex gap-8 items-center font-semibold text-lg transition-all duration-300
          ${open ? "flex absolute top-full left-0 w-full bg-blue-900/95 py-6 px-6 shadow-xl" : "hidden md:flex"}
        `}>
          <Link to="/" className="hover:text-gray-400 transition-colors">Inicio</Link>
          <Link to="/servicios" className="hover:text-gray-400 transition-colors">Servicios</Link>
          <Link to="/vehiculos" className="hover:text-gray-400 transition-colors">Vehículos</Link>
          <Link to="/reservas" className="hover:text-gray-400 transition-colors">Reservas</Link>
          <Link to="/contacto" className="hover:text-gray-400 transition-colors">Contacto</Link>
        </nav>
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded hover:bg-blue-800/60 transition"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span className={`block w-7 h-1 bg-gray-400 rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-7 h-1 bg-gray-400 rounded transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
          <span className={`block w-7 h-1 bg-gray-400 rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>
    </header>
  );
}
// Este componente Header es un menú de navegación responsivo que se adapta a diferentes tamaños de pantalla.