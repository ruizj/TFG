import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/vehiculos">Vehículos</Link>
        <Link to="/reservas">Reservas</Link>
        <Link to="/contacto">Contacto</Link>
      </nav>
    </header>
  )
}

export default Header
