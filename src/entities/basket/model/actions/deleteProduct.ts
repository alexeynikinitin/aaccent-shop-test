import { Draft, PayloadAction } from '@reduxjs/toolkit';

import { IBasketState } from 'entities/basket/api/types';

export const deleteProduct = (state: Draft<IBasketState>, action: PayloadAction<{ id: number }>) => {
  const { id } = action.payload;

  const foundProduct = state.selectedProducts.find(product => product.id === id);

  if (foundProduct) {
    const index = state.selectedProducts.indexOf(foundProduct);

    state.selectedProducts.slice(index);
  }
};
