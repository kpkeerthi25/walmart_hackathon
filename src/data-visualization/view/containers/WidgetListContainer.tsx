import {AppDispatch} from '../../../common/redux/store';
import {RootState} from '../../../common/redux/reducer';
import {connect} from 'react-redux';
import WidgetList from '../components/WidgetList';
import WidgetData, {formatWidgetData} from '../../core/types/WidgetData';

const mapStateToProps = (state: RootState) => ({
  widgetDataList: state.visualization.widgetDataList.map(
    (widgetData: WidgetData) =>
      formatWidgetData(
        widgetData.type,
        widgetData.data.datasets[0].data,
        widgetData.data.labels,
      ),
  ),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetList);
