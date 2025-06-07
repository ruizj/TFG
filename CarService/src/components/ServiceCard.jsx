import React from "react"; // Importa React para poder definir el componente funcional

// Componente reutilizable para mostrar tarjetas de servicio
export default function ServiceCard({ icon, title, price, description, footer }) {
  return (
    // Contenedor principal de la tarjeta
    // group: permite efectos hover en elementos hijos
    // bg-gradient-to-br...: fondo degradado moderno
    // rounded-2xl: esquinas redondeadas
    // shadow-lg: sombra para dar profundidad
    // p-6: padding interno
    // flex flex-col items-center: disposición en columna y centrado
    // transition-transform...: animación suave al hacer hover
    // h-full: asegura que todas las tarjetas tengan la misma altura
    <div className="group bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-indigo-900/80 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300 h-full">
      
      {/* Icono del servicio, centrado y con fondo redondeado */}
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-800 group-hover:bg-blue-700 transition-colors shadow">
        {icon}
      </div>
      
      {/* Título del servicio, destacado y centrado */}
      <h3 className="text-xl font-bold text-gray-200 mb-2 text-center">{title}</h3>
      
      {/* Descripción del servicio, en gris claro y centrada */}
      <p className="text-gray-400 text-center mb-4">{description}</p>
      
      {/* flex-grow: empuja el precio hacia el fondo de la tarjeta para que todos queden alineados */}
      <div className="flex-grow" />
      
      {/* Precio: aparece siempre al fondo, destacado en verde */}
      {price && (
        <div className="text-lg font-semibold text-green-400 mb-2 mt-4 self-stretch text-center">
          {price}
        </div>
      )}
      
      {/* Footer opcional: por ejemplo, un botón o enlace extra */}
      {footer && <div className="pt-2">{footer}</div>}
    </div>
  );
}

// Este componente está pensado para ser reutilizable y flexible[1]:
// - Puedes pasarle diferentes iconos, títulos, precios y descripciones.
// - Usa Tailwind CSS para un diseño visual moderno y coherente con la identidad de la marca[3][4].
// - Garantiza que el precio siempre esté alineado al fondo, sin importar la longitud de la descripción.
// - Es ideal para mostrar catálogos de servicios en un sitio web responsivo y profesional.
