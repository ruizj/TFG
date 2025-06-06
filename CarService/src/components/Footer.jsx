import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900/90 via-blue-700/80 to-indigo-800/90 text-gray-300 py-8 mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6">
        {/* Logo y nombre */}
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <span className="text-xl font-bold text-gray-200 tracking-wide">
            CarService Popeye
          </span>
        </div>
        {/* Info de contacto y copyright */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          <div>© {new Date().getFullYear()} CarService Popeye. Todos los derechos reservados.</div>
          <div className="mt-1">

           
            <span>Desarrollado por: </span><span className="font-bold">Javier Ruiz Porta</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


