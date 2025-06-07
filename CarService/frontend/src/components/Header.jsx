import React, { useState } from "react"; // Importa React y el hook useState para manejar el estado del menú móvil
import { Link, useLocation } from "react-router-dom"; // Importa Link para navegación interna y useLocation para detectar cambios de ruta

export default function Header() {
  const [open, setOpen] = useState(false); // Estado para controlar si el menú móvil está abierto o cerrado
  const location = useLocation(); // Hook para obtener la ruta actual

  // Efecto: cada vez que cambia la ruta, cierra el menú móvil automáticamente
  React.useEffect(() => setOpen(false), [location.pathname]);

  return (
    // Header fijo en la parte superior, con fondo degradado y sombra
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-900/90 via-blue-700/80 to-indigo-800/90 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo y nombre de la marca, ambos enlazan a la página principal */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/assets/Logo/logoBlanco.png" // Ruta del logo
            alt="CarService Popeye" // Texto alternativo para accesibilidad
            className="h-16 w-auto drop-shadow-xl transition-transform duration-300 hover:scale-110" // Tamaño, sombra y efecto hover
            style={{ filter: "drop-shadow(0 0 10px #a3a3a3)" }} // Sombra gris para destacar el logo
          />
          <span className="text-2xl md:text-3xl font-extrabold text-gray-200 tracking-wide">
            CarService Popeye
          </span>
        </Link>
        {/* Menú de navegación: horizontal en escritorio, vertical en móvil */}
        <nav className={`flex-col md:flex-row md:flex gap-8 items-center font-semibold text-lg transition-all duration-300
          ${open ? "flex absolute top-full left-0 w-full bg-blue-900/95 py-6 px-6 shadow-xl" : "hidden md:flex"}
        `}>
          {/* Cada enlace navega a una sección distinta, con efecto hover en gris */}
          <Link to="/" className="hover:text-gray-400 transition-colors">Inicio</Link>
          <Link to="/servicios" className="hover:text-gray-400 transition-colors">Servicios</Link>
          <Link to="/vehiculos" className="hover:text-gray-400 transition-colors">Vehículos</Link>
          <Link to="/reservas" className="hover:text-gray-400 transition-colors">Reservas</Link>
          <Link to="/contacto" className="hover:text-gray-400 transition-colors">Contacto</Link>
        </nav>
        {/* Botón menú hamburguesa, visible solo en móvil (md:hidden) */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded hover:bg-blue-800/60 transition"
          onClick={() => setOpen(!open)} // Alterna el estado 'open' al hacer clic
          aria-label="Abrir menú" // Accesibilidad: describe la acción del botón
        >
          {/* Tres barras que forman el icono hamburguesa, animadas según el estado 'open' */}
          <span className={`block w-7 h-1 bg-gray-400 rounded transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-7 h-1 bg-gray-400 rounded transition-all duration-300 ${open ? "opacity-0" : ""}`}></span>
          <span className={`block w-7 h-1 bg-gray-400 rounded transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>
    </header>
  );
}

// Este componente Header es un menú de navegación responsivo y fijo, 
// diseñado con Tailwind CSS y React, que se adapta a escritorio y móvil.
// El menú hamburguesa aparece solo en dispositivos pequeños y se cierra automáticamente al navegar.
// El diseño y los colores están alineados con la identidad visual moderna de la marca.
