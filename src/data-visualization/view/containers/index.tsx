import {AppDispatch} from '../../../common/redux/store';
import {RootState} from '../../../common/redux/reducer';
import {connect} from 'react-redux';
import DataVisualization from '../components';

const mapStateToProps = (state: RootState) => ({
  brandList: state.visualization.brandList,
  categoryData: state.visualization.categoryData,
  totalSaved: state.visualization.totalSaved,
  mostProfitableProductList: state.visualization.mostProfitableProductList,
  totalProducts: state.visualization.totalProducts,
  longestInCartList: state.visualization.longestInCartList,
  importData: state.visualization.importData,
  monthList: state.visualization.monthList,
  title: state.visualization.title,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DataVisualization);
