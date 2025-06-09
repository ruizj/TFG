const pool = require('../db');

exports.getAllServices = async () => {
  const result = await pool.query('SELECT * FROM services');
  return result.rows;
};

exports.createService = async (name, description, price) => {
  await pool.query(
    'INSERT INTO services (name, description, price) VALUES ($1, $2, $3)',
    [name, description, price]
  );
};
