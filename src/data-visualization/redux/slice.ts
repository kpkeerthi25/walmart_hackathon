import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import initialState from './initialState';
import WidgetData from '../core/types/WidgetData';

const Slice = createSlice({
  name: 'Interview',
  initialState,
  reducers: {
    changeChartData(state, action: PayloadAction<WidgetData[]>) {
      state.widgetDataList = action.payload;
    },
    addChartData(state, action: PayloadAction<WidgetData>) {
      state.widgetDataList = [...state.widgetDataList, action.payload];
    },
  },
});

export default Slice.reducer;

export const {changeChartData, addChartData} = Slice.actions;
