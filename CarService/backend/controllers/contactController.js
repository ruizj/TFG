const pool = require('../db');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendContact = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    // Guarda el mensaje en la base de datos
    await pool.query(
      'INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3)',
      [name, email, message]
    );
    // Envía el correo
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Nuevo mensaje de contacto',
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje:\n${message}`,
    });
    res.status(200).json({ message: 'Mensaje enviado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al enviar el mensaje' });
  }
};
