const nodemailer = require('nodemailer');

// Configura el transporte SMTP (usa variables de entorno en producción)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // tu email Gmail
    pass: process.env.EMAIL_PASS  // contraseña o app password
  }
});

exports.sendContact = async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Faltan campos obligatorios.' });
  }

  const mailOptions = {
    from: email,
    to: 'jrtecnologiapr@gmail.com',
    subject: 'Nuevo mensaje de contacto desde la web',
    html: `
      <h2>Nuevo mensaje de contacto</h2>
      <p><b>Nombre:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Mensaje:</b></p>
      <p>${message}</p>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Mensaje enviado correctamente.' });
  } catch (err) {
    console.error('Error enviando email:', err);
    res.status(500).json({ message: 'Error al enviar el mensaje.' });
  }
};
