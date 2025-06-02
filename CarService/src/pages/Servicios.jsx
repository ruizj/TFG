import ServiceCard from '../components/ServiceCard'

const servicios = [
  { nombre: 'Cambio de aceite', descripcion: 'Incluye filtro y revisión general.', precio: 50 },
  { nombre: 'Revisión ITV', descripcion: 'Prepara tu coche para la ITV.', precio: 40 },
  { nombre: 'Cambio de neumáticos', descripcion: 'Montaje y equilibrado.', precio: 30 }
]

function Servicios() {
  return (
    <section>
      <h2>Servicios del Taller</h2>
      <div className="servicios-lista">
        {servicios.map((servicio, idx) => (
          <ServiceCard key={idx} servicio={servicio} />
        ))}
      </div>
    </section>
  )
}

export default Servicios
