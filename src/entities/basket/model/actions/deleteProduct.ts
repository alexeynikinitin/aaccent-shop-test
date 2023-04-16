import { Draft, PayloadAction } from '@reduxjs/toolkit';

import { IBasketState } from 'entities/basket/api/types';

export const deleteProduct = (state: Draft<IBasketState>, action: PayloadAction<{ id: number }>) => {
  const { id } = action.payload;

  state.selectedProducts = state.selectedProducts.filter(product => product.id !== id);

  let counterPrice = 0;
  let counterProducts = 0;

  state.selectedProducts.forEach(({ count, regular_price: { value } }) => {
    counterPrice += Math.round(count * value);
    counterProducts += count;
  });

  state.totalPrice = counterPrice;
  state.countProducts = counterProducts;
};
