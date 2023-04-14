import { createSlice } from '@reduxjs/toolkit';

import { makeOrder } from 'entities/basket/model/thunks';
import { getBrands } from 'entities/brands/model/thunks';
import { getCatalog } from 'entities/catalog-list/model/thunks';
import { login } from 'entities/login-form/model/thunks';
import { getProductInfo } from 'entities/product-info/model/thunks';
import { initialServiceState } from 'entities/service/model/constants/initialServiceState';

const slice = createSlice({
  reducers: {},
  name: 'serviceReducer',
  initialState: initialServiceState,
  extraReducers: builder => {
    // getProductInfo
    builder.addCase(getProductInfo.pending, state => {
      state.isFetching = true;
    });
    builder.addCase(getProductInfo.fulfilled, state => {
      state.isFetching = false;
    });
    builder.addCase(getProductInfo.rejected, (state, action) => {
      state.isFetching = false;

      if (action.payload) {
        state.error = action.payload;
      }
    });

    // getBrands
    builder.addCase(getBrands.pending, state => {
      state.isFetching = true;
    });
    builder.addCase(getBrands.fulfilled, state => {
      state.isFetching = false;
    });
    builder.addCase(getBrands.rejected, (state, action) => {
      state.isFetching = false;

      if (action.payload) {
        state.error = action.payload;
      }
    });

    // login
    builder.addCase(login.pending, state => {
      state.isFetching = true;
    });
    builder.addCase(login.fulfilled, state => {
      state.isFetching = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isFetching = false;

      if (action.payload) {
        state.error = action.payload;
      }
    });

    // getCatalog
    builder.addCase(getCatalog.pending, state => {
      state.isFetching = true;
    });
    builder.addCase(getCatalog.fulfilled, state => {
      state.isFetching = false;
    });
    builder.addCase(getCatalog.rejected, (state, action) => {
      state.isFetching = false;

      if (action.payload) {
        state.error = action.payload;
      }
    });

    // makeOrder
    builder.addCase(makeOrder.pending, state => {
      state.isFetching = true;
    });
    builder.addCase(makeOrder.fulfilled, state => {
      state.isFetching = false;
    });
    builder.addCase(makeOrder.rejected, (state, action) => {
      state.isFetching = false;

      if (action.payload) {
        state.error = action.payload;
      }
    });
  },
});

export const serviceReducer = slice.reducer;
export const asyncActions = slice.actions;
