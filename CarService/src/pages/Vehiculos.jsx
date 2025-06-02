import VehicleCard from '../components/VehicleCard'

const vehiculos = [
  {
    id: 1,
    modelo: 'Peugeot Partnert 1.9D',
    precio: 3500,
    estado: 'Disponible',
    imagenes: ['/assets/Vehiculos/Peugeot/1.jpg', '/assets/Vehiculos/Peugeot/2.jpg', '/assets/Vehiculos/Peugeot/3.jpg', '/assets/Vehiculos/Peugeot/4.jpg',
       '/assets/Vehiculos/Peugeot/5.jpg', '/assets/Vehiculos/Peugeot/6.jpg', '/assets/Vehiculos/Peugeot/7.jpg', '/assets/Vehiculos/Peugeot/8.jpg']
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
