import React, { FC } from 'react';

import './index.scss';
import { basketActions } from 'entities/service';
import { useActions } from 'shared';

export const BasketItemCounter: FC<IBasketItemCounter> = ({ id, count, marginTop }) => {
  const { setCountProductToBasket } = useActions(basketActions);
  const onClickAdd = (): void => {
    setCountProductToBasket({ id, count: count + 1 });
  };

  const onClickDelete = (): void => {
    setCountProductToBasket({ id, count: count - 1 });
  };

  return (
    <div className="basketItemCounter" style={{ marginTop }}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <img
        alt="arrow"
        style={{ visibility: count > 1 ? 'visible' : 'hidden' }}
        src="/aaccent-shop-test/icons/arrow-left.png"
        className="basketItemCounter__button"
        onClick={onClickDelete}
      />
      <div className="basketItemCounter__input">
        <span>{count}</span>
      </div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <img
        alt="arrow"
        onClick={onClickAdd}
        className="basketItemCounter__button"
        src="/aaccent-shop-test/icons/arrow-right.png"
      />
    </div>
  );
};

interface IBasketItemCounter {
  id: number;
  count: number;
  marginTop?: string;
}
