import React from "react";

export default function ServiceCard({ icon, title, price, description, footer }) {
  return (
    <div className="group bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-indigo-900/80 rounded-2xl shadow-lg p-6 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300 h-full">
      <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-800 group-hover:bg-blue-700 transition-colors shadow">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-200 mb-2 text-center">{title}</h3>
      <p className="text-gray-400 text-center mb-4">{description}</p>
      <div className="flex-grow" />
      {/* El precio siempre al fondo */}
      {price && (
        <div className="text-lg font-semibold text-green-400 mb-2 mt-4 self-stretch text-center">
          {price}
        </div>
      )}
      {footer && <div className="pt-2">{footer}</div>}
    </div>
  );
}
