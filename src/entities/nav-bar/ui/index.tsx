import React, { FC } from 'react';

import './index.scss';
import { navItems } from 'entities/nav-bar/constants';
import { NavItem } from 'entities/nav-bar/ui/nav-item';

export const NavBar: FC = () => {
  return (
    <nav className="navbar">
      {navItems.map(({ id, path, title }) => (
        <NavItem id={id} key={id} path={path} title={title} />
      ))}
    </nav>
  );
};
