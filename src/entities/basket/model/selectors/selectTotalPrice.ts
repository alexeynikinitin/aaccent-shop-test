import { RootStateType } from 'shared/types';

export const selectTotalPrice = (state: RootStateType): number => state.basket.totalPrice;
