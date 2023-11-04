import React from 'react';
import '../Style-Sheets/Testimonio.css'

function Testimonio(props){
    return (
        <div className='container-witness'>
          <img
          className='image-witness' 
          src={require(`../imagenes/${props.imagen}.jpeg`)}
          alt='pet image'/>

          <div className='container-text-witness'>
            <p className='name-witness'>
                {props.nombre}
            </p>
            <p className='position-witness'>{props.cargo}</p> {/*  */}
            <p className='text-testimony'> {props.testimonio} </p>
          </div>
        </div>
    );
}

export default Testimonio;
