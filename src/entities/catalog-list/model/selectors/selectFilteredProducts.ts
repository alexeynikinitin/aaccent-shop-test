import { IProduct } from 'entities/product-info/api/types';
import { RootStateType } from 'shared/types';

export const selectFilteredProducts = (state: RootStateType): IProduct[] =>
  state.catalog.filterSettings?.filteredProducts ?? [];
