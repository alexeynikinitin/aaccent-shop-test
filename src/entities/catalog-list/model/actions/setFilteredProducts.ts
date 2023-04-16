import { Draft, PayloadAction } from '@reduxjs/toolkit';

import { ICatalogState } from '../../api/types';

import { IProduct } from 'entities/product-info/api/types';

export const setFilteredProducts = (state: Draft<ICatalogState>, action: PayloadAction<{ products: IProduct[] }>) => {
  const { products } = action.payload;

  state.filterSettings = {
    ...state.filterSettings,
    filteredProducts: products,
  };
};
