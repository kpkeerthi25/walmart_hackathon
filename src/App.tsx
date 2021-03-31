import React, {CSSProperties, useState} from 'react';
import './App.css';
import DataVisualization from './data-visualization/view/containers';
import {Provider} from 'react-redux';
import store from './common/redux/store';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import DesktopNavBar from './common/view/components/DesktopNavBar';
import MobileNavBar from './common/view/components/MobileNavBar';
import ProductScreen from './products/view/ProductScreen';

function App() {
  const [route, setRoute] = useState('interview');
  return (
    <Provider store={store}>
      <div style={styles.page}>
        {/* <DesktopNavBar setRoute={setRoute} className={'desktop'} /> */}
        <MobileNavBar setRoute={setRoute} className={'mobile'} />
        <DataVisualization />
        {/* <ProductScreen /> */}
      </div>
    </Provider>
  );
}

export default App;

const styles = {
  page: {
    height: '100%',
  } as CSSProperties,
};
