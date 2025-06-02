import { useParams, Link } from 'react-router-dom'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

// Simulación de datos
const vehiculos = [
  {
    id: 1,
    modelo: 'Peugeot Partner 1.9D',
    precio: 3500,
    estado: 'Disponible',
    descripcion: 'Disponible Peugeot partner año 2007 1.9D 69Cv 135.000km Cambio de aceite y filtros recién hecho, ITV recién pasada, perfecta para el campo. TRANSFERENCIA INCLUIDA!!',
    detalles: 'Motor 1.9 Diesel, 69CV, 135.000km.',
    imagenes: [
      '/assets/Vehiculos/Peugeot/1.jpg',
      '/assets/Vehiculos/Peugeot/2.jpg',
      '/assets/Vehiculos/Peugeot/3.jpg',
      '/assets/Vehiculos/Peugeot/4.jpg',
      '/assets/Vehiculos/Peugeot/5.jpg',
      '/assets/Vehiculos/Peugeot/6.jpg',
      '/assets/Vehiculos/Peugeot/7.jpg',
      '/assets/Vehiculos/Peugeot/8.jpg'
    ]
  },
  {
    id: 2,
    modelo: 'Seat Ibiza 2019',
    precio: 10500,
    estado: 'Disponible',
    descripcion: 'Muy cuidado, todas las revisiones en taller oficial.',
    detalles: 'Motor 1.0 TSI, 95CV, gasolina, 50.000km.',
    imagenes: [
      '/assets/ibiza1.jpg',
      '/assets/ibiza2.jpg'
    ]
  }
]

function VehiculoDetalle() {
  const { id } = useParams()
  const vehiculo = vehiculos.find(v => v.id === Number(id))

  if (!vehiculo) return <p>Vehículo no encontrado.</p>

  // Prepara las imágenes para react-image-gallery
  const images = vehiculo.imagenes.map(url => ({
    original: url,
    thumbnail: url
  }))

  return (
    <section style={{ maxWidth: '700px', margin: '2rem auto', padding: '0 1rem' }}>
      <h2>{vehiculo.modelo}</h2>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={false}
        thumbnailPosition="bottom"
        autoPlay={true}
        slideInterval={3500}
      />
      <p><strong>Precio:</strong> {vehiculo.precio} €</p>
      <p><strong>Estado:</strong> {vehiculo.estado}</p>
      <p><strong>Descripción:</strong> {vehiculo.descripcion}</p>
      <p><strong>Detalles técnicos:</strong> {vehiculo.detalles}</p>
      <a
        href={`https://wa.me/34600000000?text=Hola,%20estoy%20interesado%20en%20el%20${encodeURIComponent(vehiculo.modelo)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'inline-block', marginTop: '1rem', color: '#0d3b66', textDecoration: 'none', fontWeight: 'bold' }}
      >
        Contactar por WhatsApp
      </a>
      <br />
      <Link to="/vehiculos" style={{ display: 'inline-block', marginTop: '1rem', color: '#145da0' }}>
        Volver al listado
      </Link>
    </section>
  )
}

export default VehiculoDetalle
