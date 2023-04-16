import { ICatalogState } from 'entities';

export const initialCatalogsState: ICatalogState = {
  count: 0,
  items: [],
  filterSettings: {
    filteredProducts: [],
  },
};
