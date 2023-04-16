import { IBasketOrderInfo } from '../../api/types';

import { RootStateType } from 'shared/types';

export const selectOrderInfo = (state: RootStateType): IBasketOrderInfo => state.basket.orderInfo;
