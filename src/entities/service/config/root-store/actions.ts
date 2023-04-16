import { asyncActions as asyncBasketActions } from 'entities/basket/model/basketReducer';
import * as asyncBasketThunks from 'entities/basket/model/thunks';
import { asyncActions as asyncBrandsActions } from 'entities/brands/model/brandReducer';
import * as asyncBrandsThunks from 'entities/brands/model/thunks';
import { asyncActions as asyncCatalogActions } from 'entities/catalog-list/model/catalogReducer';
import * as asyncCatalogThunks from 'entities/catalog-list/model/thunks';
import * as asyncLoginThunks from 'entities/login-form/model/thunks';
import { asyncActions as asyncProductActions } from 'entities/product-info/model/productReducer';
import * as asyncProductThunks from 'entities/product-info/model/thunks';
import { asyncActions as asyncServiceActions } from 'entities/service/model/serviceReducer';

const brandsActions = {
  ...asyncBrandsActions,
  ...asyncBrandsThunks,
};

const catalogActions = {
  ...asyncCatalogActions,
  ...asyncCatalogThunks,
};

const productInfoActions = {
  ...asyncProductActions,
  ...asyncProductThunks,
};

const serviceActions = {
  ...asyncServiceActions,
};

const loginActions = {
  ...asyncLoginThunks,
};

const basketActions = {
  ...asyncBasketActions,
  ...asyncBasketThunks,
};

export { brandsActions, catalogActions, productInfoActions, serviceActions, loginActions, basketActions };
