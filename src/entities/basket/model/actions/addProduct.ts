import { Draft, PayloadAction } from '@reduxjs/toolkit';

import { IBasketState } from 'entities/basket/api/types';
import { IProduct } from 'entities/product-info/api/types';

export const addProduct = (state: Draft<IBasketState>, action: PayloadAction<IProduct>) => {
  // eslint-disable-next-line camelcase
  const { id, title, regular_price } = action.payload;

  // eslint-disable-next-line camelcase
  state.selectedProducts.push({ id, title, regular_price });
};
