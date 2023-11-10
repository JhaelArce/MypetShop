
import React, { useState } from 'react';
import '../Css/SearchBar.css';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    return (
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Buscar..."
        />
      </div>
    );
  };
  
  export default SearchBar;
