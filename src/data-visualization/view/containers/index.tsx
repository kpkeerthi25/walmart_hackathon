import {AppDispatch} from '../../../common/redux/store';
import {RootState} from '../../../common/redux/reducer';
import {connect} from 'react-redux';
import DataVisualization from '../components';
import {dataVisualizationEntered} from '../../redux/thunks';

const mapStateToProps = (state: RootState) => ({
  categoryDataList: state.visualization.categoryDataList,
  totalSaved: state.visualization.totalSaved,
  mostProfitableProductList: state.visualization.mostProfitableProductList,
  costliestProductList: state.visualization.mostProfitableProductList,
  totalProducts: state.visualization.totalProducts,
  longestInCartList: state.visualization.longestInCartList,
  importData: state.visualization.importData,
  monthList: state.visualization.monthList,
  title: state.visualization.title,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  fetchData() {
    dispatch(dataVisualizationEntered());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DataVisualization);
