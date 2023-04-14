import React, { FC, useState } from 'react';

import './index.scss';
import { selectCountProducts, selectTotalPrice, BasketCounter, NavBar } from 'entities';
import { Input, Layout, Logo, useAppSelector, Contacts } from 'shared';

export const Header: FC = () => {
  const [valueSearch, setValueSearch] = useState<string>('');
  const [valueCategory, setValueCategory] = useState<string>('');

  const totalPrice = useAppSelector(selectTotalPrice);
  const countProducts = useAppSelector(selectCountProducts);

  const onChangeSearchInput = (value: string) => setValueSearch(value);

  const onChangeCategoryInput = (value: string) => setValueCategory(value);

  return (
    <header className="header">
      <Layout>
        <div className="header__wrapper">
          <div className="header__section">
            <div className="header__info">
              <Logo />
              <div>
                <Input
                  value={valueSearch}
                  placeholder="Поиск по товарам"
                  className="header__info_input"
                  onChangeInput={onChangeSearchInput}
                />
                <Input
                  value={valueCategory}
                  placeholder="Все категории"
                  className="header__info_input"
                  onChangeInput={onChangeCategoryInput}
                />
              </div>
              <Contacts />
              <BasketCounter totalPrice={totalPrice} countProducts={countProducts} />
            </div>
          </div>
          <div className="header__section2">
            <NavBar />
          </div>
        </div>
      </Layout>
    </header>
  );
};
