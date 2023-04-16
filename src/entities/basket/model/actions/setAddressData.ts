import { Draft, PayloadAction } from '@reduxjs/toolkit';

import { IBasketState } from '../../api/types';

import { IAddressData } from 'widgets/basket/basket-order/types';

export const setAddressData = (
  state: Draft<IBasketState>,
  action: PayloadAction<{ id: keyof IAddressData; value: string }>,
) => {
  const { id, value } = action.payload;

  state.orderInfo.addressData = { ...state.orderInfo.addressData, [id]: value };
};
