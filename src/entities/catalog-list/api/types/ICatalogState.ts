import { IProduct } from 'entities/product-info/api/types';

export interface ICatalogState {
  items: IProduct[];
  count: number;
}
