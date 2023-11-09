import React from 'react';
import '../Css/Header.css'; // Importa tu archivo CSS

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="tu_logo.png" alt="Logo" />
      </div>
      <div className="search">
        <input type="text" placeholder="Buscar..." />
      </div>
      <div className="icons">
        <div className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div className="user-icon">
          <i className="fas fa-user"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
