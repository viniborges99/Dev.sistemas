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
} from './styles.js';
import AppContext from '../context/AppContext.js';


function ProductCard({ data }) {
  const { title, thumbnail, price} = data;

  const {cartItems, setCartItems} = useContext(AppContext);

  const handleAddCart = () => setCartItems([ ...cartItems, data ]);
  

  return (
    <motion.div whileHover={{ scale: 1.05 }}>
      <ProductCardContainer>
        <CardImage src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} alt="product" />
        <CardInfos>
          <CardContainer>
            <CardTitle>{title}</CardTitle>
            <CardPrice> {formatCurrency(price,'BRL')}</CardPrice>
          </CardContainer>
          
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
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};


export default ProductCard;

