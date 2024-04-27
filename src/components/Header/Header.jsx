import React from 'react';
import SearchBar from '../SearchBar/SearchBar';

import CartButton from '../CartButton/CartButton';
import {HeaderContainer,Container,Logo} from './styles';

function Header() {
  return (
    <HeaderContainer>
      <Container>
        <Logo>
          <span>DEV.</span> Sistemas
        </Logo>
        <SearchBar />
        <CartButton />
      </Container>
    </HeaderContainer>
  );
}

export default Header;
