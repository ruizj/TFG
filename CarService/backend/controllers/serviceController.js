const db = require('../db');

exports.getAllServices = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM services');
    res.json(result.rows);
  } catch (err) {
    console.error('Error en getAllServices:', err);
    res.status(500).json({ message: 'Error del servidor' });
  }
};
