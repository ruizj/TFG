import { useState } from 'react'

function Reservas() {
  const [form, setForm] = useState({ nombre: '', fecha: '', servicio: '' })
  const [enviado, setEnviado] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => {
    e.preventDefault()
    setEnviado(true)
    // Aquí iría la llamada a la API de reservas
  }

  return (
    <section>
      <h2>Reservar Cita</h2>
      {enviado ? (
        <p>¡Reserva enviada! Te contactaremos pronto.</p>
      ) : (
        <form onSubmit={handleSubmit} className="form-reserva">
          <label>
            Nombre:
            <input type="text" name="nombre" value={form.nombre} onChange={handleChange} required />
          </label>
          <label>
            Fecha:
            <input type="date" name="fecha" value={form.fecha} onChange={handleChange} required />
          </label>
          <label>
            Servicio:
            <select name="servicio" value={form.servicio} onChange={handleChange} required>
              <option value="">Selecciona un servicio</option>
              <option value="Cambio de aceite">Cambio de aceite</option>
              <option value="Revisión ITV">Revisión ITV</option>
              <option value="Cambio de neumáticos">Cambio de neumáticos</option>
            </select>
          </label>
          <button type="submit">Reservar</button>
        </form>
      )}
    </section>
  )
}

export default Reservas
