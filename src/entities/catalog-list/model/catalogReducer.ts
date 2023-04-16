import { createSlice } from '@reduxjs/toolkit';

import * as actions from './actions';
import { initialCatalogsState } from './constants';
import { getCatalog } from './thunks';

const slice = createSlice({
  reducers: actions,
  name: 'catalogReducer',
  initialState: initialCatalogsState,
  extraReducers: builder => {
    builder.addCase(getCatalog.fulfilled, (state, action) => {
      if (action.payload) {
        state.items = action.payload;
        state.count = action.payload.length;
        state.filterSettings.filteredProducts = action.payload;
      }
    });
  },
});

export const catalogReducer = slice.reducer;
export const asyncActions = slice.actions;
