import { IProduct } from 'entities/product-info/api/types';

export type BasketProductType = Pick<IProduct, 'id' | 'title' | 'regular_price'> & { count: number };
