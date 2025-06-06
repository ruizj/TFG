import { FaTools, FaWrench, FaCogs, FaStar } from "react-icons/fa";
import ServiceCard from "../components/ServiceCard";

const servicios = [
  {
    icon: <FaTools size={32} className="text-gray-300" />,
    title: "Mecánica General",
    price: "desde 90 €",
    description: "Diagnóstico y reparación de averías mecánicas, frenos, suspensión, transmisión y más.",
  },
  {
    icon: <FaWrench size={32} className="text-gray-300" />,
    title: "Mantenimiento Básico",
    price: "120 €",
    description: "Cambio de aceite y filtro, revisión de niveles y chequeo de puntos básicos de seguridad.",
  },
  {
    icon: <FaCogs size={32} className="text-gray-300" />,
    title: "Mantenimiento Intermedio",
    price: "180 €",
    description: "Incluye mantenimiento básico + cambio de filtro de aire, filtro de habitáculo y revisión de frenos.",
  },
  {
    icon: <FaStar size={32} className="text-gray-300" />,
    title: "Mantenimiento Plus",
    price: "250 €",
    description: "Servicio completo: incluye todo el mantenimiento intermedio + diagnóstico electrónico y limpieza avanzada.",
  },
];

export default function Servicios() {
  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">Nuestros Servicios</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {servicios.map((servicio, idx) => (
          <ServiceCard key={idx} {...servicio} />
        ))}
      </div>
      {/* Mensaje debajo de las cards */}
      <div className="mt-12 flex justify-center">
        <div className="bg-blue-900/80 rounded-xl px-6 py-4 shadow text-center max-w-xl">
          <p className="text-lg text-gray-200 font-semibold">
            Pida cita o consulta pulsando nuestro botón de <span className="text-green-400 font-bold">WhatsApp</span> en la esquina inferior derecha.
          </p>
        </div>
      </div>
    </div>
  );
}
