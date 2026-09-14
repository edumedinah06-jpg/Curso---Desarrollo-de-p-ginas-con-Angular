const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Array en memoria solicitado por el ejercicio.
let elementos = [
  { id: 1, nombre: 'Angular' },
  { id: 2, nombre: 'Express' },
  { id: 3, nombre: 'Dexie' }
];

// GET: retorna el array completo.
app.get('/api/items', (req, res) => {
  res.json(elementos);
});

// POST: recibe JSON y agrega un nuevo elemento.
app.post('/api/items', (req, res) => {
  const { nombre } = req.body;

  if (!nombre || typeof nombre !== 'string') {
    return res.status(400).json({
      mensaje: 'El campo nombre es obligatorio.'
    });
  }

  const nuevoElemento = {
    id: Date.now(),
    nombre: nombre.trim()
  };

  elementos.push(nuevoElemento);

  return res.status(201).json(nuevoElemento);
});

app.listen(PORT, () => {
  console.log(`API Express ejecutándose en http://localhost:${PORT}`);
});