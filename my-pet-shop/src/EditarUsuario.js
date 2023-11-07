import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from 'axios';

function EditarUsuario(){
    const params = useParams()
    //Hooks
const[nombre,setNombre]=useState('')
const[email,setEmail]=useState('')
const[telefono,setTelefono]=useState('')

useEffect(() => {
    // Realiza una solicitud para obtener todos los alimentos desde la ruta del servidor
    axios.post('/api/usuario/obtenerdatausuario', {idusuario: params.idusuario})
      .then((response) => {
        const datausuario = response.datausuario[0]
        setNombre(datausuario.nombre)
        setEmail(datausuario.email)
        setTelefono(datausuario.telefono)

      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function editarUsuario(){
    const actualizarusuario = {
        nombre: nombre,
        email:email,
        telefono:telefono,
        idusuario: params.idusuario
    }


    axios.post('/api/usuario/actualizauaurio',actualizarusuario)
    .then(res =>{
        alert(res.data)
    })
    .then(err => {console.log(err)})


  }
    return(
        <div className="container">
            <div className="row" >
                <h2 className="mt-4">
                Editar usuario
            </h2>
            </div>


            <div className="row" >
                <div className="col-sm-6 offset-3">
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}}></input>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                    </div>


                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">telefono</label>
                        <input type="text" className="form-control" value={telefono} onChange={(e) => {setTelefono(e.target.value)}}></input>
                    </div>

                    <button onClick={editarUsuario} className="btn btn-success">Editar usuario</button>

                </div>


            </div>

        </div>
    )
}

export default EditarUsuario