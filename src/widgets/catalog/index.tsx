import React, { FC, ReactElement, useEffect, useState } from 'react';

import {
  ProductCard,
  brandsActions,
  BasketProductType,
  selectFilteredProducts,
  selectSelectedProducts,
} from 'entities';
import { AddToBasket, DeleteFromBasket } from 'features';
import { Pagination, useActions, useAppSelector } from 'shared';

import './index.scss';

const INITIAL_PAGE_SIZE = 6;

export const Catalog: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(INITIAL_PAGE_SIZE);

  const filteredProducts = useAppSelector(selectFilteredProducts);
  const selectedProducts = useAppSelector(selectSelectedProducts);

  const { getBrands } = useActions(brandsActions);

  const getBasketButton = (
    basketProduct: BasketProductType | undefined,
    catalogProduct: BasketProductType,
  ): ReactElement => {
    if (basketProduct) {
      return <DeleteFromBasket id={basketProduct.id} />;
    }

    return <AddToBasket product={catalogProduct} />;
  };

  const getCount = (id: number): number | undefined => {
    const foundSelectedProduct = selectedProducts.find(product => product.id === id);

    return foundSelectedProduct?.count;
  };

  const currentPageCallback = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  useEffect(() => void getBrands(), [getBrands]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredProducts]);

  return (
    <div className="catalog">
      <div className="catalog__list">
        {filteredProducts.slice((currentPage - 1) * pageSize, pageSize * currentPage).map(product => {
          const { id, title, regular_price: regularPrice } = product;

          const foundSelectedProduct = selectedProducts.find(product => product.id === id);

          return (
            <ProductCard
              id={id}
              key={id}
              title={title}
              count={getCount(id)}
              regularPrice={regularPrice}
              basketButton={getBasketButton(foundSelectedProduct, { id, title, regular_price: regularPrice, count: 1 })}
            />
          );
        })}
      </div>
      <div className="catalog__paginator">
        {filteredProducts.length > pageSize && (
          <Pagination
            pageSize={pageSize}
            currentPage={currentPage}
            setPageSize={setPageSize}
            totalCount={filteredProducts.length}
            setCurrentPage={currentPageCallback}
          />
        )}
      </div>
    </div>
  );
};
