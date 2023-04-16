import React, { FC } from 'react';

import './index.scss';
import { ClearFilter } from './clear-filter';
import { CountFilteredProducts } from './count-filtered-products';
import { FilterBrand } from './filter-brand';
import { FilterPrice } from './filter-price';

export const CatalogFilter: FC = () => {
  return (
    <nav>
      <div className="catalogFilter">
        <div className="catalogFilter__block">
          <FilterPrice />
          <FilterBrand />
        </div>
        <ClearFilter />
        <CountFilteredProducts />
      </div>
    </nav>
  );
};
