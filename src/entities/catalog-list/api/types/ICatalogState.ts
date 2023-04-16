import { IFilterSettings } from './IFilterSettings';

import { IProduct } from 'entities';

export interface ICatalogState {
  count: number;
  items: IProduct[];
  filterSettings: IFilterSettings;
}
