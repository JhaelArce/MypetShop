import React from 'react';

function ProductList({ products }) {
    return (
      <div>
        <h1>Lista de Productos</h1>
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <div className="product">
                <img src={product.image} alt={product.description} />
                <h2>{product.description}</h2>
                <p>Precio: ${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ProductList;