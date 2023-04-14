import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { INavItem } from '../../api/types';

import './index.scss';

export const NavItem: FC<INavItem> = ({ title, path }) => {
  return (
    <NavLink to={path} className="navItem">
      {title}
    </NavLink>
  );
};
