import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { basketReducer } from 'entities/basket/model/basketReducer';
import { brandReducer } from 'entities/brands/model/brandReducer';
import { catalogReducer } from 'entities/catalog-list/model/catalogReducer';
import { productReducer } from 'entities/product-info/model/productReducer';
import { serviceReducer } from 'entities/service/model/serviceReducer';

export const store = configureStore({
  reducer: {
    brands: brandReducer,
    basket: basketReducer,
    catalog: catalogReducer,
    product: productReducer,
    service: serviceReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(thunk),
  devTools: true,
});
