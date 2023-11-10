import React from 'react';
import '../Css/Footer.css'; // Importa tu archivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <img src="https://www.mypetshop.co.za/wp-content/uploads/2019/11/My-petshop-LOGO.png" alt="Logo" className="logo" />
        <p>Follow us</p>
        <div className="social-icons">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          <FontAwesomeIcon icon={faTiktok} className="social-icon" />
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </div>
      </div>
      <div className="column">
        <ul className="menu-list">
        <li>Home</li>
           <li>About</li>
           <li>Services</li>
           <li>Contact</li>
        </ul>
      </div>
      <div className="column">
        <ul className="menu-list">
        <li>Terms and conditions</li>
           <li>Privacy policy</li>
           <li>Frequently asked questions</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

