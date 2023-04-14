import { createAsyncThunk } from '@reduxjs/toolkit';

import { products } from 'entities/catalog-list/model/constants';
import { IProduct } from 'entities/product-info/api/types';
import { IRejectedValue } from 'shared/types/store/IRejectedValue';

export const getProductInfo = createAsyncThunk<IProduct | null, number, IRejectedValue>(
  'productReducer/getProductInfo',
  async (id, { rejectWithValue }) => {
    try {
      return new Promise(res => {
        setTimeout(() => {
          const foundProduct = products.find(product => product.id === id);

          if (foundProduct) {
            res(foundProduct);
          } else {
            rejectWithValue({ errorMessage: 'Ошибка получения информации о товаре' });
          }
        }, 2000);
      });
    } catch (error: unknown) {
      return rejectWithValue({
        errorMessage: 'Ошибка получения информации о товаре',
      });
    }
  },
);
