import {AppThunk, AppDispatch} from '../../common/redux/store';
import {RootState} from '../../common/redux/reducer';
import DataVisualizationService from '../core/DataVisualizationService';

export const dataVisualizationEntered = (): AppThunk => async (
  dispatch: AppDispatch,
  getState: () => RootState,
) => {};
