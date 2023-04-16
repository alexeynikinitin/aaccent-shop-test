import { ICatalogState } from 'entities/catalog-list/api/types';
import { RootStateType } from 'shared/types';

export const selectProductInfo = (state: RootStateType): ICatalogState => state.catalog;
