import { combineReducers } from "@reduxjs/toolkit";
import VisualizationReducer from "../../data-visualization/redux";

const rootReducer = combineReducers({
  visualization: VisualizationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
