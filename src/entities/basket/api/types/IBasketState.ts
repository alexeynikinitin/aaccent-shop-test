import { BasketProductType } from './BasketProductType';
import { BasketStepType } from './BasketStepType';
import { IBasketOrderInfo } from './IBasketOrderInfo';

export interface IBasketState {
  totalPrice: number;
  countProducts: number;
  step: BasketStepType | null;
  orderInfo: IBasketOrderInfo;
  selectedProducts: BasketProductType[];
}
