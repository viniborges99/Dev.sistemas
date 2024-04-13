import React, { useContext } from 'react';

import CartItem from '../CartItem/CartItem';
import AppContext from '../context/AppContext';
import formatCurrency from '../format/Format';
import {CartContainer,CartItemsContainer, CartResume} from './styles';


const Cart = () => {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return (
    <CartContainer className={isCartVisible ? 'cart--active' : ''}>
      <CartItemsContainer>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </CartItemsContainer>

      <CartResume>
        <p>Total:</p>
        <p>{formatCurrency(totalPrice, 'BRL')}</p>
      </CartResume>
    </CartContainer>
  );
};

export default Cart;
