import { FC, lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

import './index.scss';
import { Layout } from 'shared';

const LoginPage = lazy(() => import('./login'));
const BasketPage = lazy(() => import('./basket'));
const CatalogPage = lazy(() => import('./catalog'));
const ProductPage = lazy(() => import('./product'));
const NotFoundPage = lazy(() => import('./not-found'));

export const Routing: FC = () => {
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
    </section>
  );
};
