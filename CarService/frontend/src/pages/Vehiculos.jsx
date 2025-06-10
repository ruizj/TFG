import { Link } from "react-router-dom";
import VehicleCard from "../components/VehicleCard";
import { FaWhatsapp } from "react-icons/fa";
import React, { useEffect, useState } from "react";

export default function Vehiculos() {
  const [vehicles, setVehicles] = useState([]);
  const backendUrl = "http://localhost:4000"; // Cambia si tu backend está en otro dominio/puerto

  useEffect(() => {
    fetch("http://localhost:4000/api/vehicles")
      .then(res => res.json())
      .then(data => setVehicles(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center flex-1 w-full">
      <section className="w-full max-w-7xl px-4 py-16 mx-auto flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 mb-4 text-center drop-shadow">
          Vehículos en Stock
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 text-center max-w-2xl">
          Descubre nuestra selección de vehículos revisados, garantizados y listos para entregar. Todos nuestros coches pasan por un estricto control de calidad y cuentan con historial transparente.
        </p>
        <div className="w-full grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((vehicle) => {
            // Usa la primera imagen del array si existe, si no la imagen principal
            const firstImage =
              vehicle.images && vehicle.images.length > 0
                ? backendUrl + vehicle.images[0]
                : backendUrl + vehicle.image;

            return (
              <Link key={vehicle.id} to={`/vehiculos/${vehicle.id}`} className="h-full">
                <VehicleCard {...vehicle} image={firstImage} />
              </Link>
            );
          })}
        </div>
        <div className="mt-12 flex justify-center w-full">
          <div className="bg-blue-900/80 rounded-xl px-6 py-4 shadow text-center max-w-xl w-full">
            <p className="text-lg text-gray-200 font-semibold">
              ¿Interesado en alguno? <span className="text-green-400 font-bold">Pide información o reserva</span> directamente por nuestro botón de WhatsApp.
              <a
                href="https://wa.me/34600000000?text=Hola,%20quiero%20información%20sobre%20vuestros%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg text-lg transition"
              >
                <FaWhatsapp className="text-2xl" />
                Habla con nosotros
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
