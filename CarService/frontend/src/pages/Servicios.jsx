import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";
import { FaTools, FaWrench, FaCogs, FaStar } from "react-icons/fa";

// Mapea el nombre del icono en la base de datos a un componente de React
const iconMap = {
  tools: <FaTools size={32} className="text-gray-300" />,
  wrench: <FaWrench size={32} className="text-gray-300" />,
  cogs: <FaCogs size={32} className="text-gray-300" />,
  star: <FaStar size={32} className="text-gray-300" />
};

export default function Servicios() {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/services")
      .then(res => res.json())
      .then(data => setServicios(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">Nuestros Servicios</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {servicios.map(servicio => (
          <ServiceCard
            key={servicio.id}
            icon={iconMap[servicio.icon] || <FaTools size={32} className="text-gray-300" />}
            title={servicio.title}
            price={servicio.price}
            description={servicio.description}
          />
        ))}
      </div>
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
