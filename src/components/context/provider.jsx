import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {


  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const value = {
  
    
    cartItems,
    setCartItems,
    isCartVisible,
    setIsCartVisible,
    quantity,
    setQuantity

    

  };

  return (
    <AppContext.Provider value={ value }>
      {children}
    </AppContext.Provider>
  );
}


Provider.propTypes = {
  children: propTypes.any,
}.isRequired;
export default Provider;
