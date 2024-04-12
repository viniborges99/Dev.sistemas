import React, { useState, useEffect } from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // tempo de carregamento de 2 segundos
    const delay = setTimeout(() => {
      fetchProducts(1, 10, 'id', 'DESC').then((response) => {
        const productsWithNumberPrices = response.map((product) => {
          return {
            ...product,
            price: parseFloat(product.price),
          };
        });
        setProducts(productsWithNumberPrices);
        setLoading(false);
      });
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    (loading && <Loading/>) || (
      <section className="products container" >     
        {
          products.map((product) => <ProductCard key={product.id} data={product} />)
        }
      </section>
    )
  );
}

export default Products;


