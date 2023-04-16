import { Draft, PayloadAction } from '@reduxjs/toolkit';

import { BasketProductType, IBasketState } from '../../api/types';

export const addProduct = (state: Draft<IBasketState>, action: PayloadAction<BasketProductType>) => {
  // eslint-disable-next-line camelcase
  const { id, title, regular_price, count } = action.payload;

  // eslint-disable-next-line camelcase
  state.selectedProducts.push({ id, title, regular_price, count });
  state.countProducts = state.selectedProducts.length;
  // eslint-disable-next-line camelcase
  state.totalPrice += Math.round(regular_price.value);
};
