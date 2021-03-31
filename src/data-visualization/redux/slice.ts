import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import initialState, {Brand, DataVisualizationState} from './initialState';

const Slice = createSlice({
  name: 'Interview',
  initialState,
  reducers: {
    changeState(state, action: PayloadAction<DataVisualizationState>) {
      state = action.payload;
    },
  },
});

export default Slice.reducer;

export const {changeState} = Slice.actions;
