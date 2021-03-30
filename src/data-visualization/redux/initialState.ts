import WidgetData from '../core/types/WidgetData';
import LayoutData from '../core/types/LayoutData';

interface InitialState {
  widgetDataList: WidgetData[];
  layoutList: LayoutData[];
  currentChartIndex: number;
}

const data = {
  labels: ['Food', 'Water', 'Shelter', 'Clothes'],
  datasets: [
    {
      label: '',
      backgroundColor: ['#add8e6', '#c8e0e0', '#a5ced5', '#f1ebda', '#eee3dd'],
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 155, 40],
    },
  ],
};

const widgetData: WidgetData = {
  data: data,
  type: 'Bar',
  id: 0,
};

const initialState: InitialState = {
  widgetDataList: [
    widgetData,
    {...widgetData, type: 'Line'},
    {...widgetData, type: 'HorizontalBar'},
    {...widgetData, type: 'Radar'},
    {...widgetData, type: 'Pie'},
    {...widgetData, type: 'Doughnut'},
  ],
  layoutList: [],
  currentChartIndex: 0,
};

export default initialState;
