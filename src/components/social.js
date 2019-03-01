import React from 'react';
import Icon from './elements/icon';

const socialItems = [
    {
        title: 'facebook',
        link: 'https://facebook.com'
    },
    {
        title: 'github',
        link: 'https://github.com/TimFont'
    },
    {
        title: 'instagram',
        link: 'https://instagram.com'
    }
];

const Social = ({ place }) => (
    <div className={`social ${place ? `social--${place}` : '' }`}>
        {
            socialItems.map(item => 
                <div className="social__icon-container">
                    <a className="social__link" href={item.link}>
                        <Icon iconName={item.title} className={`social__icon ${place ? `social__icon--${place}` : ''}`}/>
                    </a>
                </div>
            )
        }
    </div>
);

export default Social;