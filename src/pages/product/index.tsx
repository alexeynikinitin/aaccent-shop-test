import React, { FC, ReactElement, useEffect } from 'react';

import { useParams } from 'react-router';

import {
  selectBrands,
  selectProductInfo,
  BasketItemCounter,
  BasketProductType,
  productInfoActions,
  selectSelectedProducts,
} from 'entities';
import { AddToBasket, DeleteFromBasket } from 'features';
import { useActions, useAppSelector } from 'shared';
import './index.scss';

const ProductPage: FC = () => {
  const { id } = useParams();

  const brands = useAppSelector(selectBrands);
  const product = useAppSelector(selectProductInfo);
  const selectedProducts = useAppSelector(selectSelectedProducts);

  const { getProductInfo } = useActions(productInfoActions);

  const getBrand = () => {
    return brands.items.find(brand => brand.id === product?.brand)?.title;
  };

  const getBasketButton = (
    basketProduct: BasketProductType | undefined,
    catalogProduct: BasketProductType,
  ): ReactElement => {
    if (basketProduct) {
      return <DeleteFromBasket sizeButton="big" id={basketProduct.id} />;
    }

    return <AddToBasket sizeButton="big" product={catalogProduct} />;
  };

  const getCount = (id: number): number | undefined => {
    const foundSelectedProduct = selectedProducts.find(product => product.id === id);

    return foundSelectedProduct?.count;
  };

  useEffect(() => {
    getProductInfo(Number(id));
  }, [getProductInfo, id]);

  if (product) {
    const { id, title, sku, type, regular_price: regularPrice } = product;

    const foundSelectedProduct = selectedProducts.find(product => product.id === id);
    const count = getCount(id);

    return (
      <div className="productPage">
        <div className="productPage__img">
          {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
          <img src={`public/images/${id}.png`} alt="image" />
        </div>
        <div className="productPage__info">
          <h1 className="productPage__info_title">{title}</h1>
          <p className="productPage__info_text">{`SKU: ${sku}`}</p>
          <p className="productPage__info_text">{`Тип: ${type}`}</p>
          <p className="productPage__info_text">{`Бренд: ${getBrand() ?? ''}`}</p>
          <span className="productPage__info_price">{`${regularPrice.value} ${regularPrice.currency}`}</span>
          <div className="productPage__info_button">
            {getBasketButton(foundSelectedProduct, { id, title, regular_price: regularPrice, count: 1 })}
            {count && <BasketItemCounter id={id} count={count} />}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ProductPage;
