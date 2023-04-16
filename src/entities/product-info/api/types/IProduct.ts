import { IBrand } from 'entities/brands/api/types';
import { IRegularPrice } from 'entities/product-info/api/types';

export interface IProduct {
  type: string;
  id: number;
  sku: string;
  title: string;
  image: string;
  brand: IBrand['id'];
  regular_price: IRegularPrice;
}
