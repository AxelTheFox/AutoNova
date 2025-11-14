import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');

    const handleSearch = () => {
        onSearch({ brand, model });
    };

    return (
        <form onSubmit={handleSearch} className="flex gap-3 mt-5 mb-4 justify-center items-center">
            <h2 className="text-lg font-semibold text-slate-700">Buscar cotxe:</h2>
            <input
                type="text"
                placeholder="Marca"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            />
            <input
                type="text"
                placeholder="Model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-400 transition"
            />
            <button onClick={handleSearch} className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition">Cercar</button>
        </form>
    );
};

export default SearchBar;
