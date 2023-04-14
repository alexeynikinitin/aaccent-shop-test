import React, { FC } from 'react';

import './index.scss';
import { Layout } from 'shared';

export const Footer: FC = () => {
  return (
    <footer className="footer">
      <Layout>
        <div className="footer__wrapper">Footers</div>
      </Layout>
    </footer>
  );
};
