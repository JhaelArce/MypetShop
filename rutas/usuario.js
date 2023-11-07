const express = require('express');
const route = express.Router();
const mongoose = require('mongoose');
const eschema = mongoose.Schema;

const eschemausuario = new eschema({
    nombre: String,
    email: String,
    telefono: String,
    idusuario: String
});

const ModeloUsuario = mongoose.model('usuarios', eschemausuario);

route.post('/agregarusuario', async (req, res) => {
    try {
        const nuevousuario = new ModeloUsuario({
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono,
            idusuario: req.body.idusuario
        });

        await nuevousuario.save(); // Utiliza async/await para esperar la operación de guardado

        res.send('Usuario agregado correctamente');
    } catch (error) {
        res.status(500).send(error.message); // Maneja el error adecuadamente
    }
});

// Ruta para obtener todos los usuarios
route.get('/obtenerusuario', async (req, res) => {
    try {
      const usuarios = await ModeloUsuario.find();
      res.json(usuarios);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

 // Ruta para obtener todos los usuarios
 route.post('/obtenerdatausuario', async (req, res) => {
    try {
      const usuarios = await ModeloUsuario.find({ idusuario: req.body.idusuario });
      res.json(usuarios);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });
  
  route.post('/actualizauaurio', async (req, res) => {
    try {
        await ModeloUsuario.findOneAndUpdate({ idusuario: req.body.idusuario }, {
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono
        });

        res.send('Usuario actualizado correctamente');
    } catch (error) {
        res.status(500).send(error.message); // Maneja el error adecuadamente
    }
});

route.post('/borrarusuario', async (req, res) => {
    try {
        await ModeloUsuario.findOneAndDelete({ idusuario: req.body.idusuario });

        res.send('Usuario eliminado correctamente');
    } catch (error) {
        res.status(500).send(error.message); // Maneja el error adecuadamente
    }
});

  

module.exports = route;
