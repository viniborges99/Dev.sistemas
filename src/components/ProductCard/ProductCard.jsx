import React from 'react';
import PropTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';

function ProductCard({ data }) {
  const { name, photo, price, brand, description, id, updatedAt } = data;
  console.log('Rendering ProductCard');

  return (
    <section className="productCard">
      <img src={photo} alt="product" className="card__image" />
      <div className="card__infos">
        <h2 className="card__title">{name}</h2>
        <p className="card__brand">Brand: {brand}</p>
        <p className="card__description">Description: {description}</p>
        <p className="card__price">Price: R$ {price}</p>
        <p className="card__id">ID: {id}</p>
        <p className="card__updatedAt">Updated At: {updatedAt}</p>
      </div>
      <button type="button" className="button__add-card">
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    updatedAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;

