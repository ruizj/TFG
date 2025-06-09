const db = require('../db');

// Función para comprobar si la fecha es de lunes a viernes
function isWeekday(dateStr) {
  const date = new Date(dateStr);
  const day = date.getDay();
  return day >= 1 && day <= 5; // 1 = lunes, 5 = viernes
}

// Obtener todas las reservas (para comprobar disponibilidad)
exports.getAllReservations = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM reservations');
    res.json(result.rows);
  } catch (err) {
    console.error('Error al obtener reservas:', err);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// Crear una nueva reserva
exports.createReservation = async (req, res) => {
  const { name, date, slot, service } = req.body;

  // Validación de campos obligatorios
  if (!name || !date || !slot || !service) {
    return res.status(400).json({ message: 'Faltan campos obligatorios.' });
  }

  // Validar que la fecha sea de lunes a viernes
  if (!isWeekday(date)) {
    return res.status(400).json({ message: 'Solo puedes reservar de lunes a viernes.' });
  }

  try {
    // Comprobar si ya existe una reserva para esa fecha y franja
    const check = await db.query(
      'SELECT * FROM reservations WHERE date = $1 AND slot = $2',
      [date, slot]
    );
    if (check.rows.length > 0) {
      return res.status(409).json({ message: 'Esta franja ya está reservada.' });
    }

    // Insertar la nueva reserva
    const result = await db.query(
      'INSERT INTO reservations (name, date, slot, service) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, date, slot, service]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error al crear reserva:', err);
    res.status(500).json({ message: 'Error del servidor' });
  }
};
