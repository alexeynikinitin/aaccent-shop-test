import { IFilterPriceRange } from 'entities/catalog-list/api/types';
import { RootStateType } from 'shared/types';

export const selectFilterPriceRange = (state: RootStateType): IFilterPriceRange | undefined =>
  state.catalog.filterSettings?.priceRange;
