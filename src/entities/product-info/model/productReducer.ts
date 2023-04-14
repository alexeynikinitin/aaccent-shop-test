import { createSlice } from '@reduxjs/toolkit';

import { initialProductInfoState } from 'entities/product-info/model/constants';
import { getProductInfo } from 'entities/product-info/model/thunks';

const slice = createSlice({
  reducers: {},
  name: 'productReducer',
  initialState: initialProductInfoState,
  extraReducers: builder => {
    builder.addCase(getProductInfo.fulfilled, (state, action) => {
      if (action.payload) {
        state.product = action.payload;
      }
    });
  },
});

export const productReducer = slice.reducer;
export const asyncActions = slice.actions;
