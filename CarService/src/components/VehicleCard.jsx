import { Link } from 'react-router-dom'
import VehicleCarousel from './VehicleCarousel'

function VehicleCard({ vehiculo }) {
  return (
    <div className="vehicle-card">
      <VehicleCarousel imagenes={vehiculo.imagenes} />
      <h3>{vehiculo.modelo}</h3>
      <p><strong>Precio:</strong> {vehiculo.precio} €</p>
      <p><strong>Estado:</strong> {vehiculo.estado}</p>
      <Link to={`/vehiculos/${vehiculo.id}`}>Ver detalles</Link>
    </div>
  )
}

export default VehicleCard
