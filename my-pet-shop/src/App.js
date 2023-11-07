import logo from './logo.svg';
import './App.css';
import ListaUsuario from './ListaUsuario';
import AgregarUsuario from './AgregarUsuarios';
import EditarUsuario from './EditarUsuario';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductAllInformation from './ProductAllInformation';


function App() {
  return (
    <div className="App">

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="Crud mern stack render2web.com" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="agregarusuario">Agregar usuario</a>
          
        </li>
        <li className="nav-item">
          <a className="nav-link" href="alimentos">ver alimentos</a>
          
        </li>
        
        
        
      </ul>
    </div>
  </div>
</nav>


      <BrowserRouter>
      <Routes>
        
         <Route path='/' element = {<ListaUsuario/>}exact>   </Route>
         <Route path='/agregarusuario' element = {<AgregarUsuario/>}exact></Route>
         <Route path='/editarusuario/:idusuario' element = {<EditarUsuario/>}exact></Route>
         <Route path="/alimentos" element={<ProductAllInformation />} exact></Route>

      </Routes>
         
      </BrowserRouter>
      
    </div>
  );
}

export default App;
