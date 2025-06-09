const pool = require('../db');

exports.getAllVehicles = async () => {
  const result = await pool.query('SELECT * FROM vehicles ORDER BY id DESC');
  return result.rows;
};

exports.getVehicleById = async (id) => {
  const result = await pool.query('SELECT * FROM vehicles WHERE id = $1', [id]);
  return result.rows[0];
};
