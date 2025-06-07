// Importa iconos de FontAwesome para representar visualmente cada servicio
import { FaTools, FaWrench, FaCogs, FaStar } from "react-icons/fa";
// Importa el componente reutilizable de tarjeta de servicio
import ServiceCard from "../components/ServiceCard";

// Define un array de objetos, cada uno representa un servicio ofrecido
const servicios = [
  {
    icon: <FaTools size={32} className="text-gray-300" />, // Icono para el servicio
    title: "Mecánica General", // Título del servicio
    price: "desde 90 €", // Precio mostrado en la tarjeta
    description: "Diagnóstico y reparación de averías mecánicas, frenos, suspensión, transmisión y más.", // Descripción breve
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

// Componente principal de la página de servicios
export default function Servicios() {
  return (
    // Contenedor principal con ancho máximo y padding
    <div className="max-w-7xl mx-auto py-8 px-4">
      {/* Título de la sección, centrado y destacado */}
      <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center">Nuestros Servicios</h2>
      
      {/* Grid responsivo: 1 columna en móvil, 2 en tablet, 4 en escritorio */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Mapea cada servicio a una tarjeta ServiceCard, pasando las props correspondientes */}
        {servicios.map((servicio, idx) => (
          <ServiceCard key={idx} {...servicio} />
        ))}
      </div>
      
      {/* Mensaje de llamada a la acción debajo de las tarjetas, centrado y con fondo */}
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

// Este archivo define la página de servicios del taller automotriz:
// - Usa un array de objetos para gestionar los servicios de forma escalable y clara.
// - Cada servicio se muestra con un icono, título, precio y descripción, usando un componente reutilizable[1][3].
// - El diseño es responsivo y moderno gracias a Tailwind CSS[4][5].
// - Incluye una llamada a la acción clara para que el usuario contacte fácilmente por WhatsApp, integrando la experiencia digital con la atención al cliente[2][5].
