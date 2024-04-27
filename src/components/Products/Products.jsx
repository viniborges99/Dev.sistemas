import React, { useEffect, useContext } from 'react';
import { ProductsContainer } from './styles';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../context/AppContext';

function Products() {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ProductsContainer className="container">
          {products.map((product) => <ProductCard key={product.id} data={product} />)}
          
        </ProductsContainer>
      )}
    </>
  );
}

export default Products;





