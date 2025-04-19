const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware para leer datos JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos (tu HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal que sirve tu HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta de prueba para recibir publicaciones (para el futuro)
app.post('/api/servicios', (req, res) => {
  console.log('Servicio recibido:', req.body);
  // Aquí podrías guardar en base de datos o archivo JSON
  res.status(200).json({ mensaje: 'Servicio recibido con éxito' });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor ManosPanamá corriendo en http://localhost:${PORT}`);
});
