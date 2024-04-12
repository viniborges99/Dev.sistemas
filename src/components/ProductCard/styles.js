

import styled from 'styled-components';
export const ProductCardContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 400px;
  background-color: white;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  margin: 0 auto;
  border-radius: 15px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 40px;
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;


export const CardInfos = styled.div`
  padding: 20px;
  background-color: white;
  border-radius: 40px;
`;

export const CardPrice = styled.p`
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  display: flex;
  margin-bottom: 10px;
  color: white;
  background-color: black;
  border: none;
  border-radius: 10px;
  padding: 10px;
`;

export const CardTitle = styled.h2`
  max-width: 200px;
  font-size: 20px;
  font-weight: 600;
  color: #2C2C2C;
  line-height: 19px;
  font-family: Montserrat;
`;

export const ButtonAddCard = styled.button`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: white;
  font-size: 1.5rem;
  border-radius: 0px 0px 15px 15px;
  background-color: #0F52BA;
  cursor: pointer;
  gap: 15px;
`;

export const CardDescription = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 300;
  line-height: 15px;
  margin-top: 20px;
`;
