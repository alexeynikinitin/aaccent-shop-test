import { Draft, PayloadAction } from '@reduxjs/toolkit';

import { ICatalogState } from '../../api/types';

import { IBrand } from 'entities/brands/api/types';

export const setCheckedBrands = (state: Draft<ICatalogState>, action: PayloadAction<{ brands: IBrand[] }>) => {
  const { brands } = action.payload;

  state.filterSettings = {
    ...state.filterSettings,
    checkedBrands: brands,
  };
};
