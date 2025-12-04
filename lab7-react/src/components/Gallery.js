import React from 'react';
import GoodsCard from './GoodsCard';

const goodsData = [
    { id: 1, name: "Барбі", price: 120, imageUrl: "/images/Barbie_2023_poster.jpg" },
    { id: 2, name: "Початок", price: 120, imageUrl: "/images/Inception_(2010)_theatrical_poster.jpg" },
    { id: 3, name: "Інтерстеллар", price: 600, imageUrl: "/images/Interstellar_film_poster.jpg" },
    { id: 4, name: "Наполеон", price: 500, imageUrl: "/images/Napoleon_Film_poster.jpg" },
    { id: 5, name: "Опенгеймер", price: 90, imageUrl: "/images/oppenheimer_poster.jpg" },
    { id: 6, name: "Темний рицар", price: 600, imageUrl: "/images/The_Dark_Knight_(2008_film).jpg" },
    { id: 7, name: "Тор", price: 450, imageUrl: "/images/Thor_(film)_poster.jpg" },
];

function Gallery() {
    return (
        <div className="gallery-container"> 
            {goodsData.map(good => (
                <GoodsCard
                    key={good.id}
                    name={good.name}
                    price={good.price}
                    imageUrl={good.imageUrl}
                />
            ))}
        </div>
    );
}

export default Gallery;