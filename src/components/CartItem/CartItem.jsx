import React, { useContext } from 'react';
import { CiCircleRemove } from 'react-icons/ci';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import formatCurrency from '../format/Format';

import {ButtonRemoveItem, CartItemContent, CartItemPrice,  CartItemTitle, CartItemImage, CartItemContainer} from './styles';

function CartItem({ data }) {
  const { id, thumbnail, title, price } = data;
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  };
  return (
    <CartItemContainer>
      <CartItemImage src={thumbnail} alt="imagem do produto" />
      <CartItemContent>
        <CartItemTitle>{title}</CartItemTitle>
        <CartItemPrice>{formatCurrency(price, 'BRL')}</CartItemPrice>
        <ButtonRemoveItem type="button" onClick={handleRemoveItem}>
          <CiCircleRemove />
        </ButtonRemoveItem>
      </CartItemContent>
    </CartItemContainer>
  );
}

CartItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;

