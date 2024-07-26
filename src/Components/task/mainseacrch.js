// src/App.js
import React from 'react';
import './mainseacrhcss.css';
import SearchFunctionality from './searchapi';

function Search() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Search App</h1>
      </header>
      <main>
       <SearchFunctionality/>
      </main>
    </div>
  );
}

export default Search;
