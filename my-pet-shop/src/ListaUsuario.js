import React, { useEffect, useState } from "react"
import UsuarioIndividual from "./UsuarioIndividual"
import axios from 'axios';

function ListaUsuario(){

    const [datausuarios, setdatausuario] = useState([])
    useEffect(() => {
        // Realiza una solicitud para obtener todos los alimentos desde la ruta del servidor
        axios.get('/api/usuario/obtenerusuario')
          .then((response) => {
            setdatausuario(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, []);

      //Mapear lista de usuarios en objeto usuario
      const listausuarios = datausuarios.map(usuario =>{
        return(
            <div>
                <UsuarioIndividual usuario={usuario}/>
            </div>
        )
      })

    return(
        <div>
            <h2>
                Lista de usuarios
            </h2>
            {listausuarios}

        </div>
    )
}

export default ListaUsuario