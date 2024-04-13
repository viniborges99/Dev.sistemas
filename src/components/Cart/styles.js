import styled from 'styled-components';

export const CartContainer = styled.div`
  width: 100%;
  max-width: 430px;
  background-color: #0F52BA;
  border: 2px solid gold;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  padding: 100px 20px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translate(110%, 0);
  transition: all 400ms ease;

  &.cart--active {
    transform: translate(0, 0);
  }
`;

export const CartItemsContainer = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

export const CartResume = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  padding: 35px 0 15px;
  border-top: 1px solid #ddd;
  color: white;
  display: flex;
  justify-content: space-between;
`;

export const CartItem = styled.div`
  &:last-child {
    border-bottom: none;
  }
`;
