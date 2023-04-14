import React, { FC } from 'react';

// @ts-ignore
import telIcon from 'shared/assets/icons/tel.png';
// @ts-ignore
import mapIcon from 'shared/assets/icons/map.png';
// @ts-ignore
import timeIcon from 'shared/assets/icons/time.png';
import './index.scss';

export const Contacts: FC = () => {
  return (
    <div className="contacts">
      <a href="tel:+375291234567" className="contacts__tel">
        <img src={telIcon} alt="icon" />
        <span>+375 (29) 123-45-67</span>
      </a>
      <div className="contacts__tel">
        <img src={timeIcon} alt="icon" />
        <span>10:00 - 20:00</span>
      </div>
      <div className="contacts__tel">
        <img src={mapIcon} alt="icon" />
        <span>Ваш город: Минск</span>
      </div>
    </div>
  );
};
