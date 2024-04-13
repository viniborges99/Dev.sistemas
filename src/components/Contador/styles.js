import styled from 'styled-components';

export const CartQuant = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 30px;
  background: white;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
`;

export const ButtonQuantDir = styled.button`
  border: none;
  display: flex;
  align-items: center;
  border-left: 1px solid #bfbfbf;
  background-color: white;
  font-size: 24px;
  height: 18px;
  cursor: pointer;
  padding-left: 5px;
`;

export const ButtonQuantEsq = styled.button`
  border: none;
  display: flex;
  align-items: center;
  border-right: 1px solid #bfbfbf;
  background-color: white;
  font-size: 24px;
  height: 18px;
  cursor: pointer;
  padding-right: 5px;
`;
