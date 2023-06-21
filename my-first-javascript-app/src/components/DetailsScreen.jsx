import * as React from 'react';
import { useState } from "react";

import "./Modal.css";
import { SearchBar } from "./search-bar/SearchBar";
import { SearchResultsList } from "./search-bar/SearchResultsList";

function SearchFoundation() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}


export default SearchFoundation;