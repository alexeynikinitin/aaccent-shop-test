import { createAsyncThunk } from '@reduxjs/toolkit';

import { IBrand } from 'entities/brands/api/types';
import { brands } from 'entities/brands/model/constants/brands';
import { IRejectedValue } from 'shared/types/store/IRejectedValue';

const DALAY = 2000;

export const getBrands = createAsyncThunk<IBrand[] | undefined, void, IRejectedValue>(
  'brandReducer/getBrands',
  async (args, { rejectWithValue }) => {
    try {
      return new Promise(res => {
        setTimeout(() => {
          res(brands.map(brand => ({ ...brand, checked: false })));
        }, DALAY);
      });
    } catch (error: unknown) {
      return rejectWithValue({
        errorMessage: 'Ошибка получения брендов',
      });
    }
  },
);
