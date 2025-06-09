// controllers/userController.js
const userModel = require('../models/userModel');

exports.getUsers = async (req, res) => {
  // Aquí pondrás la lógica para obtener usuarios (puedes dejarlo vacío de momento)
  res.json([]); // Respuesta vacía temporal
};

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    await userModel.createUser(name, email);
    res.status(201).json({ message: 'Usuario creado' });
  } catch (error) {
    console.error('ERROR DETALLADO:', error);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
};
