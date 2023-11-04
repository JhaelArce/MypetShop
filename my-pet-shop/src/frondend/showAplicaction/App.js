import React, {useState, useEffect } from 'react';
import './App.css';
import Testimonio from '../Components/ProductInformation';
import AnimalTypeButtons from '../Components/AnimalTypeButtons'; 
import image1 from '../imagenes/car.png'; 
import image2 from '../imagenes/login.png';
 

function App() {
      const [searchTerm, setSearchTerm] = useState('');
      
  return (


    <div className="App">
        <div className="top-blue"></div>

      <div className="encabezado">
        <h1>The Best Shop, My Pets Shop :</h1>
        <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <img src={image1} alt="Image 1" className="search-image" />
      <img src={image2} alt="Image 2" className="search-image" />
      </div>
      <AnimalTypeButtons /> {/* A*/}

      <div className="contenedor-testimonios">



      <Testimonio 
      nombre = 'NutriPaws'
      imagen= 'Foo2'
      cargo='$25'
      testimonio='NutriPaws is a premium dog food, formulated with natural ingredients and high-quality proteins to maintain your pet iss health and energy.'
            />
      <Testimonio 
      nombre = 'PetDelight'
      imagen= 'Food'
      cargo='$30 '
      testimonio='PetDelight is a delicious and balanced food that your dog will love. It contains a mix of lean meat and fresh vegetables.'
            />  

      <Testimonio 
      nombre = 'HappyHound'
      imagen= 'Food3'
      cargo='$40'
      testimonio='HappyHound offers complete nutrition with irresistible taste. It is enriched with essential vitamins and minerals for your pet is well-being.'
            />
      <Testimonio 
      nombre = 'EcoPup'
      imagen= 'Food'
      cargo=' $35'
      testimonio='EcoPup is proud to use organic and sustainable ingredients in its dog food, promoting your pet is health and the planet is well-being.'
            />   
      <Testimonio 
      nombre = 'SuperCanine'
      imagen= 'Foo2'
      cargo='$35'
      testimonio='SuperCanine is a high-protein premium food, ideal for active dogs. It helps maintain strong muscles and a shiny coat.'
            />
    </div>
    <div className="bottom-blue"></div>

    </div>

  );
}

export default App;
