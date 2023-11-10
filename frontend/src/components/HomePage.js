import React from 'react';
import '../Css/HomePage.css';

function HomePage() {
  return (
    <div className="HomePage">
      {/* Botones superiores */}
      <div className="top-buttons">
        <button>Dog</button>
        <button>Cat</button>
        <button>Rodents</button>
        <button>Birds</button>
        <button>Reptiles</button>
      </div>

      {/* Featured Categories */}
      <div className="featured-categories">
        <h2>Featured Categories</h2>
        <div className="category">
        <img src={require('../Images/DogFood.png')} alt="Dog Food" />
          <p>Dog Food</p>
        </div>
        <div className="category">
        <img src={require('../Images/CatFood.png')} alt="Dog Food" />
          <p>Cat Food</p>
        </div>
        <div className="category">
        <img src={require('../Images/DogAccessories.jpg')} alt="Dog Food" />
          <p>Dog Accessories</p>
        </div>
        <div className="category">
        <img src={require('../Images/CatLitter.png')} alt="Dog Food" />
          <p>Cat Litter</p>
        </div>
        <div className="category">
        <img src={require('../Images/CatAccessories.png')} alt="Dog Food" />
          <p>Cat Accessories</p>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
