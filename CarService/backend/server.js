require('dotenv').config();
const express = require('express');
const cors = require('cors');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/vehicles', vehicleRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});

const serviceRoutes = require('./routes/serviceRoutes');
app.use('/api/services', serviceRoutes);

const reservationRoutes = require('./routes/reservationRoutes');
app.use('/api/reservations', reservationRoutes);

const contactRoutes = require('./routes/contactRoutes');
app.use('/api/contact', contactRoutes);

