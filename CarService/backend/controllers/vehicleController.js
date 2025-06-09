// Ejemplo: consulta real a la base de datos PostgreSQL
const db = require('../db'); // Ajusta la ruta según tu proyecto

exports.getAllVehicles = async (req, res) => {
  try {
    const result = await db.query(`
      SELECT 
        id, title, brand, model, year, price, km, description, image, features
      FROM vehicles
    `);
    // Si features es un array en la base de datos (tipo text[] en PostgreSQL), se envía tal cual
    res.json(result.rows);
  } catch (err) {
    console.error('Error en getAllVehicles:', err);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

exports.getVehicleById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query(`
      SELECT 
        id, title, brand, model, year, price, km, description, image, features
      FROM vehicles
      WHERE id = $1
    `, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Vehículo no encontrado' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error en getVehicleById:', err);
    res.status(500).json({ message: 'Error del servidor' });
  }
};
