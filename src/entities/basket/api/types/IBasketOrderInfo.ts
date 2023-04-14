import { BasketProductType } from './BasketProductType';

export interface IBasketOrderInfo {
  info: string;
  name: string;
  email: string;
  telephone: string;
  selectedProduct: BasketProductType[];
}
