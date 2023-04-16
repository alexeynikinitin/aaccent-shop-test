import { RootStateType } from 'shared/types';

export const selectTotalPrice = (state: RootStateType): number => {
  let priceCounter = 0;

  state.basket.selectedProducts.forEach(({ count, regular_price: { value } }) => {
    priceCounter += Math.round(value * count);
  });

  return priceCounter;
};
