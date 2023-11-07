import React from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'

function UsuarioIndividual({usuario}){
    const navegar = useNavigate()

    function borrarusuario(idusuario){
        axios.post('/api/usuario/borrarusuario', {idusuario: idusuario})
        .then((response) => {
            alert(response.data)
            navegar(0)
  
        }).catch((error) => {
            console.error(error);
          });
    }
    return(
        <div className="container">
             <div className="row">
                <ul className="list-group">
                    <li className="list-group-item">{usuario.idusuario}</li>
                    <li className="list-group-item">{usuario.nombre}</li>
                    <li className="list-group-item">{usuario.email}</li>
                    <li className="list-group-item">{usuario.telefono}</li>

                </ul>
                <Link to={`/editarusuario/${usuario.idusuario}`}><li className="btn btn-success">Editar</li></Link>
                <button className="btn btn-danger" onClick={()=>{borrarusuario(usuario.idusuario)}}>Borrar</button>
                <hr className="mt-4"></hr>

             </div>


        </div>
    )
}

export default UsuarioIndividual