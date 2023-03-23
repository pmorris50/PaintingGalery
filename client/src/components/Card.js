import React from 'react';

import './Card.css';

const Card = ({product}) => {
    
    return (
        <div className = 'cardContainer'>
            <h3>Painting Name</h3>
            <p>description</p>
            <p>$50.00</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default Card