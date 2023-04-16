import React, { FC, useEffect } from 'react';

import './index.scss';
import { catalogActions, selectCatalogList, selectFilterSettings, IProduct } from 'entities';
import { useActions, useAppSelector } from 'shared';

const MAX_PRICE_VALUE = 99999999;

export const CountFilteredProducts: FC = () => {
  const catalog = useAppSelector(selectCatalogList);
  const filterSettings = useAppSelector(selectFilterSettings);

  const { setFilteredProducts } = useActions(catalogActions);

  const getFilteredProducts = (): IProduct[] => {
    const { checkedBrands, priceRange, filteredProducts } = filterSettings;
    let temp: IProduct[] = catalog;

    if (priceRange) {
      temp = temp
        .filter(item => item.regular_price.value >= (priceRange.from ?? 0))
        .filter(item => item.regular_price.value <= (priceRange.to || MAX_PRICE_VALUE));
    }

    if (checkedBrands && checkedBrands.length && filteredProducts) {
      const t: IProduct[] = [];

      checkedBrands.forEach(brand => {
        const f = temp.filter(item => item.brand === brand.id);

        t.push(...f);
      });

      temp = t;
    }

    return temp.length ? temp : catalog;
  };

  useEffect(() => {
    if (catalog.length) {
      const filteredProducts = getFilteredProducts();

      setFilteredProducts({ products: filteredProducts });
    }
  }, [filterSettings.priceRange, filterSettings.checkedBrands]);

  return (
    <div className="countFilteredProducts">
      <span>{`найдено ${filterSettings.filteredProducts?.length ?? 0} товаров`}</span>
    </div>
  );
};
