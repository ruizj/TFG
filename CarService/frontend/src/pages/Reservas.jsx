import React, { useState, useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const TIME_SLOTS = [
  { label: "09:30 - 11:30", value: "morning1" },
  { label: "12:00 - 14:00", value: "morning2" },
  { label: "16:00 - 18:00", value: "afternoon1" },
  { label: "18:00 - 20:00", value: "afternoon2" },
];

const SERVICES = [
  "Mantenimiento básico",
  "Mantenimiento intermedio",
  "Mantenimiento premium",
  "Cambio de neumáticos",
  "Diagnóstico general",
  "Otro",
];

function isWeekday(dateStr) {
  const date = new Date(dateStr);
  const day = date.getDay();
  return day >= 1 && day <= 5; // Lunes a viernes
}

export default function Reservas() {
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Cargar reservas del backend al iniciar
  useEffect(() => {
    fetch("http://localhost:4000/api/reservations")
      .then(res => res.json())
      .then(data => setReservations(data));
  }, []);

  const isSlotTaken = reservations.some(
    (r) => r.date === date && r.slot === slot
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!date || !slot || !service || !name) {
      setError("Por favor, completa todos los campos.");
      return;
    }
    if (!isWeekday(date)) {
      setError("Solo puedes reservar de lunes a viernes.");
      return;
    }
    if (isSlotTaken) {
      setError("Esta franja ya está reservada. Elige otra.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, date, slot, service }),
      });
      if (response.status === 201) {
        const newReservation = await response.json();
        setReservations([...reservations, newReservation]);
        setSuccess("¡Reserva realizada con éxito!");
        setDate("");
        setSlot("");
        setService("");
        setName("");
      } else if (response.status === 409) {
        setError("Esta franja ya está reservada. Elige otra.");
      } else {
        setError("Error al hacer la reserva.");
      }
    } catch {
      setError("Error de conexión con el servidor.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] py-12 px-4">
      <div className="bg-blue-900/80 rounded-2xl shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-gray-100 mb-4 flex items-center gap-2">
          <FaCalendarAlt className="text-blue-300" />
          Reserva tu Cita
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="text-gray-200 font-semibold">
            Nombre
            <input
              type="text"
              className="mt-1 block w-full rounded px-3 py-2 bg-blue-800 text-gray-100"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="text-gray-200 font-semibold">
            Fecha
            <input
              type="date"
              className="mt-1 block w-full rounded px-3 py-2 bg-blue-800 text-gray-100"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              min={new Date().toISOString().split("T")[0]}
            />
          </label>
          <label className="text-gray-200 font-semibold">
            Franja horaria
            <select
              className="mt-1 block w-full rounded px-3 py-2 bg-blue-800 text-gray-100"
              value={slot}
              onChange={(e) => setSlot(e.target.value)}
              required
            >
              <option value="">Selecciona una franja</option>
              {TIME_SLOTS.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </label>
          <label className="text-gray-200 font-semibold">
            Tipo de servicio
            <select
              className="mt-1 block w-full rounded px-3 py-2 bg-blue-800 text-gray-100"
              value={service}
              onChange={(e) => setService(e.target.value)}
              required
            >
              <option value="">Selecciona un servicio</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>
          {error && (
            <div className="bg-red-500/80 text-white rounded px-4 py-2">{error}</div>
          )}
          {success && (
            <div className="bg-green-600/80 text-white rounded px-4 py-2">{success}</div>
          )}
          <button
            type="submit"
            className="mt-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition"
            disabled={isSlotTaken}
          >
            Reservar cita
          </button>
        </form>
      </div>
    </div>
  );
}
