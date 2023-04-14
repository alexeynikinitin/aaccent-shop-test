import { BasketProductType } from 'entities/basket/api/types';
import { RootStateType } from 'shared/types';

export const selectSelectedProducts = (state: RootStateType): BasketProductType[] => state.basket.selectedProducts;
