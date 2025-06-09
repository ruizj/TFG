const pool = require('../db');

exports.createUser = async (name, email) => {
  await pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2)',
    [name, email]
  );
};
