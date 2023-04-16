import React, { FC } from 'react';

import './index.scss';

const NotFoundPage: FC = () => {
  return (
    <div className="notFound">
      <h1 className="notFound__title">Страница находится в разработке</h1>
      <img src="public/not-found/dev-page.png" alt="img" />
    </div>
  );
};

export default NotFoundPage;
