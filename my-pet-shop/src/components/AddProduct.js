import React, { useState } from 'react';
import '../Css/AddProduct.css'
import axios from 'axios';

function AddProduct() {
  const [product, setProduct] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    cantidad: '',
    imagen: '',
    categoria: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleAddProduct = () => {
    // Aquí puedes implementar la lógica para agregar el producto a tu sistema
    console.log('Producto añadido:', product);

    axios.post('/api/user/addproduct')
      .then(res => {
        alert(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    // También puedes reiniciar el estado para limpiar el formulario
    setProduct({
      nombre: '',
      descripcion: '',
      precio: '',
      cantidad: '',
      imagen: '',
      categoria: '',
    });
  };

  return (
    <div className="add-product-container">
      <h2 className="section-title">Add Product</h2>
      <form>
        <div className="form-section">
          <label>Product name:</label>
          <input
            type="text"
            name="nombre"
            value={product.nombre}
            onChange={handleInputChange}
            className="input-field"
          />
        </div>

        <div className="form-section">
          <label>Product descripcion:</label>
          <textarea
            name="descripcion"
            value={product.descripcion}
            onChange={handleInputChange}
            className="input-field"
          ></textarea>
        </div>

        {/* ... Resto de las secciones ... */}
        <div className="form-section">
          <label>Product price:</label>
          <input
            type="text"
            name="precio"
            value={product.precio}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-section">
          <label>Quantity available:</label>
          <input
            type="text"
            name="cantidad"
            value={product.cantidad}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-section">
          <label>Product image:</label>
          <input
            type="text"
            name="imagen"
            value={product.imagen}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-section">
          <label>Product category:</label>
          <input
            type="text"
            name="categoria"
            value={product.categoria}
            onChange={handleInputChange}
          />
        </div>

        <button type="button" onClick={handleAddProduct} className="add-button">
          Add product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;