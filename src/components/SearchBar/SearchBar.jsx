import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { SearchButton, SearchInput, SearchBarContainer } from './styles';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com a busca
    console.log('Searching for:', searchValue);
  };

  return (
    <SearchBarContainer onSubmit={handleSearch}>
      <SearchInput
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        onChange={(e) => setSearchValue(e.target.value)}
        required
      />
      <SearchButton type="submit">
        <BsSearch />
      </SearchButton>
    </SearchBarContainer>
  );
}

export default SearchBar;

