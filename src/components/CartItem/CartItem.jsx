import React from 'react';
import { CiCircleRemove } from 'react-icons/ci';
import './CartItem.css';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

function CartItem({ data }) {
  const { id, name, photo, price } = data;
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleRemoveItem = () => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <section className="cart-item">
      <img src={photo} alt="imagem do produto" className="cart-item-image" />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{name}</h3>
        <h3 className="cart-item-price">R$ {price.toFixed(2)}</h3>
        <button type="button" className="button__remove-item" onClick={handleRemoveItem}>
          <CiCircleRemove />
        </button>
      </div>
    </section>
  );
}

CartItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;


// colocar a quantidade depois do titulo do produto
