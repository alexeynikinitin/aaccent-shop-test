import { IBrand } from 'entities/brands/api/types';
import { RootStateType } from 'shared/types';

export const selectCheckedBrands = (state: RootStateType): IBrand[] =>
  state.catalog.filterSettings?.checkedBrands ?? [];
