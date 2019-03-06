import React from 'react';
import Icon from '../elements/icon';
import homeCards from '../../helpers/homeCards';
import cardsSprite from '../../images/cardsSprite.svg';


const CardSection = ({ }) => (
    <section className="card-section">
        <h1 className="section-title">Caracteristicas dos produtos:</h1>
        <div className="card-section__container">
            {
                homeCards.map(card => (
                    <div className="card">
                        {/* <Icon className="card__icon" iconName={card.icon} altSprite={cardsSprite}/> */}
                        <svg fill="none" className={`card__icon card__icon--${card.nameClass}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159 121">
                            <path className={`card__icon-bg`} d={card.icon.bgPath} fill="#E1FFD2"></path>
                            <path className={`card__icon-path`} fill-rule="evenodd" clip-rule="evenodd" d={card.icon.iconPath} fill={`url(#${card.nameClass}-linear)`}></path>
                            <defs>
                                <linearGradient id={`${card.nameClass}-linear`} x1={card.gradient.x1} y1={card.gradient.y1} x2={card.gradient.x2} y2={card.gradient.y2} gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#2855AE"></stop>
                                    <stop offset=".991" stop-color="#3CE07D"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                        <h3 className="card__title">{card.title}</h3>
                        <p className="card__desc">{card.content}</p>
                    </div>
                ))
            }

        </div>

    </section>
);

export default CardSection;