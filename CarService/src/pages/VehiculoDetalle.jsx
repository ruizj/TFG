import { useParams, Link } from 'react-router-dom'

// Simulación de datos
const vehiculos = [
  {
    id: 1,
    modelo: 'Renault Clio 2017',
    precio: 8500,
    estado: 'Disponible',
    descripcion: 'Vehículo en perfecto estado, único propietario, revisiones al día.',
    detalles: 'Motor 1.2 TCe, 90CV, gasolina, 70.000km.',
    imagenes: ['/assets/clio1.jpg', '/assets/clio2.jpg', '/assets/clio3.jpg']
  },
  {
    id: 2,
    modelo: 'Seat Ibiza 2019',
    precio: 10500,
    estado: 'Disponible',
    descripcion: 'Muy cuidado, todas las revisiones en taller oficial.',
    detalles: 'Motor 1.0 TSI, 95CV, gasolina, 50.000km.',
    imagenes: ['/assets/ibiza1.jpg', '/assets/ibiza2.jpg']
  }
]

function VehiculoDetalle() {
  const { id } = useParams()
  const vehiculo = vehiculos.find(v => v.id === Number(id))

  if (!vehiculo) return <p>Vehículo no encontrado.</p>

  return (
    <section>
      <h2>{vehiculo.modelo}</h2>
      <img src={vehiculo.imagenes[0]} alt={vehiculo.modelo} style={{ width: '100%', maxWidth: '400px' }} />
      <p><strong>Precio:</strong> {vehiculo.precio} €</p>
      <p><strong>Estado:</strong> {vehiculo.estado}</p>
      <p><strong>Descripción:</strong> {vehiculo.descripcion}</p>
      <p><strong>Detalles técnicos:</strong> {vehiculo.detalles}</p>
      <a
        href={`https://wa.me/34600000000?text=Hola,%20estoy%20interesado%20en%20el%20${encodeURIComponent(vehiculo.modelo)}`}
        target="_blank" rel="noopener noreferrer"
      >Contactar por WhatsApp</a>
      <br />
      <Link to="/vehiculos">Volver al listado</Link>
    </section>
  )
}

export default VehiculoDetalle
