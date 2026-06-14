const express = require('express');
const app = express();

app.use(express.json());

app.post('/registro', (req, res) => {

  const nombre = req.body.nombre;
  const mensaje = req.body.mensaje;
  const edad = req.body.edad;

  res.json({
    estado: "Datos recibidos",
    nombre: nombre,
    edad: edad,
    mensaje: mensaje,
    color: "Negro"
  });

});

app.post('/incidencia', (req, res) => {

  const nombre = req.body.nombre;
  const id = req.body.id;
  const direccion = req.body.direccion;
  const queja = req.body.queja;

  res.json({
    mensaje: "Incidencia registrada",
    nombre: nombre,
    id: id,
    direccion: direccion,
    queja: queja
  });

});

app.listen(3000, () => {
  console.log('Servidor ejecutándose en puerto 3000');
});