import { Link } from "react-router-dom";
import { FaWhatsapp, FaCheckCircle, FaCarSide, FaTools } from "react-icons/fa";
import ImageGallery from "react-image-gallery";
import { imagenesTaller } from "../data/imagenesTaller";
import "react-image-gallery/styles/css/image-gallery.css";
import "../styles/gallery-custom.css";


export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Hero principal */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 gap-12">
        {/* Texto principal */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-50 mb-6 drop-shadow-lg">
            Pon tu coche en manos de <span className="text-green-400">expertos</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-xl">
            Mantenimiento, mecánica y diagnóstico profesional en un taller moderno y transparente.
            <span className="block mt-2 text-green-300 font-semibold">¡Calidad, rapidez y confianza!</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/34600000000?text=Hola,%20quiero%20pedir%20cita%20en%20CarService%20Popeye"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg text-lg transition"
            >
              <FaWhatsapp className="text-2xl" />
              Pide cita por WhatsApp
            </a>
            <Link
              to="/servicios"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-800 hover:bg-blue-700 text-white font-bold rounded-xl shadow text-lg transition"
            >
              <FaTools className="text-xl" />
              Ver servicios
            </Link>
          </div>
        </div>
        {/* Carrusel de imágenes del taller */}
        <div className="flex-1 flex justify-center">
          <div
            className="w-full max-w-xs md:max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-900"
            style={{ height: "620px" }}
          >
            <ImageGallery
              items={imagenesTaller}
              autoPlay={true}
              slideInterval={4000}
              showPlayButton={false}
              showFullscreenButton={false}
              showThumbnails={false}
              showBullets={false}
              showNav={false}
            />
          </div>
        </div>
      </section>

      {/* Sección de ventajas rápidas */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="flex flex-col items-center text-center">
          <FaCheckCircle className="text-green-400 text-4xl mb-2" />
          <h3 className="text-xl font-bold text-gray-200 mb-1">Transparencia</h3>
          <p className="text-gray-400">Precios claros y diagnóstico honesto. Sin sorpresas.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaCarSide className="text-blue-400 text-4xl mb-2" />
          <h3 className="text-xl font-bold text-gray-200 mb-1">Rapidez</h3>
          <p className="text-gray-400">Servicio ágil, sin perder calidad. Tu coche listo cuando lo necesitas.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <FaTools className="text-indigo-400 text-4xl mb-2" />
          <h3 className="text-xl font-bold text-gray-200 mb-1">Tecnología</h3>
          <p className="text-gray-400">Equipamiento de última generación y personal certificado.</p>
        </div>
      </section>

      {/* Llamada a la acción final */}
      <section className="bg-blue-950/80 py-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-100 mb-4">
          ¿Listo para mimar tu coche?
        </h2>
        <p className="text-gray-300 mb-6">
          Consulta, pide presupuesto o reserva cita al instante desde WhatsApp.
        </p>
        <a
          href="https://wa.me/34600000000?text=Hola,%20quiero%20información%20sobre%20vuestros%20servicios"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg text-lg transition"
        >
          <FaWhatsapp className="text-2xl" />
          Habla con nosotros
        </a>
      </section>
    </div>
  );
}
