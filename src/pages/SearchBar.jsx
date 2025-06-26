


import React, { useState, useRef, useEffect } from 'react';
import '../styles/Searchbar.scss';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="searching">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
          ref={inputRef}
        />
        <button
          onClick={() => setQuery('')}
          className="cancel-icon"
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default SearchBar;

