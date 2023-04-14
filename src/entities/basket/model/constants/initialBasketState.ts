import { IBasketState } from 'entities/basket/api/types';

export const initialBasketState: IBasketState = {
  totalPrice: 0,
  countProducts: 0,
  selectedProducts: [],
};
