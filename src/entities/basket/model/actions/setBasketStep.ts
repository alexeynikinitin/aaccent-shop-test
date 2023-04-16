import { Draft, PayloadAction } from '@reduxjs/toolkit';

import { BasketStepType, IBasketState } from '../../api/types';

export const setBasketStep = (state: Draft<IBasketState>, action: PayloadAction<BasketStepType | null>) => {
  state.step = action.payload;
};
