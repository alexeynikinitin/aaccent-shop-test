import React, { FC } from 'react';

import { basketActions } from 'entities';
import { Button, useActions } from 'shared';

export const DeleteFromBasket: FC<IDeleteFromBasket> = ({ id }) => {
  const { deleteProduct } = useActions(basketActions);
  const onClickDeleteFromBasket = () => {
    deleteProduct({ id });
  };

  return <Button title="Удалить из корзины" onClick={onClickDeleteFromBasket} type="primary" />;
};

interface IDeleteFromBasket {
  id: number;
}
