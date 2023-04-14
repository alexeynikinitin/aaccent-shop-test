import { Draft } from '@reduxjs/toolkit';

import { IBasketState } from 'entities/basket/api/types';

export const clearBasket = (state: Draft<IBasketState>) => {
  state.selectedProducts = [];
};
