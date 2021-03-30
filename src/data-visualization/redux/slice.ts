import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState";
import WidgetData from '../core/types/ChartData';

const Slice = createSlice({
  name: "Interview",
  initialState,
  reducers: {
    changeChartData(state, action: PayloadAction<WidgetData[]>) {
      state.chartDataList = action.payload;
    },
    addChartData(state, action :PayloadAction<WidgetData>) {
      state.chartDataList = [...state.chartDataList, action.payload]
    },

  },
});

export default Slice.reducer;

export const {
  changeChartData, addChartData
} = Slice.actions;
