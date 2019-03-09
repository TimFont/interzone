import React from 'react';

const Card = ({ cardInfo }) => (
    <div className="card">
        <svg fill="none" className={`card__icon card__icon--${cardInfo.nameClass}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169 131">
            <path className={`card__icon-bg`} d={cardInfo.icon.bgPath} fill="#E1FFD2"></path>
            <path className={`card__icon-path`} fillRule="evenodd" clipRule="evenodd" d={cardInfo.icon.iconPath} fill={`url(#${cardInfo.nameClass}-linear)`}></path>
            <defs>
                <linearGradient id={`${cardInfo.nameClass}-linear`} x1={cardInfo.gradient.x1} y1={cardInfo.gradient.y1} x2={cardInfo.gradient.x2} y2={cardInfo.gradient.y2} gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2855AE"></stop>
                    <stop offset=".991" stopColor="#3CE07D"></stop>
                </linearGradient>
            </defs>
        </svg>
        <h3 className="card__title">{cardInfo.title}</h3>
        <p className="card__desc">{cardInfo.content}</p>
    </div>
);

export default Card;