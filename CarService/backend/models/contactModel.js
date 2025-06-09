const pool = require('../db');

exports.createContact = async (name, email, message) => {
  await pool.query(
    'INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)',
    [name, email, message]
  );
};
