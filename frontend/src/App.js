import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './Css/App.css';
import HomePage from './components/HomePage';
import UserList from './components/UserList';
import AddUser from './components/AddUsers';
import EditUser from './components/EditUser';
import AddProduct from './components/AddProduct';
import ProductAllInformation from './components/ProductAllInformation';
import logo from './Images/Logo.jpeg';

function App() {
  return (
    <div className="App">
      
      <div className="blue-bar"></div>

     
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="Crud mern stack render2web.com" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                <img src={logo} alt="Logo" className="logo-img" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="adduser">
                  Add User
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="products">
                  View Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="addproduct">
                  Add Product
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} exact></Route>
          <Route path="/adduser" element={<AddUser />} exact></Route>
          <Route path="/edituser/:idusuario" element={<EditUser />} exact></Route>
          <Route path="/products" element={<ProductAllInformation />} exact></Route>
          <Route path="/addproduct" element={<AddProduct />} exact></Route>
        </Routes>
      </BrowserRouter>

      <div className="blue-bar"></div>
    </div>
  );
}

export default App;
