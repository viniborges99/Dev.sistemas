import React, { useState, useEffect } from 'react';
import { ProductsContainer } from './styles';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      fetchProducts(1, 10, 'id', 'DESC').then((response) => {
        const productsWithNumberPrices = response.map((product) => ({
          ...product,
          price: parseFloat(product.price),
        }));
        setProducts(productsWithNumberPrices);
        setLoading(false);
      });
    }, 2000);

    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ProductsContainer className="container">
          {products.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </ProductsContainer>
      )}
    </>
  );
}

export default Products;




