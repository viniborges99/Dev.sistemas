import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { motion } from 'framer-motion';
import formatCurrency from '../format/Format';
import{ProductCardContainer,
  CardContainer,
  CardImage,
  CardInfos,
  CardPrice,
  CardTitle,
  ButtonAddCard,
  CardDescription} from './styles.js';
import AppContext from '../context/AppContext.js';


function ProductCard({ data }) {
  const { name, photo,  description } = data;
  const price = parseFloat(data.price);

  const {cartItems, setCartItems} = useContext(AppContext);

  const handleAddCart = () => {
    setCartItems([...cartItems, data]);
  };
  

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <ProductCardContainer>
        <CardImage src={photo} alt="product" />
        <CardInfos>
          <CardContainer>
            <CardTitle>{name}</CardTitle>
            <CardPrice> {formatCurrency(price,'BRL')}</CardPrice>
          </CardContainer>
          <CardDescription>{description}</CardDescription>
        </CardInfos>
        <ButtonAddCard onClick={handleAddCart }>
          <BsFillCartPlusFill />  Comprar
        </ButtonAddCard>
      </ProductCardContainer>
    </motion.div>
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

