const db = require('../db');
const fs = require('fs');
const path = require('path');

// Obtener todos los vehículos (sin imágenes extra)
exports.getAllVehicles = async (req, res) => {
  try {
    const result = await db.query(`
      SELECT 
        id, title, brand, model, year, price, km, description, image, features
      FROM vehicles
    `);
    res.json(result.rows);
  } catch (err) {
    console.error('Error en getAllVehicles:', err);
    res.status(500).json({ message: 'Error del servidor' });
  }
};

// Obtener detalle de un vehículo, incluyendo todas las imágenes de la carpeta de la marca
exports.getVehicleById = async (req, res) => {
  const { id } = req.params;
  try {
    // 1. Consulta el vehículo en la base de datos
    const result = await db.query(`
      SELECT 
        id, title, brand, model, year, price, km, description, image, features
      FROM vehicles
      WHERE id = $1
    `, [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Vehículo no encontrado' });
    }
    const vehicle = result.rows[0];

    // 2. Busca imágenes en la carpeta de la marca (por ejemplo, /assets/Vehiculos/Audi/)
    const imagesDir = path.join(__dirname, '..', 'public', 'assets', 'Vehiculos', vehicle.brand);
    let images = [];
    try {
      images = fs.readdirSync(imagesDir)
        .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .map(file => `/assets/Vehiculos/${vehicle.brand}/${file}`);
    } catch (err) {
      images = [];
    }

    // DEBUG: muestra qué imágenes encuentra
    console.log('Buscando imágenes en:', imagesDir);
    console.log('Imágenes encontradas:', images);

    // 3. Devuelve el vehículo junto con el array de imágenes
    res.json({ ...vehicle, images });
  } catch (err) {
    console.error('Error en getVehicleById:', err);
    res.status(500).json({ message: 'Error del servidor' });
  }
};
