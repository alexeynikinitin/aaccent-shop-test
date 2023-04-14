import { ICatalogState } from 'entities/catalog-list/api/types';
import { RootStateType } from 'shared/types';

export const selectCatalogs = (state: RootStateType): ICatalogState => state.catalog;
