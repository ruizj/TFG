import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function VehiculoDetalle({ vehicles }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Busca el vehículo por id
  const vehicle = vehicles.find(v => String(v.id) === id);

  if (!vehicle) {
    return (
      <div className="flex flex-col flex-1">
        <div className="max-w-4xl w-full mx-auto p-8 text-center text-gray-300 flex-1">
          <h2 className="text-3xl font-bold mb-4">Vehículo no encontrado</h2>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 px-6 py-3 bg-blue-700 hover:bg-blue-600 rounded text-white font-semibold"
          >
            Volver atrás
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="max-w-5xl w-full mx-auto p-8 text-gray-200 flex-1">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 px-4 py-2 bg-blue-700 hover:bg-blue-600 rounded text-white font-semibold"
        >
          ← Volver
        </button>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Imagen grande */}
          <div className="flex-1 rounded-2xl overflow-hidden shadow-lg border-4 border-blue-900">
            <img
              src={vehicle.image}
              alt={vehicle.title}
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Detalles */}
          <div className="flex-1 flex flex-col">
            <h1 className="text-4xl font-extrabold mb-2">
              {vehicle.title}{" "}
              {vehicle.year && (
                <span className="text-gray-400 font-normal">({vehicle.year})</span>
              )}
            </h1>
            {vehicle.price && (
              <p className="text-2xl font-semibold text-green-400 mb-2">
                {vehicle.price}
              </p>
            )}
            {vehicle.km && (
              <p className="text-lg font-semibold text-gray-300 mb-4">
                Kilómetros: <span className="text-green-400">{vehicle.km}</span>
              </p>
            )}
            {vehicle.description && (
              <p className="text-gray-300 mb-6">{vehicle.description}</p>
            )}
            {vehicle.features && vehicle.features.length > 0 && (
              <ul className="mb-6 flex flex-wrap gap-3">
                {vehicle.features.map((feat, idx) => (
                  <li
                    key={idx}
                    className="bg-blue-800/70 px-3 py-1 rounded text-sm text-gray-200"
                  >
                    {feat}
                  </li>
                ))}
              </ul>
            )}
            {/* Botón de contacto o reserva */}
            <a
              href={`https://wa.me/34600000000?text=Hola,%20quiero%20más%20info%20del%20vehículo%20${encodeURIComponent(vehicle.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg text-lg text-center transition"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
