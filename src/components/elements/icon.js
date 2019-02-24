import React from 'react'
import sprite from '../../images/svgSprite.svg'


const Icon = ({ iconName, className }) => (
    <svg className={(className) ? className : `icon--${iconName}`} xmlns="http://www.w3.org/2000/svg">
        <use xlinkHref={`${sprite}#icon-${iconName}`} xmlnsXlink="http://www.w3.org/1999/xlink"></use>
    </svg>
);



export default Icon;