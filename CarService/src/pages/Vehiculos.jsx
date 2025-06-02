import VehicleCard from '../components/VehicleCard'

const vehiculos = [
  {
    id: 1,
    modelo: 'Renault Clio 2017',
    precio: 8500,
    estado: 'Disponible',
    imagenes: ['/assets/clio1.jpg', '/assets/clio2.jpg', '/assets/clio3.jpg']
  },
  {
    id: 2,
    modelo: 'Seat Ibiza 2019',
    precio: 10500,
    estado: 'Disponible',
    imagenes: ['/assets/ibiza1.jpg', '/assets/ibiza2.jpg']
  }
]

function Vehiculos() {
  return (
    <section>
      <h2>Vehículos de Ocasión</h2>
      <div className="vehiculos-lista">
        {vehiculos.map(vehiculo => (
          <VehicleCard key={vehiculo.id} vehiculo={vehiculo} />
        ))}
      </div>
    </section>
  )
}

export default Vehiculos
