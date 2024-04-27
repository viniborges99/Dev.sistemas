import styled from 'styled-components';

export const CartItemContainer = styled.section`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #ddd;
  padding: 20px 12px;
  margin-bottom: 20px;
  position: relative;
  background-color: white;
  border-radius: 10px;
`;

export const CartItemImage = styled.img`
  width: 70px;
`;

export const CartItemTitle = styled.p`
  font-size: 0.85rem;
  font-weight: 500;
  color: #2c2c2c;
  margin-bottom: 8px;
`;


export const CartItemPrice = styled.p`
  font-size: 14px;
  font-weight: 700;
  background: black;
  padding: 10px;
  border-radius: 5px;
  color: white;
`;

export const CartItemContent = styled.div`
  padding: 0px 10px 0px 14px;
  display: flex;
  align-items: center;
  width: 72%;
  margin-top: 20px;
  gap: 39px;
`;

export const ButtonRemoveItem = styled.button`
  position: absolute;
  top: 20px;
  right: 10px;
  color: white;
  background-color: black;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
  width: 22px;
  border-radius: 50%;
  height: 22px;
`;
