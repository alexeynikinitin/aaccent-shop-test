import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

// @ts-ignore
import logo from 'shared/assets/logo/logo.png';
import './index.scss';

export const Logo: FC = () => {
  return (
    <div className="logo">
      <NavLink to="/" className="logo__link">
        <img src={logo} alt="logo" className="logo__link_img" />
        <h1 className="logo__link_text">Интернет-магазин товаров и аксессуаров</h1>
      </NavLink>
    </div>
  );
};
