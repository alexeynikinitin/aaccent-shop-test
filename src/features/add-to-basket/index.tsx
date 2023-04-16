import React, { FC } from 'react';

import { basketActions } from 'entities';
import { BasketProductType } from 'entities/basket/api/types';
import { Button, useActions } from 'shared';

export const AddToBasket: FC<IAddToBasket> = ({ product }) => {
  const { addProduct } = useActions(basketActions);
  const onClickAddToBasket = () => {
    addProduct(product);
  };

  return <Button title="Добавить в корзину" onClick={onClickAddToBasket} type="outlined" />;
};

interface IAddToBasket {
  product: BasketProductType;
}
