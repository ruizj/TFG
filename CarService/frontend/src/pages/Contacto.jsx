import React from "react";

const Contacto = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto mt-8 p-4">
      {/* Tarjeta Formulario */}
      <div className="flex-1 bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Contáctanos</h2>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            className="border border-gray-300 rounded px-3 py-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="border border-gray-300 rounded px-3 py-2"
            required
          />
          <textarea
            name="message"
            placeholder="Mensaje"
            rows={4}
            className="border border-gray-300 rounded px-3 py-2"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>
        <div className="mt-6 flex flex-col items-center gap-2">
          <a
            href="https://wa.me/34612345678" // Cambia por tu número real sin espacios ni símbolos
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            {/* Icono WhatsApp */}
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48A12.07 12.07 0 0 0 12 .25C5.44.25.25 5.44.25 12a11.7 11.7 0 0 0 1.64 6L.25 23.75l5.87-1.54A11.7 11.7 0 0 0 12 23.75c6.56 0 11.75-5.19 11.75-11.75a11.7 11.7 0 0 0-3.23-8.52zM12 21.25a9.23 9.23 0 0 1-4.94-1.43l-.35-.21-3.48.91.93-3.39-.23-.36A9.23 9.23 0 1 1 21.25 12 9.23 9.23 0 0 1 12 21.25zm5.1-6.67c-.28-.14-1.66-.82-1.92-.91s-.45-.14-.64.14-.74.91-.91 1.1-.34.21-.62.07a7.51 7.51 0 0 1-2.19-1.36 8.23 8.23 0 0 1-1.52-1.88c-.16-.28 0-.43.12-.57.13-.13.28-.34.42-.51a1.94 1.94 0 0 0 .28-.47.48.48 0 0 0-.02-.5c-.07-.14-.64-1.54-.88-2.11s-.47-.46-.64-.47h-.54a1.05 1.05 0 0 0-.76.36 3.17 3.17 0 0 0-1 2.36c0 1.39 1 2.73 2.86 3.74a10.27 10.27 0 0 0 3.09 1c.43.07.8.13 1.08.08a2.19 2.19 0 0 0 1.49-1.05 1.77 1.77 0 0 0 .12-1.05c-.05-.07-.2-.14-.42-.24z"/>
            </svg>
            WhatsApp
          </a>
          <div className="text-center mt-4 text-gray-700">
            <p>Teléfono: +34 123 456 789</p>
            <p>Email: contacto@tusitio.com</p>
       
          </div>
        </div>
      </div>

      {/* Tarjeta Mapa */}
      <div className="flex-1 bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4 text-center">Dónde estamos</h2>
        <div className="w-full h-80">
          <iframe
            title="Mapa del taller"
            width="100%"
            height="100%"
            className="rounded"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps?q=36.770412,-4.052122&z=16&output=embed"
            allowFullScreen
          ></iframe>
        </div>
        <p className="mt-4 text-center text-gray-600">
       
        </p>
      </div>
    </div>
  );
};

export default Contacto;
