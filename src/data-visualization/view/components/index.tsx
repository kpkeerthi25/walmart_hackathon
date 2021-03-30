import * as React from 'react';
import WidgetListContainer from '../containers/WidgetListContainer';
import WidgetFormContainer from '../containers/WidgetFormContainer';
import WidgetScreen from '../components/WidegetScreen';

export default function () {
  return (
    <div>
      <WidgetScreen />
      {/* <WidgetListContainer />
      <WidgetFormContainer /> */}
    </div>
  );
}
