import styled from 'styled-components';


export const CartButtom = styled.button`
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: none;
  background: none;
  cursor: pointer;
  position: relative;
  margin-left: 20px;
  color: white;

  &:hover {
    color: #ccc;
  }
`;

export const CartStatus = styled.span`
  background-color: red;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  font-size: 11px;
  font-weight: 600;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

