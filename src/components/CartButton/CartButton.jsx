import React, { useContext } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {CartButtom,CartStatus} from './styles';
import AppContext from '../context/AppContext';

function CartButton() {

  const {cartItems, isCartVisible, setIsCartVisible} = useContext(AppContext);
  return(
    <CartButtom type="button" onClick={() => setIsCartVisible(!isCartVisible)}>
      <AiOutlineShoppingCart />
      {cartItems.length > 0 && <CartStatus>{cartItems.length}</CartStatus>}
    </CartButtom>

  );
}

export default CartButton;
