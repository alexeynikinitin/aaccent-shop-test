import { Draft, PayloadAction } from '@reduxjs/toolkit';

import { IBasketState } from '../../api/types';

import { IPersonalData } from 'widgets/basket/basket-order/types';

export const setPersonalData = (
  state: Draft<IBasketState>,
  action: PayloadAction<{ id: keyof IPersonalData; value: string }>,
) => {
  const { id, value } = action.payload;

  state.orderInfo.personalData = { ...state.orderInfo.personalData, [id]: value };
};
