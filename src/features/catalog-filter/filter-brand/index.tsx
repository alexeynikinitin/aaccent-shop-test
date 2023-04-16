import React, { FC, ReactElement, useEffect, useState } from 'react';

import './index.scss';
import { BrandItem } from './brand-item';

import { brandsActions, catalogActions, selectBrands } from 'entities';
import { useActions, useAppSelector } from 'shared';

const INITIAL_SHOW_BARAND = 5;

export const FilterBrand: FC = () => {
  const [countItems, setCountItems] = useState(INITIAL_SHOW_BARAND);

  const { items: brands, count: countBrands } = useAppSelector(selectBrands);

  const { checkBrand } = useActions(brandsActions);
  const { setCheckedBrands } = useActions(catalogActions);

  const getBrandsElements = (): ReactElement[] => {
    return brands.slice(0, countItems).map(({ id, title, checked }) => {
      const onClickBrand = (id: number) => {
        checkBrand({ id });
      };

      return <BrandItem checked={checked} key={id} id={id} title={title} onClickBrand={onClickBrand} />;
    });
  };

  const onClickShowMore = (): void => {
    setCountItems(countItems + INITIAL_SHOW_BARAND);
  };

  useEffect(() => {
    setCheckedBrands({ brands: brands.filter(brand => brand.checked) });
  }, [brands, setCheckedBrands]);

  return (
    <div className="filterBrand">
      <h2 className="filterBrand__title">Производитель</h2>
      <div className="filterBrand__items">{getBrandsElements()}</div>
      {countItems <= countBrands && (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <span className="filterBrand__showMore" onClick={onClickShowMore}>
          Показать ещё
        </span>
      )}
    </div>
  );
};
