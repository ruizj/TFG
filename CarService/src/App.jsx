import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Servicios from './pages/Servicios'
import Vehiculos from './pages/Vehiculos'
import VehiculoDetalle from './pages/VehiculoDetalle'
import Reservas from './pages/Reservas'
import Contacto from './pages/Contacto'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import vehicles from './data/vehicles';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      <Header />
      <main className='flex-1 pt-16'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/vehiculos" element={<Vehiculos />} />
          <Route path="/vehiculos/:id" element={<VehiculoDetalle vehicles={vehicles} />} />
          <Route path="/reservas" element={<Reservas />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
      {/* Botón flotante de WhatsApp */}
      <FloatingWhatsApp
        phoneNumber="34600000000" // tu número sin el +
        accountName="CarService Popeye"
        avatar="/assets/Logo/logoBlanco.png" // tu logo (opcional)
        statusMessage="¡Normalmente responde en minutos!"
        chatMessage="¡Hola! ¿En qué podemos ayudarte?"
        notification
        notificationDelay={60}
        darkMode={true}
      />
      </div>
    </Router>
  )
}

export default App
