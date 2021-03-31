import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import initialState, {DataVisualizationState} from './initialState';

const Slice = createSlice({
  name: 'Interview',
  initialState,
  reducers: {
    changeState(state, action: PayloadAction<DataVisualizationState>) {
      state.categoryDataList = action.payload.categoryDataList;
      state.totalSaved = action.payload.totalSaved;
      state.totalProducts = action.payload.totalProducts;
      state.importData = action.payload.importData;
      state.monthList = action.payload.monthList;
      state.title = action.payload.title;
      state.mostProfitableProductList =
        action.payload.mostProfitableProductList;
      state.costliestProductList = action.payload.costliestProductList;
      state.longestInCartList = action.payload.costliestProductList;
    },
  },
});

export default Slice.reducer;

export const {changeState} = Slice.actions;
