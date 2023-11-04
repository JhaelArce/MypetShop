import React from 'react';
import './App.css'; 
import imagen1 from './Images/AdultCanine.jpg'
import imagen2 from './Images/BulldogCanin.jpg';
import imagen3 from './Images/RoyalCatFit.jpg';

const images = [
  {
    src: imagen1,
    name: 'Adutl Canine 1',
    price: 19.99,
    description: '"Canine" brand adult dog food',
  },
  {
    src: imagen2,
    name: 'Bulldog Canine',
    price: 29.99,
    description: 'Dog food for Bulldog breed "Canine" brand',
  },
  {
    src: imagen3,
    name: 'Royal Cat Fit',
    price: 39.99,
    description: 'Healthy cat food brand "Royal Cat".',
  },
  // Agrega más objetos para más imágenes
];

function App() {
  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="image-list">
        <ul>
          {images.map((image, index) => (
            <li key={index} className="image-item">
              <img src={image.src} alt={image.name} />
              <h2>{image.name}</h2>
              <p>Precio: ${image.price}</p>
              <p>{image.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
