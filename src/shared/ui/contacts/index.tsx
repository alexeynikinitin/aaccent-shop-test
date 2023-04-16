import React, { FC } from 'react';

import './index.scss';

export const Contacts: FC = () => {
  return (
    <div className="contacts">
      <a href="tel:+375291234567" className="contacts__tel">
        <img src="/aaccent-shop-test/icons/tel.png" alt="icon" />
        <span>+375 (29) 123-45-67</span>
      </a>
      <div className="contacts__tel">
        <img src="/aaccent-shop-test/icons/time.png" alt="icon" />
        <span>10:00 - 20:00</span>
      </div>
      <div className="contacts__tel">
        <img src="/aaccent-shop-test/icons/map.png" alt="icon" />
        <span>Ваш город: Минск</span>
      </div>
    </div>
  );
};
