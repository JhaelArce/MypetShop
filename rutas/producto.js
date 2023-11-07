const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const eschemproducto = new eschema({
    name: String,
    description: String,
    price: String,
    iduproduct: String
});

const ModeloProducto = mongoose.model('alimentos', eschemproducto);

// Ruta para obtener todos los usuarios
route.get('/mostraralimentos', async (req, res) => {
    try {
        const alimentos = await ModeloProducto.find(); // Obtiene todos los usuarios de la base de datos
        res.json(alimentos);
    } catch (error) {
        res.status(500).send(error.message); // Maneja el error adecuadamente
    }
});

module.exports = route;
