import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

const CatalogPage = lazy(() => import('./catalog'));
const NotFoundPage = lazy(() => import('./not-found'));

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<CatalogPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
