import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #0F52BA;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  gap: 30px;
`;

export const Logo = styled.h2`
  color: white;
  font-weight: 300;
  font-size: 20px;
  line-height: 19px;

  span {
    font-size: 40px;
    font-weight: 600;
    line-height: 19px;
  }
`;
