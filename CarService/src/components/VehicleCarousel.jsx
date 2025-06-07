import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

/**
 * Componente para mostrar un carrusel de vehículos.
 * Props:
 * - vehicles: array de objetos con { image, title, year, price, description, features }
 */
export default function VehicleCarousel({ vehicles }) {
  // Transforma los vehículos al formato esperado por react-image-gallery
  const galleryItems = vehicles.map(vehicle => ({
    original: vehicle.image,
    thumbnail: vehicle.image,
    description: (
      <div className="p-2 text-left">
        <h3 className="text-lg font-bold text-gray-100">{vehicle.title} {vehicle.year && <span className="text-gray-400 font-normal">({vehicle.year})</span>}</h3>
        {vehicle.price && <div className="text-green-400 font-semibold">{vehicle.price}</div>}
        {vehicle.description && <div className="text-gray-300 text-sm">{vehicle.description}</div>}
        {vehicle.features && vehicle.features.length > 0 && (
          <ul className="flex flex-wrap gap-2 mt-2">
            {vehicle.features.map((feat, idx) => (
              <li key={idx} className="bg-blue-800/70 px-2 py-1 rounded text-xs text-gray-200">{feat}</li>
            ))}
          </ul>
        )}
      </div>
    )
  }));

  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-900">
      <ImageGallery
        items={galleryItems}
        autoPlay={true}
        slideInterval={4000}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showBullets={true}
        showNav={true}
        renderItem={item => (
          <div className="relative">
            <img
              src={item.original}
              alt={item.title}
              className="w-full h-80 object-cover rounded-2xl"
            />
            {item.description && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 via-blue-800/60 to-transparent p-4">
                {item.description}
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
}
