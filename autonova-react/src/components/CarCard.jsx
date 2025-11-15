function CarCard({ car }) {
    return (
        <div>
            <img
            src={car.images?.[0] || 'https://via.placeholder.com/300'}
            alt={car.title}/>
            <h3>{car.title}</h3>
            <p>{car.brand} {car.model}</p>
            <p>{car.price}</p>
        </div>
    );
}

export default CarCard;