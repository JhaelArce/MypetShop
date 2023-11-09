import React from 'react';
import '../Css/Footer.css'; // Importa tu archivo CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <img src="https://www.mypetshop.co.za/wp-content/uploads/2019/11/My-petshop-LOGO.png" alt="Logo" />
        <p>Follow us</p>
        <div className="social-icons">
      <FontAwesomeIcon icon={faFacebook} />
      <FontAwesomeIcon icon={faTiktok} />
      <FontAwesomeIcon icon={faInstagram} />
    </div>
        
      </div>
      <div className="column">
        <ul className="menu-list">
          <li>Inicio</li>
          <li>Acerca de</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div className="column">
        <ul className="menu-list">
          <li>Términos y condiciones</li>
          <li>Política de privacidad</li>
          <li>Preguntas frecuentes</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
