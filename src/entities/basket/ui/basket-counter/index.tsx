import React, { FC } from 'react';

import { NavLink } from 'react-router-dom';

// @ts-ignore
import basketIcon from 'shared/assets/icons/basket.png';

import './index.scss';

export const BasketCounter: FC<IBasketCounter> = ({ totalPrice, countProducts }) => {
  return (
    <NavLink to="/basket" className="basketCounter">
      <div className="basketCounter__icon">
        <img src={basketIcon} alt="basket" />
      </div>
      <div className="basketCounter__info">
        <span>{`${countProducts} товаров`}</span>
        <span>{`${totalPrice} USD`}</span>
      </div>
    </NavLink>
  );
};

interface IBasketCounter {
  totalPrice: number;
  countProducts: number;
}
