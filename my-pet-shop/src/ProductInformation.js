import React from 'react';
import './Testimonio.css'

function Testimonio(props){
    return (
        <div className='container-witness'>
<img
  className='image-witness'
  src={require(`./${props.imagen}.jpeg`)}
  alt={props.nombre} // Elimina 'pet image' y usa 'props.nombre' para hacerlo más descriptivo
/>



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
