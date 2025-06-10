import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function VehiculoDetalle() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/api/vehicles/${id}`)
      .then(res => res.json())
      .then(data => setVehicle(data));
  }, [id]);

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

  // Usa el array de imágenes recibido del backend
  
  const backendUrl = "http://localhost:4000"; // <---  Ajusta si tu backend usa otro puerto/dominio
const images =
  vehicle.images && vehicle.images.length > 0
    ? vehicle.images.map(img => ({
        original: backendUrl + img,
        thumbnail: backendUrl + img,
      }))
    : [
        {
          original: backendUrl + vehicle.image,
          thumbnail: backendUrl + vehicle.image,
        },
      ];


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
          <div className="flex-1 rounded-2xl overflow-hidden shadow-lg border-4 border-blue-900 flex items-center">
          <ImageGallery
  items={images}
  showPlayButton={false}
  showFullscreenButton={true}
  showThumbnails={true}
  additionalClass="w-full"
  renderItem={item => (
    <img
      src={item.original}
      alt=""
      className="w-full h-[400px] object-cover rounded-2xl"
      style={{ maxHeight: 400 }}
    />
  )}
  renderThumbInner={item => (
    <img
      src={item.thumbnail}
      alt=""
      className="w-20 h-20 object-cover rounded-md border border-blue-800"
    />
  )}
/>


          </div>
          <div className="flex-1 flex flex-col">
            <h1 className="text-4xl font-extrabold mb-2">
              {vehicle.title || `${vehicle.brand} ${vehicle.model}`}{" "}
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
            <a
              href={`https://wa.me/34637233085?text=Hola,%20quiero%20más%20info%20del%20vehículo%20${encodeURIComponent(vehicle.title || vehicle.brand)}`}
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
