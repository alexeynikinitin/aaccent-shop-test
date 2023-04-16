import { IFilterPriceRange } from './IFilterPriceRange';

import { IBrand } from 'entities/brands/api/types';
import { IProduct } from 'entities/product-info/api/types';

export interface IFilterSettings {
  checkedBrands?: IBrand[];
  filteredProducts?: IProduct[];
  priceRange?: IFilterPriceRange;
}
