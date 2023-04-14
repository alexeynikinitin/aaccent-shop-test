import { BasketProductType } from './BasketProductType';

export interface IBasketState {
  totalPrice: number;
  countProducts: number;
  selectedProducts: BasketProductType[];
}
