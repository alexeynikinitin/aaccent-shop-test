import { RootStateType } from 'shared/types';

export const selectCountProducts = (state: RootStateType): number => {
  let counter = 0;

  state.basket.selectedProducts.forEach(({ count }) => {
    counter += count;
  });

  return counter;
};
