import React, { FC, useEffect } from 'react';

import { catalogActions } from 'entities';
import { CatalogFilter } from 'features';
import { useActions } from 'shared';
import { Catalog } from 'widgets';

import './index.scss';

const CatalogPage: FC = () => {
  const { getCatalog } = useActions(catalogActions);

  useEffect(() => {
    getCatalog();
  }, [getCatalog]);

  return (
    <section className="catalogPage">
      <CatalogFilter />
      <Catalog />
    </section>
  );
};

export default CatalogPage;
