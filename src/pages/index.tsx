import React, { FC, lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

import './index.scss';
import { selectIsFetching } from 'entities';
import { AppSpinner, Layout, useAppSelector } from 'shared';

const LoginPage = lazy(() => import('./login'));
const BasketPage = lazy(() => import('./basket'));
const CatalogPage = lazy(() => import('./catalog'));
const ProductPage = lazy(() => import('./product'));
const NotFoundPage = lazy(() => import('./not-found'));

export const Routing: FC = () => {
  const isFetching = useAppSelector(selectIsFetching);

  return (
    <section className="content">
      <Layout>
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/product" element={<ProductPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
      {!isFetching && <AppSpinner />}
    </section>
  );
};
