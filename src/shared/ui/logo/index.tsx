import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import './index.scss';

export const Logo: FC = () => {
  return (
    <div className="logo">
      <NavLink to="/" className="logo__link">
        <img src="https://www.aaccent.ru/images/new_logo.svg" alt="logo" className="logo__link_img" />
        <h1 className="logo__link_text">Интернет-магазин товаров и аксессуаров</h1>
      </NavLink>
    </div>
  );
};
