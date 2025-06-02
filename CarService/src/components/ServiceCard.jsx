function ServiceCard({ servicio }) {
  return (
    <div className="service-card">
      <h3>{servicio.nombre}</h3>
      <p>{servicio.descripcion}</p>
      <p><strong>Precio:</strong> {servicio.precio} €</p>
    </div>
  )
}

export default ServiceCard
