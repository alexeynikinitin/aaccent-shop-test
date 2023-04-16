import React, { FC } from 'react';

import { basketActions } from 'entities';
import { Button, useActions } from 'shared';

export const DeleteFromBasket: FC<IDeleteFromBasket> = ({ id, sizeButton }) => {
  const { deleteProduct } = useActions(basketActions);

  const onClickDeleteFromBasket = (): void => {
    deleteProduct({ id });
  };

  return <Button size={sizeButton} title="Удалить из корзины" onClick={onClickDeleteFromBasket} type="primary" />;
};

interface IDeleteFromBasket {
  id: number;
  sizeButton?: 'big' | 'small';
}
