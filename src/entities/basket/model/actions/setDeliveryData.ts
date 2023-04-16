import { Draft, PayloadAction } from '@reduxjs/toolkit';

import { IBasketState } from '../../api/types';

import { IDeliveryData } from 'widgets/basket/basket-order/types';

export const setDeliveryData = (state: Draft<IBasketState>, action: PayloadAction<{ id: keyof IDeliveryData }>) => {
  const { id } = action.payload;

  state.orderInfo.deliveryData = { ...state.orderInfo.deliveryData, [id]: !state.orderInfo.deliveryData[id] };
};
