import { Draft } from '@reduxjs/toolkit';

import { IBrandState } from 'entities/brands/api/types';

export const clearCheckedBrands = (state: Draft<IBrandState>) => {
  state.items = state.items.map(brand => ({ ...brand, checked: false }));
};
