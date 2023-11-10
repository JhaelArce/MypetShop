import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import '../Css/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://www.mypetshop.co.za/wp-content/uploads/2019/11/My-petshop-LOGO.png" alt="Logo" />
      </div>
        
      <div className="InputContainer">
      <input
        placeholder="Search.."
        id="input"
        className="input"
        name="text"
        type="text"
      />
    </div>
    
      <div className="icons">
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
      <div className="icons">
        <FontAwesomeIcon icon={faUser} />
      </div>
    </header>
  );
}

export default Header;



