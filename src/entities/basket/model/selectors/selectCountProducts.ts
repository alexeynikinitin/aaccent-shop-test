import { RootStateType } from 'shared/types';

export const selectCountProducts = (state: RootStateType): number => state.basket.countProducts;
