import { IProduct } from 'entities/product-info/api/types';
import { RootStateType } from 'shared/types';

export const selectCatalogList = (state: RootStateType): IProduct[] => state.catalog.items;
