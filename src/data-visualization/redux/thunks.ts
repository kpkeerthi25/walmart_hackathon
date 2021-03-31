import {AppThunk, AppDispatch} from '../../common/redux/store';
import {RootState} from '../../common/redux/reducer';
import DataVisualizationService from '../core/DataVisualizationService';
import {DataVisualizationState} from './initialState';
import {changeState} from './slice';

export const dataVisualizationEntered = (): AppThunk => async (
  dispatch: AppDispatch,
  getState: () => RootState,
) => {
  console.log('FETCH');
  const data: DataVisualizationState = await DataVisualizationService.fetch();
  dispatch(changeState(data));
};
