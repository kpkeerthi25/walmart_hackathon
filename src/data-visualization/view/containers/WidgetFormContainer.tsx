import {AppDispatch} from '../../../common/redux/store';
import {RootState} from '../../../common/redux/reducer';
import {connect} from 'react-redux';
import WidgetForm from '../components/WidgetForm';

const mapStateToProps = (state: RootState) => ({
  open: false,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  changeOpen: (value: boolean) => {},
});

export default connect(mapStateToProps, mapDispatchToProps)(WidgetForm);
