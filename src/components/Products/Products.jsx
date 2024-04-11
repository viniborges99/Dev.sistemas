import React, { useState, useEffect } from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(1, 10, 'id', 'DESC').then((response) => {
      setProducts(response.products);
    });
  }, []);
  if (!products || products.length === 0) {
    return <p>Loading...</p>; // ou qualquer outro indicador de carregamento
  }

  return (
    <section className="products container">
      {
        products.map((product) => <ProductCard key={product.id} data={product} />)

      }
    </section>
  );

}

export default Products;

