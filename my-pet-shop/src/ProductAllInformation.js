import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Testimonio from './ProductInformation';

function ProductAllInformation() {
  const [alimentos, setAlimentos] = useState([]);

  useEffect(() => {
    // Realiza una solicitud para obtener todos los alimentos desde la ruta del servidor
    axios.get('/api/alimentos/mostraralimentos')
      .then((response) => {
        setAlimentos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Información de Alimentos</h2>
      <div className="testimonios-container">
        {alimentos.map((alimento) => (
          <Testimonio
            key={alimento.iduproduct}
            nombre={alimento.name}
            cargo={`Precio: ${alimento.price}`}
            testimonio={alimento.description}
            imagen={"Foo2"} // Supongo que tienes imágenes con el mismo nombre que el 'iduproduct'
          />
        ))}
      </div>
    </div>
  );
}

export default ProductAllInformation;
