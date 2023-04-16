import { Draft } from '@reduxjs/toolkit';

import { ICatalogState } from '../../api/types';

export const clearFilter = (state: Draft<ICatalogState>) => {
  state.filterSettings = {
    filteredProducts: state.items,
  };
};
