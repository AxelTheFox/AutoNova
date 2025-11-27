import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import CarCard from "../components/CarCard";

function HomePage() {
    const [cars, setCars] = useState([]);
    const [query, setQuery] = useState("");

    /*useEffect(() => {
        fetch("") // Enllaç de MongoDB
            .then(res = res.json())
            .then(data => setCars(data));
    }, []);*/

    const filtered = cars.filter(c =>
        c.title.toLowerCase().includes(query.toLowerCase()) || 
        c.model.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="p-6 max-w-6xl mx-auto text-center">
            <h1 className="text-3xl font-bold mb-4">Cotxes en venta</h1>
            <SearchBar query={query} setQuery={setQuery} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {filtered.map(car => (
                    <CarCard key={car._id} car={car} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;