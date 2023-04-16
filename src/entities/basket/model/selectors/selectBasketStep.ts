import { BasketStepType } from '../../api/types';

import { RootStateType } from 'shared/types';

export const selectBasketStep = (state: RootStateType): BasketStepType | null => state.basket.step;
