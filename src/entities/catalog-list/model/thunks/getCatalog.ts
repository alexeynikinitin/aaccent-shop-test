import { createAsyncThunk } from '@reduxjs/toolkit';

import { products } from 'entities/catalog-list/model/constants';
import { IProduct } from 'entities/product-info/api/types';
import { IRejectedValue } from 'shared/types/store/IRejectedValue';

export const getCatalog = createAsyncThunk<IProduct[] | undefined, void, IRejectedValue>(
  'catalogReducer/getCatalog',
  async (args, { rejectWithValue }) => {
    try {
      return new Promise(res => {
        setTimeout(() => {
          res(products);
        }, 2000);
      });
    } catch (error: unknown) {
      return rejectWithValue({
        errorMessage: 'Ошибка получения товаров',
      });
    }
  },
);
