import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

import { INavItem } from '../../api/types';

import './index.scss';

export const NavItem: FC<INavItem> = ({ title, path }) => {
  const currentPath = document.location.pathname;

  return (
    <NavLink to={path} className={`navItem ${currentPath === path ? 'navItem__active' : ''}`}>
      {title}
    </NavLink>
  );
};
