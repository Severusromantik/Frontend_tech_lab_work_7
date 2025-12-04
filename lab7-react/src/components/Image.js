import React, { useState } from 'react';

function Image() {
    const [currentWidth, setCurrentWidth] = useState(500); 
    const [isVisible, setIsVisible] = useState(true);

    const handleIncrease = () => {
        if (isVisible) {
            setCurrentWidth(prevWidth => prevWidth * 1.3);
        }
    };

    const handleDecrease = () => {
        if (isVisible) {
            setCurrentWidth(prevWidth => prevWidth * 0.7);
        }
    };

    const handleAdd = () => {
        setIsVisible(true);
    };

    const handleRemove = () => {
        setIsVisible(false);
    };

    return (
        <div>
            {isVisible && (
                <img
                    id="main-image"
                    src="/budapest.jpg" 
                    alt="Улюблене місто"
                    style={{ width: `${currentWidth}px` }}
                />
            )}

            <p>
                <a href="https://en.wikipedia.org/wiki/Budapest" target="_blank">
                    Дізнатися більше про місто
                </a>
            </p>

            <div id="controls" style={{ marginTop: '20px' }}>
                <button id="add-btn" onClick={handleAdd}>Додати</button>
                <button id="increase-btn" onClick={handleIncrease}>Збільшити</button>
                <button id="decrease-btn" onClick={handleDecrease}>Зменшити</button>
                <button id="remove-btn" onClick={handleRemove}>Видалити</button>
            </div>
        </div>
    );
}

export default Image;