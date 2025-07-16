import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor="search" style={{ display: 'block', marginBottom: '0.5rem' }}>
        Filtrar por país:
      </label>
      <input
        type="text"
        id="search"
        placeholder="Ej: Venezuela, México, Colombia..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
          width: '100%',
          maxWidth: '300px'
        }}
      />
    </div>
  );
};

export default SearchBar;
