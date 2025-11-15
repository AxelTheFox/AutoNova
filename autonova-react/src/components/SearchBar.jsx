import React, { useState } from 'react';

function SearchBar({ query, setQuery }) {
    return (
        <input
            type="text"
            placeholder="Busca per nom o model..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-[25%] p-3 border rounded-lg shadow justify-center"
        />
    );
}

export default SearchBar;
