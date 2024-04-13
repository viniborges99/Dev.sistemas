import React, { useContext } from 'react';
import { CiCircleRemove } from 'react-icons/ci';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import formatCurrency from '../format/Format';
import Quant from '../Contador/Quant';
import {ButtonRemoveItem, CartItemContent, CartItemPrice, QuantCar, CartItemTitle, CartItemImage, CartItemContainer} from './styles';

function CartItem({ data }) {
  const { id, name, photo, price } = data;
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleRemoveItem = () => {
    const updatedCartItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <CartItemContainer>
      <CartItemImage src={photo} alt="imagem do produto" />
      <CartItemContent>
        <CartItemTitle>{name}</CartItemTitle>
        <QuantCar><Quant/></QuantCar>
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
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartItem;

