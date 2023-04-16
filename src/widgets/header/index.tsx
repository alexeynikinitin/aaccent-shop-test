import React, { FC, useState } from 'react';

import './index.scss';
import { BasketCounter, NavBar } from 'entities';
import { Contacts, Input, Layout, Logo } from 'shared';

export const Header: FC = () => {
  const [valueSearch, setValueSearch] = useState<string>('');
  const [valueCategory, setValueCategory] = useState<string>('');

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
              <BasketCounter />
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
