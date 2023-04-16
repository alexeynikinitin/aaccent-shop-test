import { Draft, PayloadAction } from '@reduxjs/toolkit';

import { IBasketState } from '../../api/types';

export const setCountProductToBasket = (
  state: Draft<IBasketState>,
  action: PayloadAction<{ id: number; count: number }>,
) => {
  const { id, count } = action.payload;

  const foundProduct = state.selectedProducts.find(product => product.id === id);

  if (foundProduct) {
    foundProduct.count = count;
  }
};
