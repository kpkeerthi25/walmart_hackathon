import * as React from 'react';
// @ts-ignore
import {Button} from '@blueprintjs/core';
import WidgetData from '../../core/types/WidgetData';
import Widget from './Widget';
import {Bar, Line, Doughnut, HorizontalBar, Radar} from 'react-chartjs-2';
import WidgetGrid from './WidgetGrid';

interface Props {
  widgetDataList: WidgetData[];
}

export default function (props: Props) {
  return (
    <div>
      <Button
        icon={'add'}
        // minimal={true}
        // outlined={true}
        style={styles.addButton}
        onClick={() => {}}>
        <div>Add Widget</div>
      </Button>
      <WidgetGrid widgetDataList={props.widgetDataList} />
    </div>
  );
}

const styles: any = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 5,
  },
  addButton: {
    padding: 10,
    maxWidth: '100%',
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
