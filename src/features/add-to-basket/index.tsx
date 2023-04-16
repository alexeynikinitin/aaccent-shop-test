import React, { FC } from 'react';

import { basketActions } from 'entities';
import { BasketProductType } from 'entities/basket/api/types';
import { Button, useActions } from 'shared';

export const AddToBasket: FC<IAddToBasket> = ({ product, sizeButton }) => {
  const { addProduct } = useActions(basketActions);

  const onClickAddToBasket = () => {
    addProduct(product);
  };

  return <Button size={sizeButton} title="Добавить в корзину" onClick={onClickAddToBasket} type="outlined" />;
};

interface IAddToBasket {
  product: BasketProductType;
  sizeButton?: 'big' | 'small';
}
