import { IProduct } from '../../api/types';

import { RootStateType } from 'shared/types';

export const selectProductInfo = (state: RootStateType): IProduct | null => state.product.product;
