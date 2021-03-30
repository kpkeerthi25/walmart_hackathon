import WidgetData from '../core/types/WidgetData';
import LayoutData from '../core/types/LayoutData';

interface InitialState {
  chartDataList: WidgetData[];
  layoutList: LayoutData[];
  currentChartIndex: number;
}

const initialState: InitialState = {
  chartDataList: [],
  layoutList: [],
  currentChartIndex: 0,
};

export default initialState;
