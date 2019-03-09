import React from 'react';
import homeCards from '../../helpers/homeCards';
import Card from './card';

const CardGrid = () => (
    <div className="card-grid">
                    {
                homeCards.map(card => (
                    <Card cardInfo={card} />
                ))
            }
    </div>
);

export default CardGrid;