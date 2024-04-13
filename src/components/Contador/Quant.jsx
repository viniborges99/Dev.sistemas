import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/AppContext';
import { CartQuant, ButtonQuantDir, ButtonQuantEsq } from './styles.js';

function QuantityControl() {
  const { quantity, setQuantity } = useContext(AppContext);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <CartQuant>
      <ButtonQuantEsq onClick={handleDecrease}>-</ButtonQuantEsq>
      <span>{quantity}</span>
      <ButtonQuantDir onClick={handleIncrease}>+</ButtonQuantDir>
    </CartQuant>
  );
}

QuantityControl.propTypes = {
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
};

export default QuantityControl;


