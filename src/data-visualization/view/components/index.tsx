import * as React from "react";
import WidgetListContainer from '../containers/WidgetListContainer';
import WidgetFormContainer from '../containers/WidgetFormContainer';

export default function () {
  return (
    <div>
      <WidgetListContainer />
      <WidgetFormContainer />
    </div>
  );
}
