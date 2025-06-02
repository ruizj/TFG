import { useState } from 'react'

function VehicleCarousel({ imagenes }) {
  const [index, setIndex] = useState(0)
  const siguiente = () => setIndex((index + 1) % imagenes.length)
  const anterior = () => setIndex((index - 1 + imagenes.length) % imagenes.length)

  return (
    <div className="carousel">
      <img src={imagenes[index]} alt="Vehículo" style={{ width: '100%' }} />
      <button onClick={anterior}>⟨</button>
      <button onClick={siguiente}>⟩</button>
    </div>
  )
}

export default VehicleCarousel
