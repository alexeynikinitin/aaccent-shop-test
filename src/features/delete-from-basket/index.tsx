import React, { FC, MouseEvent } from 'react';

import { basketActions } from 'entities';
import { Button, useActions } from 'shared';

export const DeleteFromBasket: FC<IDeleteFromBasket> = ({ id, sizeButton }) => {
  const { deleteProduct } = useActions(basketActions);

  const onClickDeleteFromBasket = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    deleteProduct({ id });
  };

  return <Button size={sizeButton} title="Удалить из корзины" onClick={onClickDeleteFromBasket} type="primary" />;
};

interface IDeleteFromBasket {
  id: number;
  sizeButton?: 'big' | 'small';
}
