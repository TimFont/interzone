import React from 'react';
import Icon from '../elements/icon';

const AdvIllu = () => (
    <div className="adv-illu">
    <div className="adv-illu__inner">
      <h3 className="adv-illu__brand">Intezone</h3>
      <div className="adv-illu__charts">
          {
            ['chart-one', 'chart-two', 'chart-three' ].map( icon => (
                <div className="adv-illu__icon-box">
                    <Icon className={`adv-illu__icon adv-illu__icon--${icon}`} iconName={icon} />
                </div>
            ))
          }
      </div>
    </div>
  </div>
);

export default AdvIllu;