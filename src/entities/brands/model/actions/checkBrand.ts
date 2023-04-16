import { Draft, PayloadAction } from '@reduxjs/toolkit';

import { IBrandState } from 'entities/brands/api/types';

export const checkBrand = (state: Draft<IBrandState>, action: PayloadAction<{ id: number }>) => {
  const { id } = action.payload;

  const brands = state.items;

  const index = brands.findIndex(brand => brand.id === id);

  brands[index].checked = !brands[index].checked;
};
