import { Draft, PayloadAction } from '@reduxjs/toolkit';

import { ICatalogState } from '../../api/types';

export const setFilterPriceRange = (
  state: Draft<ICatalogState>,
  action: PayloadAction<{ from: number | undefined; to: number | undefined }>,
) => {
  const { to, from } = action.payload;

  state.filterSettings = {
    ...state.filterSettings,
    priceRange: { from: from ?? null, to: to ?? null },
  };
};
