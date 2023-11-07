const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://gaston:aQZ2DCbqVdnd37iz@cluster0.gswhopq.mongodb.net/productos')
mongoose.connect('mongodb+srv://gaston:aQZ2DCbqVdnd37iz@cluster0.gswhopq.mongodb.net/productos')

const objetobd = mongoose.connection;

objetobd.on('connected', () => {
    console.log('Conexión exitosa a MongoDB'); // Usar console.log para mostrar mensajes de éxito
  });
  
  objetobd.on('error', (err) => {
    console.log('Error en la conexión a MongoDB:'); // Usar console.error para mostrar mensajes de error
  });

module.exports = mongoose;
