const express = require('express')

const app = express()

//importar coneccion
const archivoBD = require('./coneccion')

//importacion de rutas y modelo de usuario
const rutaUsuario = require('./rutas/usuario')
const rutaAlimento = require('./rutas/producto')


const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extends:'true'}))

app.use('/api/usuario',rutaUsuario)
app.use('/api/alimentos',rutaAlimento)

app.get('/',(req,res)=>{
    res.end('Bienvenidos al servidor backend')
})

app.listen(5001, function(){
    console.log("El servidor NODE gaston esta correiendo corectamente")

})