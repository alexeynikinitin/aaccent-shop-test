import React, { FC, ReactElement } from 'react';

import './index.scss';

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <main className="layout">
      <section className="layout_content">{children}</section>
    </main>
  );
};

interface ILayout {
  children: ReactElement;
}
