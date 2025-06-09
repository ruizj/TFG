import React from "react";

export default function VehicleCard({ image, title, brand, model, year, price, km, description, features }) {
  return (
    <div className="group bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-indigo-900/80 rounded-2xl shadow-lg p-5 flex flex-col transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300 h-full">
      <div className="w-full aspect-video rounded-xl overflow-hidden mb-4 bg-gray-800 flex items-center justify-center">
        <img
          src={image}
          alt={title || brand}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-200 mb-1">{title || `${brand} ${model}`} {year && <span className="text-gray-400 font-normal ml-2">({year})</span>}</h3>
      {price && <div className="text-lg font-semibold text-green-400">{price}</div>}
      {km && <div className="text-gray-400 mb-2">{km}</div>}
      {description && <p className="text-gray-400 text-sm mb-3">{description}</p>}
      {features && features.length > 0 && (
        <ul className="text-gray-300 text-xs mb-3 flex flex-wrap gap-2">
          {features.map((feat, idx) => (
            <li key={idx} className="bg-blue-800/60 px-2 py-1 rounded">{feat}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
