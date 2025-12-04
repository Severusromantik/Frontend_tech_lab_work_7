import React from 'react';

function GoodsCard(props) {
    const { name, price, imageUrl } = props;

    return (
        <div className="goods-card">
            <img src={imageUrl} alt={name} className="goods-card-image" />
            <h4>{name}</h4>
            <p className="goods-card-price">{price} грн</p>
        </div>
    );
}

export default GoodsCard;