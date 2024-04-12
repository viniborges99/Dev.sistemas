import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

function Provider({ children }) {


  const [cartItems, setCartItems] = useState([]);



  const value = {
  
    
    cartItems,
    setCartItems,

    

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
